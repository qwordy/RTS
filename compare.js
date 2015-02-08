// Compare two CFGs
function compare(node1, node2) {
	var i, j, child1, child2, findEqual;
	node1.visited = true;
	for (i in node1.children) {
		child1 = node1.children[i];
		findEqual = false;	// if child1 == child2
		for (j in node2.children) {
			child2 = node2.children[j];
			if (nodesEqual(child1.syntax, child2.syntax)) {
				findEqual = true;
				break;
			}
		}
		if (findEqual) {
			if (!child1.visited) compare(child1, child2);
		} else {
			console.log(node1.edges[i]);
		}
	}
}

// True if two nodes are the same
function nodesEqual(node1, node2) {
	if (node1 == node2)	return true;
	for (var i in node1) {
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
	return true;
}

exports.compare = compare;
