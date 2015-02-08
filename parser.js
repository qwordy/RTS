try{
	var esprima = require('esprima'),
		Node = require('./cfg').Node,
		compare = require('./compare').compare,
		fs = require('fs'),
		program1, program2;

	program1 = parse(process.argv[2]);
	program2 = parse(process.argv[3]);
	compare(program1, program2);
} catch (e) {
	//console.log(e.message);
	console.log(e.stack);
	process.exit(1);
}

function parse(filename) {
	var content, options, syntax, program;
	content = fs.readFileSync(filename);
	//options = {loc: true};
	syntax = esprima.parse(content);
	console.log(JSON.stringify(syntax, null, 4));
	program = new Node({type: 'Program'});
	buildCFG(syntax, program);
	return program;
}

// syntax: syntax tree
// prevNode: previous node in CFG
function buildCFG(syntax, prevNode) {
	var node, endNode, ifNode, endIfNode, ifSyntax;
	console.log(syntax.type);
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
	case 'VariableDeclaration':
	case 'ExpressionStatement':
	case 'EmptyStatement':
		node = new Node(syntax);
		prevNode.addNext(node);
		break;
	case 'ForInStatement':
		node = new Node(cloneObject(syntax));	// for head node
		prevNode.addNext(node);
		endNode = buildCFG(syntax.body, node);	// body end node
		endNode.addNext(node);
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
	}
	return node;

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
		if (obj.hasOwnProperty(i) && i != 'body')
			o[i] = obj[i];
	return o;
}

cloneObject({a:1, b:2});

