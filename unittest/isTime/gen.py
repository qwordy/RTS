import random

def genIf():
	if genIf.id == 0:
		print 'if (arg == 0)'
	else:
		print 'else if (arg == ' + str(genIf.id) + ')'
	genIf.id += 1;

genIf.id = 0

MAX = 100

def rnat():
	return str(random.randint(0, MAX))

def gen():
	kind = random.randint(0, 1)
	if (kind == 0):
		print '\tisTime(\'' + rnat() + '\');'
	elif (kind == 1):
		print '\tisTime(\'' + rnat() + ':' + rnat() + ':' + rnat() + '\');'


for i in range(100):
	genIf()
	gen()


