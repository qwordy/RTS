import os, time

time0 = time.time()

#tests = [6, 11, 27, 35, 59]

tests = [0, 1, 2, 3, 6, 8, 10, 11, 13, 15,
		 17, 18, 19, 20, 21, 23, 24, 25, 26, 27,
		 31, 33, 35, 36, 38, 39, 41, 43, 44, 45,
		 46, 48, 49, 50, 55, 57, 58, 59, 60, 61,
		 62, 63, 65, 67, 69, 71, 72, 74, 75, 77,
		 78, 79, 80, 81, 83, 85, 87, 88, 89, 90,
		 91, 92, 93, 94, 95, 96, 97, 98, 99]

for i in tests:
	os.system('node isIdCardNo2.js ' + str(i))

time1 = time.time()

print 'Running time:'
print time1 - time0
