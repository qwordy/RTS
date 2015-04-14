function hello() {
	hello();
	if (0) a = 0; else;
}

if (1) {
	hello();
	a = 1;
}
else {
	hello();
	a = 2;
}

