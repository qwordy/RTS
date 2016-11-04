'use strict';

function Node(syntax) {
	this.id = Node.id++;
	if (_debug) {
		console.log('node' + this.id);
		console.log(syntax);
	}
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
		if (_debug) {
			console.log('edge' + Node.edgeId);
			console.log('node' + this.id + ' -> node' + node.id);
		}
		Node.edgeId++;
	}
};

Node.id = 0;
Node.edgeId = 0;

function EdgeCoverage() {
	var n = process.argv[4];	// number of test cases
	if (n == undefined)
		n = 1;
	else
		n = Number(n);
	if (isNaN(n))
		throw new Error('argv[4] is not a number');

	this.selectedTest = [];
	for (this.testId = 0; this.testId < n; this.testId++)
		this.work();
}

EdgeCoverage.prototype.work = function () {
	this.selectedEdges = {};	// {edgeId1: 1, edgeId2: 1, ...}
	this.current = program1;	// currentNode when infer

	// Caller node [node, index]
	// current: caller node
	// index: the next callEdge to visit
	this.callStack = [];	

	this.index = 0;	// Traverse callEdges from the index-th

	this.infer();
	//console.log(this.selectedEdges);

	var find = false;
	for (var i in dangerEdges) {
		if (dangerEdges[i] in this.selectedEdges) {
			find = true;
			break;
		}
	}
	if (find)
		this.selectedTest.push(this.testId);
}

