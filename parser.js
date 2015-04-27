function Node(syntax) {
	this.id = Node.id++;
	console.log('node' + this.id);
	console.log(syntax);
	this.children = new Array();	// successor
	if (_stack.length > 0)
		this.father = _stack[_stack.length - 1].entry;
	this.edges = new Array();	// edge number
	this.functions = {};	// store function pointers in entry node
	this.syntax = stdCloneObject(syntax);	// syntax tree
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

function EdgeCoverage() {
	this.selectedEdges = {};	// {edgeId1: 1, edgeId2: 1, ...}
	this.current = program1;	// currentNode when infer
	this.infer();
	console.log(this.selectedEdges);
}

// Infer edges coverage from log
EdgeCoverage.prototype.infer = function() {
	var execSync, log, tokens, i, nodeId, current;

	execSync = require('child_process').execSync;
	log = execSync('node ' + instFilename(process.argv[2])).toString();
	tokens = log.split(/[ \n]/g);
	for (i = 0; i < tokens.length; i++) {
		if (tokens[i] == 'node') {
			nodeId = Number(tokens[i+1]);
			//console.log(nodeId);
			i++;
			if (nodeId >= 0)
				while (this.findChild(nodeId) == false);
		}
	}

	//console.log('no log left');
	// No log left, but still some edges
	do {
		current = this.current;
		this.findChild(-2);	// -2 means no log left
	} while (this.current != current);
}

// FindChild.current is initialized program1's ProgramEntry
// Return true if find child.id == nodeId
EdgeCoverage.prototype.findChild = function (nodeId) {
	var i, node;

	node = this.current;
	console.log(node.id + ' ' + nodeId);
	for (i in node.children) {
		if (node.children[i].id == nodeId) {
			this.selectedEdges[node.edges[i]] = 1;
			this.current = node.children[i];
			return true;
		}
	}
	if (node.children.length == 1) {
		this.selectedEdges[node.edges[0]] = 1;
		this.current = node.children[0];
	} else if (node.syntax.type == 'ForStatement' ||
		node.syntax.type == 'ForInStatement' ||
		node.syntax.type == 'WhileStatement') {
		this.selectedEdges[node.edges[0]] = 1;
		this.current = node.children[0];
	} else if (node.syntax.type == 'SwitchStatement') {
		for (i in node.children) {
			if (node.children[i].children[0].id == nodeId) {
				this.selectedEdges[node.edges[i]] = 1;
				this.selectedEdges[node.children[i].edges[0]] = 1;
				this.current = node.children[i].children[0];
				return true;
			}
		}
	} else if (node.syntax.type == 'DoWhileStatement') {
		// Do
		if (node.children[0].children[0].id == nodeId) {
			this.selectedEdges[node.edges[0]] = 1;
			this.selectedEdges[node.children[0].edges[0]] = 1;
			this.current = node.children[0].children[0];
			return true;
		} else if (node.children[1].children[0].id == nodeId) {
		// Out of the DoWhile
			this.selectedEdges[node.edges[1]] = 1;
			this.selectedEdges[node.children[1].edges[0]] = 1;
			this.current = node.children[1].children[0];
			return true;
		}
	}

	return false;
}

try{
	var esprima = require('esprima'),
		escodegen = require('escodegen'),
		//Node = require('./cfg').Node,
		//compare = require('./compare').compare,
		fs = require('fs'),
		program1, program2, edgeCoverage,
		_stack, _blockStack,  _version;
		// stack item: {type, entry, exit}, program, function, loop, switch
		// blockStack item: {body, index}
	
	_version = 1;	// program version
	program1 = parse(process.argv[2]);
	edgeCoverage = new EdgeCoverage();

	Node.id = Node.edgeId = 0;
	_version = 2;
	program2 = parse(process.argv[3]);

	compare(program1, program2);
} catch (e) {
	//console.log(e.message);
	console.log(e.stack);
	process.exit(1);
}

// Instrumented filename
// eg. foo.js -> foo_inst.js
function instFilename(str) {
	return str.slice(0, -3) + '_inst.js';
}

// Return program entry
function parse(filename) {
	var content, options, syntax, program, programExit, src;

	content = fs.readFileSync(filename);
	options = {range: true};
	syntax = esprima.parse(content);
	console.log(JSON.stringify(syntax, null, 4));
	if (_version == 1)
		_blockStack = new Array();
	_stack = new Array();	// {type, entry, exit}
	program = new Node({type: 'ProgramEntry'});
	programExit = new Node({type: 'ProgramExit'});
	_stack.push({type: 'Program', entry: program, exit: programExit});
	parseFunction(syntax, program).addNext(programExit);
	//console.log(_stack);
	//console.log(program.functions['hello']);
	_stack.pop();

	// Instrumented code
	if (_version == 1) {
		// Add console.log(1) to log ProgramExit
		syntax.body.push(logStmtSyntax(1));

		src = escodegen.generate(syntax);
		//console.log(JSON.stringify(syntax, null, 4));
		fs.writeFileSync(instFilename(filename), src);
		// + '\n' + JSON.stringify(syntax, null, 4));
	}

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
			_stack.push({type: 'Function', entry: entryNode, exit: exitNode});
			node = parseFunction(value.body, entryNode);
			if (node) node.addNext(exitNode);
			_stack.pop();
			prevNode.functions[value.id.name] = entryNode;
		}
	});
	return buildCFG(syntax, prevNode);
}

