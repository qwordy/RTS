(function() {
  if (typeof module !== "undefined" && module !== null) {
    module.exports && (module.exports = Math);
  }
  /**
   * @return wheter a Number x, has the same sign as another Number, y.
   * @example
   * Math.samesign(1,2)
   * //-> true
   * Math.samesign(-3, 4)
   * //-> false
   * @test
   * Math.samesign(5, 6)
   * //-> false
   * Math.samesign(-7, -8)
   * //-> true
   */
  Math.samesign = function(x, y) {
    return (x >= 0) !== (y < 0);
  };
  /**
   * @return {Number} a copy of Number x with the same sign of Number y.
   * @example
   * Math.copysign(1, -2)
   * //-> -1
   * @test
   * Math.copysign(-3, 4)
   * //-> 3
   * Math.copysign(5, 6)
   * //-> 5
   * Math.copysign(-7, -8)
   * //-> -7
   */
  Math.copysign = function(x, y) {
    if (Math.samesign(x, y)) {
      return x;
    } else {
      return -x;
    }
  };
  /**
   * @return {Number} sum of two Numbers.
   * @example
   * Math.add(1, 2)
   * //-> 3
   * @test
   * Math.add('three', 4)
   * //-> NaN
   */
  Math.add = function(a, b) {
    return (+a) + (+b);
  };
  /**
   * @return {Number} sum of an Array of Numbers.
   * @example
   * Math.sum([1, 2, 3])
   * //-> 6
   */
  Math.sum = function(nums) {
	var s = 0;
	for (var i in nums)
		s += nums[i];
	return s;
    //return nums.reduce(Math.add);
  };
  /**
   * @return {Number} product of two Numbers.
   * @example
   * Math.(2, 3)
   * //-> 6
   */
  Math.mul = function(a, b) {
    return a * b;
  };
  /**
   * @return {Number} product of an Array of Numbers.
   * @example
   * Math.prod(2, 3, 4)
   * //-> 24
   */
  Math.prod = function(nums) {
	var s = 1;
	for (var i in nums)
		s *= nums[i];
	return s;
    //return nums.reduce(Math.mul);
  };
  /**
   * @return {Number} factorial of a Number.
   * @example
   * Math.factorial(4)
   * //-> 24
   * @test
   * Math.factorial(3)
   * //-> 6
   * Math.factorial(2)
   * //-> 2
   * Math.factorial(1)
   * //-> 1
   * Math.factorial(0)
   * //-> 1
   * Math.factorial(-1)
   * //-> Infinity
   */
  Math.factorial = function(n) {
    var _i, _results;
    if (n < 0) {
      return Infinity;
    } else if (n === 0) {
      return 1;
    } else {
		var s = 1;
		for (var i = 1; i <= n; i++)
			s *= i;
		return s;
     /* return Math.prod.apply(null, (function() {
        _results = [];
        for (var _i = 1; 1 <= n ? _i <= n : _i >= n; 1 <= n ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this, arguments));
	  */
    }
  };
  /**
   * Greatest Common Multipler
   * @return {Number} greatest common multipler of two Numbers.
   * @example
   * Math.gcd(493, 289)
   * //-> 17
   * @test
   * Math.gcd(493, -289)
   * //-> 17
   */
  Math.gcd = function(a, b) {
    var _ref;
    while (b) {
      _ref = [b, a % b], a = _ref[0], b = _ref[1];
    }
    return a;
  };
  /**
   * Least Common Multiplier
   * @return {Number} least common multiplier of two numbers.
   * @example
   * Math.lcm(4, 12)
   * //-> 12
   * @test
   * Math.lcm(6, 7)
   * //-> 42
   */
  Math.lcm = function(a, b) {
    return a / Math.gcd(a, b) * b;
  };
})(); 

var arg = process.argv[2];
if (arg == 0)
	Math.samesign(-9694, 6060);
else if (arg == 1)
	Math.samesign(-4863, -6733);
else if (arg == 2)
	Math.samesign(172, 3308);
else if (arg == 3)
	Math.samesign(1548, -3540);
else if (arg == 4)
	Math.samesign(-8780, -6684);
else if (arg == 5)
	Math.samesign(6147, -1792);
else if (arg == 6)
	Math.samesign(-2241, -8054);
else if (arg == 7)
	Math.samesign(234, 5562);
else if (arg == 8)
	Math.samesign(-193, -7535);
else if (arg == 9)
	Math.samesign(-3782, 1875);
else if (arg == 10)
	Math.samesign(4628, 2423);
else if (arg == 11)
	Math.samesign(4488, -807);
else if (arg == 12)
	Math.samesign(-1595, -5997);
else if (arg == 13)
	Math.samesign(3839, -6880);
else if (arg == 14)
	Math.samesign(-7210, 9307);
else if (arg == 15)
	Math.samesign(4499, -5193);
else if (arg == 16)
	Math.samesign(6712, -106);
else if (arg == 17)
	Math.samesign(6151, 6347);
else if (arg == 18)
	Math.samesign(-4379, 9037);
else if (arg == 19)
	Math.samesign(8264, -6849);
else if (arg == 20)
	Math.samesign(-3692, -3408);
else if (arg == 21)
	Math.samesign(8460, 4481);
else if (arg == 22)
	Math.samesign(-8993, -3590);
else if (arg == 23)
	Math.samesign(2487, 4446);
else if (arg == 24)
	Math.samesign(-6668, -3177);
else if (arg == 25)
	Math.samesign(-9167, -6060);
else if (arg == 26)
	Math.samesign(-9995, -5842);
else if (arg == 27)
	Math.samesign(-596, 5629);
else if (arg == 28)
	Math.samesign(-2695, 976);
else if (arg == 29)
	Math.samesign(-3231, -5578);
else if (arg == 30)
	Math.copysign(4640, 7117);
else if (arg == 31)
	Math.copysign(5425, -9389);
