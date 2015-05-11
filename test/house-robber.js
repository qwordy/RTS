/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
	var i, f;
	
	f = [];
	f[-2] = f[-1] = 0;
	for (i in nums) {
		if (nums[i] + f[i - 2] > f[i - 1])
			f[i] = nums[i] + f[i - 2];
		else
			f[i] = f[i - 1];
	}
	return f[nums.length - 1];
}