// Syntax of console.log(nodeId);
function logStmtSyntax(nodeId) {
	var syntax = {
		type: 'ExpressionStatement',
		expression: logExpSyntax(nodeId)
	}
	return syntax;
}

// Syntax of console.log(nodeId)
function logExpSyntax(nodeId) {
	var syntax = {
		"type": "CallExpression",
		"callee": {
			"type": "MemberExpression",
			"computed": false,
			"object": {
				"type": "Identifier",
				"name": "console"
			},
			"property": {
				"type": "Identifier",
				"name": "log"
			}
		},
		"arguments": [
			{
				"type": "Literal",
				"value": "node " + nodeId,
				"raw": "node " + nodeId
			}
		]
	}
	return syntax;
}

// Insert a log statement before a node
function insertLog(nodeId) {
	var item = _blockStack[_blockStack.length - 1];
	item.body.splice(item.index, 0, logStmtSyntax(nodeId));
	//console.log('insertLog' + nodeId +
	//	' blockStackSize' + _blockStack.length);
}	

// Only clone references
function bodyClone(body) {
	var body2 = [];
	for (var i in body)
		body2.push(body[i]);
	return body2;
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
		if (_version == 1) {
			var item = {body: syntax.body, index: 0};
			_blockStack.push(item);
		}
		
		var i = 0;
		while (i < syntax.body.length) {
			node = buildCFG(syntax.body[i], node);
			if (node == null) break;
			if (_version == 1) {
				item.index += 2;
				i++;
				//console.log('i' + i);
				//console.log('index' + item.index);
			}
			i++;
		}

		if (_version == 1) _blockStack.pop();
		return node;

	case 'ReturnStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		
		if (_version == 1) insertLog(node.id);
		
		for (var i = _stack.length - 1; i--; i >= 0) {
			if (_stack[i].type == 'Function' || _stack[i].type == 'Program') {
				node.addNext(_stack[i].exit);
				break;
			}
		}

		return null;

	case 'VariableDeclaration':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		if (_version == 1) insertLog(node.id);
		return node;

	case 'EmptyStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		if (_version == 1) insertLog(node.id);
		return node;

	case 'ExpressionStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		if (_version == 1) insertLog(node.id);
		/*if (_version == 1) {
			syntax.expression = {
				type: 'SequenceExpression',
				expressions: [
					logExpSyntax(node.id),
					syntax.expression
				]
			};
		}*/
		return node;

	
	// for -> endFor, bodyEnd -> for
	// for.children[0] = endFor
	// for.children[1] = 
	case 'ForStatement':
	case 'ForInStatement':
		var forNode, endForNode, bodyEndNode;

		forNode = new Node(cloneObject(syntax));	// for head node
		if (prevNode) prevNode.addNext(forNode);

		if (_version == 1) insertLog(forNode.id);

		endForNode = new Node({type: 'EndFor'});
		forNode.addNext(endForNode);

		_stack.push({type: 'For', entry: forNode, exit: endForNode});

		if (_version == 1 && syntax.body.type != 'BlockStatement') {
			syntax.body = {
				type: 'BlockStatement',
				body: [syntax.body]
			};
		}

		bodyEndNode = buildCFG(syntax.body, forNode);	// body end node
		if (bodyEndNode) bodyEndNode.addNext(forNode);

		_stack.pop();
		return endForNode;
	
	// Similar to For
	case 'WhileStatement':
		var whileNode, endWhileNode, bodyEndNode;

		whileNode = new Node(cloneObject(syntax));
		if (prevNode) prevNode.addNext(whileNode);

		if (_version == 1) insertLog(whileNode.id);

		endWhileNode = new Node({type: 'EndWhile'});
		whileNode.addNext(endWhileNode);

		_stack.push({type: 'While', entry: whileNode, exit: endWhileNode});

		if (_version == 1 && syntax.body.type != 'BlockStatement') {
			syntax.body = {
				type: 'BlockStatement',
				body: [syntax.body]
			};
		}

		bodyEndNode = buildCFG(syntax.body, whileNode);
		if (bodyEndNode) bodyEndNode.addNext(whileNode);
		
		_stack.pop();
		return endWhileNode;
	
	// bodyEnd -> while, while -> do, while -> endDo
	case 'DoWhileStatement':
		var doNode, whileNode, bodyEndNode, endDoNode;

		doNode = new Node({type: 'Do'});
		if (prevNode) prevNode.addNext(doNode);

		if (_version == 1) insertLog(doNode.id);

		whileNode = new Node(cloneObject(syntax));
		whileNode.addNext(doNode);

		endDoNode = new Node({type: 'EndDo'});
		whileNode.addNext(endDoNode);

		_stack.push({type: 'Do', entry: doNode, exit: endDoNode, doCond: whileNode});

		if (_version == 1 && syntax.body.type != 'BlockStatement') {
			syntax.body = {
				type: 'BlockStatement',
				body: [syntax.body]
			};
		}

		bodyEndNode = buildCFG(syntax.body, doNode);
		if (bodyEndNode) bodyEndNode.addNext(whileNode);
		
		_stack.pop();
		return endDoNode;

	// Find the nearest iteration in stack
	case 'BreakStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		if (_version == 1) insertLog(node.id)
		for (var i = _stack.length - 1; i >= 0; i--) {
			if (['For', 'While', 'Do', 'Switch'].indexOf(_stack[i].type) != -1) {
				node.addNext(_stack[i].exit);
				break;
			}
		}
		return null;

	case 'ContinueStatement':
		node = new Node(syntax);
		if (prevNode) prevNode.addNext(node);
		if (_version == 1) insertLog(node.id)
		for (var i = _stack.length - 1; i >= 0; i--) {
			if (_stack[i].type == 'For' || _stack[i].type == 'While') {
				node.addNext(_stack[i].entry);
				break;
			} else if (_stack[i].type == 'Do') {
				node.addNext(_stack[i].doCond);
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

		if (_version == 1) insertLog(ifNode.id);

		endIfNode = new Node({type: 'EndIf'});	// endif node

		if (syntax.consequent == null) {
			syntax.consequent = {
				type: 'BlockStatement',
				body: [{type: 'EmptyStatement'}]
			};
			endBodyNode = buildCFG(syntax.consequent, ifNode);
		} else {
			if (_version == 1 && syntax.consequent.type != 'BlockStatement') {
				syntax.consequent = {
					type: 'BlockStatement',
					body: [syntax.consequent]
				};
			}
			endBodyNode = buildCFG(syntax.consequent, ifNode);
		}
		if (endBodyNode) endBodyNode.addNext(endIfNode);	

		if (syntax.alternate == null) {
			syntax.alternate = {
				type: 'BlockStatement',
				body: [{type: 'EmptyStatement'}]
			};
			endBodyNode = buildCFG(syntax.alternate, ifNode);
		} else {
			if (_version == 1 && syntax.alternate.type != 'BlockStatement') {
				syntax.alternate = {
					type: 'BlockStatement',
					body: [syntax.alternate]
				};
			}
			endBodyNode = buildCFG(syntax.alternate, ifNode);
		}
		if (endBodyNode) endBodyNode.addNext(endIfNode);
		
		return endIfNode;
	
	case 'SwitchStatement':
		var switchSyntax, switchNode, endSwitchNode, caseSyntax, caseNode;

		switchSyntax = {};
		switchSyntax.type = syntax.type;
		switchSyntax.discriminant = syntax.discriminant;

		switchNode = new Node(switchSyntax);
		if (prevNode) prevNode.addNext(switchNode);

		if (_version == 1) insertLog(switchNode.id);

		endSwitchNode = new Node({type: 'EndSwitch'});

		_stack.push({type: 'Switch', entry: switchNode, exit: endSwitchNode});

		node = null;
		syntax.cases.forEach(function(value) {
			caseSyntax = {};
			caseSyntax.type = value.type;
			caseSyntax.test = value.test;

			caseNode = new Node(caseSyntax);
			switchNode.addNext(caseNode);
			if (node) node.addNext(caseNode);

			node = caseNode;
			if (_version == 1) {
				var item = {body: value.consequent, index: 0};
				_blockStack.push(item);
			}
			
			var i = 0;
			while (i < value.consequent.length) {
				node = buildCFG(value.consequent[i], node);
				if (node == null) break;
				if (_version == 1) {
					item.index += 2;
					i++;
				}
				i++;
			}

			if (_version == 1) _blockStack.pop();
		});

		if (node) node.addNext(endSwitchNode);

		_stack.pop();
		return endSwitchNode;

	case 'FunctionDeclaration':
		//console.log(node);
		if (_version == 1) insertLog(-1);
		return prevNode;
	}

	return node;	// the last node

	/*console.log(syntax.type);
	body = syntax.body;
	body.forEach(function(value) {
		console.log(value);
	});*/
}

// Standard object clone
function stdCloneObject(obj) {
	//console.log('clone ' + JSON.stringify(obj));
	if (typeof(obj) != 'object' || obj == null)
		return obj;
	
	var o = obj.constructor();
	for (var i in obj) {
		//console.log('\t ' + i + ' ' + JSON.stringify(obj[i]));
		o[i] = stdCloneObject(obj[i]);
	}
	return o;
}

// Shadow object clone except 'body' field
function cloneObject(obj) {
	var o = {};
	for (var i in obj)
		if (i != 'body')
			o[i] = obj[i];
	return o;
}

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

