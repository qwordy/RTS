console.log('node 1963');
!function (e) {
    console.log('node 2');
    if ('object' == typeof exports && 'undefined' != typeof module) {
        console.log('node 4');
        module.exports = e();
    } else {
        console.log('node 5');
        if ('function' == typeof define && define.amd) {
            console.log('node 7');
            define([], e);
        } else {
            console.log('node 8');
            var f;
            console.log('node 9');
            'undefined' != typeof window ? f = window : 'undefined' != typeof global ? f = global : 'undefined' != typeof self && (f = self), f.numbers = e();
        }
    }
}(function () {
    console.log('node 12');
    var define, module, exports;
    console.log('node 13');
    return function e(t, n, r) {
        console.log('node -1');
        function s(o, u) {
            console.log('node 18');
            if (!n[o]) {
                console.log('node 20');
                if (!t[o]) {
                    console.log('node 22');
                    var a = typeof require == 'function' && require;
                    console.log('node 23');
                    if (!u && a) {
                        console.log('node 25');
                        return a(o, !0);
                    } else {
                        console.log('node 26');
                        ;
                    }
                    console.log('node 27');
                    if (i) {
                        console.log('node 29');
                        return i(o, !0);
                    } else {
                        console.log('node 30');
                        ;
                    }
                    console.log('node 31');
                    var f = new Error('Cannot find module \'' + o + '\'');
                    throw f.code = 'MODULE_NOT_FOUND', f;
                } else {
                    console.log('node 32');
                    ;
                }
                console.log('node 33');
                var l = n[o] = { exports: {} };
                console.log('node 34');
                t[o][0].call(l.exports, function (e) {
                    console.log('node 44');
                    var n = t[o][1][e];
                    console.log('node 45');
                    return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            } else {
                console.log('node 35');
                ;
            }
            console.log('node 36');
            return n[o].exports;
        }
        console.log('node 37');
        var i = typeof require == 'function' && require;
        console.log('node 38');
        for (var o = 0; o < r.length; o++) {
            console.log('node 40');
            s(r[o]);
        }
        console.log('node 41');
        return s;
    }({
        1: [
            function (require, module, exports) {
                console.log('node 48');
                module.exports = require('./lib/numbers.js');
            },
            { './lib/numbers.js': 2 }
        ],
        2: [
            function (require, module, exports) {
                console.log('node 51');
                var numbers = exports;
                console.log('node 52');
                numbers.basic = require('./numbers/basic');
                console.log('node 53');
                numbers.calculus = require('./numbers/calculus');
                console.log('node 54');
                numbers.complex = require('./numbers/complex');
                console.log('node 55');
                numbers.dsp = require('./numbers/dsp');
                console.log('node 56');
                numbers.matrix = require('./numbers/matrix');
                console.log('node 57');
                numbers.prime = require('./numbers/prime');
                console.log('node 58');
                numbers.statistic = require('./numbers/statistic');
                console.log('node 59');
                numbers.generate = require('./numbers/generators');
                console.log('node 60');
                numbers.random = require('./numbers/random');
                console.log('node 61');
                numbers.EPSILON = 0.001;
            },
            {
                './numbers/basic': 3,
                './numbers/calculus': 4,
                './numbers/complex': 5,
                './numbers/dsp': 6,
                './numbers/generators': 7,
                './numbers/matrix': 8,
                './numbers/prime': 9,
                './numbers/random': 10,
                './numbers/statistic': 11
            }
        ],
        3: [
            function (require, module, exports) {
                console.log('node 64');
                var basic = exports;
                console.log('node 65');
                basic.sum = function (arr) {
                    console.log('node 88');
                    if (Object.prototype.toString.call(arr) === '[object Array]') {
                        console.log('node 90');
                        var total = 0;
                        console.log('node 91');
                        for (var i = 0; i < arr.length; i++) {
                            console.log('node 93');
                            if (typeof arr[i] === 'number') {
                                console.log('node 95');
                                total = total + arr[i];
                            } else {
                                throw new Error('All elements in array must be numbers');
                            }
                        }
                        console.log('node 96');
                        return total;
                    } else {
                        throw new Error('Input must be of type Array');
                    }
                };
                console.log('node 66');
                basic.subtraction = function (arr) {
                    console.log('node 99');
                    if (Object.prototype.toString.call(arr) === '[object Array]') {
                        console.log('node 101');
                        var total = arr[0];
                        console.log('node 102');
                        if (typeof total !== 'number') {
                            throw new Error('All elements in array must be numbers');
                        } else {
                            console.log('node 104');
                            ;
                        }
                        console.log('node 105');
                        for (var i = 1, length = arr.length; i < length; i++) {
                            console.log('node 107');
                            if (typeof arr[i] === 'number') {
                                console.log('node 109');
                                total -= arr[i];
                            } else {
                                throw new Error('All elements in array must be numbers');
                            }
                        }
                        console.log('node 110');
                        return total;
                    } else {
                        throw new Error('Input must be of type Array');
                    }
                };
                console.log('node 67');
                basic.product = function (arr) {
                    console.log('node 113');
                    if (Object.prototype.toString.call(arr) === '[object Array]') {
                        console.log('node 115');
                        var total = arr[0];
                        console.log('node 116');
                        if (typeof total !== 'number') {
                            throw new Error('All elements in array must be numbers');
                        } else {
                            console.log('node 118');
                            ;
                        }
                        console.log('node 119');
                        for (var i = 1, length = arr.length; i < length; i++) {
                            console.log('node 121');
                            if (typeof arr[i] === 'number') {
                                console.log('node 123');
                                total = total * arr[i];
                            } else {
                                throw new Error('All elements in array must be numbers');
                            }
                        }
                        console.log('node 124');
                        return total;
                    } else {
                        throw new Error('Input must be of type Array');
                    }
                };
                console.log('node 68');
                basic.square = function (num) {
                    console.log('node 127');
                    if (typeof num !== 'number') {
                        throw new Error('Input must be a number.');
                    } else {
                        console.log('node 129');
                        return num * num;
                    }
                };
                console.log('node 69');
                basic.binomial = function (n, k) {
                    console.log('node 155');
                    var arr = [];
                    console.log('node -1');
                    function _binomial(n, k) {
                        console.log('node 134');
                        if (typeof n !== 'number' && typeof k !== 'number') {
                            throw new Error('Input must be a number.');
                        } else {
                            console.log('node 136');
                            ;
                        }
                        console.log('node 137');
                        if (n >= 0 && k === 0) {
                            console.log('node 139');
                            return 1;
                        } else {
                            console.log('node 140');
                            ;
                        }
                        console.log('node 141');
                        if (n === 0 && k > 0) {
                            console.log('node 143');
                            return 0;
                        } else {
                            console.log('node 144');
                            ;
                        }
                        console.log('node 145');
                        if (arr[n] && arr[n][k] > 0) {
                            console.log('node 147');
                            return arr[n][k];
                        } else {
                            console.log('node 148');
                            ;
                        }
                        console.log('node 149');
                        if (!arr[n]) {
                            console.log('node 151');
                            arr[n] = [];
                        } else {
                            console.log('node 152');
                            ;
                        }
                        console.log('node 153');
                        arr[n][k] = _binomial(n - 1, k - 1) + _binomial(n - 1, k);
                        console.log('node 154');
                        return arr[n][k];
                    }
                    console.log('node 156');
                    return _binomial(n, k);
                };
                console.log('node 70');
                basic.factorial = function (num) {
                    console.log('node 159');
                    if (typeof num !== 'number') {
                        throw new Error('Input must be a number.');
                    } else {
                        console.log('node 161');
                        ;
                    }
                    console.log('node 162');
                    if (num < 0) {
                        throw new Error('Input must not be negative.');
                    } else {
                        console.log('node 164');
                        ;
                    }
                    console.log('node 165');
                    var i = 2, o = 1;
                    console.log('node 166');
                    while (i <= num) {
                        console.log('node 168');
                        o *= i++;
                    }
                    console.log('node 169');
                    return o;
                };
                console.log('node 71');
                basic.gcd = function (a, b) {
                    console.log('node 172');
                    var c;
                    console.log('node 173');
                    a = +a;
                    console.log('node 174');
                    b = +b;
                    console.log('node 175');
                    if (a !== a || b !== b) {
                        console.log('node 177');
                        return NaN;
                    } else {
                        console.log('node 178');
                        ;
                    }
                    console.log('node 179');
                    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
                        console.log('node 181');
                        return Infinity;
                    } else {
                        console.log('node 182');
                        ;
                    }
                    console.log('node 183');
                    if (a % 1 !== 0 || b % 1 !== 0) {
                        throw new Error('Can only operate on integers');
                    } else {
                        console.log('node 185');
                        ;
                    }
                    console.log('node 186');
                    while (b) {
                        console.log('node 188');
                        c = a % b;
                        console.log('node 189');
                        a = b;
                        console.log('node 190');
                        b = c;
                    }
                    console.log('node 191');
                    return 0 < a ? a : -a;
                };
                console.log('node 72');
                basic.lcm = function (num1, num2) {
                    console.log('node 194');
                    return Math.abs(num1 * num2) / basic.gcd(num1, num2);
                };
                console.log('node 73');
                basic.random = function (arr, quant, allowDuplicates) {
                    console.log('node 197');
                    if (arr.length === 0) {
                        throw new Error('Empty array');
                    } else {
                        console.log('node 199');
                        if (quant > arr.length && !allowDuplicates) {
                            throw new Error('Quantity requested exceeds size of array');
                        } else {
                            console.log('node 201');
                            ;
                        }
                    }
                    console.log('node 202');
                    if (allowDuplicates === true) {
                        console.log('node 204');
                        var result = [], i;
                        console.log('node 205');
                        for (i = 0; i < quant; i++) {
                            console.log('node 207');
                            result[i] = arr[Math.floor(Math.random() * arr.length)];
                        }
                        console.log('node 208');
                        return result;
                    } else {
                        console.log('node 209');
                        return basic.shuffle(arr).slice(0, quant);
                    }
                };
                console.log('node 74');
                basic.shuffle = function (array) {
                    console.log('node 212');
                    var m = array.length, t, i;
                    console.log('node 213');
                    while (m) {
                        console.log('node 215');
                        i = Math.floor(Math.random() * m--);
                        console.log('node 216');
                        t = array[m];
                        console.log('node 217');
                        array[m] = array[i];
                        console.log('node 218');
                        array[i] = t;
                    }
                    console.log('node 219');
                    return array;
                };
                console.log('node 75');
                basic.max = function (arr) {
                    console.log('node 222');
                    if (!Array.isArray(arr)) {
                        throw new Error('Input must be of type Array');
                    } else {
                        console.log('node 224');
                        ;
                    }
                    console.log('node 225');
                    var max = -Infinity, val;
                    console.log('node 226');
                    for (var i = 0, len = arr.length; i < len; i++) {
                        console.log('node 228');
                        val = +arr[i];
                        console.log('node 229');
                        if (max < val) {
                            console.log('node 231');
                            max = val;
                        } else {
                            console.log('node 232');
                            ;
                        }
                        console.log('node 233');
                        if (val !== val) {
                            console.log('node 235');
                            return NaN;
                        } else {
                            console.log('node 236');
                            ;
                        }
                    }
                    console.log('node 237');
                    return max;
                };
                console.log('node 76');
                basic.min = function (arr) {
                    console.log('node 240');
                    if (!Array.isArray(arr)) {
                        throw new Error('Input must be of type Array');
                    } else {
                        console.log('node 242');
                        ;
                    }
                    console.log('node 243');
                    var min = +Infinity, val;
                    console.log('node 244');
                    for (var i = 0, len = arr.length; i < len; i++) {
                        console.log('node 246');
                        val = +arr[i];
                        console.log('node 247');
                        if (val < min) {
                            console.log('node 249');
                            min = val;
                        } else {
                            console.log('node 250');
                            ;
                        }
                        console.log('node 251');
                        if (val !== val) {
                            console.log('node 253');
                            return NaN;
                        } else {
                            console.log('node 254');
                            ;
                        }
                    }
                    console.log('node 255');
                    return min;
                };
                console.log('node 77');
                basic.range = function (start, stop, step) {
                    console.log('node 258');
                    var array, i = 0, len;
                    console.log('node 259');
                    if (arguments.length <= 1) {
                        console.log('node 261');
                        stop = start || 0;
                        console.log('node 262');
                        start = 0;
                    } else {
                        console.log('node 263');
                        ;
                    }
                    console.log('node 264');
                    step = step || 1;
                    console.log('node 265');
                    if (stop < start) {
                        console.log('node 267');
                        step = 0 - Math.abs(step);
                    } else {
                        console.log('node 268');
                        ;
                    }
                    console.log('node 269');
                    len = Math.max(Math.ceil((stop - start) / step) + 1, 0);
                    console.log('node 270');
                    array = new Array(len);
                    console.log('node 271');
                    while (i < len) {
                        console.log('node 273');
                        array[i++] = start;
                        console.log('node 274');
                        start += step;
                    }
                    console.log('node 275');
                    return array;
                };
                console.log('node 78');
                basic.isInt = function (n) {
                    console.log('node 278');
                    return n % 1 === 0;
                };
                console.log('node 79');
                basic.divMod = function (a, b) {
                    console.log('node 281');
                    if (b <= 0) {
                        throw new Error('b cannot be zero. Undefined.');
                    } else {
                        console.log('node 283');
                        ;
                    }
                    console.log('node 284');
                    if (!basic.isInt(a) || !basic.isInt(b)) {
                        throw new Error('A or B are not integers.');
                    } else {
                        console.log('node 286');
                        ;
                    }
                    console.log('node 287');
                    return [
                        Math.floor(a / b),
                        a % b
                    ];
                };
                console.log('node 80');
                basic.powerMod = function (a, b, m) {
                    console.log('node 290');
                    if (typeof a !== 'number' || typeof b !== 'number' || typeof m !== 'number') {
                        throw new Error('Inputs must be numbers.');
                    } else {
                        console.log('node 292');
                        ;
                    }
                    console.log('node 293');
                    if (b < -1) {
                        console.log('node 295');
                        return Math.pow(a, b) % m;
                    } else {
                        console.log('node 296');
                        ;
                    }
                    console.log('node 297');
                    if (b === 0) {
                        console.log('node 299');
                        return 1 % m;
                    } else {
                        console.log('node 300');
                        ;
                    }
                    console.log('node 301');
                    if (b >= 1) {
                        console.log('node 303');
                        var result = 1;
                        console.log('node 304');
                        while (b > 0) {
                            console.log('node 306');
                            if (b % 2 === 1) {
                                console.log('node 308');
                                result = result * a % m;
                            } else {
                                console.log('node 309');
                                ;
                            }
                            console.log('node 310');
                            a = a * a % m;
                            console.log('node 311');
                            b = b >> 1;
                        }
                        console.log('node 312');
                        return result;
                    } else {
                        console.log('node 313');
                        ;
                    }
                    console.log('node 314');
                    if (b === -1) {
                        console.log('node 316');
                        return basic.modInverse(a, m);
                    } else {
                        console.log('node 317');
                        ;
                    }
                    console.log('node 318');
                    if (b < 1) {
                        console.log('node 320');
                        return basic.powerMod(a, Math.pow(b, -1), m);
                    } else {
                        console.log('node 321');
                        ;
                    }
                };
                console.log('node 81');
                basic.egcd = function (a, b) {
                    console.log('node 324');
                    a = +a;
                    console.log('node 325');
                    b = +b;
                    console.log('node 326');
                    if (a !== a || b !== b) {
                        console.log('node 328');
                        return [
                            NaN,
                            NaN,
                            NaN
                        ];
                    } else {
                        console.log('node 329');
                        ;
                    }
                    console.log('node 330');
                    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
                        console.log('node 332');
                        return [
                            Infinity,
                            Infinity,
                            Infinity
                        ];
                    } else {
                        console.log('node 333');
                        ;
                    }
                    console.log('node 334');
                    if (a % 1 !== 0 || b % 1 !== 0) {
                        throw new Error('Can only operate on integers');
                    } else {
                        console.log('node 336');
                        ;
                    }
                    console.log('node 337');
                    var signX = a < 0 ? -1 : 1, signY = b < 0 ? -1 : 1, x = 0, y = 1, oldX = 1, oldY = 0, q, r, m, n;
                    console.log('node 338');
                    a = Math.abs(a);
                    console.log('node 339');
                    b = Math.abs(b);
                    console.log('node 340');
                    while (a !== 0) {
                        console.log('node 342');
                        q = Math.floor(b / a);
                        console.log('node 343');
                        r = b % a;
                        console.log('node 344');
                        m = x - oldX * q;
                        console.log('node 345');
                        n = y - oldY * q;
                        console.log('node 346');
                        b = a;
                        console.log('node 347');
                        a = r;
                        console.log('node 348');
                        x = oldX;
                        console.log('node 349');
                        y = oldY;
                        console.log('node 350');
                        oldX = m;
                        console.log('node 351');
                        oldY = n;
                    }
                    console.log('node 352');
                    return [
                        b,
                        signX * x,
                        signY * y
                    ];
                };
                console.log('node 82');
                basic.modInverse = function (a, m) {
                    console.log('node 355');
                    var r = basic.egcd(a, m);
                    console.log('node 356');
                    if (r[0] !== 1) {
                        throw new Error('No modular inverse exists');
                    } else {
                        console.log('node 358');
                        ;
                    }
                    console.log('node 359');
                    return r[1] % m;
                };
                console.log('node 83');
                basic.numbersEqual = function (first, second, epsilon) {
                    console.log('node 362');
                    if (typeof first !== 'number' || typeof second !== 'number' || typeof epsilon !== 'number') {
                        throw new Error('First and Second must be numbers.');
                    } else {
                        console.log('node 364');
                        ;
                    }
                    console.log('node 365');
                    return first - second < epsilon && first - second > -epsilon;
                };
                console.log('node 84');
                basic.fallingFactorial = function (n, k) {
                    console.log('node 368');
                    var i = n - k + 1, r = 1;
                    console.log('node 369');
                    if (n < 0) {
                        throw new Error('n cannot be negative.');
                    } else {
                        console.log('node 371');
                        ;
                    }
                    console.log('node 372');
                    if (k > n) {
                        throw new Error('k cannot be greater than n.');
                    } else {
                        console.log('node 374');
                        ;
                    }
                    console.log('node 375');
                    while (i <= n) {
                        console.log('node 377');
                        r *= i++;
                    }
                    console.log('node 378');
                    return r;
                };
                console.log('node 85');
                basic.permutation = function (n, k) {
                    console.log('node 381');
                    if (n <= 0) {
                        throw new Error('n cannot be less than or equal to 0.');
                    } else {
                        console.log('node 383');
                        ;
                    }
                    console.log('node 384');
                    if (n < k) {
                        throw new Error('k cannot be greater than k.');
                    } else {
                        console.log('node 386');
                        ;
                    }
                    console.log('node 387');
                    var binomial = basic.binomial(n, k);
                    console.log('node 388');
                    var permutation = binomial * basic.factorial(k);
                    console.log('node 389');
                    return permutation;
                };
            },
            {}
        ],
        4: [
            function (require, module, exports) {
                console.log('node 406');
                var numbers = require('../numbers');
                console.log('node 407');
                var calculus = exports;
                console.log('node 408');
                calculus.pointDiff = function (func, point) {
                    console.log('node 417');
                    var a = func(point - 0.001);
                    console.log('node 418');
                    var b = func(point + 0.001);
                    console.log('node 419');
                    return (b - a) / 0.002;
                };
                console.log('node 409');
                calculus.Riemann = function (func, start, finish, n, sampler) {
                    console.log('node 422');
                    var inc = (finish - start) / n;
                    console.log('node 423');
                    var totalHeight = 0;
                    console.log('node 424');
                    var i;
                    console.log('node 425');
                    if (typeof sampler === 'function') {
                        console.log('node 427');
                        for (i = start; i < finish; i += inc) {
                            console.log('node 429');
                            totalHeight += func(sampler(i, i + inc));
                        }
                    } else {
                        console.log('node 430');
                        for (i = start; i < finish; i += inc) {
                            console.log('node 432');
                            totalHeight += func(i);
                        }
                    }
                    console.log('node 433');
                    return totalHeight * inc;
                };
                console.log('node -1');
                function SimpsonDef(func, a, b) {
                    console.log('node 394');
                    var c = (a + b) / 2;
                    console.log('node 395');
                    var d = Math.abs(b - a) / 6;
                    console.log('node 396');
                    return d * (func(a) + 4 * func(c) + func(b));
                }
                console.log('node -1');
                function SimpsonRecursive(func, a, b, whole, eps) {
                    console.log('node 399');
                    var c = a + b;
                    console.log('node 400');
                    var left = SimpsonDef(func, a, c);
                    console.log('node 401');
                    var right = SimpsonDef(func, c, b);
                    console.log('node 402');
                    if (Math.abs(left + right - whole) <= 15 * eps) {
                        console.log('node 404');
                        return left + right + (left + right - whole) / 15;
                    } else {
                        console.log('node 405');
                        return SimpsonRecursive(func, a, c, eps / 2, left) + SimpsonRecursive(func, c, b, eps / 2, right);
                    }
                }
                console.log('node 410');
                calculus.adaptiveSimpson = function (func, a, b, eps) {
                    console.log('node 436');
                    eps = typeof eps === 'undefined' ? numbers.EPSILON : eps;
                    console.log('node 437');
                    return SimpsonRecursive(func, a, b, SimpsonDef(func, a, b), eps);
                };
                console.log('node 411');
                calculus.limit = function (func, point, approach) {
                    console.log('node 440');
                    if (approach === 'left') {
                        console.log('node 442');
                        return func(point - 1e-15);
                    } else {
                        console.log('node 443');
                        if (approach === 'right') {
                            console.log('node 445');
                            return func(point + 1e-15);
                        } else {
                            console.log('node 446');
                            if (approach === 'middle') {
                                console.log('node 448');
                                return (calculus.limit(func, point, 'left') + calculus.limit(func, point, 'right')) / 2;
                            } else {
                                throw new Error('Approach not provided');
                            }
                        }
                    }
                };
                console.log('node 412');
                calculus.StirlingGamma = function (num) {
                    console.log('node 451');
                    return Math.sqrt(2 * Math.PI / num) * Math.pow(num / Math.E, num);
                };
                console.log('node 413');
                calculus.LanczosGamma = function (num) {
                    console.log('node 454');
                    var p = [
                        0.9999999999998099,
                        676.5203681218851,
                        -1259.1392167224028,
                        771.3234287776531,
                        -176.6150291621406,
                        12.507343278686905,
                        -0.13857109526572012,
                        0.000009984369578019572,
                        1.5056327351493116e-7
                    ];
                    console.log('node 455');
                    var i;
                    console.log('node 456');
                    var g = 7;
                    console.log('node 457');
                    if (num < 0.5) {
                        console.log('node 459');
                        return Math.PI / (Math.sin(Math.PI * num) * calculus.LanczosGamma(1 - num));
                    } else {
                        console.log('node 460');
                        ;
                    }
                    console.log('node 461');
                    num -= 1;
                    console.log('node 462');
                    var a = p[0];
                    console.log('node 463');
                    var t = num + g + 0.5;
                    console.log('node 464');
                    for (i = 1; i < p.length; i++) {
                        console.log('node 466');
                        a += p[i] / (num + i);
                    }
                    console.log('node 467');
                    return Math.sqrt(2 * Math.PI) * Math.pow(t, num + 0.5) * Math.exp(-t) * a;
                };
                console.log('node 414');
                calculus.MonteCarlo = function (func, N) {
                    console.log('node 470');
                    if (arguments.length < 2) {
                        throw new Error('Please enter at least one interval.');
                    } else {
                        console.log('node 472');
                        if (N <= 0) {
                            throw new Error('Please use a positive integer for N.');
                        } else {
                            console.log('node 474');
                            ;
                        }
                    }
                    console.log('node 475');
                    var L = [];
                    console.log('node 476');
                    N = Math.ceil(N);
                    console.log('node 477');
                    for (var i = 2; i < arguments.length; i++) {
                        console.log('node 479');
                        L.push(arguments[i]);
                    }
                    console.log('node 480');
                    var coeff = L.map(function (l) {
                        console.log('node 485');
                        return l[1] - l[0];
                    }).reduce(function (a, b) {
                        console.log('node 488');
                        return a * b;
                    }) / N;
                    console.log('node 481');
                    var fvals = numbers.matrix.transpose(L.map(function (l) {
                        console.log('node 491');
                        return numbers.statistic.randomSample(l[0], l[1], N);
                    })).map(function (l) {
                        console.log('node 494');
                        return func.apply(null, [
                            l[0],
                            l[1],
                            l[2]
                        ]);
                    });
                    console.log('node 482');
                    return coeff * fvals.reduce(function (a, b) {
                        console.log('node 497');
                        return a + b;
                    });
                };
            },
            { '../numbers': 2 }
        ],
        5: [
            function (require, module, exports) {
                console.log('node 500');
                var numbers = require('../numbers');
                console.log('node 501');
                var basic = numbers.basic;
                console.log('node 502');
                var Complex = function (re, im) {
                    console.log('node 520');
                    this.re = re;
                    console.log('node 521');
                    this.im = im;
                    console.log('node 522');
                    this.r = this.magnitude();
                    console.log('node 523');
                    this.t = this.phase();
                };
                console.log('node 503');
                Complex.prototype.add = function (addend) {
                    console.log('node 526');
                    return new Complex(this.re + addend.re, this.im + addend.im);
                };
                console.log('node 504');
                Complex.prototype.subtract = function (subtrahend) {
                    console.log('node 529');
                    return new Complex(this.re - subtrahend.re, this.im - subtrahend.im);
                };
                console.log('node 505');
                Complex.prototype.multiply = function (multiplier) {
                    console.log('node 532');
                    var re = this.re * multiplier.re - this.im * multiplier.im;
                    console.log('node 533');
                    var im = this.im * multiplier.re + this.re * multiplier.im;
                    console.log('node 534');
                    return new Complex(re, im);
                };
                console.log('node 506');
                Complex.prototype.divide = function (divisor) {
                    console.log('node 537');
                    var denominator = divisor.re * divisor.re + divisor.im * divisor.im;
                    console.log('node 538');
                    var re = (this.re * divisor.re + this.im * divisor.im) / denominator;
                    console.log('node 539');
                    var im = (this.im * divisor.re - this.re * divisor.im) / denominator;
                    console.log('node 540');
                    return new Complex(re, im);
                };
                console.log('node 507');
                Complex.prototype.magnitude = function () {
                    console.log('node 543');
                    return Math.sqrt(this.re * this.re + this.im * this.im);
                };
                console.log('node 508');
                Complex.prototype.phase = function () {
                    console.log('node 546');
                    return Math.atan2(this.im, this.re);
                };
                console.log('node 509');
                Complex.prototype.conjugate = function () {
                    console.log('node 549');
                    return new Complex(this.re, -1 * this.im);
                };
                console.log('node 510');
                Complex.prototype.pow = function (n) {
                    console.log('node 552');
                    var constant = Math.pow(this.magnitude(), n);
                    console.log('node 553');
                    return new Complex(constant * Math.cos(n * this.phase()), constant * Math.sin(n * this.phase()));
                };
                console.log('node 511');
                Complex.prototype.complexPow = function (complexN) {
                    console.log('node 556');
                    var realSqPlusImSq = Math.pow(this.re, 2) + Math.pow(this.im, 2);
                    console.log('node 557');
                    var multiplier = Math.pow(realSqPlusImSq, complexN.re / 2) * Math.pow(Math.E, -complexN.im * this.phase());
                    console.log('node 558');
                    var theta = complexN.re * this.phase() + 0.5 * complexN.im * Math.log(realSqPlusImSq);
                    console.log('node 559');
                    return new Complex(multiplier * Math.cos(theta), multiplier * Math.sin(theta));
                };
                console.log('node 512');
                Complex.prototype.roots = function (n) {
                    console.log('node 562');
                    var result = new Array(n);
                    console.log('node 563');
                    for (var i = 0; i < n; i++) {
                        console.log('node 565');
                        var theta = (this.phase() + 2 * Math.PI * i) / n;
                        console.log('node 566');
                        var radiusConstant = Math.pow(this.magnitude(), 1 / n);
                        console.log('node 567');
                        result[i] = new Complex(radiusConstant * Math.cos(theta), radiusConstant * Math.sin(theta));
                    }
                    console.log('node 568');
                    return result;
                };
                console.log('node 513');
                Complex.prototype.sin = function () {
                    console.log('node 571');
                    var E = new Complex(Math.E, 0);
                    console.log('node 572');
                    var i = new Complex(0, 1);
                    console.log('node 573');
                    var negativeI = new Complex(0, -1);
                    console.log('node 574');
                    var numerator = E.complexPow(i.multiply(this)).subtract(E.complexPow(negativeI.multiply(this)));
                    console.log('node 575');
                    return numerator.divide(new Complex(0, 2));
                };
                console.log('node 514');
                Complex.prototype.cos = function () {
                    console.log('node 578');
                    var E = new Complex(Math.E, 0);
                    console.log('node 579');
                    var i = new Complex(0, 1);
                    console.log('node 580');
                    var negativeI = new Complex(0, -1);
                    console.log('node 581');
                    var numerator = E.complexPow(i.multiply(this)).add(E.complexPow(negativeI.multiply(this)));
                    console.log('node 582');
                    return numerator.divide(new Complex(2, 0));
                };
                console.log('node 515');
                Complex.prototype.tan = function () {
                    console.log('node 585');
                    return this.sin().divide(this.cos());
                };
                console.log('node 516');
                Complex.prototype.equals = function (complex, epsilon) {
                    console.log('node 588');
                    return basic.numbersEqual(this.re, complex.re, epsilon) && basic.numbersEqual(this.im, complex.im, epsilon);
                };
                console.log('node 517');
                module.exports = Complex;
            },
            { '../numbers': 2 }
        ],
        6: [
            function (require, module, exports) {
                console.log('node 591');
                var numbers = require('../numbers');
                console.log('node 592');
                var Complex = numbers.complex;
                console.log('node 593');
                var dsp = exports;
                console.log('node 594');
                dsp.segment = function (arr, start, step) {
                    console.log('node 598');
                    var result = [];
                    console.log('node 599');
                    for (var i = start; i < arr.length; i += step) {
                        console.log('node 601');
                        result.push(arr[i]);
                    }
                    console.log('node 602');
                    return result;
                };
                console.log('node 595');
                dsp.fft = function (x) {
                    console.log('node 605');
                    var N = x.length;
                    console.log('node 606');
                    if (N <= 1) {
                        console.log('node 608');
                        return [new Complex(x[0], 0)];
                    } else {
                        console.log('node 609');
                        ;
                    }
                    console.log('node 610');
                    if (Math.log(N) / Math.LN2 % 1 !== 0) {
                        throw new Error('Array length must be integer power of 2');
                    } else {
                        console.log('node 612');
                        ;
                    }
                    console.log('node 613');
                    var even = dsp.fft(dsp.segment(x, 0, 2));
                    console.log('node 614');
                    var odd = dsp.fft(dsp.segment(x, 1, 2));
                    console.log('node 615');
                    var res = [], Nby2 = N / 2;
                    console.log('node 616');
                    for (var k = 0; k < N; k++) {
                        console.log('node 618');
                        var tmpPhase = -2 * Math.PI * k / N;
                        console.log('node 619');
                        var phasor = new Complex(Math.cos(tmpPhase), Math.sin(tmpPhase));
                        console.log('node 620');
                        if (k < Nby2) {
                            console.log('node 622');
                            res[k] = even[k].add(phasor.multiply(odd[k]));
                        } else {
                            console.log('node 623');
                            res[k] = even[k - Nby2].subtract(phasor.multiply(odd[k - Nby2]));
                        }
                    }
                    console.log('node 624');
                    return res;
                };
            },
            { '../numbers': 2 }
        ],
        7: [
            function (require, module, exports) {
                console.log('node 627');
                var generate = exports;
                console.log('node 628');
                generate.fibonacci = function (n) {
                    console.log('node 632');
                    var bitSystem = function (n) {
                        console.log('node 653');
                        var bit, bits = [];
                        console.log('node 654');
                        while (n > 0) {
                            console.log('node 656');
                            bit = n < 2 ? n : n % 2;
                            console.log('node 657');
                            n = Math.floor(n / 2);
                            console.log('node 658');
                            bits.push(bit);
                        }
                        console.log('node 659');
                        return bits.reverse();
                    };
                    console.log('node 633');
                    var a = 1;
                    console.log('node 634');
                    var b = 0;
                    console.log('node 635');
                    var c = 1;
                    console.log('node 636');
                    var system = bitSystem(n);
                    console.log('node 637');
                    var temp;
                    console.log('node 638');
                    for (var i = 0; i < system.length; i++) {
                        console.log('node 640');
                        var bit = system[i];
                        console.log('node 641');
                        if (bit) {
                            console.log('node 643');
                            temp = [
                                (a + c) * b,
                                b * b + c * c
                            ];
                            console.log('node 644');
                            a = temp[0];
                            console.log('node 645');
                            b = temp[1];
                        } else {
                            console.log('node 646');
                            temp = [
                                a * a + b * b,
                                (a + c) * b
                            ];
                            console.log('node 647');
                            a = temp[0];
                            console.log('node 648');
                            b = temp[1];
                        }
                        console.log('node 649');
                        c = a + b;
                    }
                    console.log('node 650');
                    return b;
                };
                console.log('node 629');
                generate.collatz = function (n, result) {
                    console.log('node 662');
                    result.push(n);
                    console.log('node 663');
                    if (n === 1) {
                        console.log('node 665');
                        return;
                    } else {
                        console.log('node 666');
                        if (n % 2 === 0) {
                            console.log('node 668');
                            generate.collatz(n / 2, result);
                        } else {
                            console.log('node 669');
                            generate.collatz(3 * n + 1, result);
                        }
                    }
                };
            },
            {}
        ],
        8: [
            function (require, module, exports) {
                console.log('node 672');
                var matrix = exports;
                console.log('node 673');
                var ERROR_MATRIX_NOT_SQUARE = 'Matrix must be square.', ERROR_VECTOR_NOT_2D = 'Only two dimensional operations are supported at this time.';
                console.log('node 674');
                matrix._check2DVector = function (point) {
                    console.log('node 714');
                    if (point.length !== 2) {
                        throw new Error(ERROR_VECTOR_NOT_2D);
                    } else {
                        console.log('node 716');
                        ;
                    }
                };
                console.log('node 675');
                matrix.deepCopy = function (arr) {
                    console.log('node 719');
                    if (!Array.isArray(arr)) {
                        throw new Error('Input must be a matrix.');
                    } else {
                        console.log('node 721');
                        if (arr[0][0] === undefined) {
                            throw new Error('Input cannot be a vector.');
                        } else {
                            console.log('node 723');
                            ;
                        }
                    }
                    console.log('node 724');
                    var result = new Array(arr.length);
                    console.log('node 725');
                    for (var i = 0; i < arr.length; i++) {
                        console.log('node 727');
                        result[i] = arr[i].slice();
                    }
                    console.log('node 728');
                    return result;
                };
                console.log('node 676');
                matrix.isSquare = function (arr) {
                    console.log('node 731');
                    if (!Array.isArray(arr)) {
                        throw new Error('Input must be a matrix.');
                    } else {
                        console.log('node 733');
                        if (arr[0][0] === undefined) {
                            throw new Error('Input cannot be a vector.');
                        } else {
                            console.log('node 735');
                            ;
                        }
                    }
                    console.log('node 736');
                    var rows = arr.length;
                    console.log('node 737');
                    for (var i = 0; i < rows; i++) {
                        console.log('node 739');
                        if (arr[i].length !== rows) {
                            console.log('node 741');
                            return false;
                        } else {
                            console.log('node 742');
                            ;
                        }
                    }
                    console.log('node 743');
                    return true;
                };
                console.log('node 677');
                matrix.addition = function (arrA, arrB) {
                    console.log('node 746');
                    if (arrA.length !== arrB.length || arrA[0].length !== arrB[0].length) {
                        throw new Error('Matrix mismatch');
                    } else {
                        console.log('node 748');
                        ;
                    }
                    console.log('node 749');
                    var result = new Array(arrA.length), i;
                    console.log('node 750');
                    if (!arrA[0].length) {
                        console.log('node 752');
                        for (i = 0; i < arrA.length; i++) {
                            console.log('node 754');
                            result[i] = arrA[i] + arrB[i];
                        }
                    } else {
                        console.log('node 755');
                        for (i = 0; i < arrA.length; i++) {
                            console.log('node 757');
                            result[i] = new Array(arrA[i].length);
                            console.log('node 758');
                            for (var j = 0; j < arrA[i].length; j++) {
                                console.log('node 760');
                                result[i][j] = arrA[i][j] + arrB[i][j];
                            }
                        }
                    }
                    console.log('node 761');
                    return result;
                };
                console.log('node 678');
                matrix.subtraction = function (arrA, arrB) {
                    console.log('node 764');
                    if (arrA.length !== arrB.length || arrA[0].length !== arrB[0].length) {
                        throw new Error('Matrix mismatch');
                    } else {
                        console.log('node 766');
                        ;
                    }
                    console.log('node 767');
                    var result = new Array(arrA.length), i;
                    console.log('node 768');
                    if (!arrA[0].length) {
                        console.log('node 770');
                        for (i = 0; i < arrA.length; i++) {
                            console.log('node 772');
                            result[i] = arrA[i] - arrB[i];
                        }
                    } else {
                        console.log('node 773');
                        for (i = 0; i < arrA.length; i++) {
                            console.log('node 775');
                            result[i] = new Array(arrA[i].length);
                            console.log('node 776');
                            for (var j = 0; j < arrA[i].length; j++) {
                                console.log('node 778');
                                result[i][j] = arrA[i][j] - arrB[i][j];
                            }
                        }
                    }
                    console.log('node 779');
                    return result;
                };
                console.log('node 679');
                matrix.scalar = function (arr, val) {
                    console.log('node 782');
                    for (var i = 0; i < arr.length; i++) {
                        console.log('node 784');
                        for (var j = 0; j < arr[i].length; j++) {
                            console.log('node 786');
                            arr[i][j] = val * arr[i][j];
                        }
                    }
                    console.log('node 787');
                    return arr;
                };
                console.log('node 680');
                matrix.transpose = function (arr) {
                    console.log('node 790');
                    var result = new Array(arr[0].length);
                    console.log('node 791');
                    for (var i = 0; i < arr[0].length; i++) {
                        console.log('node 793');
                        result[i] = new Array(arr.length);
                        console.log('node 794');
                        for (var j = 0; j < arr.length; j++) {
                            console.log('node 796');
                            result[i][j] = arr[j][i];
                        }
                    }
                    console.log('node 797');
                    return result;
                };
                console.log('node 681');
                matrix.identity = function (n) {
                    console.log('node 800');
                    var result = new Array(n);
                    console.log('node 801');
                    for (var i = 0; i < n; i++) {
                        console.log('node 803');
                        result[i] = new Array(n);
                        console.log('node 804');
                        for (var j = 0; j < n; j++) {
                            console.log('node 806');
                            result[i][j] = i === j ? 1 : 0;
                        }
                    }
                    console.log('node 807');
                    return result;
                };
                console.log('node 682');
                matrix.dotproduct = function (vectorA, vectorB) {
                    console.log('node 810');
                    if (vectorA.length !== vectorB.length) {
                        throw new Error('Vector mismatch');
                    } else {
                        console.log('node 812');
                        ;
                    }
                    console.log('node 813');
                    var result = 0;
                    console.log('node 814');
                    for (var i = 0; i < vectorA.length; i++) {
                        console.log('node 816');
                        result += vectorA[i] * vectorB[i];
                    }
                    console.log('node 817');
                    return result;
                };
                console.log('node 683');
                matrix.multiply = function (arrA, arrB) {
                    console.log('node 820');
                    if (arrA[0].length !== arrB.length) {
                        throw new Error('Matrix mismatch');
                    } else {
                        console.log('node 822');
                        ;
                    }
                    console.log('node 823');
                    var result = new Array(arrA.length);
                    console.log('node 824');
                    for (var x = 0; x < arrA.length; x++) {
                        console.log('node 826');
                        result[x] = new Array(arrB[0].length);
                    }
                    console.log('node 827');
                    var arrB_T = matrix.transpose(arrB);
                    console.log('node 828');
                    for (var i = 0; i < result.length; i++) {
                        console.log('node 830');
                        for (var j = 0; j < result[i].length; j++) {
                            console.log('node 832');
                            result[i][j] = matrix.dotproduct(arrA[i], arrB_T[j]);
                        }
                    }
                    console.log('node 833');
                    return result;
                };
                console.log('node 684');
                matrix.determinant = function (m) {
                    console.log('node 836');
                    var numRow = m.length;
                    console.log('node 837');
                    var numCol = m[0].length;
                    console.log('node 838');
                    var det = 0;
                    console.log('node 839');
                    var row, col;
                    console.log('node 840');
                    var diagLeft, diagRight;
                    console.log('node 841');
                    if (!matrix.isSquare(m)) {
                        throw new Error(ERROR_MATRIX_NOT_SQUARE);
                    } else {
                        console.log('node 843');
                        ;
                    }
                    console.log('node 844');
                    if (numRow === 1) {
                        console.log('node 846');
                        return m[0][0];
                    } else {
                        console.log('node 847');
                        if (numRow === 2) {
                            console.log('node 849');
                            return m[0][0] * m[1][1] - m[0][1] * m[1][0];
                        } else {
                            console.log('node 850');
                            ;
                        }
                    }
                    console.log('node 851');
                    for (col = 0; col < numCol; col++) {
                        console.log('node 853');
                        diagLeft = m[0][col];
                        console.log('node 854');
                        diagRight = m[0][col];
                        console.log('node 855');
                        for (row = 1; row < numRow; row++) {
                            console.log('node 857');
                            diagRight *= m[row][((col + row) % numCol + numCol) % numCol];
                            console.log('node 858');
                            diagLeft *= m[row][((col - row) % numCol + numCol) % numCol];
                        }
                        console.log('node 859');
                        det += diagRight - diagLeft;
                    }
                    console.log('node 860');
                    return det;
                };
                console.log('node 685');
                matrix.lupDecomposition = function (arr) {
                    console.log('node 863');
                    if (!matrix.isSquare(arr)) {
                        throw new Error(ERROR_MATRIX_NOT_SQUARE);
                    } else {
                        console.log('node 865');
                        ;
                    }
                    console.log('node 866');
                    var size = arr.length;
                    console.log('node 867');
                    var LU = matrix.deepCopy(arr);
                    console.log('node 868');
                    var P = matrix.transpose(matrix.identity(size));
                    console.log('node 869');
                    var currentRow;
                    console.log('node 870');
                    var currentColumn = new Array(size);
                    console.log('node 871');
                    this.getL = function (a) {
                        console.log('node 909');
                        var m = a[0].length;
                        console.log('node 910');
                        var L = matrix.identity(m);
                        console.log('node 911');
                        for (var i = 0; i < m; i++) {
                            console.log('node 913');
                            for (var j = 0; j < m; j++) {
                                console.log('node 915');
                                if (i > j) {
                                    console.log('node 917');
                                    L[i][j] = a[i][j];
                                } else {
                                    console.log('node 918');
                                    ;
                                }
                            }
                        }
                        console.log('node 919');
                        return L;
                    };
                    console.log('node 872');
                    this.getU = function (a) {
                        console.log('node 922');
                        var m = a[0].length;
                        console.log('node 923');
                        var U = matrix.identity(m);
                        console.log('node 924');
                        for (var i = 0; i < m; i++) {
                            console.log('node 926');
                            for (var j = 0; j < m; j++) {
                                console.log('node 928');
                                if (i <= j) {
                                    console.log('node 930');
                                    U[i][j] = a[i][j];
                                } else {
                                    console.log('node 931');
                                    ;
                                }
                            }
                        }
                        console.log('node 932');
                        return U;
                    };
                    console.log('node 873');
                    for (var j = 0; j < size; j++) {
                        console.log('node 875');
                        var i;
                        console.log('node 876');
                        for (i = 0; i < size; i++) {
                            console.log('node 878');
                            currentColumn[i] = LU[i][j];
                        }
                        console.log('node 879');
                        for (i = 0; i < size; i++) {
                            console.log('node 881');
                            currentRow = LU[i];
                            console.log('node 882');
                            var minIndex = Math.min(i, j);
                            console.log('node 883');
                            var s = 0;
                            console.log('node 884');
                            for (var k = 0; k < minIndex; k++) {
                                console.log('node 886');
                                s += currentRow[k] * currentColumn[k];
                            }
                            console.log('node 887');
                            currentRow[j] = currentColumn[i] -= s;
                        }
                        console.log('node 888');
                        var pivot = j;
                        console.log('node 889');
                        for (i = j + 1; i < size; i++) {
                            console.log('node 891');
                            if (Math.abs(currentColumn[i]) > Math.abs(currentColumn[pivot])) {
                                console.log('node 893');
                                pivot = i;
                            } else {
                                console.log('node 894');
                                ;
                            }
                        }
                        console.log('node 895');
                        if (pivot !== j) {
                            console.log('node 897');
                            LU = matrix.rowSwitch(LU, pivot, j);
                            console.log('node 898');
                            P = matrix.rowSwitch(P, pivot, j);
                        } else {
                            console.log('node 899');
                            ;
                        }
                        console.log('node 900');
                        if (j < size && LU[j][j] !== 0) {
                            console.log('node 902');
                            for (i = j + 1; i < size; i++) {
                                console.log('node 904');
                                LU[i][j] /= LU[j][j];
                            }
                        } else {
                            console.log('node 905');
                            ;
                        }
                    }
                    console.log('node 906');
                    return [
                        this.getL(LU),
                        this.getU(LU),
                        P
                    ];
                };
                console.log('node 686');
                matrix.rotate = function (point, degree, direction) {
                    console.log('node 935');
                    matrix._check2DVector(point);
                    console.log('node 936');
                    var negate = direction === 'clockwise' ? -1 : 1;
                    console.log('node 937');
                    var radians = degree * (Math.PI / 180);
                    console.log('node 938');
                    var transformation = [
                        [
                            Math.cos(radians),
                            -1 * negate * Math.sin(radians)
                        ],
                        [
                            negate * Math.sin(radians),
                            Math.cos(radians)
                        ]
                    ];
                    console.log('node 939');
                    return matrix.multiply(transformation, point);
                };
                console.log('node 687');
                matrix.scale = function (point, sx, sy) {
                    console.log('node 942');
                    matrix._check2DVector(point);
                    console.log('node 943');
                    var transformation = [
                        [
                            sx,
                            0
                        ],
                        [
                            0,
                            sy
                        ]
                    ];
                    console.log('node 944');
                    return matrix.multiply(transformation, point);
                };
                console.log('node 688');
                matrix.shear = function (point, k, direction) {
                    console.log('node 947');
                    matrix._check2DVector(point);
                    console.log('node 948');
                    var xplaceholder = direction === 'xaxis' ? k : 0;
                    console.log('node 949');
                    var yplaceholder = direction === 'yaxis' ? k : 0;
                    console.log('node 950');
                    var transformation = [
                        [
                            1,
                            xplaceholder
                        ],
                        [
                            yplaceholder,
                            1
                        ]
                    ];
                    console.log('node 951');
                    return matrix.multiply(transformation, point);
                };
                console.log('node 689');
                matrix.affine = function (point, tx, ty) {
                    console.log('node 954');
                    matrix._check2DVector(point);
                    console.log('node 955');
                    var transformation = [
                        [
                            1,
                            0,
                            tx
                        ],
                        [
                            0,
                            1,
                            ty
                        ],
                        [
                            0,
                            0,
                            1
                        ]
                    ];
                    console.log('node 956');
                    var newpoint = [
                        [point[0][0]],
                        [point[1][0]],
                        [1]
                    ];
                    console.log('node 957');
                    var transformed = matrix.multiply(transformation, newpoint);
                    console.log('node 958');
                    return [
                        [transformed[0][0]],
                        [transformed[1][0]]
                    ];
                };
                console.log('node 690');
                matrix.rowScale = function (m, row, scale) {
                    console.log('node 961');
                    var result = new Array(m.length);
                    console.log('node 962');
                    for (var i = 0; i < m.length; i++) {
                        console.log('node 964');
                        result[i] = new Array(m[i].length);
                        console.log('node 965');
                        for (var j = 0; j < m[i].length; j++) {
                            console.log('node 967');
                            if (i === row) {
                                console.log('node 969');
                                result[i][j] = scale * m[i][j];
                            } else {
                                console.log('node 970');
                                result[i][j] = m[i][j];
                            }
                        }
                    }
                    console.log('node 971');
                    return result;
                };
                console.log('node 691');
                matrix.rowSwitch = function (m, row1, row2) {
                    console.log('node 974');
                    var result = new Array(m.length);
                    console.log('node 975');
                    for (var i = 0; i < m.length; i++) {
                        console.log('node 977');
                        result[i] = new Array(m[i].length);
                        console.log('node 978');
                        for (var j = 0; j < m[i].length; j++) {
                            console.log('node 980');
                            if (i === row1) {
                                console.log('node 982');
                                result[i][j] = m[row2][j];
                            } else {
                                console.log('node 983');
                                if (i === row2) {
                                    console.log('node 985');
                                    result[i][j] = m[row1][j];
                                } else {
                                    console.log('node 986');
                                    result[i][j] = m[i][j];
                                }
                            }
                        }
                    }
                    console.log('node 987');
                    return result;
                };
                console.log('node 692');
                matrix.rowAddMultiple = function (m, from, to, scale) {
                    console.log('node 990');
                    var result = new Array(m.length);
                    console.log('node 991');
                    for (var i = 0; i < m.length; i++) {
                        console.log('node 993');
                        result[i] = new Array(m[i].length);
                        console.log('node 994');
                        for (var j = 0; j < m[i].length; j++) {
                            console.log('node 996');
                            if (i === to) {
                                console.log('node 998');
                                result[to][j] = m[to][j] + scale * m[from][j];
                            } else {
                                console.log('node 999');
                                result[i][j] = m[i][j];
                            }
                        }
                    }
                    console.log('node 1000');
                    return result;
                };
                console.log('node 693');
                matrix.GaussJordanEliminate = function (m, epsilon) {
                    console.log('node 1003');
                    var eps = typeof epsilon === 'undefined' ? 1e-10 : epsilon;
                    console.log('node 1004');
                    var h = m.length;
                    console.log('node 1005');
                    var w = m[0].length;
                    console.log('node 1006');
                    var y = -1;
                    console.log('node 1007');
                    var y2, x, c;
                    console.log('node 1008');
                    while (++y < h) {
                        console.log('node 1010');
                        var maxrow = y;
                        console.log('node 1011');
                        y2 = y;
                        console.log('node 1012');
                        while (++y2 < h) {
                            console.log('node 1014');
                            if (Math.abs(m[y2][y]) > Math.abs(m[maxrow][y])) {
                                console.log('node 1016');
                                maxrow = y2;
                            } else {
                                console.log('node 1017');
                                ;
                            }
                        }
                        console.log('node 1018');
                        var tmp = m[y];
                        console.log('node 1019');
                        m[y] = m[maxrow];
                        console.log('node 1020');
                        m[maxrow] = tmp;
                        console.log('node 1021');
                        if (Math.abs(m[y][y]) <= eps) {
                            console.log('node 1023');
                            return m;
                        } else {
                            console.log('node 1024');
                            ;
                        }
                        console.log('node 1025');
                        y2 = y;
                        console.log('node 1026');
                        while (++y2 < h) {
                            console.log('node 1028');
                            c = m[y2][y] / m[y][y];
                            console.log('node 1029');
                            x = y - 1;
                            console.log('node 1030');
                            while (++x < w) {
                                console.log('node 1032');
                                m[y2][x] -= m[y][x] * c;
                            }
                        }
                    }
                    console.log('node 1033');
                    y = h;
                    console.log('node 1034');
                    while (--y >= 0) {
                        console.log('node 1036');
                        c = m[y][y];
                        console.log('node 1037');
                        y2 = -1;
                        console.log('node 1038');
                        while (++y2 < y) {
                            console.log('node 1040');
                            x = w;
                            console.log('node 1041');
                            while (--x >= y) {
                                console.log('node 1043');
                                m[y2][x] -= m[y][x] * m[y2][y] / c;
                            }
                        }
                        console.log('node 1044');
                        m[y][y] /= c;
                        console.log('node 1045');
                        x = h - 1;
                        console.log('node 1046');
                        while (++x < w) {
                            console.log('node 1048');
                            m[y][x] /= c;
                        }
                    }
                    console.log('node 1049');
                    return m;
                };
                console.log('node 694');
                matrix.rowReduce = function (m, epsilon) {
                    console.log('node 1052');
                    return matrix.GaussJordanEliminate(m, epsilon);
                };
                console.log('node 695');
                matrix.inverse = function (m) {
                    console.log('node 1055');
                    if (!matrix.isSquare(m)) {
                        throw new Error(ERROR_MATRIX_NOT_SQUARE);
                    } else {
                        console.log('node 1057');
                        ;
                    }
                    console.log('node 1058');
                    var n = m.length, identity = matrix.identity(n), i;
                    console.log('node 1059');
                    for (i = 0; i < n; i++) {
                        console.log('node 1061');
                        m[i] = m[i].concat(identity[i]);
                    }
                    console.log('node 1062');
                    m = matrix.GaussJordanEliminate(m);
                    console.log('node 1063');
                    for (i = 0; i < n; i++) {
                        console.log('node 1065');
                        m[i] = m[i].slice(n);
                    }
                    console.log('node 1066');
                    return m;
                };
                console.log('node 696');
                matrix.getCol = function (M, n) {
                    console.log('node 1069');
                    var result = new Array(M.length);
                    console.log('node 1070');
                    if (n < 0) {
                        throw new Error('The specified column must be a positive integer.');
                    } else {
                        console.log('node 1072');
                        if (n >= M[0].length) {
                            throw new Error('The specified column must be between 0 and the number of columns - 1.');
                        } else {
                            console.log('node 1074');
                            ;
                        }
                    }
                    console.log('node 1075');
                    for (var i = 0; i < M.length; i++) {
                        console.log('node 1077');
                        result[i] = M[i][n];
                    }
                    console.log('node 1078');
                    return result;
                };
                console.log('node 697');
                matrix.reorderRows = function (M, L) {
                    console.log('node 1081');
                    var result = [];
                    console.log('node 1082');
                    if (L === undefined) {
                        throw new Error('A reordering array must be entered.');
                    } else {
                        console.log('node 1084');
                        if (L.length !== M.length) {
                            throw new Error('The reordered matrix must have the same number of rows as the original matrix.');
                        } else {
                            console.log('node 1086');
                            ;
                        }
                    }
                    console.log('node 1087');
                    for (var i = 0; i < L.length; i++) {
                        console.log('node 1089');
                        if (L[i] < 0) {
                            throw new Error('The desired order of the rows must be positive integers.');
                        } else {
                            console.log('node 1091');
                            if (L[i] >= L.length) {
                                throw new Error('The desired order of the rows must start at 0 and end at the number of rows - 1.');
                            } else {
                                console.log('node 1093');
                                result.push(M[L[i]]);
                            }
                        }
                    }
                    console.log('node 1094');
                    return result;
                };
                console.log('node 698');
                matrix.reorderCols = function (M, L) {
                    console.log('node 1097');
                    var result = [];
                    console.log('node 1098');
                    if (L === undefined) {
                        throw new Error('Please enter a desired reordering array.');
                    } else {
                        console.log('node 1100');
                        if (L.length !== M[0].length) {
                            throw new Error('The reordered matrix must have the same number of columns as the original matrix.');
                        } else {
                            console.log('node 1102');
                            ;
                        }
                    }
                    console.log('node 1103');
                    for (var i = 0; i < L.length; i++) {
                        console.log('node 1105');
                        if (L[i] < 0) {
                            throw new Error('The desired order of the columns must be positive integers.');
                        } else {
                            console.log('node 1107');
                            if (L[i] >= L.length) {
                                throw new Error('The desired order of the columns must start at 0 and end at the number of columns - 1.');
                            } else {
                                console.log('node 1109');
                                result.push(matrix.getCol(M, L[i]));
                            }
                        }
                    }
                    console.log('node 1110');
                    return matrix.transpose(result);
                };
                console.log('node 699');
                matrix.reverseRows = function (M) {
                    console.log('node 1113');
                    var L = [];
                    console.log('node 1114');
                    for (var i = M.length - 1; i > -1; i--) {
                        console.log('node 1116');
                        L.push(i);
                    }
                    console.log('node 1117');
                    return matrix.reorderRows(M, L);
                };
                console.log('node 700');
                matrix.reverseCols = function (M) {
                    console.log('node 1120');
                    var L = [];
                    console.log('node 1121');
                    for (var i = M.length - 1; i > -1; i--) {
                        console.log('node 1123');
                        L.push(i);
                    }
                    console.log('node 1124');
                    return matrix.reorderCols(M, L);
                };
                console.log('node 701');
                matrix.zeros = function (n, m) {
                    console.log('node 1127');
                    var M = new Array(n);
                    console.log('node 1128');
                    if (n < 1 || m < 1) {
                        throw new Error('The matrix dimensions must be positive integers.');
                    } else {
                        console.log('node 1130');
                        ;
                    }
                    console.log('node 1131');
                    n = Math.ceil(n);
                    console.log('node 1132');
                    m = Math.ceil(m);
                    console.log('node 1133');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1135');
                        var empty = new Array(m);
                        console.log('node 1136');
                        for (var j = 0; j < m; j++) {
                            console.log('node 1138');
                            empty[j] = 0;
                        }
                        console.log('node 1139');
                        M[i] = empty;
                    }
                    console.log('node 1140');
                    return M;
                };
                console.log('node 702');
                matrix.zigzag = function (n, point, dir) {
                    console.log('node 1143');
                    if (n <= 1) {
                        throw new Error('Matrix size must be at least 2x2.');
                    } else {
                        console.log('node 1145');
                        ;
                    }
                    console.log('node 1146');
                    n = Math.ceil(n);
                    console.log('node 1147');
                    var mat = matrix.zeros(n, n);
                    console.log('node 1148');
                    var BRH = function (M) {
                        console.log('node 1182');
                        var jump = false, tl = n * n, br = 1, inc = 1, row, col, val, i, j;
                        console.log('node 1183');
                        M[0][0] = tl;
                        console.log('node 1184');
                        M[n - 1][n - 1] = br;
                        console.log('node 1185');
                        for (i = 1; i < n; i++) {
                            console.log('node 1187');
                            if (jump) {
                                console.log('node 1189');
                                tl -= 4 * inc;
                                console.log('node 1190');
                                br += 4 * inc;
                                console.log('node 1191');
                                inc++;
                            } else {
                                console.log('node 1192');
                                tl--;
                                console.log('node 1193');
                                br++;
                            }
                            console.log('node 1194');
                            M[0][i] = tl;
                            console.log('node 1195');
                            M[n - 1][n - 1 - i] = br;
                            console.log('node 1196');
                            jump = !jump;
                        }
                        console.log('node 1197');
                        var dec = true;
                        console.log('node 1198');
                        for (i = 1; i < n; i++) {
                            console.log('node 1200');
                            row = 0;
                            console.log('node 1201');
                            col = i;
                            console.log('node 1202');
                            val = M[row][col];
                            console.log('node 1203');
                            for (j = 1; j < i + 1; j++) {
                                console.log('node 1205');
                                if (dec) {
                                    console.log('node 1207');
                                    val -= 1;
                                } else {
                                    console.log('node 1208');
                                    val += 1;
                                }
                                console.log('node 1209');
                                row++;
                                console.log('node 1210');
                                col--;
                                console.log('node 1211');
                                M[row][col] = val;
                            }
                            console.log('node 1212');
                            dec = !dec;
                        }
                        console.log('node 1213');
                        if (n % 2 === 0) {
                            console.log('node 1215');
                            dec = true;
                        } else {
                            console.log('node 1216');
                            dec = false;
                        }
                        console.log('node 1217');
                        for (i = 1; i < n - 1; i++) {
                            console.log('node 1219');
                            row = n - 1;
                            console.log('node 1220');
                            col = i;
                            console.log('node 1221');
                            val = M[row][col];
                            console.log('node 1222');
                            for (j = 1; j < n - i; j++) {
                                console.log('node 1224');
                                if (dec) {
                                    console.log('node 1226');
                                    val--;
                                } else {
                                    console.log('node 1227');
                                    val++;
                                }
                                console.log('node 1228');
                                row--;
                                console.log('node 1229');
                                col++;
                                console.log('node 1230');
                                M[row][col] = val;
                            }
                            console.log('node 1231');
                            dec = !dec;
                        }
                        console.log('node 1232');
                        return M;
                    };
                    console.log('node 1149');
                    var BRV = function (M) {
                        console.log('node 1235');
                        return matrix.transpose(BRH(M));
                    };
                    console.log('node 1150');
                    var BLH = function (M) {
                        console.log('node 1238');
                        return matrix.reverseCols(BRH(M));
                    };
                    console.log('node 1151');
                    var BLV = function (M) {
                        console.log('node 1241');
                        return matrix.reverseRows(TLV(BLH(M)));
                    };
                    console.log('node 1152');
                    var TRH = function (M) {
                        console.log('node 1244');
                        return matrix.reverseRows(BRH(M));
                    };
                    console.log('node 1153');
                    var TRV = function (M) {
                        console.log('node 1247');
                        return matrix.reverseRows(BRV(M));
                    };
                    console.log('node 1154');
                    var TLH = function (M) {
                        console.log('node 1250');
                        return matrix.reverseCols(matrix.reverseRows(BRH(M)));
                    };
                    console.log('node 1155');
                    var TLV = function (M) {
                        console.log('node 1253');
                        return matrix.transpose(TLH(M));
                    };
                    console.log('node 1156');
                    if (point === 'BR' && dir === 'H') {
                        console.log('node 1158');
                        return BRH(mat);
                    } else {
                        console.log('node 1159');
                        if (point === 'BR' && dir === 'V') {
                            console.log('node 1161');
                            return BRV(mat);
                        } else {
                            console.log('node 1162');
                            if (point === 'BL' && dir === 'H') {
                                console.log('node 1164');
                                return BLH(mat);
                            } else {
                                console.log('node 1165');
                                if (point === 'BL' && dir === 'V') {
                                    console.log('node 1167');
                                    return BLV(mat);
                                } else {
                                    console.log('node 1168');
                                    if (point === 'TR' && dir === 'H') {
                                        console.log('node 1170');
                                        return TRH(mat);
                                    } else {
                                        console.log('node 1171');
                                        if (point === 'TR' && dir === 'V') {
                                            console.log('node 1173');
                                            return TRV(mat);
                                        } else {
                                            console.log('node 1174');
                                            if (point === 'TL' && dir === 'H') {
                                                console.log('node 1176');
                                                return TLH(mat);
                                            } else {
                                                console.log('node 1177');
                                                if (point === 'TL' && dir === 'V') {
                                                    console.log('node 1179');
                                                    return TLV(mat);
                                                } else {
                                                    throw new Error('Enter the direction (V,H) and corner (BR,BL,TR,TL) correctly.');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                console.log('node 703');
                matrix.vectorNorm = function (v, p) {
                    console.log('node 1256');
                    if (!Array.isArray(v) || v.length === 0) {
                        throw new Error('Vector must be an array of at least length 1.');
                    } else {
                        console.log('node 1258');
                        if (typeof p !== 'undefined' && typeof p !== 'number') {
                            throw new Error('Norm order must be a number.');
                        } else {
                            console.log('node 1260');
                            ;
                        }
                    }
                    console.log('node 1261');
                    p = typeof p === 'undefined' ? 2 : p;
                    console.log('node 1262');
                    var n = v.length, ans = 0, term, i;
                    console.log('node 1263');
                    switch (p) {
                    case Infinity:
                        console.log('node 1266');
                        for (i = 0; i < n; i++) {
                            console.log('node 1268');
                            term = Math.abs(v[i]);
                            console.log('node 1269');
                            if (term > ans) {
                                console.log('node 1271');
                                ans = term;
                            } else {
                                console.log('node 1272');
                                ;
                            }
                        }
                        console.log('node 1273');
                        break;
                    case -Infinity:
                        console.log('node 1275');
                        ans = Infinity;
                        console.log('node 1276');
                        for (i = 0; i < n; i++) {
                            console.log('node 1278');
                            term = Math.abs(v[i]);
                            console.log('node 1279');
                            if (term < ans) {
                                console.log('node 1281');
                                ans = term;
                            } else {
                                console.log('node 1282');
                                ;
                            }
                        }
                        console.log('node 1283');
                        break;
                    default:
                        console.log('node 1285');
                        for (i = 0; i < n; i++) {
                            console.log('node 1287');
                            ans += Math.pow(Math.abs(v[i]), p);
                        }
                        console.log('node 1288');
                        ans = Math.pow(ans, 1 / p);
                        console.log('node 1289');
                        break;
                    }
                    console.log('node 1290');
                    return ans;
                };
                console.log('node 704');
                matrix.matrixNorm = function (M, p) {
                    console.log('node 1293');
                    if (!Array.isArray(M) || M.length === 0 || !Array.isArray(M[0])) {
                        throw new Error('Matrix must be an array of at least length 1.');
                    } else {
                        console.log('node 1295');
                        if (typeof p !== 'undefined' && typeof p !== 'number' && p !== null) {
                            throw new Error('Norm order must be a number or null.');
                        } else {
                            console.log('node 1297');
                            ;
                        }
                    }
                    console.log('node 1298');
                    p = typeof p === 'undefined' ? null : p;
                    console.log('node 1299');
                    var m = M.length, n = M[0].length, ans = 0, term, i, j;
                    console.log('node 1300');
                    switch (p) {
                    case Infinity:
                        console.log('node 1303');
                        for (i = 0; i < m; i++) {
                            console.log('node 1305');
                            term = 0;
                            console.log('node 1306');
                            for (j = 0; j < n; j++) {
                                console.log('node 1308');
                                term += Math.abs(M[i][j]);
                            }
                            console.log('node 1309');
                            if (term > ans) {
                                console.log('node 1311');
                                ans = term;
                            } else {
                                console.log('node 1312');
                                ;
                            }
                        }
                        console.log('node 1313');
                        break;
                    case -Infinity:
                        console.log('node 1315');
                        ans = Infinity;
                        console.log('node 1316');
                        for (i = 0; i < m; i++) {
                            console.log('node 1318');
                            term = 0;
                            console.log('node 1319');
                            for (j = 0; j < n; j++) {
                                console.log('node 1321');
                                term += Math.abs(M[i][j]);
                            }
                            console.log('node 1322');
                            if (term < ans) {
                                console.log('node 1324');
                                ans = term;
                            } else {
                                console.log('node 1325');
                                ;
                            }
                        }
                        console.log('node 1326');
                        break;
                    case 1:
                        console.log('node 1328');
                        for (i = 0; i < n; i++) {
                            console.log('node 1330');
                            term = 0;
                            console.log('node 1331');
                            for (j = 0; j < m; j++) {
                                console.log('node 1333');
                                term += Math.abs(M[j][i]);
                            }
                            console.log('node 1334');
                            if (term > ans) {
                                console.log('node 1336');
                                ans = term;
                            } else {
                                console.log('node 1337');
                                ;
                            }
                        }
                        console.log('node 1338');
                        break;
                    case -1:
                        console.log('node 1340');
                        ans = Infinity;
                        console.log('node 1341');
                        for (i = 0; i < n; i++) {
                            console.log('node 1343');
                            term = 0;
                            console.log('node 1344');
                            for (j = 0; j < m; j++) {
                                console.log('node 1346');
                                term += Math.abs(M[j][i]);
                            }
                            console.log('node 1347');
                            if (term < ans) {
                                console.log('node 1349');
                                ans = term;
                            } else {
                                console.log('node 1350');
                                ;
                            }
                        }
                        console.log('node 1351');
                        break;
                    case null:
                        console.log('node 1353');
                        for (i = 0; i < m; i++) {
                            console.log('node 1355');
                            for (j = 0; j < n; j++) {
                                console.log('node 1357');
                                ans += Math.pow(M[i][j], 2);
                            }
                        }
                        console.log('node 1358');
                        ans = Math.pow(ans, 0.5);
                        console.log('node 1359');
                        break;
                    case 2:
                        throw new Error('Singular values are not yet supported in numbers.js.');
                    case -2:
                        throw new Error('Singular values are not yet supported in numbers.js.');
                    default:
                        console.log('node 1363');
                        for (i = 0; i < m; i++) {
                            console.log('node 1365');
                            for (j = 0; j < n; j++) {
                                console.log('node 1367');
                                ans += Math.pow(Math.abs(M[i][j]), p);
                            }
                        }
                        console.log('node 1368');
                        ans = Math.pow(ans, 1 / p);
                    }
                    console.log('node 1369');
                    return ans;
                };
                console.log('node 705');
                matrix.isUpperBand = function (M, q) {
                    console.log('node 1372');
                    if (!Array.isArray(M) || !Array.isArray(M[0]) || M.length < 2) {
                        throw new Error('Matrix must be an array of at least dimension 2.');
                    } else {
                        console.log('node 1374');
                        if (typeof q !== 'number' || q < 0 || q % 1 !== 0) {
                            throw new Error('Upper bandwidth must be a nonzero integer.');
                        } else {
                            console.log('node 1376');
                            ;
                        }
                    }
                    console.log('node 1377');
                    var result = true, n = M[0].length, cnt = 0;
                    console.log('node 1378');
                    for (var i = q + 1; i < n; i++) {
                        console.log('node 1380');
                        if (M[cnt][i] !== 0) {
                            console.log('node 1382');
                            result = false;
                            console.log('node 1383');
                            break;
                        } else {
                            console.log('node 1384');
                            ;
                        }
                        console.log('node 1385');
                        cnt++;
                    }
                    console.log('node 1386');
                    return result;
                };
                console.log('node 706');
                matrix.isLowerBand = function (M, p) {
                    console.log('node 1389');
                    if (!Array.isArray(M) || !Array.isArray(M[0]) || M.length < 2) {
                        throw new Error('Matrix must be an array of at least dimension 2.');
                    } else {
                        console.log('node 1391');
                        if (typeof p !== 'number' || p < 0 || p % 1 !== 0) {
                            throw new Error('Lower bandwidth must be a nonzero integer.');
                        } else {
                            console.log('node 1393');
                            ;
                        }
                    }
                    console.log('node 1394');
                    var result = true, m = M.length, cnt = 0;
                    console.log('node 1395');
                    for (var i = p + 1; i < m; i++) {
                        console.log('node 1397');
                        if (M[i][cnt] !== 0) {
                            console.log('node 1399');
                            result = false;
                            console.log('node 1400');
                            break;
                        } else {
                            console.log('node 1401');
                            ;
                        }
                        console.log('node 1402');
                        cnt++;
                    }
                    console.log('node 1403');
                    return result;
                };
                console.log('node 707');
                var sumNondiagonalElements = function (arr, i) {
                    console.log('node 1406');
                    var sum = 0, j;
                    console.log('node 1407');
                    for (j = 0; j < i; j++) {
                        console.log('node 1409');
                        sum += Math.abs(arr[j]);
                    }
                    console.log('node 1410');
                    for (j = i + 1; j < arr.length; j++) {
                        console.log('node 1412');
                        sum += Math.abs(arr[j]);
                    }
                    console.log('node 1413');
                    return sum;
                };
                console.log('node 708');
                matrix.isRowDD = function (M) {
                    console.log('node 1416');
                    var n = M.length;
                    console.log('node 1417');
                    if (!matrix.isSquare(M)) {
                        throw new Error(ERROR_MATRIX_NOT_SQUARE);
                    } else {
                        console.log('node 1419');
                        ;
                    }
                    console.log('node 1420');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1422');
                        var row = M[i], diag = row[i], sum = sumNondiagonalElements(row, i);
                        console.log('node 1423');
                        if (Math.abs(diag) < sum) {
                            console.log('node 1425');
                            return false;
                        } else {
                            console.log('node 1426');
                            ;
                        }
                    }
                    console.log('node 1427');
                    return true;
                };
                console.log('node 709');
                matrix.isStrictlyRowDD = function (M) {
                    console.log('node 1430');
                    if (!matrix.isSquare(M)) {
                        throw new Error(ERROR_MATRIX_NOT_SQUARE);
                    } else {
                        console.log('node 1432');
                        ;
                    }
                    console.log('node 1433');
                    var n = M.length;
                    console.log('node 1434');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1436');
                        var row = M[i], diag = row[i], sum = sumNondiagonalElements(row, i);
                        console.log('node 1437');
                        if (Math.abs(diag) <= sum) {
                            console.log('node 1439');
                            return false;
                        } else {
                            console.log('node 1440');
                            ;
                        }
                    }
                    console.log('node 1441');
                    return true;
                };
                console.log('node 710');
                matrix.isColumnDD = function (M) {
                    console.log('node 1444');
                    if (!matrix.isSquare) {
                        throw new Error(ERROR_MATRIX_NOT_SQUARE);
                    } else {
                        console.log('node 1446');
                        ;
                    }
                    console.log('node 1447');
                    var n = M.length;
                    console.log('node 1448');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1450');
                        var col = matrix.getCol(M, i), diag = col[i], sum = sumNondiagonalElements(col, i);
                        console.log('node 1451');
                        if (Math.abs(diag) < sum) {
                            console.log('node 1453');
                            return false;
                        } else {
                            console.log('node 1454');
                            ;
                        }
                    }
                    console.log('node 1455');
                    return true;
                };
                console.log('node 711');
                matrix.isStrictlyColumnDD = function (M) {
                    console.log('node 1458');
                    if (!matrix.isSquare(M)) {
                        throw new Error(ERROR_MATRIX_NOT_SQUARE);
                    } else {
                        console.log('node 1460');
                        ;
                    }
                    console.log('node 1461');
                    var n = M.length;
                    console.log('node 1462');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1464');
                        var col = matrix.getCol(M, i), diag = col[i], sum = sumNondiagonalElements(col, i);
                        console.log('node 1465');
                        if (Math.abs(diag) <= sum) {
                            console.log('node 1467');
                            return false;
                        } else {
                            console.log('node 1468');
                            ;
                        }
                    }
                    console.log('node 1469');
                    return true;
                };
            },
            {}
        ],
        9: [
            function (require, module, exports) {
                console.log('node 1472');
                var basic = require('./basic');
                console.log('node 1473');
                var prime = exports;
                console.log('node 1474');
                prime.simple = function (n) {
                    console.log('node 1483');
                    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
                        console.log('node 1485');
                        return false;
                    } else {
                        console.log('node 1486');
                        ;
                    }
                    console.log('node 1487');
                    if (n % 2 === 0) {
                        console.log('node 1489');
                        return n === 2;
                    } else {
                        console.log('node 1490');
                        ;
                    }
                    console.log('node 1491');
                    if (n % 3 === 0) {
                        console.log('node 1493');
                        return n === 3;
                    } else {
                        console.log('node 1494');
                        ;
                    }
                    console.log('node 1495');
                    for (var i = 5, m = Math.sqrt(n); i <= m; i += 6) {
                        console.log('node 1497');
                        if (n % i === 0 || n % (i + 2) === 0) {
                            console.log('node 1499');
                            return false;
                        } else {
                            console.log('node 1500');
                            ;
                        }
                    }
                    console.log('node 1501');
                    return true;
                };
                console.log('node 1475');
                prime.factorization = function (num) {
                    console.log('node 1504');
                    num = Math.floor(num);
                    console.log('node 1505');
                    var root;
                    console.log('node 1506');
                    var factors = [];
                    console.log('node 1507');
                    var x;
                    console.log('node 1508');
                    var sqrt = Math.sqrt;
                    console.log('node 1509');
                    var doLoop = 1 < num && isFinite(num);
                    console.log('node 1510');
                    while (doLoop) {
                        console.log('node 1512');
                        root = sqrt(num);
                        console.log('node 1513');
                        x = 2;
                        console.log('node 1514');
                        if (num % x) {
                            console.log('node 1516');
                            x = 3;
                            console.log('node 1517');
                            while (num % x && (x += 2) < root) {
                            }
                        } else {
                            console.log('node 1519');
                            ;
                        }
                        console.log('node 1520');
                        x = root < x ? num : x;
                        console.log('node 1521');
                        factors.push(x);
                        console.log('node 1522');
                        doLoop = x !== num;
                        console.log('node 1523');
                        num /= x;
                    }
                    console.log('node 1524');
                    return factors;
                };
                console.log('node 1476');
                prime.millerRabin = function (n, k) {
                    console.log('node 1527');
                    if (arguments.length === 1) {
                        console.log('node 1529');
                        k = 20;
                    } else {
                        console.log('node 1530');
                        ;
                    }
                    console.log('node 1531');
                    if (n === 2) {
                        console.log('node 1533');
                        return true;
                    } else {
                        console.log('node 1534');
                        ;
                    }
                    console.log('node 1535');
                    if (!basic.isInt(n) || n <= 1 || n % 2 === 0) {
                        console.log('node 1537');
                        return false;
                    } else {
                        console.log('node 1538');
                        ;
                    }
                    console.log('node 1539');
                    var s = 0;
                    console.log('node 1540');
                    var d = n - 1;
                    console.log('node 1541');
                    while (true) {
                        console.log('node 1543');
                        var dm = basic.divMod(d, 2);
                        console.log('node 1544');
                        var quotient = dm[0];
                        console.log('node 1545');
                        var remainder = dm[1];
                        console.log('node 1546');
                        if (remainder === 1) {
                            console.log('node 1548');
                            break;
                        } else {
                            console.log('node 1549');
                            ;
                        }
                        console.log('node 1550');
                        s += 1;
                        console.log('node 1551');
                        d = quotient;
                    }
                    console.log('node 1552');
                    var tryComposite = function (a) {
                        console.log('node 1563');
                        if (basic.powerMod(a, d, n) === 1) {
                            console.log('node 1565');
                            return false;
                        } else {
                            console.log('node 1566');
                            ;
                        }
                        console.log('node 1567');
                        for (var i = 0; i < s; i++) {
                            console.log('node 1569');
                            if (basic.powerMod(a, Math.pow(2, i) * d, n) === n - 1) {
                                console.log('node 1571');
                                return false;
                            } else {
                                console.log('node 1572');
                                ;
                            }
                        }
                        console.log('node 1573');
                        return true;
                    };
                    console.log('node 1553');
                    for (var i = 0; i < k; i++) {
                        console.log('node 1555');
                        var a = 2 + Math.floor(Math.random() * (n - 2 - 2));
                        console.log('node 1556');
                        if (tryComposite(a)) {
                            console.log('node 1558');
                            return false;
                        } else {
                            console.log('node 1559');
                            ;
                        }
                    }
                    console.log('node 1560');
                    return true;
                };
                console.log('node 1477');
                prime.sieve = function (n) {
                    console.log('node 1576');
                    if (n < 2) {
                        console.log('node 1578');
                        return [];
                    } else {
                        console.log('node 1579');
                        ;
                    }
                    console.log('node 1580');
                    var result = [2];
                    console.log('node 1581');
                    for (var i = 3; i <= n; i++) {
                        console.log('node 1583');
                        var notMultiple = false;
                        console.log('node 1584');
                        for (var j in result) {
                            console.log('node 1586');
                            notMultiple = notMultiple || 0 === i % result[j];
                        }
                        console.log('node 1587');
                        if (!notMultiple) {
                            console.log('node 1589');
                            result.push(i);
                        } else {
                            console.log('node 1590');
                            ;
                        }
                    }
                    console.log('node 1591');
                    return result;
                };
                console.log('node 1478');
                prime.coprime = function (a, b) {
                    console.log('node 1594');
                    return basic.gcd(a, b) === 1;
                };
                console.log('node 1479');
                prime.getPerfectPower = function (n) {
                    console.log('node 1597');
                    var test = prime.getPrimePower(n);
                    console.log('node 1598');
                    if (test && test[1] > 1) {
                        console.log('node 1600');
                        return test;
                    } else {
                        console.log('node 1601');
                        ;
                    }
                    console.log('node 1602');
                    return false;
                };
                console.log('node 1480');
                prime.getPrimePower = function (n) {
                    console.log('node 1605');
                    if (n < 2) {
                        console.log('node 1607');
                        return false;
                    } else {
                        console.log('node 1608');
                        ;
                    }
                    console.log('node 1609');
                    if (prime.millerRabin(n)) {
                        console.log('node 1611');
                        return [
                            n,
                            1
                        ];
                    } else {
                        console.log('node 1612');
                        ;
                    }
                    console.log('node 1613');
                    if (n % 2 === 0) {
                        console.log('node 1615');
                        return [
                            2,
                            n.toString(2).length - 1
                        ];
                    } else {
                        console.log('node 1616');
                        ;
                    }
                    console.log('node 1617');
                    var factors = prime.factorization(n);
                    console.log('node 1618');
                    if (!factors) {
                        console.log('node 1620');
                        return false;
                    } else {
                        console.log('node 1621');
                        ;
                    }
                    console.log('node 1622');
                    var len = factors.length;
                    console.log('node 1623');
                    for (var i = 0; i < len; i++) {
                        console.log('node 1625');
                        var t = 0, p = 0;
                        console.log('node 1626');
                        while (t <= n) {
                            console.log('node 1628');
                            t = Math.pow(factors[i], p);
                            console.log('node 1629');
                            if (t / n === 1) {
                                console.log('node 1631');
                                return [
                                    factors[i],
                                    p
                                ];
                            } else {
                                console.log('node 1632');
                                ;
                            }
                            console.log('node 1633');
                            p++;
                        }
                    }
                    console.log('node 1634');
                    return false;
                };
            },
            { './basic': 3 }
        ],
        10: [
            function (require, module, exports) {
                console.log('node 1637');
                var random = exports;
                console.log('node 1638');
                var rGen = Math.random;
                console.log('node 1639');
                random.setGenerator = function (fn) {
                    console.log('node 1653');
                    if (typeof fn !== 'function') {
                        throw new Error('Must pass a function');
                    } else {
                        console.log('node 1655');
                        ;
                    }
                    console.log('node 1656');
                    rGen = fn;
                };
                console.log('node 1640');
                random.sample = function (lower, upper, n) {
                    console.log('node 1659');
                    var sample = [];
                    console.log('node 1660');
                    sample.length = n;
                    console.log('node 1661');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1663');
                        sample[i] = lower + (upper - lower) * rGen();
                    }
                    console.log('node 1664');
                    return sample;
                };
                console.log('node 1641');
                random.boxMullerTransform = function (mu, sigma) {
                    console.log('node 1667');
                    if (arguments.length <= 1) {
                        console.log('node 1669');
                        sigma = 1;
                    } else {
                        console.log('node 1670');
                        ;
                    }
                    console.log('node 1671');
                    if (arguments.length === 0) {
                        console.log('node 1673');
                        mu = 0;
                    } else {
                        console.log('node 1674');
                        ;
                    }
                    console.log('node 1675');
                    var u = 0, v = 0, s;
                    console.log('node 1676');
                    do {
                        console.log('node 1679');
                        u = rGen() * 2 - 1;
                        console.log('node 1680');
                        v = rGen() * 2 - 1;
                        console.log('node 1681');
                        s = u * u + v * v;
                    } while (s === 0 || s > 1);
                    console.log('node 1682');
                    var c = Math.sqrt(-2 * Math.log(s) / s), x = u * c, y = v * c;
                    console.log('node 1683');
                    x = mu + x * sigma;
                    console.log('node 1684');
                    y = mu + y * sigma;
                    console.log('node 1685');
                    return [
                        x,
                        y
                    ];
                };
                console.log('node 1642');
                random.irwinHall = function (n, sub) {
                    console.log('node 1688');
                    if (arguments.length === 1) {
                        console.log('node 1690');
                        sub = 0;
                    } else {
                        console.log('node 1691');
                        ;
                    }
                    console.log('node 1692');
                    var sum = 0;
                    console.log('node 1693');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1695');
                        sum += rGen();
                    }
                    console.log('node 1696');
                    return sum - sub;
                };
                console.log('node 1643');
                random.bates = function (n, b, a) {
                    console.log('node 1699');
                    if (arguments.length <= 2) {
                        console.log('node 1701');
                        a = 0;
                    } else {
                        console.log('node 1702');
                        ;
                    }
                    console.log('node 1703');
                    if (arguments.length === 1) {
                        console.log('node 1705');
                        b = 1;
                    } else {
                        console.log('node 1706');
                        ;
                    }
                    console.log('node 1707');
                    var sum = 0;
                    console.log('node 1708');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1710');
                        sum += (b - a) * rGen() + a;
                    }
                    console.log('node 1711');
                    return sum / n;
                };
                console.log('node 1644');
                random.distribution = {};
                console.log('node 1645');
                random.distribution.normal = function (n, mu, sigma) {
                    console.log('node 1714');
                    if (arguments.length <= 2) {
                        console.log('node 1716');
                        sigma = 1;
                    } else {
                        console.log('node 1717');
                        ;
                    }
                    console.log('node 1718');
                    if (arguments.length === 1) {
                        console.log('node 1720');
                        mu = 0;
                    } else {
                        console.log('node 1721');
                        ;
                    }
                    console.log('node 1722');
                    return random.distribution.boxMuller(n, mu, sigma);
                };
                console.log('node 1646');
                random.distribution.logNormal = function (n, mu, sigma) {
                    console.log('node 1725');
                    if (arguments.length <= 2) {
                        console.log('node 1727');
                        sigma = 1;
                    } else {
                        console.log('node 1728');
                        ;
                    }
                    console.log('node 1729');
                    if (arguments.length === 1) {
                        console.log('node 1731');
                        mu = 0;
                    } else {
                        console.log('node 1732');
                        ;
                    }
                    console.log('node 1733');
                    var exponential = function (x) {
                        console.log('node 1737');
                        return Math.exp(x);
                    };
                    console.log('node 1734');
                    return random.distribution.boxMuller(n, mu, sigma).map(exponential);
                };
                console.log('node 1647');
                random.distribution.boxMuller = function (n, mu, sigma, rc) {
                    console.log('node 1740');
                    if (arguments.length <= 3) {
                        console.log('node 1742');
                        rc = false;
                    } else {
                        console.log('node 1743');
                        ;
                    }
                    console.log('node 1744');
                    if (arguments.length <= 2) {
                        console.log('node 1746');
                        sigma = 1;
                    } else {
                        console.log('node 1747');
                        ;
                    }
                    console.log('node 1748');
                    if (arguments.length === 1) {
                        console.log('node 1750');
                        mu = 0;
                    } else {
                        console.log('node 1751');
                        ;
                    }
                    console.log('node 1752');
                    var results = [];
                    console.log('node 1753');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1755');
                        var randomBMT = random.boxMullerTransform(mu, sigma);
                        console.log('node 1756');
                        results.push(rc ? randomBMT : randomBMT[0]);
                    }
                    console.log('node 1757');
                    return results;
                };
                console.log('node 1648');
                random.distribution.irwinHall = function (n, m, sub) {
                    console.log('node 1760');
                    if (arguments.length <= 2) {
                        console.log('node 1762');
                        sub = 0;
                    } else {
                        console.log('node 1763');
                        ;
                    }
                    console.log('node 1764');
                    if (arguments.length === 1) {
                        console.log('node 1766');
                        m = n;
                    } else {
                        console.log('node 1767');
                        ;
                    }
                    console.log('node 1768');
                    var results = new Array(n);
                    console.log('node 1769');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1771');
                        results[i] = random.irwinHall(m, sub);
                    }
                    console.log('node 1772');
                    return results;
                };
                console.log('node 1649');
                random.distribution.irwinHallNormal = function (n) {
                    console.log('node 1775');
                    return random.distribution.irwinHall(n, 12, 6);
                };
                console.log('node 1650');
                random.distribution.bates = function (n, b, a) {
                    console.log('node 1778');
                    if (arguments.length <= 2) {
                        console.log('node 1780');
                        a = 0;
                    } else {
                        console.log('node 1781');
                        ;
                    }
                    console.log('node 1782');
                    if (arguments.length === 1) {
                        console.log('node 1784');
                        b = n;
                    } else {
                        console.log('node 1785');
                        ;
                    }
                    console.log('node 1786');
                    var results = new Array(n);
                    console.log('node 1787');
                    for (var i = 0; i < n; i++) {
                        console.log('node 1789');
                        results[i] = random.bates(n, b, a);
                    }
                    console.log('node 1790');
                    return results;
                };
            },
            {}
        ],
        11: [
            function (require, module, exports) {
                console.log('node 1793');
                var basic = require('./basic');
                console.log('node 1794');
                var statistic = exports;
                console.log('node 1795');
                statistic.mean = function (arr) {
                    console.log('node 1808');
                    var count = arr.length;
                    console.log('node 1809');
                    var sum = basic.sum(arr);
                    console.log('node 1810');
                    return sum / count;
                };
                console.log('node 1796');
                statistic.median = function (arr) {
                    console.log('node 1813');
                    return statistic.quantile(arr, 1, 2);
                };
                console.log('node 1797');
                statistic.mode = function (arr) {
                    console.log('node 1816');
                    var counts = {};
                    console.log('node 1817');
                    for (var i = 0, n = arr.length; i < n; i++) {
                        console.log('node 1819');
                        if (counts[arr[i]] === undefined) {
                            console.log('node 1821');
                            counts[arr[i]] = 0;
                        } else {
                            console.log('node 1822');
                            counts[arr[i]]++;
                        }
                    }
                    console.log('node 1823');
                    var highest;
                    console.log('node 1824');
                    for (var number in counts) {
                        console.log('node 1826');
                        if (counts.hasOwnProperty(number)) {
                            console.log('node 1828');
                            if (highest === undefined || counts[number] > counts[highest]) {
                                console.log('node 1830');
                                highest = number;
                            } else {
                                console.log('node 1831');
                                ;
                            }
                        } else {
                            console.log('node 1832');
                            ;
                        }
                    }
                    console.log('node 1833');
                    return Number(highest);
                };
                console.log('node 1798');
                statistic.quantile = function (arr, k, q) {
                    console.log('node 1836');
                    var sorted, count, index;
                    console.log('node 1837');
                    if (k === 0) {
                        console.log('node 1839');
                        return Math.min.apply(null, arr);
                    } else {
                        console.log('node 1840');
                        ;
                    }
                    console.log('node 1841');
                    if (k === q) {
                        console.log('node 1843');
                        return Math.max.apply(null, arr);
                    } else {
                        console.log('node 1844');
                        ;
                    }
                    console.log('node 1845');
                    sorted = arr.slice(0);
                    console.log('node 1846');
                    sorted.sort(function (a, b) {
                        console.log('node 1856');
                        return a - b;
                    });
                    console.log('node 1847');
                    count = sorted.length;
                    console.log('node 1848');
                    index = count * k / q;
                    console.log('node 1849');
                    if (index % 1 === 0) {
                        console.log('node 1851');
                        return 0.5 * sorted[index - 1] + 0.5 * sorted[index];
                    } else {
                        console.log('node 1852');
                        ;
                    }
                    console.log('node 1853');
                    return sorted[Math.floor(index)];
                };
                console.log('node 1799');
                statistic.report = function (array) {
                    console.log('node 1859');
                    return {
                        mean: statistic.mean(array),
                        firstQuartile: statistic.quantile(array, 1, 4),
                        median: statistic.median(array),
                        thirdQuartile: statistic.quantile(array, 3, 4),
                        standardDev: statistic.standardDev(array)
                    };
                };
                console.log('node 1800');
                statistic.standardDev = function (arr) {
                    console.log('node 1862');
                    var count = arr.length;
                    console.log('node 1863');
                    var mean = statistic.mean(arr);
                    console.log('node 1864');
                    var squaredArr = [];
                    console.log('node 1865');
                    for (var i = 0; i < arr.length; i++) {
                        console.log('node 1867');
                        squaredArr[i] = Math.pow(arr[i] - mean, 2);
                    }
                    console.log('node 1868');
                    return Math.sqrt(1 / count * basic.sum(squaredArr));
                };
                console.log('node 1801');
                statistic.correlation = function (arrX, arrY) {
                    console.log('node 1871');
                    if (arrX.length === arrY.length) {
                        console.log('node 1873');
                        var covarXY = statistic.covariance(arrX, arrY);
                        console.log('node 1874');
                        var stdDevX = statistic.standardDev(arrX);
                        console.log('node 1875');
                        var stdDevY = statistic.standardDev(arrY);
                        console.log('node 1876');
                        return covarXY / (stdDevX * stdDevY);
                    } else {
                        throw new Error('Array mismatch');
                    }
                };
                console.log('node 1802');
                statistic.rSquared = function (source, regression) {
                    console.log('node 1879');
                    var residualSumOfSquares = basic.sum(source.map(function (d, i) {
                        console.log('node 1884');
                        return basic.square(d - regression[i]);
                    }));
                    console.log('node 1880');
                    var totalSumOfSquares = basic.sum(source.map(function (d) {
                        console.log('node 1887');
                        return basic.square(d - statistic.mean(source));
                    }));
                    console.log('node 1881');
                    return 1 - residualSumOfSquares / totalSumOfSquares;
                };
                console.log('node 1803');
                statistic.exponentialRegression = function (arrY) {
                    console.log('node 1890');
                    var n = arrY.length;
                    console.log('node 1891');
                    var arrX = basic.range(1, n);
                    console.log('node 1892');
                    var xSum = basic.sum(arrX);
                    console.log('node 1893');
                    var yLog = arrY.map(function (d) {
                        console.log('node 1906');
                        return Math.log(d);
                    });
                    console.log('node 1894');
                    var xSquared = arrX.map(function (d) {
                        console.log('node 1909');
                        return d * d;
                    });
                    console.log('node 1895');
                    var xSquaredSum = basic.sum(xSquared);
                    console.log('node 1896');
                    var yLogSum = basic.sum(yLog);
                    console.log('node 1897');
                    var xyLog = arrX.map(function (d, i) {
                        console.log('node 1912');
                        return d * yLog[i];
                    });
                    console.log('node 1898');
                    var xyLogSum = basic.sum(xyLog);
                    console.log('node 1899');
                    var a = (yLogSum * xSquaredSum - xSum * xyLogSum) / (n * xSquaredSum - xSum * xSum);
                    console.log('node 1900');
                    var b = (n * xyLogSum - xSum * yLogSum) / (n * xSquaredSum - xSum * xSum);
                    console.log('node 1901');
                    var fn = function (x) {
                        console.log('node 1915');
                        if (typeof x === 'number') {
                            console.log('node 1917');
                            return Math.exp(a) * Math.exp(b * x);
                        } else {
                            console.log('node 1918');
                            return x.map(function (d) {
                                console.log('node 1921');
                                return Math.exp(a) * Math.exp(b * d);
                            });
                        }
                    };
                    console.log('node 1902');
                    fn.rSquared = statistic.rSquared(arrY, arrX.map(fn));
                    console.log('node 1903');
                    return fn;
                };
                console.log('node 1804');
                statistic.linearRegression = function (arrX, arrY) {
                    console.log('node 1924');
                    var n = arrX.length;
                    console.log('node 1925');
                    var xSum = basic.sum(arrX);
                    console.log('node 1926');
                    var ySum = basic.sum(arrY);
                    console.log('node 1927');
                    var xySum = basic.sum(arrX.map(function (d, i) {
                        console.log('node 1936');
                        return d * arrY[i];
                    }));
                    console.log('node 1928');
                    var xSquaredSum = basic.sum(arrX.map(function (d) {
                        console.log('node 1939');
                        return d * d;
                    }));
                    console.log('node 1929');
                    var xMean = statistic.mean(arrX);
                    console.log('node 1930');
                    var yMean = statistic.mean(arrY);
                    console.log('node 1931');
                    var b = (xySum - 1 / n * xSum * ySum) / (xSquaredSum - 1 / n * (xSum * xSum));
                    console.log('node 1932');
                    var a = yMean - b * xMean;
                    console.log('node 1933');
                    return function (x) {
                        console.log('node 1942');
                        if (typeof x === 'number') {
                            console.log('node 1944');
                            return a + b * x;
                        } else {
                            console.log('node 1945');
                            return x.map(function (d) {
                                console.log('node 1948');
                                return a + b * d;
                            });
                        }
                    };
                };
                console.log('node 1805');
                statistic.covariance = function (set1, set2) {
                    console.log('node 1951');
                    if (set1.length === set2.length) {
                        console.log('node 1953');
                        var n = set1.length;
                        console.log('node 1954');
                        var total = 0;
                        console.log('node 1955');
                        var sum1 = basic.sum(set1);
                        console.log('node 1956');
                        var sum2 = basic.sum(set2);
                        console.log('node 1957');
                        for (var i = 0; i < n; i++) {
                            console.log('node 1959');
                            total += set1[i] * set2[i];
                        }
                        console.log('node 1960');
                        return (total - sum1 * sum2 / n) / n;
                    } else {
                        throw new Error('Array mismatch');
                    }
                };
            },
            { './basic': 3 }
        ]
    }, {}, [1])(1);
});
console.log('node 1');