else if (arg == 32)
	Math.copysign(3628, -817);
else if (arg == 33)
	Math.copysign(858, -9292);
else if (arg == 34)
	Math.copysign(8802, -962);
else if (arg == 35)
	Math.copysign(3573, -7342);
else if (arg == 36)
	Math.copysign(-776, -3897);
else if (arg == 37)
	Math.copysign(-9423, 3131);
else if (arg == 38)
	Math.copysign(-5929, 3274);
else if (arg == 39)
	Math.copysign(-9320, -8016);
else if (arg == 40)
	Math.copysign(3617, 5646);
else if (arg == 41)
	Math.copysign(4099, -8128);
else if (arg == 42)
	Math.copysign(9865, 2830);
else if (arg == 43)
	Math.copysign(2717, -737);
else if (arg == 44)
	Math.copysign(624, 2964);
else if (arg == 45)
	Math.copysign(5978, 1707);
else if (arg == 46)
	Math.copysign(-8765, 407);
else if (arg == 47)
	Math.copysign(6016, -1300);
else if (arg == 48)
	Math.copysign(9335, 6636);
else if (arg == 49)
	Math.copysign(4744, -8302);
else if (arg == 50)
	Math.copysign(8213, 7823);
else if (arg == 51)
	Math.copysign(-5474, -8576);
else if (arg == 52)
	Math.copysign(5252, -5282);
else if (arg == 53)
	Math.copysign(3101, 6042);
else if (arg == 54)
	Math.copysign(-8691, -4705);
else if (arg == 55)
	Math.copysign(972, 1618);
else if (arg == 56)
	Math.copysign(2782, 548);
else if (arg == 57)
	Math.copysign(-4996, 8886);
else if (arg == 58)
	Math.copysign(-7785, -459);
else if (arg == 59)
	Math.copysign(-7537, 830);
else if (arg == 60)
	Math.add(6252, 9631);
else if (arg == 61)
	Math.add(3536, -7290);
else if (arg == 62)
	Math.add(-8796, 5149);
else if (arg == 63)
	Math.add(-5913, -3522);
else if (arg == 64)
	Math.add(4951, -8386);
else if (arg == 65)
	Math.add(-3796, -5783);
else if (arg == 66)
	Math.add(370, -3813);
else if (arg == 67)
	Math.add(9620, -5477);
else if (arg == 68)
	Math.add(-566, -1454);
else if (arg == 69)
	Math.add(-3730, 1811);
else if (arg == 70)
	Math.add(-3573, -2589);
else if (arg == 71)
	Math.add(-118, 5847);
else if (arg == 72)
	Math.add(545, -7297);
else if (arg == 73)
	Math.add(1882, 5762);
else if (arg == 74)
	Math.add(1311, 8006);
else if (arg == 75)
	Math.add(5274, -9353);
else if (arg == 76)
	Math.add(4479, -585);
else if (arg == 77)
	Math.add(-5982, 6109);
else if (arg == 78)
	Math.add(2612, 8587);
else if (arg == 79)
	Math.add(-5177, -179);
else if (arg == 80)
	Math.add(-1660, 3798);
else if (arg == 81)
	Math.add(3841, -3726);
else if (arg == 82)
	Math.add(-8833, -1206);
else if (arg == 83)
	Math.add(-5485, -9040);
else if (arg == 84)
	Math.add(4849, -4270);
else if (arg == 85)
	Math.add(-4606, -3816);
else if (arg == 86)
	Math.add(-9733, 7714);
else if (arg == 87)
	Math.add(8127, 4273);
else if (arg == 88)
	Math.add(-6450, -1602);
else if (arg == 89)
	Math.add(-6758, -6068);
else if (arg == 90)
	Math.sum([7979, -5975, 8229]);
else if (arg == 91)
	Math.sum([-134, -3469, -6717]);
else if (arg == 92)
	Math.sum([7932]);
else if (arg == 93)
	Math.sum([708]);
else if (arg == 94)
	Math.sum([-3360, 4751, -1891, -1997]);
else if (arg == 95)
	Math.sum([-8744, 1830]);
else if (arg == 96)
	Math.sum([521, 1568, -9753, -4338, -4391, -5944, -5931]);
else if (arg == 97)
	Math.sum([-5885, -8688, -57, 2939, -3004]);
else if (arg == 98)
	Math.sum([-7340, -4627, -5437, 3321, -9504, 717, -3409, -8192, -1084]);
else if (arg == 99)
	Math.sum([-2397, -397, 1780, 5750]);
else if (arg == 100)
	Math.sum([-8969, 7141, -4673, -9184, -1198]);
else if (arg == 101)
	Math.sum([-7006, -1611, 5441, -6413, -2875, 269, -5614, -7487]);
else if (arg == 102)
	Math.sum([-5162, -19, 9207]);
else if (arg == 103)
	Math.sum([891, 9241, 3038, 1309, -6677, 3567]);
else if (arg == 104)
	Math.sum([6143, -2507]);
else if (arg == 105)
	Math.sum([-5396, -6119, -8152, 4510, 6070]);
else if (arg == 106)
	Math.sum([-8144, -560]);
else if (arg == 107)
	Math.sum([]);
else if (arg == 108)
	Math.sum([-6576, -7559, 4219, -7956, 123]);
else if (arg == 109)
	Math.sum([-7930]);
else if (arg == 110)
	Math.sum([-4179, 3940, -4761, 1189, 2477]);
else if (arg == 111)
	Math.sum([6934, 9153, 5512, 1633]);
else if (arg == 112)
	Math.sum([1106]);
else if (arg == 113)
	Math.sum([7229]);
else if (arg == 114)
	Math.sum([]);
else if (arg == 115)
	Math.sum([-2644, 2135, -6947, 3334, 926, -7286, 8373, 2968, -2054, 6407]);
else if (arg == 116)
	Math.sum([-4990, -2671, -1264, -8382, 1974, -4596, -7727]);
