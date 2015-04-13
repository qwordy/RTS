function hello() {
	hello();
	if (0) a = 0;
}

if (1) {
	hello();
	a = 1;
}
else {
	hello();
	a = 2;
}

