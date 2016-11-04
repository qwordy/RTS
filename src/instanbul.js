var istanbul = require('istanbul');
var instrumenter = new istanbul.Instrumenter();

var generatedCode = instrumenter.instrumentSync(
	'function foo() {return 42;}', 'hehe.js');
console.log(generatedCode);