else if (arg == 117)
	Math.sum([7413, -1381]);
else if (arg == 118)
	Math.sum([-351, 6412, -8377, 2504, -3007, 6105, 3342, 4281, 510]);
else if (arg == 119)
	Math.sum([]);
else if (arg == 120)
	Math.mul(-6763, 662);
else if (arg == 121)
	Math.mul(-2808, 7874);
else if (arg == 122)
	Math.mul(8129, 2924);
else if (arg == 123)
	Math.mul(2206, -5058);
else if (arg == 124)
	Math.mul(-1442, 251);
else if (arg == 125)
	Math.mul(-9641, 384);
else if (arg == 126)
	Math.mul(-4499, -5678);
else if (arg == 127)
	Math.mul(-7397, -8360);
else if (arg == 128)
	Math.mul(-1182, -3965);
else if (arg == 129)
	Math.mul(-2846, -2743);
else if (arg == 130)
	Math.mul(9674, 9335);
else if (arg == 131)
	Math.mul(-3101, -4259);
else if (arg == 132)
	Math.mul(-5781, 7804);
else if (arg == 133)
	Math.mul(2947, 2041);
else if (arg == 134)
	Math.mul(2148, -3866);
else if (arg == 135)
	Math.mul(3619, 9288);
else if (arg == 136)
	Math.mul(3429, -8524);
else if (arg == 137)
	Math.mul(-6896, 6603);
else if (arg == 138)
	Math.mul(7968, -2570);
else if (arg == 139)
	Math.mul(1094, -8343);
else if (arg == 140)
	Math.mul(4921, -8752);
else if (arg == 141)
	Math.mul(-5539, -9761);
else if (arg == 142)
	Math.mul(-2701, 9612);
else if (arg == 143)
	Math.mul(-9226, -3101);
else if (arg == 144)
	Math.mul(-2832, 3708);
else if (arg == 145)
	Math.mul(4184, 9312);
else if (arg == 146)
	Math.mul(1530, 2257);
else if (arg == 147)
	Math.mul(3720, 718);
else if (arg == 148)
	Math.mul(8421, -7620);
else if (arg == 149)
	Math.mul(2415, -184);
else if (arg == 150)
	Math.prod([-3877, -7087, -3361, 132]);
else if (arg == 151)
	Math.prod([-4238, 4225, -6836, 4912, -8212, -8938]);
else if (arg == 152)
	Math.prod([3099, 7660]);
else if (arg == 153)
	Math.prod([-6258]);
else if (arg == 154)
	Math.prod([1247, 8377, 9413, -1138, 877]);
else if (arg == 155)
	Math.prod([-2630, 4317, 7649, 2304, 3582, -2124, 1393, 8874, -6939, 3416]);
else if (arg == 156)
	Math.prod([4028, -202, 6103, -468, 9673, 2808, -7683, -5299, 4959]);
else if (arg == 157)
	Math.prod([8348]);
else if (arg == 158)
	Math.prod([-4909, 7078, 2283, -2857, -6758, -3928, -5277]);
else if (arg == 159)
	Math.prod([9302, 875, -4657, 3849, -4022, 3377, 678, 6629, 3442, -4973]);
else if (arg == 160)
	Math.prod([5385, 7161, -1599, -3585]);
else if (arg == 161)
	Math.prod([9264, -5440, 8953, -411, -51, -5418, -9531, -8810, 3211, -294]);
else if (arg == 162)
	Math.prod([-1457, -9211, 2888, 3515, 5582, -6901, -2871, 2446, -1221, 1043]);
else if (arg == 163)
	Math.prod([6360, 7390, 1576, 1921, 9009, 1618, -89]);
else if (arg == 164)
	Math.prod([-1896, -9124]);
else if (arg == 165)
	Math.prod([-8768, -474, -8549]);
else if (arg == 166)
	Math.prod([2272, 7593, 5955, 3613, -2531, -8785, -4377]);
else if (arg == 167)
	Math.prod([-6180, -4304, -3388, 5899, 9532]);
else if (arg == 168)
	Math.prod([-93, 8493, 6294, 561, -2082, 46, -4569, -1408, -2117, 6378]);
else if (arg == 169)
	Math.prod([-7949]);
else if (arg == 170)
	Math.prod([7028, 6324, -9718]);
else if (arg == 171)
	Math.prod([-4236, -8239]);
else if (arg == 172)
	Math.prod([50, 6148, -3818, 3063, -9862, 3027, -2928, 9446]);
else if (arg == 173)
	Math.prod([-7008, -245, -7213, -6262, 4504, -5571]);
else if (arg == 174)
	Math.prod([-7782, -7015, 4981, 3889, 1476, 4830, -3060, -9938]);
else if (arg == 175)
	Math.prod([-492, 331, -4353, -2500, -2611, 6359, -2793]);
else if (arg == 176)
	Math.prod([]);
else if (arg == 177)
	Math.prod([1556]);
else if (arg == 178)
	Math.prod([-7573, 6760]);
else if (arg == 179)
	Math.prod([3042, -884, -9044, -9842, 2860, 5360, -9310, 3981, 2906]);
else if (arg == 180)
	Math.factorial(4850);
else if (arg == 181)
	Math.factorial(8794);
else if (arg == 182)
	Math.factorial(6540);
else if (arg == 183)
	Math.factorial(9615);
else if (arg == 184)
	Math.factorial(7681);
else if (arg == 185)
	Math.factorial(8768);
else if (arg == 186)
	Math.factorial(7546);
else if (arg == 187)
	Math.factorial(5054);
else if (arg == 188)
	Math.factorial(6044);
else if (arg == 189)
	Math.factorial(9197);
else if (arg == 190)
	Math.factorial(2793);
else if (arg == 191)
	Math.factorial(732);
else if (arg == 192)
	Math.factorial(7745);
else if (arg == 193)
	Math.factorial(336);
