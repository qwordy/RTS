var esprima = require('esprima'),
	Node = require('./cfg').Node,
	fs = require('fs'),
	filename, content, options, syntax, entry;

//console.log(JSON.stringify(esprima.parse('var a = 42'), null, 4));
process.argv.forEach(function(value) {
	//console.log(value);
});

try {
	filename = process.argv[2];
	content = fs.readFileSync(filename);
	options = {loc: true};
	syntax = esprima.parse(content);
	console.log(JSON.stringify(syntax, null, 4));
	entry = new Node({type: 'Entry'});
	buildCFG(syntax, entry);
} catch (e) {
	console.log(e.message);
	process.exit(1);
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
	case 'ExpressionStatement':
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

