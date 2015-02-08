function Node(syntax) {
	this.children = new Array();	// successor
	this.edges = new Array();	// edge number
	this.syntax = syntax;
	this.visited = false;
}

Node.prototype = {
	addNext: function(node) {
		this.children.push(node);
		this.edges.push(getNum());
	}
};

// Return a integer. +1 each time
function getNum() {
	console.log(getNum.num);
	return getNum.num++;
}

getNum.num = 0;

//function CFG() {
//	this.entry = new Node('Entry');	
//}

module.exports = {
	Node: Node
}