else if (arg == 194)
	Math.factorial(8139);
else if (arg == 195)
	Math.factorial(4988);
else if (arg == 196)
	Math.factorial(7272);
else if (arg == 197)
	Math.factorial(9782);
else if (arg == 198)
	Math.factorial(7911);
else if (arg == 199)
	Math.factorial(373);
else if (arg == 200)
	Math.factorial(558);
else if (arg == 201)
	Math.factorial(2768);
else if (arg == 202)
	Math.factorial(2436);
else if (arg == 203)
	Math.factorial(4863);
else if (arg == 204)
	Math.factorial(2657);
else if (arg == 205)
	Math.factorial(5823);
else if (arg == 206)
	Math.factorial(6891);
else if (arg == 207)
	Math.factorial(7007);
else if (arg == 208)
	Math.factorial(6307);
else if (arg == 209)
	Math.factorial(2011);
else if (arg == 210)
	Math.gcd(4173, 7055);
else if (arg == 211)
	Math.gcd(4762, 9645);
else if (arg == 212)
	Math.gcd(4103, 374);
else if (arg == 213)
	Math.gcd(9668, 9482);
else if (arg == 214)
	Math.gcd(7407, 1859);
else if (arg == 215)
	Math.gcd(8881, 8014);
else if (arg == 216)
	Math.gcd(5114, 3633);
else if (arg == 217)
	Math.gcd(9028, 8077);
else if (arg == 218)
	Math.gcd(2064, 5523);
else if (arg == 219)
	Math.gcd(5413, 8289);
else if (arg == 220)
	Math.gcd(4959, 5028);
else if (arg == 221)
	Math.gcd(3814, 9242);
else if (arg == 222)
	Math.gcd(5463, 2870);
else if (arg == 223)
	Math.gcd(6146, 3787);
else if (arg == 224)
	Math.gcd(8351, 7271);
else if (arg == 225)
	Math.gcd(7032, 7584);
else if (arg == 226)
	Math.gcd(5737, 3074);
else if (arg == 227)
	Math.gcd(4742, 6544);
else if (arg == 228)
	Math.gcd(9396, 1119);
else if (arg == 229)
	Math.gcd(9329, 3204);
else if (arg == 230)
	Math.gcd(8193, 387);
else if (arg == 231)
	Math.gcd(9516, 7937);
else if (arg == 232)
	Math.gcd(7658, 3150);
else if (arg == 233)
	Math.gcd(3506, 8054);
else if (arg == 234)
	Math.gcd(2569, 9714);
else if (arg == 235)
	Math.gcd(1018, 8084);
else if (arg == 236)
	Math.gcd(4411, 2558);
else if (arg == 237)
	Math.gcd(6403, 6306);
else if (arg == 238)
	Math.gcd(5978, 5477);
else if (arg == 239)
	Math.gcd(1476, 8734);
else if (arg == 240)
	Math.lcm(3998, 816);
else if (arg == 241)
	Math.lcm(7767, 5109);
else if (arg == 242)
	Math.lcm(2730, 1926);
else if (arg == 243)
	Math.lcm(7584, 8395);
else if (arg == 244)
	Math.lcm(4113, 4660);
else if (arg == 245)
	Math.lcm(2445, 5148);
else if (arg == 246)
	Math.lcm(8594, 4999);
else if (arg == 247)
	Math.lcm(2277, 3443);
else if (arg == 248)
	Math.lcm(336, 6650);
else if (arg == 249)
	Math.lcm(9877, 2739);
else if (arg == 250)
	Math.lcm(4631, 7934);
else if (arg == 251)
	Math.lcm(4254, 462);
else if (arg == 252)
	Math.lcm(7107, 9591);
else if (arg == 253)
	Math.lcm(3547, 5853);
else if (arg == 254)
	Math.lcm(3694, 3763);
else if (arg == 255)
	Math.lcm(9839, 7181);
else if (arg == 256)
	Math.lcm(840, 5531);
else if (arg == 257)
	Math.lcm(1499, 2512);
else if (arg == 258)
	Math.lcm(9493, 1246);
else if (arg == 259)
	Math.lcm(4990, 6090);
else if (arg == 260)
	Math.lcm(3649, 7090);
else if (arg == 261)
	Math.lcm(6618, 7475);
else if (arg == 262)
	Math.lcm(6005, 5627);
else if (arg == 263)
	Math.lcm(6731, 7961);
else if (arg == 264)
	Math.lcm(7423, 1548);
else if (arg == 265)
	Math.lcm(5364, 2758);
else if (arg == 266)
	Math.lcm(6995, 2883);
else if (arg == 267)
	Math.lcm(2185, 1097);
else if (arg == 268)
	Math.lcm(8365, 9375);
else if (arg == 269)
	Math.lcm(7831, 7152);