// Infer edges coverage from log
EdgeCoverage.prototype.infer = function() {
	var execSync, log, tokens, i, nodeId, current, time0, time1;

	execSync = require('child_process').execSync;
	time0 = new Date().getTime();
	//console.log('Test ' + this.testId);
	log = execSync('node ' + instFilename(process.argv[2])
		+ ' ' + this.testId).toString();
	time1 = new Date().getTime();
	_time.childTime += time1 - time0;
	
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
EdgeCoverage.prototype.findChild = function(nodeId) {
	var i, node, edge, fp, range;

	node = this.current;
	if (_debug)
		console.log(node.id + ' ' + nodeId);
	/*if (node.id == 65) {
		console.log(node.syntax.range);
		process.exit(1);
	}*/
	for (i in node.children) {
		if (node.children[i].id == nodeId) {
			this.selectedEdges[node.edges[i]] = 1;
			this.current = node.children[i];
			this.index = 0;
			return true;
		}
	}

	// Call
	range = node.syntax.range;
	if (range != undefined) {
		for (i = this.index; i < callGraph1.edges.length; i++) {
			edge = callGraph1.edges[i];
			if (edge[0] > range[1])
				break;
			if (edge[0] >= range[0] && edge[1] <= range[1]) {
				if (edge[2] == 0 && edge[3] == 0) {
				} else {
					fp = callGraph1.fps[[edge[2], edge[3]]];
					if (fp != undefined) {
						if (fp.children[0].id == nodeId) {
							if (_debug)
								console.log('enter function ' + fp.syntax.range);
							this.callStack.push([this.current, i + 1]);
							this.current = fp;
							this.index = 0;
							return false;
						}
					}
				}
			}
		}
	}

	if (node.children.length == 0) {
		if (node.syntax.type == 'FunctionExit') {
			var item = this.callStack.pop();
			this.current = item[0];
			this.index = item[1];
		}
	} else if (node.children.length == 1) {
		this.selectedEdges[node.edges[0]] = 1;
		this.current = node.children[0];
		this.index = 0;
	} else if (node.syntax.type == 'ForStatement' ||
		node.syntax.type == 'ForInStatement' ||
		node.syntax.type == 'WhileStatement') {
		this.selectedEdges[node.edges[0]] = 1;	// For -> endFor
		this.current = node.children[0];
		this.index = 0;
	} else if (node.syntax.type == 'SwitchStatement') {
		for (i in node.children) {
			if (node.children[i].children[0].id == nodeId) {
				this.selectedEdges[node.edges[i]] = 1;
				this.selectedEdges[node.children[i].edges[0]] = 1;
				this.current = node.children[i].children[0];
				this.index = 0;
				return true;
			}
		}
	} else if (node.syntax.type == 'DoWhileStatement') {
		// Do
		if (node.children[0].children[0].id == nodeId) {
			this.selectedEdges[node.edges[0]] = 1;
			this.selectedEdges[node.children[0].edges[0]] = 1;
			this.current = node.children[0].children[0];
			this.index = 0;
			return true;
		} else if (node.children[1].children[0].id == nodeId) {
		// Out of the DoWhile
			this.selectedEdges[node.edges[1]] = 1;
			this.selectedEdges[node.children[1].edges[0]] = 1;
			this.current = node.children[1].children[0];
			this.index = 0;
			return true;
		}
	}

	return false;
}

function CallGraph(filename) {
	// Element: [a, b, c, d], a-b -> c-d
	// If c, d == 0, a-b has multiple callees
	this.edges = [];

	// Function pointers
	// [a, b] : function node
	this.fps = {};

	this.parse(filename);
}

CallGraph.prototype.parse = function(filename) {
	var execSync, output, lines, pair, pos, range, a, b, c, d, i, find;

	execSync = require('child_process').execSync;
	output = execSync('node acg/main --cg ' + filename).toString();
	lines = output.split('\n');
	lines.pop();
	if (_debug)
		console.log(lines);
	
	i = 0;
	while (i < lines.length) {
		pair = lines[i].split('->');
		if (pair[1].indexOf(':') == -1) {
			i++;
			continue;
		}
		
		find = false;
		while (i < lines.length - 1 && 
			pair[0] == lines[i + 1].split('->')[0]) {
			find = true;
			i++;
		}

		pos = pair[0].indexOf(':');
		range = pair[0].slice(pos + 1);
		pos = range.indexOf('-');
		a = range.slice(0, pos);
		b = range.slice(pos + 1);
		
		if (find) {
			this.edges.push([a, b, 0, 0]);
		} else {
			pos = pair[1].indexOf(':');
			range = pair[1].slice(pos + 1);
			pos = range.indexOf('-');
			c = range.slice(0, pos);
			d = range.slice(pos + 1);
			this.edges.push([a, b, c, d]);
		}

		i++;
	}
}

try{
	var esprima = require('esprima'),
		escodegen = require('escodegen'),
		//Node = require('./cfg').Node,
		//compare = require('./compare').compare,
		fs = require('fs'),
		program1, program2, edgeCoverage, callGraph1, callGraph2,
		dangerEdges, _time,
		_stack, _blockStack,  _version, _debug;
		// stack item: {type, entry, exit}, program, function, loop, switch
		// blockStack item: {body, index}
	
	_debug = 0;	// debug mode
	_time = {};	// field: start, end, childTime
	_time.childTime = 0;
	_time.start = new Date().getTime();

	_version = 1;	// program version
	callGraph1 = new CallGraph(process.argv[2]);
	program1 = parse(process.argv[2], callGraph1.fps);
	if (_debug) {
		console.log(callGraph1.edges);
		console.log(callGraph1.fps);
	}

	Node.id = Node.edgeId = 0;
	_version = 2;
	callGraph2 = new CallGraph(process.argv[3]);
	program2 = parse(process.argv[3], callGraph2.fps);

	dangerEdges = [];
	compare(program1, program2);

	edgeCoverage = new EdgeCoverage();

	_time.end = new Date().getTime();

	output();
} catch (e) {
	//console.log(e.message);
	console.log(e.stack);
	process.exit(1);
}

// Output result
function output() {
	var str, i;

	console.log('\n==== Result ====');

	//console.log('Edge coverage:');
	//console.log(JSON.stringify(edgeCoverage.selectedEdges));

	console.log('Dangerous edges:');
	str = '';
	for (i in dangerEdges)
		str += dangerEdges[i] + ' ';
	console.log(str);

	console.log('Selected tests:');
	str = '';
	edgeCoverage.selectedTest.forEach(function(value) {
		str += value + ' ';
	});
	console.log(str);

	//console.log('Testing time:');
	//console.log(_time.childTime / 1000);

	console.log('Analysis time:');
	console.log((_time.end - _time.start - _time.childTime) / 1000);

	console.log();

	/*console.log('Selected?');
	var find = false;
	for (var i in dangerEdges) {
		if (dangerEdges[i] in edgeCoverage.selectedEdges) {
			find = true;
			break;
		}
	}
	console.log(find ? 'Yes' : 'No');*/
}

// Parse anonymouse functions
// Save them in fps(function pointers)
// syntax is an object
function parseAnonymousFunc(syntax, fps) {
	var entryNode, exitNode, node;

	if (syntax == null) return;
	if (syntax.hasOwnProperty('type')) {	// Similar with parseFunction
		if (syntax.type == 'FunctionExpression') {
			entryNode = new Node(cloneObject(syntax));
			fps[syntax.range] = entryNode;

			// {'notVisited', 'visited', 'selectAll'}
			entryNode.status = 'notVisited';
			exitNode = new Node({type: 'FunctionExit'});
			_stack.push({type: 'Function', entry: entryNode, exit: exitNode});
			node = parseFunction(syntax.body, entryNode, fps);
			if (node) node.addNext(exitNode);
			_stack.pop();
		}
	}

	for (var i in syntax) {
		if (typeof(syntax[i]) == 'object')
			parseAnonymousFunc(syntax[i], fps);
	}
}

// Return program entry
function parse(filename, fps) {
	var content, options, syntax, program, programExit, src;

	content = fs.readFileSync(filename);
	options = {range: true};
	syntax = esprima.parse(content, options);
	//console.log(JSON.stringify(syntax, null, 4));

	if (_version == 1)
		_blockStack = new Array();
	_stack = new Array();	// {type, entry, exit}

	parseAnonymousFunc(syntax, fps);

	program = new Node({type: 'ProgramEntry'});
	programExit = new Node({type: 'ProgramExit'});

	_stack.push({type: 'Program', entry: program, exit: programExit});

	parseFunction(syntax, program, fps).addNext(programExit);
	//console.log(_stack);
	//console.log(program.functions['hello']);

	_stack.pop();

	// Instrumented code
	if (_version == 1) {
		// Add console.log(1) to log ProgramExit
		syntax.body.push(logStmtSyntax(programExit.id));

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
function parseFunction(syntax, prevNode, fps) {
	var entryNode, exitNode, node;
	syntax.body.forEach(function(value) {
		if (value.type == 'FunctionDeclaration') {
			entryNode = new Node(cloneObject(value));	// function head
			fps[value.range] = entryNode;

			// {'notVisited', 'visited', 'selectAll'}
			entryNode.status = 'notVisited';
			exitNode = new Node({type: 'FunctionExit'});
			_stack.push({type: 'Function', entry: entryNode, exit: exitNode});
			node = parseFunction(value.body, entryNode, fps);
			if (node) node.addNext(exitNode);
			_stack.pop();
			//prevNode.functions[value.id.name] = entryNode;
		}
	});
	return buildCFG(syntax, prevNode);
}

// Instrumented filename
// eg. foo.js -> foo_inst.js
function instFilename(str) {
	return str.slice(0, -3) + '_inst.js';
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
		
		for (var i = _stack.length - 1; i >= 0; i--) {
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

		forNode = new Node(cloneObject(syntax));	// for head node.
		if (syntax.type == 'ForStatement')
			forNode.range = [syntax.test.range[0], syntax.update.range[1]];
		else
			forNode.range = syntax.left.range;
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
		whileNode.range = syntax.test.range;
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
		endDoNode.range = syntax.test.range;
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
		ifSyntax.range = syntax.test.range;

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
		switchSyntax.range = syntax.discriminant.range;

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

// Only clone references
function bodyClone(body) {
	var body2 = [];
	for (var i in body)
		body2.push(body[i]);
	return body2;
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
// Return 'visited' or 'selectAll'
function compare(node1, node2) {
	var i, j, child1, child2, findEqual, result;

	if (_debug)
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
				if (_debug)
					console.log(node1.id + ' ' + node2.id + ' ' + 
						child1.id + ' ' + child2.id);
				if (nodesEqual(child1.syntax, child2.syntax)) {
					findEqual = true;
					break;
				}
			}
		} else {
			child2 = node2.children[i];
			if (_debug)
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
						var edges = node1.father.edges;
						//console.log('danger ' + edges[edges.length - 1]);
						dangerEdges.push(edges[edges.length - 1]);
						break;
					}
				}
			}

			if (child1.visited != child2.id) {
				if (compare(child1, child2) == 'visited')
					result = 'visited';
			}
		} else {
			if (_debug)
				console.log('danger ' + node1.edges[i]);
			dangerEdges.push(node1.edges[i]);
		}
	}

	return result;
}

