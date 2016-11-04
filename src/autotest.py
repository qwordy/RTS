#!/usr/bin/python

import sys, os, time

filename = sys.argv[1]
n = int(sys.argv[2])

time0 = time.time()

for i in range(n):
	#print i
	os.system('node ' + filename + ' ' + str(i))

time1 = time.time()

print 'Running time:'
print time1 - time0
