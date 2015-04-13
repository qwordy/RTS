function hello() {
	hello();
	if (0) a = 3;
};

if (1) {
	hello();
	a = 4;
}
else
	hello();
