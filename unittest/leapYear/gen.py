import random

def genIf():
	if genIf.id == 0:
		print 'if (arg == 0)'
	else:
		print 'else if (arg == ' + str(genIf.id) + ')'
	genIf.id += 1;

genIf.id = 0

MAX = 10000

def rnat():
	return str(random.randint(0, MAX))

def gen():
	print '\tLeapYear(\'' + rnat() + '\');'

for i in range(100):
	genIf()
	gen()

