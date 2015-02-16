try{
	var esprima = require('esprima'),
		Node = require('./cfg').Node,
		compare = require('./compare').compare,
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
			parseFunction(value.body, entryNode);
			prevNode.functions[value.id.name] = entryNode;
		}
	});
	return buildCFG(syntax, prevNode);
}

// syntax: syntax tree
// prevNode: previous node in CFG
// Return the last node
function buildCFG(syntax, prevNode) {
	var node, endNode, ifNode, endIfNode, ifSyntax,
		forNode, endForNode;
	console.log(JSON.stringify(syntax));
	switch (syntax.type) {
	case 'Program':
		node = prevNode;
		syntax.body.forEach(function(value) {
			node = buildCFG(value, node);
		});
		break;

	case 'BlockStatement':
		node = prevNode;
		syntax.body.forEach(function(value) {
			node = buildCFG(value, node);
		});
		break;

	case 'ReturnStatement':
		for (var i = stack.length - 1; i--; i >= 0) {
			if (stack[i].type == 'Function' || stack[i].type == 'Program')
				
		break;

	case 'VariableDeclaration':
	case 'ExpressionStatement':
	case 'EmptyStatement':
		node = new Node(syntax);
		prevNode.addNext(node);
		break;

	case 'ForInStatement':
		forNode = new Node(cloneObject(syntax));	// for head node
		prevNode.addNext(forNode);

		endForNode = new Node({type: 'EndFor'});
		forNode.addNext(endForNode);

		stack.push({type: 'For', entry: forNode, exit: endForNode});

		endNode = buildCFG(syntax.body, node);	// body end node
		endNode.addNext(node);

		node = endNode;

		break;

	case 'IfStatement':
		ifSyntax = {};	// if syntax head
		ifSyntax.type = syntax.type;
		ifSyntax.test = syntax.test;
		ifNode = new Node(ifSyntax);	// cfg if head node
		prevNode.addNext(ifNode);
		endIfNode = new Node({type: 'EndIf'});	// cfg endif node
		if (syntax.consequent != null) {
			endNode = buildCFG(syntax.consequent, ifNode);
			endNode.addNext(endIfNode);
		}
		if (syntax.alternate != null) {
			endNode = buildCFG(syntax.alternate, ifNode);
			endNode.addNext(endIfNode);
		}
		node = endIfNode;
		break;

	case 'FunctionDeclaration':
		node = prevNode;
		console.log(node);
		break;
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

