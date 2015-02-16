function Node(syntax) {
	this.id = Node.id++;
	console.log('node' + this.id);
	this.children = new Array();	// successor
	this.edges = new Array();	// edge number
	this.functions = {};	// store function pointers in entry node
	this.syntax = syntax;	// syntax tree
	this.visited = false;
}

Node.prototype = {
	addNext: function(node) {
		this.children.push(node);
		this.edges.push(getNum());
	}
};

Node.id = 0;

// Return a integer. +1 each time
function getNum() {
	console.log('edge' + getNum.num);
	return getNum.num++;
}

getNum.num = 0;

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

