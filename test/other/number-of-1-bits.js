/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
	var s = 0;
	while (n > 0) {
		s += n % 2;
		n = Math.floor(n / 2);
	}
	return s;
}
