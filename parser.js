function Node(syntax) {
	this.id = Node.id++;
	console.log('node' + this.id);
	console.log(syntax);
	this.children = new Array();	// successor
	if (stack.length > 0)
		this.father = stack[stack.length - 1].entry;
	this.edges = new Array();	// edge number
	this.functions = {};	// store function pointers in entry node
	this.syntax = syntax;	// syntax tree
	this.visited = null;	// node2.id
}

Node.prototype = {
	addNext: function(node) {
		this.children.push(node);
		this.edges.push(Node.edgeId);
		console.log('edge' + Node.edgeId);
		console.log('node' + this.id + ' -> node' + node.id);
		Node.edgeId++;
	}
};

Node.id = 0;
Node.edgeId = 0;

try{
	var esprima = require('esprima'),
		//Node = require('./cfg').Node,
		//compare = require('./compare').compare,
		fs = require('fs'),
		program1, program2, stack, _version;
		// stack item: {type, entry, exit}
	
	_version = 1;	// program version
	program1 = parse(process.argv[2]);
	Node.id = Node.edgeId = 0;
	_version = 2;
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
	options = {loc: true};
	syntax = esprima.parse(content);
	console.log(JSON.stringify(syntax, null, 4));
	stack = new Array();	// {type, entry, exit}
	program = new Node({type: 'ProgramEntry'});
	programExit = new Node({type: 'ProgramExit'});
	stack.push({type: 'Program', entry: program, exit: programExit});
	parseFunction(syntax, program).addNext(programExit);
	console.log(stack);
	//console.log(program.functions['hello']);
	stack.pop();
	return program;
}

// Parse functions first, then build CFG
// Store function pointer in prevNode
// Return the last node in CFG
// No nested functions
function parseFunction(syntax, prevNode) {
	var entryNode, exitNode, node;
	syntax.body.forEach(function(value) {
		if (value.type == 'FunctionDeclaration') {
			entryNode = new Node(cloneObject(value));	// function head
			// {'notVisited', 'visited', 'selectAll'}
			entryNode.status = 'notVisited';
			exitNode = new Node({type: 'FunctionExit'});
			stack.push({type: 'Function', entry: entryNode, exit: exitNode});
			node = parseFunction(value.body, entryNode);
			if (node) node.addNext(exitNode);
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

	//console.log(JSON.stringify(syntax));
	switch (syntax.type) {
	case 'Program':
	case 'BlockStatement':
		node = prevNode;
		for (var i in syntax.body) {
			node = buildCFG(syntax.body[i], node);
			if (node == null) break;
		}
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
		for (var i = stack.length - 1; i >= 0; i--) {
			if (['For', 'While', 'Do', 'Switch'].indexOf(stack[i].type) != -1) {
				node.addNext(stack[i].exit);
				break;
			}
		}
		return null;

	case 'ContinueStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		for (var i = stack.length - 1; i >= 0; i--) {
			if (stack[i].type == 'For' || stack[i].type == 'While') {
				node.addNext(stack[i].entry);
				break;
			} else if (stack[i].type == 'Do') {
				node.addNext(stack[i].exit);
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

		if (syntax.consequent == null) {
			endBodyNode = buildCFG({type: 'EmptyStatement'}, ifNode);
		} else {
			endBodyNode = buildCFG(syntax.consequent, ifNode);
		}
		endBodyNode.addNext(endIfNode);
		

		if (syntax.alternate == null) {
			endBodyNode = buildCFG({type: 'EmptyStatement'}, ifNode);
		} else {
			endBodyNode = buildCFG(syntax.alternate, ifNode);
		}
		endBodyNode.addNext(endIfNode);
		
		return endIfNode;
	
	case 'SwitchStatement':
		var switchSyntax, switchNode, endSwitchNode, caseSyntax, caseNode;

		switchSyntax = {};
		switchSyntax.type = syntax.type;
		switchSyntax.discriminant = syntax.discriminant;

		switchNode = new Node(switchSyntax);
		if (prevNode) prevNode.addNext(switchNode);

		endSwitchNode = new Node({type: 'EndSwitch'});

		stack.push({type: 'Switch', entry: switchNode, exit: endSwitchNode});

		node = null;
		syntax.cases.forEach(function(value) {
			caseSyntax = {};
			caseSyntax.type = value.type;
			caseSyntax.test = value.test;

			caseNode = new Node(caseSyntax);
			switchNode.addNext(caseNode);
			if (node) node.addNext(caseNode);

			node = caseNode;
			for (var i in value.consequent) {
				node = buildCFG(value.consequent[i], node);
				if (node == null) break;
			}
		});

		if (node) node.addNext(endSwitchNode);

		stack.pop();
		return endSwitchNode;

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
// The two nodes are identical already
// Compare their children
// Return 'visited' of 'selectAll'
function compare(node1, node2) {
	var i, j, child1, child2, findEqual, result;

	console.log(node1.id + ' ' + node2.id + ' ' + node1.syntax.type);

	if (node1.syntax.type == 'FunctionExit')
		return 'visited';

	result = 'selectAll';
	node1.visited = node2.visited = node2.id;

	for (i in node1.children) {
		child1 = node1.children[i];
		findEqual = false;	// if child1 == child2

		if (node1.syntax.type == 'SwitchStatement') {
			for (j in node2.children) {
				child2 = node2.children[j];
				console.log(node1.id + ' ' + node2.id + ' ' + 
					child1.id + ' ' + child2.id);
				if (nodesEqual(child1.syntax, child2.syntax)) {
					findEqual = true;
					break;
				}
			}
		} else {
			child2 = node2.children[i];
			console.log(node1.id + ' ' + node2.id + ' ' + 
				child1.id + ' ' + child2.id);
			findEqual = nodesEqual(child1.syntax, child2.syntax);
		}

		if (findEqual) {
			// Switch default case
			if (node1.syntax.type == 'SwitchCase' && 
				node1.syntax.test == null) {
				var cases = node2.father.children;
				for (var i in cases) {
					// New case is added in P'
					// Mark the edge to default case in P sensitive
					if (cases[i].visited == null) {
						console.log('danger ' + node1.father.edges[i]);
						break;
					}
				}
			}

			if (child1.visited != child2.id) {
				if (compare(child1, child2) == 'visited')
					result = 'visited';
			}
		} else {
			console.log('danger ' + node1.edges[i]);
		}
	}

	return result;
}

// True if two nodes are the same. Node is syntax
function nodesEqual(node1, node2) {
	if (node1 == node2)	return true;
	if (JSON.stringify(node1) != JSON.stringify(node2))
		return false;

	/*for (var i in node1) {
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

	for (var i in node2) {
		if (!node1.hasOwnProperty(i))
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
	}*/

	// CallExpression
	var callee1, name2, status, result;

	if (node1.type != 'ExpressionStatement')
		return true;

	if (node1.expression.type != 'CallExpression')
		return true;

	callee1 = node1.expression.callee;
	if (callee1.type != 'Identifier')
		return true;

	console.log(callee1);
	if (callee1.name in program1.functions) {
		name2 = node2.expression.callee.name;
		status = program1.functions[callee1.name].status;
		if (status == 'notVisited') {
			program1.functions[callee1.name].status = 'visited';
			result = compare(program1.functions[callee1.name], 
				program2.functions[name2]);
			program1.functions[callee1.name].status = result;
			// 'visited' or 'selectAll'
			return result == 'visited';
		} else {
			return status == 'visited';
		}
	}
	
	return true;
}

