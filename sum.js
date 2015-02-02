a = [1, 2, 3, 4];
s = 0;
for (i in a) {
	if (a[i] < 0)
		process.exit(1);
	else
		s += a[i];
}
console.log(s);
