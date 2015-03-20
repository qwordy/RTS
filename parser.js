try{
	var esprima = require('esprima'),
		Node = require('./cfg').Node,
		//compare = require('./compare').compare,
		fs = require('fs'),
		program1, program2, stack;
	
	program1 = parse(process.argv[2]);
	program2 = parse(process.argv[3]);
	compare(program1, program2);
} catch (e) {
	//console.log(e.message);
	console.log(e.stack);
	process.exit(1);
}

// Return program entry
function parse(filename) {
	var content, options, syntax, program, programExit;
	content = fs.readFileSync(filename);
	//options = {loc: true};
	syntax = esprima.parse(content);
	console.log(JSON.stringify(syntax, null, 4));
	program = new Node({type: 'ProgramEntry'});
	programExit = new Node({type: 'ProgramExit'});
	stack = new Array();	// {type, entry, exit}
	stack.push({type: 'Program', entry: program, exit: programExit});
	parseFunction(syntax, program).addNext(programExit);
	console.log(stack);
	console.log(program.functions['hello']);
	stack.pop();
	return program;
}

// Parse functions first, then build CFG
// Store function pointer in prevNode
// Return the last node in CFG
// No nested functions
function parseFunction(syntax, prevNode) {
	var entryNode, exitNode;
	syntax.body.forEach(function(value) {
		if (value.type == 'FunctionDeclaration') {
			entryNode = new Node(cloneObject(value));	// function head
			exitNode = new Node({type: 'FunctionExit'});
			stack.push({type: 'Function', entry: entryNode, exit: exitNode});
			parseFunction(value.body, entryNode).addNext(exitNode);
			stack.pop();
			prevNode.functions[value.id.name] = entryNode;
		}
	});
	return buildCFG(syntax, prevNode);
}

// syntax: syntax tree
// prevNode: previous node in CFG
// Return the last node
function buildCFG(syntax, prevNode) {
	var node;	// the last node

	console.log(JSON.stringify(syntax));
	switch (syntax.type) {
	case 'Program':
	case 'BlockStatement':
		node = prevNode;
		syntax.body.forEach(function(value) {
			node = buildCFG(value, node);
		});
		return node;

	case 'ReturnStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		for (var i = stack.length - 1; i--; i >= 0) {
			if (stack[i].type == 'Function' || stack[i].type == 'Program') {
				node.addNext(stack[i].exit);
				break;
			}
		}
		return null;

	case 'VariableDeclaration':
	case 'ExpressionStatement':
	case 'EmptyStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		return node;

	// for -> endFor, bodyEnd -> for
	case 'ForStatement':
	case 'ForInStatement':
		var forNode, endForNode, bodyEndNode;

		forNode = new Node(cloneObject(syntax));	// for head node
		if (prevNode) prevNode.addNext(forNode);

		endForNode = new Node({type: 'EndFor'});
		forNode.addNext(endForNode);

		stack.push({type: 'For', entry: forNode, exit: endForNode});

		bodyEndNode = buildCFG(syntax.body, forNode);	// body end node
		if (bodyEndNode) bodyEndNode.addNext(forNode);

		stack.pop();
		return endForNode;
	
	case 'WhileStatement':
		var whileNode, endWhileNode, bodyEndNode;

		whileNode = new Node(cloneObject(syntax));
		if (prevNode) prevNode.addNext(whileNode);

		endWhileNode = new Node({type: 'EndWhile'});
		whileNode.addNext(endWhileNode);

		stack.push({type: 'While', entry: whileNode, exit: endWhileNode});

		bodyEndNode = buildCFG(syntax.body, whileNode);
		if (bodyEndNode) bodyEndNode.addNext(whileNode);

		stack.pop();
		return endWhileNode;
	
	// bodyEnd -> while, while -> do
	case 'DoWhileStatement':
		var doNode, whileNode, bodyEndNode;

		doNode = new Node({type: 'Do'});
		if (prevNode) prevNode.addNext(doNode);

		whileNode = new Node(cloneObject(syntax));
		whileNode.addNext(doNode);

		stack.push({type: 'DoWhile', entry: doNode, exit: whileNode});

		bodyEndNode = buildCFG(syntax.body, doNode);
		if (bodyEndNode) bodyEndNode.addNext(whileNode);

		stack.pop();
		return whileNode;

	// Find the nearest iteration in stack
	case 'BreakStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		for (var i = stack.length - 1; i--; i >= 0) {
			if (stack[i].type == 'For') {
				node.addNext(stack[i].exit);
				break;
			}
		}
		return null;

	case 'ContinueStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		for (var i = stack.length - 1; i--; i >= 0) {
			if (stack[i].type == 'For') {
				node.addNext(stack[i].entry);
				break;
			}
		}
		return null;

	case 'IfStatement':
		var ifSyntax, ifNode, endIfNode, endBodyNode;

		ifSyntax = {};	// if syntax head
		ifSyntax.type = syntax.type;
		ifSyntax.test = syntax.test;

		ifNode = new Node(ifSyntax);	// if head node
		if (prevNode) prevNode.addNext(ifNode);

		endIfNode = new Node({type: 'EndIf'});	// endif node

		if (syntax.consequent != null) {
			endBodyNode = buildCFG(syntax.consequent, ifNode);
			endBodyNode.addNext(endIfNode);
		}

		if (syntax.alternate != null) {
			endBodyNode = buildCFG(syntax.alternate, ifNode);
			endBodyNode.addNext(endIfNode);
		}
		
		return endIfNode;

	case 'FunctionDeclaration':
		//console.log(node);
		return prevNode;
	}

	return node;	// the last node

	/*console.log(syntax.type);
	body = syntax.body;
	body.forEach(function(value) {
		console.log(value);
	});*/
}

// Shadow clone object except 'body' field
function cloneObject(obj) {
	var o = {};
	for (var i in obj)
		if (i != 'body')
			o[i] = obj[i];
	return o;
}

//cloneObject({a:1, b:2});

// Compare two CFGs
function compare(node1, node2) {
	var i, j, child1, child2, findEqual;
	node1.visited = true;
	for (i in node1.children) {
		child1 = node1.children[i];
		findEqual = false;	// if child1 == child2
		for (j in node2.children) {
			child2 = node2.children[j];
			if (nodesEqual(child1.syntax, child2.syntax)) {
				findEqual = true;
				break;
			}
		}
		if (findEqual) {
			if (!child1.visited) compare(child1, child2);
		} else {
			console.log(node1.edges[i]);
		}
	}
}

// True if two nodes are the same. Node is syntax
function nodesEqual(node1, node2) {
	if (node1 == node2)	return true;
	for (var i in node1) {
		if (!node2.hasOwnProperty(i))
			return false;
		if (typeof(node1[i]) != typeof(node2[i]))
			return false;
		if (typeof(node1[i]) == 'object') {
			if (!nodesEqual(node1[i], node2[i]))
				return false;
		} else {
			if (node1[i] != node2[i])
				return false;
		}
	}

	// CallExpression
	if (node1.type == 'ExpressionStatement') {
		if (node1.expression.type == 'CallExpression') {
			var callee1 = node1.expression.callee;
			if (callee1.type == 'Identifier') {
				console.log(callee1);
				if (callee1.name in program1.functions) {
					var name2 = node2.expression.callee.name;
					return compare(program1.functions[callee1.name], program2.functions[name2]);
				}
			}
		}
	}
	
	return true;
}