else if (arg == 270)
{
	Math.add(4841, 1984);
	Math.add(6527, 7943);
}
else if (arg == 271)
{
	Math.copysign(1257, 6658);
	Math.samesign(1347, 1088);
}
else if (arg == 272)
{
	Math.copysign(4728, -1973);
	Math.gcd(4011, 2589);
}
else if (arg == 273)
{
	Math.prod([3044, 1870, -7082, 6884, 2774, -7341, -2476, -2676, -706]);
	Math.add(-3367, -1606);
}
else if (arg == 274)
{
	Math.mul(219, -8783);
	Math.factorial(6458);
}
else if (arg == 275)
{
	Math.prod([]);
	Math.gcd(5602, 2544);
}
else if (arg == 276)
{
	Math.factorial(4963);
	Math.mul(6202, 7169);
}
else if (arg == 277)
{
	Math.samesign(8442, 7602);
	Math.gcd(8879, 6277);
}
else if (arg == 278)
{
	Math.samesign(-4231, -5548);
	Math.lcm(1700, 6918);
}
else if (arg == 279)
{
	Math.sum([-4576, -7712, 7795, 8054, -5988, -4319, 2136, -2499, -3108, 2345]);
	Math.add(-3791, 4492);
}
else if (arg == 280)
{
	Math.sum([-6052, -8087, 30, -9282, 7170, -979, 2884, -7963, -5243]);
	Math.sum([-4021, 7353, 4742, 7527, 4778, -1108, 1776, -7350, 2252, -2492]);
}
else if (arg == 281)
{
	Math.samesign(-8978, 4248);
	Math.copysign(3642, 1377);
}
else if (arg == 282)
{
	Math.lcm(6023, 3358);
	Math.samesign(629, 4484);
}
else if (arg == 283)
{
	Math.add(5871, 2919);
	Math.prod([9982, -3000, 3961, 7753, -8883]);
}
else if (arg == 284)
{
	Math.sum([-4802, -9065, -581, -4557]);
	Math.lcm(8290, 1811);
}
else if (arg == 285)
{
	Math.lcm(9595, 5225);
	Math.samesign(3872, 392);
}
else if (arg == 286)
{
	Math.gcd(3202, 8681);
	Math.samesign(7510, -2649);
}
else if (arg == 287)
{
	Math.sum([6016, 3878]);
	Math.add(8043, -1939);
}
else if (arg == 288)
{
	Math.lcm(2675, 2106);
	Math.prod([-3114, 9779, -5307, 3755, 3905, -2801, 3853, -7145, 8786]);
}
else if (arg == 289)
{
	Math.mul(-2879, -244);
	Math.prod([-4256, 7650, 69, 4930, 5012, -9595, 548]);
}
else if (arg == 290)
{
	Math.lcm(8628, 795);
	Math.mul(9794, 8697);
}
else if (arg == 291)
{
	Math.mul(-999, -3657);
	Math.copysign(3469, -2948);
}
else if (arg == 292)
{
	Math.add(-1514, 3241);
	Math.add(6551, -1796);
}
else if (arg == 293)
{
	Math.sum([662, -6839, 738, 4704]);
	Math.mul(1820, 96);
}
else if (arg == 294)
{
	Math.gcd(4413, 1373);
	Math.add(1478, -537);
}
else if (arg == 295)
{
	Math.sum([-1037, -8410]);
	Math.mul(3797, 7622);
}
else if (arg == 296)
{
	Math.add(-8672, -7720);
	Math.samesign(8746, -6470);
}
else if (arg == 297)
{
	Math.prod([]);
	Math.copysign(9094, 5339);
}
else if (arg == 298)
{
	Math.add(-9115, 1502);
	Math.lcm(1954, 933);
}
else if (arg == 299)
{
	Math.mul(-5839, -9360);
	Math.factorial(1970);
}
else if (arg == 300)
{
	Math.lcm(3174, 4467);
	Math.copysign(-2693, 313);
}
else if (arg == 301)
{
	Math.add(7837, 7153);
	Math.prod([5177, -1484]);
}
else if (arg == 302)
{
	Math.gcd(7512, 6313);
	Math.sum([9040, -7830, 6792, 603, -7851, -257, 4474, -7720]);
}
else if (arg == 303)
{
	Math.factorial(1235);
	Math.lcm(1453, 2674);
}
else if (arg == 304)
{
	Math.mul(4497, -5350);
	Math.mul(6749, 5442);
}
else if (arg == 305)
{
	Math.prod([2085, 5679, -5757, -2473, 2717, 2755, 8391, 211]);
	Math.mul(-4697, -1433);
}
else if (arg == 306)
{
	Math.lcm(9009, 6204);
	Math.samesign(-7972, -102);
}
else if (arg == 307)
{
	Math.copysign(-8626, -4958);
	Math.lcm(4074, 9484);
}
else if (arg == 308)
{
	Math.add(-7442, 179);
	Math.gcd(823, 4791);
}
else if (arg == 309)
{
	Math.copysign(3751, -6156);
	Math.mul(7397, -1082);
}
else if (arg == 310)
{
	Math.factorial(1133);
	Math.samesign(8877, 5180);
}
else if (arg == 311)
{
	Math.mul(-8528, 2670);
	Math.gcd(8317, 3563);
}
else if (arg == 312)
{
	Math.prod([8152, -3608, -9001, 3166, -15, 2986, -5858]);
	Math.lcm(3583, 178);
}
else if (arg == 313)
{
	Math.sum([7945, 4049, 9868, -9889, -8432, 5785]);
	Math.copysign(-6730, 9595);
}
else if (arg == 314)
{
	Math.samesign(-6206, 3573);
	Math.sum([1949, 662]);
}
else if (arg == 315)
{
	Math.factorial(3180);
	Math.prod([6307, -7193, -8393, 1327, 1994, -4053, -4950]);
}
else if (arg == 316)
{
	Math.copysign(-3620, -5825);
	Math.factorial(1307);
}
else if (arg == 317)
{
	Math.factorial(3628);
	Math.copysign(-634, 7972);
}
else if (arg == 318)
{
	Math.gcd(134, 8192);
	Math.lcm(5095, 406);
}
else if (arg == 319)
{
	Math.gcd(2557, 8936);
	Math.add(-6254, 2740);
}
else if (arg == 320)
{
	Math.sum([-3209, -7053, -8291, 6077]);
	Math.gcd(9207, 633);
}
else if (arg == 321)
{
	Math.prod([6309, -7330, -2, -2992]);
	Math.copysign(8224, 1158);
}
else if (arg == 322)
{
	Math.lcm(5855, 9112);
	Math.sum([6798, -9497, 8798, 9739, -3973, 5694, 4521]);
}
else if (arg == 323)
{
	Math.factorial(3657);
	Math.add(9524, 2092);
}
else if (arg == 324)
{
	Math.lcm(8932, 4747);
	Math.lcm(7803, 5481);
}
else if (arg == 325)
{
	Math.lcm(4511, 3389);
	Math.prod([-5773, -474, -5825, -2648, -6326, 9810, 6231, -2504, -5590]);
}
else if (arg == 326)
{
	Math.factorial(5720);
	Math.gcd(3119, 1688);
}
else if (arg == 327)
{
	Math.samesign(-1135, 990);
	Math.samesign(9119, 1136);
}
else if (arg == 328)
{
	Math.sum([827, -8969, 8902, 3251, 6544, -8278, -8007, 21, 7991]);
	Math.lcm(258, 5514);
}
else if (arg == 329)
{
	Math.prod([]);
	Math.gcd(1897, 6752);
}
else if (arg == 330)
{
	Math.gcd(4130, 1372);
	Math.copysign(-9397, -5948);
}
else if (arg == 331)
{
	Math.mul(2498, 2033);
	Math.gcd(3906, 1295);
}
else if (arg == 332)
{
	Math.lcm(7211, 7457);
	Math.prod([6572, -8015, 6346, 4828]);
}
else if (arg == 333)
{
	Math.add(1948, -8046);
	Math.factorial(3893);
}
else if (arg == 334)
{
	Math.samesign(2676, -4814);
	Math.factorial(6809);
}
else if (arg == 335)
{
	Math.add(7323, 775);
	Math.lcm(2316, 8969);
}
else if (arg == 336)
{
	Math.sum([-7995, 669, -7025, 6091, 883, 1631]);
	Math.prod([-3279, -7281, -6500, -4217]);
}
else if (arg == 337)
{
	Math.factorial(9755);
	Math.lcm(3948, 2043);
}
else if (arg == 338)
{
	Math.factorial(5914);
	Math.factorial(8126);
}
else if (arg == 339)
{
	Math.samesign(6691, 3175);
	Math.lcm(1351, 4095);
}
else if (arg == 340)
{
	Math.factorial(4367);
	Math.mul(5230, -8706);
}
else if (arg == 341)
{
	Math.gcd(2882, 4163);
	Math.gcd(1699, 3902);
}
else if (arg == 342)
{
	Math.sum([-6803, -7830, 3719, 5593, -1836, -1318, -9100, -5632]);
	Math.samesign(-7931, -2485);
}
else if (arg == 343)
{
	Math.add(-2394, 5591);
	Math.lcm(815, 5827);
}
else if (arg == 344)
{
	Math.copysign(-4863, 6886);
	Math.samesign(4974, -2901);
}
else if (arg == 345)
{
	Math.gcd(9158, 2122);
	Math.gcd(1468, 3878);
}
else if (arg == 346)
{
	Math.samesign(8374, -4509);
	Math.samesign(-2239, -4443);
}
else if (arg == 347)
{
	Math.prod([-3652]);
	Math.samesign(-2609, 1833);
}
else if (arg == 348)
{
	Math.lcm(3066, 7158);
	Math.add(996, 962);
}
else if (arg == 349)
{
	Math.copysign(7108, 9582);
	Math.samesign(-2667, 7726);
}
else if (arg == 350)
{
	Math.mul(-7978, -5951);
	Math.add(2557, -6512);
}
else if (arg == 351)
{
	Math.add(3736, -6449);
	Math.add(-9177, -475);
}
else if (arg == 352)
{
	Math.gcd(5195, 9807);
	Math.samesign(2730, -9048);
}
else if (arg == 353)
{
	Math.samesign(1328, 7315);
	Math.gcd(7847, 4320);
}
else if (arg == 354)
{
	Math.sum([]);
	Math.copysign(-3190, 1232);
}
else if (arg == 355)
{
	Math.mul(5369, 3863);
	Math.copysign(8668, 1824);
}
else if (arg == 356)
{
	Math.mul(-2184, -3355);
	Math.samesign(-653, -5604);
}
else if (arg == 357)
{
	Math.sum([-6989, -3864, 2346, 8551, -1951, 4081, 1067, -532, 1115, 9864]);
	Math.gcd(6220, 5337);
}
else if (arg == 358)
{
	Math.lcm(545, 2502);
	Math.prod([6102, -2535, 1252, 8878, -9355, -5506, -1303, 7303, 9897, 2503]);
}
else if (arg == 359)
{
	Math.sum([-4349, -3483]);
	Math.sum([2026, -8591, 8666, 2759, 9221, 4323]);
}
else if (arg == 360)
{
	Math.sum([8838, -9660, -4124, -7225, -8199, -4838, 2859, -4342, -9917]);
	Math.gcd(7206, 5893);
}
else if (arg == 361)
{
	Math.mul(2451, 3671);
	Math.samesign(-2441, 1176);
}
else if (arg == 362)
{
	Math.mul(1122, 28);
	Math.prod([1836, -2614, 6581, 2849]);
}
else if (arg == 363)
{
	Math.prod([7125, 234, -1300]);
	Math.lcm(3683, 4905);
}
else if (arg == 364)
{
	Math.lcm(4537, 9087);
	Math.gcd(3920, 3233);
}
else if (arg == 365)
{
	Math.prod([8586, -9198]);
	Math.lcm(7172, 3454);
}
else if (arg == 366)
{
	Math.sum([-1988, 2097, -7834]);
	Math.factorial(9150);
}
else if (arg == 367)
{
	Math.gcd(9559, 6216);
	Math.add(-7959, -1453);
}
else if (arg == 368)
{
	Math.factorial(1101);
	Math.samesign(5840, 7954);
}
else if (arg == 369)
{
	Math.lcm(6556, 4340);
	Math.add(-8160, -350);
}
else if (arg == 370)
{
	Math.prod([1858, 7523, 618, -9005, -1327, 1306, 2517]);
	Math.gcd(9022, 4644);
}
else if (arg == 371)
{
	Math.prod([-115, -3711, 3177, -6874, 404, -1114, 2236, 8901, -8272, -5692]);
	Math.factorial(3333);
}
else if (arg == 372)
{
	Math.prod([500, 2950, -5137, -9553, -6481, -2372, 4857, -514, -7858, -485]);
	Math.lcm(4859, 5890);
}
else if (arg == 373)
{
	Math.mul(5372, -5956);
	Math.lcm(9157, 8238);
}
else if (arg == 374)
{
	Math.prod([3732, 6859, -2880]);
	Math.prod([-887, -578, -7752, 2194, 5514, 7269]);
}
else if (arg == 375)
{
	Math.prod([-3917, 3903, 1591, 7183, -8392, -2910, -7162, 1125, -5698, -7508]);
	Math.add(5334, 5059);
}
else if (arg == 376)
{
	Math.gcd(7728, 2251);
	Math.gcd(543, 1986);
}
else if (arg == 377)
{
	Math.add(5970, 3957);
	Math.sum([8789, -7675, 2863, 684, -5923, -1228, -2296]);
}
else if (arg == 378)
{
	Math.mul(-1451, 1507);
	Math.sum([-3437, -5739, 3723, 5303, -3535]);
}
else if (arg == 379)
{
	Math.add(5748, 9877);
	Math.factorial(3146);
}
else if (arg == 380)
{
	Math.copysign(-410, 4982);
	Math.sum([2031, 1379, -6991, 7636, -77, -4290, 5405]);
}
else if (arg == 381)
{
	Math.sum([-9652, 4800, 1199, 2177, 8645, -4456, -3111, -3993, -1604, 6901]);
	Math.gcd(3498, 4712);
}
else if (arg == 382)
{
	Math.copysign(-5917, -3299);
	Math.sum([7311, -4412, -6681, 2383, -1235, -8124, 8080, 2855]);
}
else if (arg == 383)
{
	Math.samesign(4705, 3558);
	Math.factorial(3463);
}
else if (arg == 384)
{
	Math.sum([-359, 8150, 8359, -6982, 8610, -8570, 4338, -4724, -5867]);
	Math.prod([7498, 3026, 2769, 1369, -656]);
}
else if (arg == 385)
{
	Math.samesign(8562, -3611);
	Math.prod([-5386, 2041, -677]);
}
else if (arg == 386)
{
	Math.lcm(4579, 8111);
	Math.copysign(-7435, 4231);
}
else if (arg == 387)
{
	Math.sum([-9987, -4256, 6829, 7026, 9048, -1170]);
	Math.mul(5041, -9177);
}
else if (arg == 388)
{
	Math.copysign(2706, -2969);
	Math.sum([191]);
}
else if (arg == 389)
{
	Math.mul(-7594, -8901);
	Math.gcd(2439, 233);
}
else if (arg == 390)
{
	Math.prod([7818]);
	Math.gcd(9658, 3495);
}
else if (arg == 391)
{
	Math.gcd(8103, 6672);
	Math.gcd(2932, 8627);
}
else if (arg == 392)
{
	Math.mul(8907, 2947);
	Math.mul(8259, -4124);
}
else if (arg == 393)
{
	Math.sum([2966]);
	Math.sum([-5047, 2776, 1981, 2466, -9820, -7039, 8568, 1717, 3217, 5790]);
}
else if (arg == 394)
{
	Math.sum([3769, 8275, -4691, -5905, 35, 7867, -1279, 1241, 4815, -2765]);
	Math.add(-6871, 205);
}
else if (arg == 395)
{
	Math.lcm(2235, 9983);
	Math.lcm(5754, 8616);
}
else if (arg == 396)
{
	Math.factorial(3682);
	Math.gcd(500, 9185);
}
else if (arg == 397)
{
	Math.lcm(7245, 1587);
	Math.gcd(7161, 7446);
}
else if (arg == 398)
{
	Math.mul(8152, -9159);
	Math.copysign(9012, -8874);
}
else if (arg == 399)
{
	Math.factorial(7289);
	Math.sum([-1288, -2663, -8669, 5932, -8071]);
}
else if (arg == 400)
{
	Math.prod([-3193, 7562, 3726, 2416, -7706, -975, -2602]);
	Math.mul(-3178, 1951);
}
else if (arg == 401)
{
	Math.prod([-6551, 3700, -6589, 2152, 5638, 9997, -2427, -6401, -6705, 5999]);
	Math.copysign(-9613, 9621);
}
else if (arg == 402)
{
	Math.copysign(-2565, 8748);
	Math.mul(5725, -1611);
}
else if (arg == 403)
{
	Math.factorial(7415);
	Math.mul(573, -6409);
}
else if (arg == 404)
{
	Math.mul(5898, 7892);
	Math.copysign(3255, 7748);
}
else if (arg == 405)
{
	Math.mul(8071, -999);
	Math.gcd(5094, 1890);
}
else if (arg == 406)
{
	Math.samesign(-3029, 9331);
	Math.sum([9196, 3512]);
}
else if (arg == 407)
{
	Math.samesign(-3950, -5903);
	Math.add(7264, -2666);
}
else if (arg == 408)
{
	Math.samesign(3909, 9741);
	Math.factorial(4618);
}
else if (arg == 409)
{
	Math.copysign(-8028, -8272);
	Math.samesign(-931, -6433);
}
else if (arg == 410)
{
	Math.add(-8646, -5660);
	Math.add(3154, 7050);
}
else if (arg == 411)
{
	Math.samesign(2212, 2115);
	Math.lcm(4180, 4463);
}
else if (arg == 412)
{
	Math.lcm(3380, 2125);
	Math.gcd(3383, 8624);
}
else if (arg == 413)
{
	Math.factorial(3486);
	Math.add(9803, 5884);
}
else if (arg == 414)
{
	Math.sum([8312, -2084, -7841, -2554, 6874, 3051, 1657, 5492]);
	Math.factorial(8537);
}
else if (arg == 415)
{
	Math.sum([4658, 6195, -714, -2259, 2526, -8584, -9738, 8306, 6341, -1507]);
	Math.mul(-4321, 4286);
}
else if (arg == 416)
{
	Math.samesign(-2359, -5452);
	Math.factorial(5960);
}
else if (arg == 417)
{
	Math.add(4878, -9073);
	Math.prod([5574, 871, -106, -8437, -5889, 2919, 5056, 6250, -764, 8204]);
}
else if (arg == 418)
{
	Math.mul(-2301, -134);
	Math.samesign(-1894, -2718);
}
else if (arg == 419)
{
	Math.lcm(7335, 14);
	Math.gcd(7945, 5192);
}
else if (arg == 420)
{
	Math.copysign(3758, 6934);
	Math.copysign(-8039, 3271);
	Math.prod([5034, -7680, -9695, -2576]);
}
else if (arg == 421)
{
	Math.lcm(9639, 7448);
	Math.add(-3357, -7338);
}
else if (arg == 422)
{
	Math.sum([-6590, 8173, -5740, 7716, 3211]);
	Math.add(8, -2493);
}
else if (arg == 423)
{
	Math.factorial(1121);
	Math.factorial(155);
	Math.lcm(3139, 9183);
	Math.lcm(685, 9434);
	Math.prod([-6850, -5357, -2675, 1112, 8267, 1532, 8343, -8326, 1006]);
}
else if (arg == 424)
{
	Math.factorial(8738);
	Math.gcd(7264, 5424);
	Math.sum([-8483, 2987, 5895, 9927]);
	Math.factorial(7589);
}
else if (arg == 425)
{
	Math.gcd(7871, 645);
	Math.lcm(9960, 5864);
	Math.gcd(9011, 9006);
}
else if (arg == 426)
{
	Math.mul(9320, -9093);
	Math.samesign(1551, -7267);
}
else if (arg == 427)
{
	Math.copysign(80, 9949);
	Math.mul(7805, -6874);
	Math.lcm(1748, 6224);
}
else if (arg == 428)
{
	Math.factorial(6657);
	Math.gcd(7893, 2854);
	Math.prod([-788, -4449]);
}
else if (arg == 429)
{
	Math.lcm(5492, 7369);
}
else if (arg == 430)
{
	Math.lcm(1892, 582);
	Math.sum([9038, -5545, -8022, -3492, -9662, 6905, 4976]);
	Math.factorial(5124);
	Math.gcd(1678, 2558);
	Math.sum([-1558, 2729, -503, -8644, -3189, 3457, 8724, 7074]);
}
else if (arg == 431)
{
	Math.copysign(8311, 2055);
	Math.add(-2841, -7309);
	Math.sum([]);
	Math.add(-2313, 6775);
	Math.mul(-2148, 3758);
}
else if (arg == 432)
{
	Math.add(-5794, -3771);
}
else if (arg == 433)
{
	Math.samesign(-2076, -6578);
	Math.add(2009, -7697);
}
else if (arg == 434)
{
	Math.prod([5578, -6554, 8604, -1438, -4387, -7665, 1481]);
	Math.sum([8969, -5578, -2081, -5573, 133]);
	Math.prod([-8734, 1640, -1987]);
}
else if (arg == 435)
{
	Math.factorial(4812);
	Math.mul(-7125, -3600);
	Math.gcd(5123, 5329);
}
else if (arg == 436)
{
	Math.sum([7318]);
	Math.samesign(4527, -5445);
	Math.sum([1228, 1734, -3506, 4247, 5356, -7007, 1965, 3628]);
	Math.samesign(-8876, -3091);
	Math.copysign(-6633, -7527);
}
else if (arg == 437)
{
	Math.prod([]);
	Math.sum([-1232, 7013, -3465, 7844, -3136, -9277, -7754, 4223, 6919]);
}
else if (arg == 438)
{
	Math.gcd(8995, 2694);
}
else if (arg == 439)
{
	Math.lcm(3255, 4285);
	Math.gcd(7482, 2032);
	Math.prod([6427]);
}
else if (arg == 440)
{
	Math.sum([-4711, 3963]);
	Math.factorial(5428);
	Math.samesign(1387, -8618);
}
else if (arg == 441)
{
	Math.add(-7753, -7009);
	Math.mul(5000, 6281);
	Math.sum([1286]);
	Math.mul(-3095, 1577);
	Math.factorial(3661);
}
else if (arg == 442)
{
	Math.factorial(7451);
	Math.factorial(923);
}
else if (arg == 443)
{
	Math.factorial(9509);
	Math.samesign(-1639, -4084);
	Math.samesign(-2737, 7282);
	Math.prod([-2336, 9067, 4988, 6263, 6487, 593, -1783, 4726, -7489]);
}
else if (arg == 444)
{
	Math.gcd(5444, 8394);
	Math.add(-1826, -3926);
	Math.gcd(6536, 8803);
}
else if (arg == 445)
{
	Math.add(664, 7459);
	Math.samesign(-8564, 2727);
	Math.prod([-6649]);
}
else if (arg == 446)
{
	Math.sum([6532, 7704, -9658, 9663, -3548, -5916, -266, -1166, -5347]);
	Math.factorial(4486);
	Math.prod([9623, 698, 2157, 8509, 1776, 1788, -7981, 4989]);
	Math.sum([6995, 8899]);
}
else if (arg == 447)
{
	Math.prod([153, -8327]);
	Math.sum([4998, -7633]);
	Math.factorial(840);
	Math.prod([-4724, -9277, -5030, 327, -753, 9921, -4515, -6121]);
}
else if (arg == 448)
{
	Math.prod([-1573, -8656, 8922, -3849, 8479, 581, 4452]);
	Math.add(6212, -1203);
	Math.gcd(8173, 9184);
	Math.gcd(1627, 5214);
	Math.sum([8012, -1120, 4781, -245, -1910]);
}
else if (arg == 449)
{
	Math.gcd(3053, 2869);
	Math.sum([2883, -519, 7763]);
}
