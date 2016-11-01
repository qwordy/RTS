import os, time

time0 = time.time()

#tests = [1, 3, 5, 9, 10, 11, 12, 13, 14, 15,
#		 16, 19, 20, 21, 23, 26, 27, 39, 42, 43,
#		 44, 46, 51, 53, 54, 55, 56, 59, 61, 62,
#		 64, 65, 66, 71, 72, 81, 83, 84, 85, 87,
#		 89, 90, 91, 93, 93, 95]

tests = [33, 50, 74, 76, 98]

for i in tests:
	os.system('node isTime2.js ' + str(i))

time1 = time.time()

print 'Running time:'
print time1 - time0
