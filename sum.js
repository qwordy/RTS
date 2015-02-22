var a, s, i;
a = [1, 2, 3, 4];
s = 0;
for (i in a) {
	if (a[i] < 0)
		process.exit(1);
	else
		s += a[i];
	break;
}
console.log(s);
hello();

function hello() {
	return;
	console.log('hello');
}

foo = function(){}
console.log(hello);
console.log(foo);

s = 'asdf';
b = {};
b[s] = 1;
console.log(b);