// True if two nodes are the same. Node is syntax
function nodesEqual(node1, node2) {
	//if (JSON.stringify(node1) != JSON.stringify(node2))
	//	return false;
	
	if (typeof(node1) != typeof(node2))
		return false;

	if (typeof(node1) != 'object')
		return node1 == node2;

	if (node1 == null)
		return node2 == null;

	if (node2 == null)
		return node1 == null;

	if (node1.hasOwnProperty('type') && node2.hasOwnProperty('type'))
		if (node1.type == 'FunctionExpression' && 
			node2.type == 'FunctionExpression')
			return true;
	
	for (var i in node1) {
		if (!node2.hasOwnProperty(i))
			return false;
		if (i == 'range')
			continue;
		if (typeof(node1[i]) != typeof(node2[i]))
			return false;
		if (typeof(node1[i] == 'object')) {
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
	}

	// Call
	var range1, range2, i, j, edge1, edge2, fp1, fp2, status, result, finalResult;

	if (node1 == null)
		return true;
	range1 = node1.range;
	range2 = node2.range;
	if (range1 == undefined || range2 == undefined)
		return true;
	
	i = j = 0;
	finalResult = true;
	while (i < callGraph1.edges.length) {
		edge1 = callGraph1.edges[i];
		if (edge1[0] > range1[1])
			break;
		if (edge1[0] >= range1[0] && edge1[1] <= range1[1]) {
			if (edge1[2] == 0 && edge1[3] == 0)	// Multiple callees
				return false;
			fp1 = callGraph1.fps[[edge1[2], edge1[3]]];
			if (fp1 == undefined)
				return false;
			while (j < callGraph2.edges.length) {
				edge2 = callGraph2.edges[i];
				if (edge2[0] > range2[1])
					break;
				if (edge2[0] >= range2[0] && edge2[1] <= range2[1]) {
					if (edge2[2] == 0 && edge2[3] == 0)
						return false;
					fp2 = callGraph2.fps[[edge2[2], edge2[3]]];
					if (fp2 == undefined) 
						return false;
					status = fp1.status;
					if (status == 'notVisited') {
						fp1.status = 'visited';
						result = compare(fp1, fp2);
						fp1.status = result;
						if (result == 'selectAll')
							finalResult = false;
					} else {
						if (status == 'selectAll')
							finalResult = false;
					}
				}
				j++;
			}
		}
		i++;
	}

	return finalResult;

/*	// CallExpression
	var callee1, name2, status, result;
	if (node1 == null) return true;
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
	return true;*/
}

