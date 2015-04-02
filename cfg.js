function Node(syntax) {
	this.id = Node.id++;
	console.log('node' + this.id);
	console.log(syntax);
	this.children = new Array();	// successor
	this.edges = new Array();	// edge number
	this.functions = {};	// store function pointers in entry node
	this.syntax = syntax;	// syntax tree
	this.visited = false;
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

function Stack() {
	this.stack = new Array();
}

Stack.prototype = {
	push: function(value) {
		this.stack.push(value);
	},

	pop: function() {
	}
}

module.exports = {
	Node: Node
}

