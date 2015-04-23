var esgraph = require('esgraph'),
	esprima = require('esprima');
var cfg = esgraph(esprima.parse('for (i in a) a;b;'));
console.log(cfg);

