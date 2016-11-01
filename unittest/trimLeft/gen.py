import random

def genIf():
	if genIf.id == 0:
		print 'if (arg == 0)'
	else:
		print 'else if (arg == ' + str(genIf.id) + ')'
	genIf.id += 1;

genIf.id = 0

def rnat(n):
	id = ''
	for i in range(n):
		id += str(random.randint(0, 9))
	return id

def gen():
	kind = random.randint(0, 2)
	if (kind == 0):
		print '\tTrimLeft();'
	elif (kind == 1):
		print '\tTrimLeft(\'\');'
	elif (kind == 2):
		print '\tTrimLeft(\'' + rnat(10) + '\');'

for i in range(100):
	genIf()
	gen()


