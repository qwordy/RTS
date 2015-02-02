function Node(code) {
	this.children = new Array();
	this.code = code;
}

Node.prototype = {
	addNext: function(node) {
		this.children.push(node);
	}
};

function CFG() {
	this.entry = new Node('Entry');	
}

module.exports = {
	Node: Node,
	CFG: CFG
}


