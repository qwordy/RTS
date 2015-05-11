console.log('node 65');
(function () {
    console.log('node 2');
    if (typeof module !== 'undefined' && module !== null) {
        console.log('node 4');
        module.exports && (module.exports = Math);
    } else {
        console.log('node 5');
        ;
    }
    console.log('node 6');
    Math.samesign = function (x, y) {
        console.log('node 17');
        return x >= 0 !== y < 0;
    };
    console.log('node 7');
    Math.copysign = function (x, y) {
        console.log('node 20');
        if (Math.samesign(x, y)) {
            console.log('node 22');
            return x;
        } else {
            console.log('node 23');
            return -x;
        }
    };
    console.log('node 8');
    Math.add = function (a, b) {
        console.log('node 26');
        return +a + +b;
    };
    console.log('node 9');
    Math.sum = function (nums) {
        console.log('node 29');
        return nums.reduce(Math.add);
    };
    console.log('node 10');
    Math.mul = function (a, b) {
        console.log('node 32');
        return a * b;
    };
    console.log('node 11');
    Math.prod = function (nums) {
        console.log('node 35');
        return nums.reduce(Math.mul);
    };
    console.log('node 12');
    Math.factorial = function (n) {
        console.log('node 38');
        var _i, _results, ff;
        console.log('node 39');
        if (n < 0) {
            console.log('node 41');
            return Infinity;
        } else {
            console.log('node 42');
            if (n === 0) {
                console.log('node 44');
                return 1;
            } else {
                console.log('node 45');
                return Math.prod.apply(null, function () {
                    console.log('node 48');
                    _results = [];
                    console.log('node 49');
                    for (var _i = 1; 1 <= n ? _i <= n : _i >= n; 1 <= n ? _i++ : _i--) {
                        console.log('node 51');
                        _results.push(_i);
                    }
                    console.log('node 52');
                    return _results;
                }.apply(this, arguments));
            }
        }
    };
    console.log('node 13');
    Math.gcd = function (a, b) {
        console.log('node 55');
        var _ref;
        console.log('node 56');
        while (b) {
            console.log('node 58');
            _ref = [
                b,
                a % b
            ], a = _ref[0], b = _ref[1];
        }
        console.log('node 59');
        return a;
    };
    console.log('node 14');
    Math.lcm = function (a, b) {
        console.log('node 62');
        return a / Math.gcd(a, b) * b;
    };
}());
console.log('node 66');
console.log(Math.lcm(3, 5));
console.log('node 64');