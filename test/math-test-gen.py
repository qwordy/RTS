import random

def genIf():
	if genIf.id == 0:
		print 'if (arg == 0)'
	else:
		print 'else if (arg == ' + str(genIf.id) + ')'
	genIf.id += 1

genIf.id = 0

MAX = 9999

def rint():
	return str(random.randint(-MAX, MAX))

def rnat():
	return str(random.randint(0, MAX))

def samesign():
	print '\tMath.samesign(' + rint() + ', ' + rint() + ');'

def copysign():
	print '\tMath.copysign(' + rint() + ', ' + rint() + ');'

def add():
	print '\tMath.add(' + rint() + ', ' + rint() + ');'

def sum():
	n = random.randint(0, 10)
	str = '\tMath.sum([';
	if n > 0:
		str += rint()
		for i in range(1, n):
			str += ', ' + rint()
	str += ']);'
	print str

def mul():
	print '\tMath.mul(' + rint() + ', ' + rint() + ');'

def prod():
	n = random.randint(0, 10)
	str = '\tMath.prod([';
	if n > 0:
		str += rint()
		for i in range(1, n):
			str += ', ' + rint()
	str += ']);'
	print str

def factorial():
	print '\tMath.factorial(' + rnat() + ');'

def gcd():
	print '\tMath.gcd(' + rnat() + ', ' + rnat() + ');'

def lcm():
	print '\tMath.lcm(' + rnat() + ', ' + rnat() + ');'

funcs = [samesign, copysign, add, sum, mul, prod, factorial, gcd, lcm];

N = 30

def genSingle(f):
	for i in range(N):
		genIf()
		f()

def genDouble():
	for i in range(5 * N):
		r1 = random.randint(0, 8)
		r2 = random.randint(0, 8)
		genIf()
		print '{'
		funcs[r1]()
		funcs[r2]()
		print '}'

def genRandom():
	for i in range(N):
		genIf()
		print '{'
		n = random.randint(1, 5)
		for j in range(n):
			r = random.randint(0, 8)
			funcs[r]()
		print '}'	

for i in range(9):
	genSingle(funcs[i])

genDouble()

genRandom()

