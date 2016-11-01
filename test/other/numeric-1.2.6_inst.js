console.log('node 4953');
'use strict';
console.log('node 4954');
var numeric = typeof exports === 'undefined' ? function numeric() {
} : exports;
console.log('node 4955');
if (typeof global !== 'undefined') {
    console.log('node 4957');
    global.numeric = numeric;
} else {
    console.log('node 4958');
    ;
}
console.log('node 4959');
numeric.version = '1.2.6';
console.log('node 4960');
numeric.bench = function bench(f, interval) {
    console.log('node 4');
    var t1, t2, n, i;
    console.log('node 5');
    if (typeof interval === 'undefined') {
        console.log('node 7');
        interval = 15;
    } else {
        console.log('node 8');
        ;
    }
    console.log('node 9');
    n = 0.5;
    console.log('node 10');
    t1 = new Date();
    console.log('node 11');
    while (1) {
        console.log('node 13');
        n *= 2;
        console.log('node 14');
        for (i = n; i > 3; i -= 4) {
            console.log('node 16');
            f();
            console.log('node 17');
            f();
            console.log('node 18');
            f();
            console.log('node 19');
            f();
        }
        console.log('node 20');
        while (i > 0) {
            console.log('node 22');
            f();
            console.log('node 23');
            i--;
        }
        console.log('node 24');
        t2 = new Date();
        console.log('node 25');
        if (t2 - t1 > interval) {
            console.log('node 27');
            break;
        } else {
            console.log('node 28');
            ;
        }
    }
    console.log('node 29');
    for (i = n; i > 3; i -= 4) {
        console.log('node 31');
        f();
        console.log('node 32');
        f();
        console.log('node 33');
        f();
        console.log('node 34');
        f();
    }
    console.log('node 35');
    while (i > 0) {
        console.log('node 37');
        f();
        console.log('node 38');
        i--;
    }
    console.log('node 39');
    t2 = new Date();
    console.log('node 40');
    return 1000 * (3 * n - 1) / (t2 - t1);
};
console.log('node 4961');
numeric._myIndexOf = function _myIndexOf(w) {
    console.log('node 43');
    var n = this.length, k;
    console.log('node 44');
    for (k = 0; k < n; ++k) {
        console.log('node 46');
        if (this[k] === w) {
            console.log('node 48');
            return k;
        } else {
            console.log('node 49');
            ;
        }
    }
    console.log('node 50');
    return -1;
};
console.log('node 4962');
numeric.myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf : numeric._myIndexOf;
console.log('node 4963');
numeric.Function = Function;
console.log('node 4964');
numeric.precision = 4;
console.log('node 4965');
numeric.largeArray = 50;
console.log('node 4966');
numeric.prettyPrint = function prettyPrint(x) {
    console.log('node -1');
    function fmtnum(x) {
        console.log('node 55');
        if (x === 0) {
            console.log('node 57');
            return '0';
        } else {
            console.log('node 58');
            ;
        }
        console.log('node 59');
        if (isNaN(x)) {
            console.log('node 61');
            return 'NaN';
        } else {
            console.log('node 62');
            ;
        }
        console.log('node 63');
        if (x < 0) {
            console.log('node 65');
            return '-' + fmtnum(-x);
        } else {
            console.log('node 66');
            ;
        }
        console.log('node 67');
        if (isFinite(x)) {
            console.log('node 69');
            var scale = Math.floor(Math.log(x) / Math.log(10));
            console.log('node 70');
            var normalized = x / Math.pow(10, scale);
            console.log('node 71');
            var basic = normalized.toPrecision(numeric.precision);
            console.log('node 72');
            if (parseFloat(basic) === 10) {
                console.log('node 74');
                scale++;
                console.log('node 75');
                normalized = 1;
                console.log('node 76');
                basic = normalized.toPrecision(numeric.precision);
            } else {
                console.log('node 77');
                ;
            }
            console.log('node 78');
            return parseFloat(basic).toString() + 'e' + scale.toString();
        } else {
            console.log('node 79');
            ;
        }
        console.log('node 80');
        return 'Infinity';
    }
    console.log('node 182');
    var ret = [];
    console.log('node -1');
    function foo(x) {
        console.log('node 83');
        var k;
        console.log('node 84');
        if (typeof x === 'undefined') {
            console.log('node 86');
            ret.push(Array(numeric.precision + 8).join(' '));
            console.log('node 87');
            return false;
        } else {
            console.log('node 88');
            ;
        }
        console.log('node 89');
        if (typeof x === 'string') {
            console.log('node 91');
            ret.push('"' + x + '"');
            console.log('node 92');
            return false;
        } else {
            console.log('node 93');
            ;
        }
        console.log('node 94');
        if (typeof x === 'boolean') {
            console.log('node 96');
            ret.push(x.toString());
            console.log('node 97');
            return false;
        } else {
            console.log('node 98');
            ;
        }
        console.log('node 99');
        if (typeof x === 'number') {
            console.log('node 101');
            var a = fmtnum(x);
            console.log('node 102');
            var b = x.toPrecision(numeric.precision);
            console.log('node 103');
            var c = parseFloat(x.toString()).toString();
            console.log('node 104');
            var d = [
                a,
                b,
                c,
                parseFloat(b).toString(),
                parseFloat(c).toString()
            ];
            console.log('node 105');
            for (k = 1; k < d.length; k++) {
                console.log('node 107');
                if (d[k].length < a.length) {
                    console.log('node 109');
                    a = d[k];
                } else {
                    console.log('node 110');
                    ;
                }
            }
            console.log('node 111');
            ret.push(Array(numeric.precision + 8 - a.length).join(' ') + a);
            console.log('node 112');
            return false;
        } else {
            console.log('node 113');
            ;
        }
        console.log('node 114');
        if (x === null) {
            console.log('node 116');
            ret.push('null');
            console.log('node 117');
            return false;
        } else {
            console.log('node 118');
            ;
        }
        console.log('node 119');
        if (typeof x === 'function') {
            console.log('node 121');
            ret.push(x.toString());
            console.log('node 122');
            var flag = false;
            console.log('node 123');
            for (k in x) {
                console.log('node 125');
                if (x.hasOwnProperty(k)) {
                    console.log('node 127');
                    if (flag) {
                        console.log('node 129');
                        ret.push(',\n');
                    } else {
                        console.log('node 130');
                        ret.push('\n{');
                    }
                    console.log('node 131');
                    flag = true;
                    console.log('node 132');
                    ret.push(k);
                    console.log('node 133');
                    ret.push(': \n');
                    console.log('node 134');
                    foo(x[k]);
                } else {
                    console.log('node 135');
                    ;
                }
            }
            console.log('node 136');
            if (flag) {
                console.log('node 138');
                ret.push('}\n');
            } else {
                console.log('node 139');
                ;
            }
            console.log('node 140');
            return true;
        } else {
            console.log('node 141');
            ;
        }
        console.log('node 142');
        if (x instanceof Array) {
            console.log('node 144');
            if (x.length > numeric.largeArray) {
                console.log('node 146');
                ret.push('...Large Array...');
                console.log('node 147');
                return true;
            } else {
                console.log('node 148');
                ;
            }
            console.log('node 149');
            var flag = false;
            console.log('node 150');
            ret.push('[');
            console.log('node 151');
            for (k = 0; k < x.length; k++) {
                console.log('node 153');
                if (k > 0) {
                    console.log('node 155');
                    ret.push(',');
                    console.log('node 156');
                    if (flag) {
                        console.log('node 158');
                        ret.push('\n ');
                    } else {
                        console.log('node 159');
                        ;
                    }
                } else {
                    console.log('node 160');
                    ;
                }
                console.log('node 161');
                flag = foo(x[k]);
            }
            console.log('node 162');
            ret.push(']');
            console.log('node 163');
            return true;
        } else {
            console.log('node 164');
            ;
        }
        console.log('node 165');
        ret.push('{');
        console.log('node 166');
        var flag = false;
        console.log('node 167');
        for (k in x) {
            console.log('node 169');
            if (x.hasOwnProperty(k)) {
                console.log('node 171');
                if (flag) {
                    console.log('node 173');
                    ret.push(',\n');
                } else {
                    console.log('node 174');
                    ;
                }
                console.log('node 175');
                flag = true;
                console.log('node 176');
                ret.push(k);
                console.log('node 177');
                ret.push(': \n');
                console.log('node 178');
                foo(x[k]);
            } else {
                console.log('node 179');
                ;
            }
        }
        console.log('node 180');
        ret.push('}');
        console.log('node 181');
        return true;
    }
    console.log('node 183');
    foo(x);
    console.log('node 184');
    return ret.join('');
};
console.log('node 4967');
numeric.parseDate = function parseDate(d) {
    console.log('node -1');
    function foo(d) {
        console.log('node 189');
        if (typeof d === 'string') {
            console.log('node 191');
            return Date.parse(d.replace(/-/g, '/'));
        } else {
            console.log('node 192');
            ;
        }
        console.log('node 193');
        if (!(d instanceof Array)) {
            throw new Error('parseDate: parameter must be arrays of strings');
        } else {
            console.log('node 195');
            ;
        }
        console.log('node 196');
        var ret = [], k;
        console.log('node 197');
        for (k = 0; k < d.length; k++) {
            console.log('node 199');
            ret[k] = foo(d[k]);
        }
        console.log('node 200');
        return ret;
    }
    console.log('node 201');
    return foo(d);
};
console.log('node 4968');
numeric.parseFloat = function parseFloat_(d) {
    console.log('node -1');
    function foo(d) {
        console.log('node 206');
        if (typeof d === 'string') {
            console.log('node 208');
            return parseFloat(d);
        } else {
            console.log('node 209');
            ;
        }
        console.log('node 210');
        if (!(d instanceof Array)) {
            throw new Error('parseFloat: parameter must be arrays of strings');
        } else {
            console.log('node 212');
            ;
        }
        console.log('node 213');
        var ret = [], k;
        console.log('node 214');
        for (k = 0; k < d.length; k++) {
            console.log('node 216');
            ret[k] = foo(d[k]);
        }
        console.log('node 217');
        return ret;
    }
    console.log('node 218');
    return foo(d);
};
console.log('node 4969');
numeric.parseCSV = function parseCSV(t) {
    console.log('node 221');
    var foo = t.split('\n');
    console.log('node 222');
    var j, k;
    console.log('node 223');
    var ret = [];
    console.log('node 224');
    var pat = /(([^'",]*)|('[^']*')|("[^"]*")),/g;
    console.log('node 225');
    var patnum = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/;
    console.log('node 226');
    var stripper = function (n) {
        console.log('node 246');
        return n.substr(0, n.length - 1);
    };
    console.log('node 227');
    var count = 0;
    console.log('node 228');
    for (k = 0; k < foo.length; k++) {
        console.log('node 230');
        var bar = (foo[k] + ',').match(pat), baz;
        console.log('node 231');
        if (bar.length > 0) {
            console.log('node 233');
            ret[count] = [];
            console.log('node 234');
            for (j = 0; j < bar.length; j++) {
                console.log('node 236');
                baz = stripper(bar[j]);
                console.log('node 237');
                if (patnum.test(baz)) {
                    console.log('node 239');
                    ret[count][j] = parseFloat(baz);
                } else {
                    console.log('node 240');
                    ret[count][j] = baz;
                }
            }
            console.log('node 241');
            count++;
        } else {
            console.log('node 242');
            ;
        }
    }
    console.log('node 243');
    return ret;
};
console.log('node 4970');
numeric.toCSV = function toCSV(A) {
    console.log('node 249');
    var s = numeric.dim(A);
    console.log('node 250');
    var i, j, m, n, row, ret;
    console.log('node 251');
    m = s[0];
    console.log('node 252');
    n = s[1];
    console.log('node 253');
    ret = [];
    console.log('node 254');
    for (i = 0; i < m; i++) {
        console.log('node 256');
        row = [];
        console.log('node 257');
        for (j = 0; j < m; j++) {
            console.log('node 259');
            row[j] = A[i][j].toString();
        }
        console.log('node 260');
        ret[i] = row.join(', ');
    }
    console.log('node 261');
    return ret.join('\n') + '\n';
};
console.log('node 4971');
numeric.getURL = function getURL(url) {
    console.log('node 264');
    var client = new XMLHttpRequest();
    console.log('node 265');
    client.open('GET', url, false);
    console.log('node 266');
    client.send();
    console.log('node 267');
    return client;
};
console.log('node 4972');
numeric.imageURL = function imageURL(img) {
    console.log('node -1');
    function base64(A) {
        console.log('node 272');
        var n = A.length, i, x, y, z, p, q, r, s;
        console.log('node 273');
        var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        console.log('node 274');
        var ret = '';
        console.log('node 275');
        for (i = 0; i < n; i += 3) {
            console.log('node 277');
            x = A[i];
            console.log('node 278');
            y = A[i + 1];
            console.log('node 279');
            z = A[i + 2];
            console.log('node 280');
            p = x >> 2;
            console.log('node 281');
            q = ((x & 3) << 4) + (y >> 4);
            console.log('node 282');
            r = ((y & 15) << 2) + (z >> 6);
            console.log('node 283');
            s = z & 63;
            console.log('node 284');
            if (i + 1 >= n) {
                console.log('node 286');
                r = s = 64;
            } else {
                console.log('node 287');
                if (i + 2 >= n) {
                    console.log('node 289');
                    s = 64;
                } else {
                    console.log('node 290');
                    ;
                }
            }
            console.log('node 291');
            ret += key.charAt(p) + key.charAt(q) + key.charAt(r) + key.charAt(s);
        }
        console.log('node 292');
        return ret;
    }
    console.log('node -1');
    function crc32Array(a, from, to) {
        console.log('node 295');
        if (typeof from === 'undefined') {
            console.log('node 297');
            from = 0;
        } else {
            console.log('node 298');
            ;
        }
        console.log('node 299');
        if (typeof to === 'undefined') {
            console.log('node 301');
            to = a.length;
        } else {
            console.log('node 302');
            ;
        }
        console.log('node 303');
        var table = [
            0,
            1996959894,
            3993919788,
            2567524794,
            124634137,
            1886057615,
            3915621685,
            2657392035,
            249268274,
            2044508324,
            3772115230,
            2547177864,
            162941995,
            2125561021,
            3887607047,
            2428444049,
            498536548,
            1789927666,
            4089016648,
            2227061214,
            450548861,
            1843258603,
            4107580753,
            2211677639,
            325883990,
            1684777152,
            4251122042,
            2321926636,
            335633487,
            1661365465,
            4195302755,
            2366115317,
            997073096,
            1281953886,
            3579855332,
            2724688242,
            1006888145,
            1258607687,
            3524101629,
            2768942443,
            901097722,
            1119000684,
            3686517206,
            2898065728,
            853044451,
            1172266101,
            3705015759,
            2882616665,
            651767980,
            1373503546,
            3369554304,
            3218104598,
            565507253,
            1454621731,
            3485111705,
            3099436303,
            671266974,
            1594198024,
            3322730930,
            2970347812,
            795835527,
            1483230225,
            3244367275,
            3060149565,
            1994146192,
            31158534,
            2563907772,
            4023717930,
            1907459465,
            112637215,
            2680153253,
            3904427059,
            2013776290,
            251722036,
            2517215374,
            3775830040,
            2137656763,
            141376813,
            2439277719,
            3865271297,
            1802195444,
            476864866,
            2238001368,
            4066508878,
            1812370925,
            453092731,
            2181625025,
            4111451223,
            1706088902,
            314042704,
            2344532202,
            4240017532,
            1658658271,
            366619977,
            2362670323,
            4224994405,
            1303535960,
            984961486,
            2747007092,
            3569037538,
            1256170817,
            1037604311,
            2765210733,
            3554079995,
            1131014506,
            879679996,
            2909243462,
            3663771856,
            1141124467,
            855842277,
            2852801631,
            3708648649,
            1342533948,
            654459306,
            3188396048,
            3373015174,
            1466479909,
            544179635,
            3110523913,
            3462522015,
            1591671054,
            702138776,
            2966460450,
            3352799412,
            1504918807,
            783551873,
            3082640443,
            3233442989,
            3988292384,
            2596254646,
            62317068,
            1957810842,
            3939845945,
            2647816111,
            81470997,
            1943803523,
            3814918930,
            2489596804,
            225274430,
            2053790376,
            3826175755,
            2466906013,
            167816743,
            2097651377,
            4027552580,
            2265490386,
            503444072,
            1762050814,
            4150417245,
            2154129355,
            426522225,
            1852507879,
            4275313526,
            2312317920,
            282753626,
            1742555852,
            4189708143,
            2394877945,
            397917763,
            1622183637,
            3604390888,
            2714866558,
            953729732,
            1340076626,
            3518719985,
            2797360999,
            1068828381,
            1219638859,
            3624741850,
            2936675148,
            906185462,
            1090812512,
            3747672003,
            2825379669,
            829329135,
            1181335161,
            3412177804,
            3160834842,
            628085408,
            1382605366,
            3423369109,
            3138078467,
            570562233,
            1426400815,
            3317316542,
            2998733608,
            733239954,
            1555261956,
            3268935591,
            3050360625,
            752459403,
            1541320221,
            2607071920,
            3965973030,
            1969922972,
            40735498,
            2617837225,
            3943577151,
            1913087877,
            83908371,
            2512341634,
            3803740692,
            2075208622,
            213261112,
            2463272603,
            3855990285,
            2094854071,
            198958881,
            2262029012,
            4057260610,
            1759359992,
            534414190,
            2176718541,
            4139329115,
            1873836001,
            414664567,
            2282248934,
            4279200368,
            1711684554,
            285281116,
            2405801727,
            4167216745,
            1634467795,
            376229701,
            2685067896,
            3608007406,
            1308918612,
            956543938,
            2808555105,
            3495958263,
            1231636301,
            1047427035,
            2932959818,
            3654703836,
            1088359270,
            936918000,
            2847714899,
            3736837829,
            1202900863,
            817233897,
            3183342108,
            3401237130,
            1404277552,
            615818150,
            3134207493,
            3453421203,
            1423857449,
            601450431,
            3009837614,
            3294710456,
            1567103746,
            711928724,
            3020668471,
            3272380065,
            1510334235,
            755167117
        ];
        console.log('node 304');
        var crc = -1, y = 0, n = a.length, i;
        console.log('node 305');
        for (i = from; i < to; i++) {
            console.log('node 307');
            y = (crc ^ a[i]) & 255;
            console.log('node 308');
            crc = crc >>> 8 ^ table[y];
        }
        console.log('node 309');
        return crc ^ -1;
    }
    console.log('node 310');
    var h = img[0].length, w = img[0][0].length, s1, s2, next, k, length, a, b, i, j, adler32, crc32;
    console.log('node 311');
    var stream = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10,
        0,
        0,
        0,
        13,
        73,
        72,
        68,
        82,
        w >> 24 & 255,
        w >> 16 & 255,
        w >> 8 & 255,
        w & 255,
        h >> 24 & 255,
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255,
        8,
        2,
        0,
        0,
        0,
        -1,
        -2,
        -3,
        -4,
        -5,
        -6,
        -7,
        -8,
        73,
        68,
        65,
        84,
        8,
        29
    ];
    console.log('node 312');
    crc32 = crc32Array(stream, 12, 29);
    console.log('node 313');
    stream[29] = crc32 >> 24 & 255;
    console.log('node 314');
    stream[30] = crc32 >> 16 & 255;
    console.log('node 315');
    stream[31] = crc32 >> 8 & 255;
    console.log('node 316');
    stream[32] = crc32 & 255;
    console.log('node 317');
    s1 = 1;
    console.log('node 318');
    s2 = 0;
    console.log('node 319');
    for (i = 0; i < h; i++) {
        console.log('node 321');
        if (i < h - 1) {
            console.log('node 323');
            stream.push(0);
        } else {
            console.log('node 324');
            stream.push(1);
        }
        console.log('node 325');
        a = 3 * w + 1 + (i === 0) & 255;
        console.log('node 326');
        b = 3 * w + 1 + (i === 0) >> 8 & 255;
        console.log('node 327');
        stream.push(a);
        console.log('node 328');
        stream.push(b);
        console.log('node 329');
        stream.push(~a & 255);
        console.log('node 330');
        stream.push(~b & 255);
        console.log('node 331');
        if (i === 0) {
            console.log('node 333');
            stream.push(0);
        } else {
            console.log('node 334');
            ;
        }
        console.log('node 335');
        for (j = 0; j < w; j++) {
            console.log('node 337');
            for (k = 0; k < 3; k++) {
                console.log('node 339');
                a = img[k][i][j];
                console.log('node 340');
                if (a > 255) {
                    console.log('node 342');
                    a = 255;
                } else {
                    console.log('node 343');
                    if (a < 0) {
                        console.log('node 345');
                        a = 0;
                    } else {
                        console.log('node 346');
                        a = Math.round(a);
                    }
                }
                console.log('node 347');
                s1 = (s1 + a) % 65521;
                console.log('node 348');
                s2 = (s2 + s1) % 65521;
                console.log('node 349');
                stream.push(a);
            }
        }
        console.log('node 350');
        stream.push(0);
    }
    console.log('node 351');
    adler32 = (s2 << 16) + s1;
    console.log('node 352');
    stream.push(adler32 >> 24 & 255);
    console.log('node 353');
    stream.push(adler32 >> 16 & 255);
    console.log('node 354');
    stream.push(adler32 >> 8 & 255);
    console.log('node 355');
    stream.push(adler32 & 255);
    console.log('node 356');
    length = stream.length - 41;
    console.log('node 357');
    stream[33] = length >> 24 & 255;
    console.log('node 358');
    stream[34] = length >> 16 & 255;
    console.log('node 359');
    stream[35] = length >> 8 & 255;
    console.log('node 360');
    stream[36] = length & 255;
    console.log('node 361');
    crc32 = crc32Array(stream, 37);
    console.log('node 362');
    stream.push(crc32 >> 24 & 255);
    console.log('node 363');
    stream.push(crc32 >> 16 & 255);
    console.log('node 364');
    stream.push(crc32 >> 8 & 255);
    console.log('node 365');
    stream.push(crc32 & 255);
    console.log('node 366');
    stream.push(0);
    console.log('node 367');
    stream.push(0);
    console.log('node 368');
    stream.push(0);
    console.log('node 369');
    stream.push(0);
    console.log('node 370');
    stream.push(73);
    console.log('node 371');
    stream.push(69);
    console.log('node 372');
    stream.push(78);
    console.log('node 373');
    stream.push(68);
    console.log('node 374');
    stream.push(174);
    console.log('node 375');
    stream.push(66);
    console.log('node 376');
    stream.push(96);
    console.log('node 377');
    stream.push(130);
    console.log('node 378');
    return 'data:image/png;base64,' + base64(stream);
};
console.log('node 4973');
numeric._dim = function _dim(x) {
    console.log('node 381');
    var ret = [];
    console.log('node 382');
    while (typeof x === 'object') {
        console.log('node 384');
        ret.push(x.length);
        console.log('node 385');
        x = x[0];
    }
    console.log('node 386');
    return ret;
};
console.log('node 4974');
numeric.dim = function dim(x) {
    console.log('node 389');
    var y, z;
    console.log('node 390');
    if (typeof x === 'object') {
        console.log('node 392');
        y = x[0];
        console.log('node 393');
        if (typeof y === 'object') {
            console.log('node 395');
            z = y[0];
            console.log('node 396');
            if (typeof z === 'object') {
                console.log('node 398');
                return numeric._dim(x);
            } else {
                console.log('node 399');
                ;
            }
            console.log('node 400');
            return [
                x.length,
                y.length
            ];
        } else {
            console.log('node 401');
            ;
        }
        console.log('node 402');
        return [x.length];
    } else {
        console.log('node 403');
        ;
    }
    console.log('node 404');
    return [];
};
console.log('node 4975');
numeric.mapreduce = function mapreduce(body, init) {
    console.log('node 407');
    return Function('x', 'accum', '_s', '_k', 'if(typeof accum === "undefined") accum = ' + init + ';\n' + 'if(typeof x === "number") { var xi = x; ' + body + '; return accum; }\n' + 'if(typeof _s === "undefined") _s = numeric.dim(x);\n' + 'if(typeof _k === "undefined") _k = 0;\n' + 'var _n = _s[_k];\n' + 'var i,xi;\n' + 'if(_k < _s.length-1) {\n' + '    for(i=_n-1;i>=0;i--) {\n' + '        accum = arguments.callee(x[i],accum,_s,_k+1);\n' + '    }' + '    return accum;\n' + '}\n' + 'for(i=_n-1;i>=1;i-=2) { \n' + '    xi = x[i];\n' + '    ' + body + ';\n' + '    xi = x[i-1];\n' + '    ' + body + ';\n' + '}\n' + 'if(i === 0) {\n' + '    xi = x[i];\n' + '    ' + body + '\n' + '}\n' + 'return accum;');
};
console.log('node 4976');
numeric.mapreduce2 = function mapreduce2(body, setup) {
    console.log('node 410');
    return Function('x', 'var n = x.length;\n' + 'var i,xi;\n' + setup + ';\n' + 'for(i=n-1;i!==-1;--i) { \n' + '    xi = x[i];\n' + '    ' + body + ';\n' + '}\n' + 'return accum;');
};
console.log('node 4977');
numeric.same = function same(x, y) {
    console.log('node 413');
    var i, n;
    console.log('node 414');
    if (!(x instanceof Array) || !(y instanceof Array)) {
        console.log('node 416');
        return false;
    } else {
        console.log('node 417');
        ;
    }
    console.log('node 418');
    n = x.length;
    console.log('node 419');
    if (n !== y.length) {
        console.log('node 421');
        return false;
    } else {
        console.log('node 422');
        ;
    }
    console.log('node 423');
    for (i = 0; i < n; i++) {
        console.log('node 425');
        if (x[i] === y[i]) {
            console.log('node 427');
            continue;
        } else {
            console.log('node 428');
            ;
        }
        console.log('node 429');
        if (typeof x[i] === 'object') {
            console.log('node 431');
            if (!same(x[i], y[i])) {
                console.log('node 433');
                return false;
            } else {
                console.log('node 434');
                ;
            }
        } else {
            console.log('node 435');
            return false;
        }
    }
    console.log('node 436');
    return true;
};
console.log('node 4978');
numeric.rep = function rep(s, v, k) {
    console.log('node 439');
    if (typeof k === 'undefined') {
        console.log('node 441');
        k = 0;
    } else {
        console.log('node 442');
        ;
    }
    console.log('node 443');
    var n = s[k], ret = Array(n), i;
    console.log('node 444');
    if (k === s.length - 1) {
        console.log('node 446');
        for (i = n - 2; i >= 0; i -= 2) {
            console.log('node 448');
            ret[i + 1] = v;
            console.log('node 449');
            ret[i] = v;
        }
        console.log('node 450');
        if (i === -1) {
            console.log('node 452');
            ret[0] = v;
        } else {
            console.log('node 453');
            ;
        }
        console.log('node 454');
        return ret;
    } else {
        console.log('node 455');
        ;
    }
    console.log('node 456');
    for (i = n - 1; i >= 0; i--) {
        console.log('node 458');
        ret[i] = numeric.rep(s, v, k + 1);
    }
    console.log('node 459');
    return ret;
};
console.log('node 4979');
numeric.dotMMsmall = function dotMMsmall(x, y) {
    console.log('node 462');
    var i, j, k, p, q, r, ret, foo, bar, woo, i0, k0, p0, r0;
    console.log('node 463');
    p = x.length;
    console.log('node 464');
    q = y.length;
    console.log('node 465');
    r = y[0].length;
    console.log('node 466');
    ret = Array(p);
    console.log('node 467');
    for (i = p - 1; i >= 0; i--) {
        console.log('node 469');
        foo = Array(r);
        console.log('node 470');
        bar = x[i];
        console.log('node 471');
        for (k = r - 1; k >= 0; k--) {
            console.log('node 473');
            woo = bar[q - 1] * y[q - 1][k];
            console.log('node 474');
            for (j = q - 2; j >= 1; j -= 2) {
                console.log('node 476');
                i0 = j - 1;
                console.log('node 477');
                woo += bar[j] * y[j][k] + bar[i0] * y[i0][k];
            }
            console.log('node 478');
            if (j === 0) {
                console.log('node 480');
                woo += bar[0] * y[0][k];
            } else {
                console.log('node 481');
                ;
            }
            console.log('node 482');
            foo[k] = woo;
        }
        console.log('node 483');
        ret[i] = foo;
    }
    console.log('node 484');
    return ret;
};
console.log('node 4980');
numeric._getCol = function _getCol(A, j, x) {
    console.log('node 487');
    var n = A.length, i;
    console.log('node 488');
    for (i = n - 1; i > 0; --i) {
        console.log('node 490');
        x[i] = A[i][j];
        console.log('node 491');
        --i;
        console.log('node 492');
        x[i] = A[i][j];
    }
    console.log('node 493');
    if (i === 0) {
        console.log('node 495');
        x[0] = A[0][j];
    } else {
        console.log('node 496');
        ;
    }
};
console.log('node 4981');
numeric.dotMMbig = function dotMMbig(x, y) {
    console.log('node 499');
    var gc = numeric._getCol, p = y.length, v = Array(p);
    console.log('node 500');
    var m = x.length, n = y[0].length, A = new Array(m), xj;
    console.log('node 501');
    var VV = numeric.dotVV;
    console.log('node 502');
    var i, j, k, z;
    console.log('node 503');
    --p;
    console.log('node 504');
    --m;
    console.log('node 505');
    for (i = m; i !== -1; --i) {
        console.log('node 507');
        A[i] = Array(n);
    }
    console.log('node 508');
    --n;
    console.log('node 509');
    for (i = n; i !== -1; --i) {
        console.log('node 511');
        gc(y, i, v);
        console.log('node 512');
        for (j = m; j !== -1; --j) {
            console.log('node 514');
            z = 0;
            console.log('node 515');
            xj = x[j];
            console.log('node 516');
            A[j][i] = VV(xj, v);
        }
    }
    console.log('node 517');
    return A;
};
console.log('node 4982');
numeric.dotMV = function dotMV(x, y) {
    console.log('node 520');
    var p = x.length, q = y.length, i;
    console.log('node 521');
    var ret = Array(p), dotVV = numeric.dotVV;
    console.log('node 522');
    for (i = p - 1; i >= 0; i--) {
        console.log('node 524');
        ret[i] = dotVV(x[i], y);
    }
    console.log('node 525');
    return ret;
};
console.log('node 4983');
numeric.dotVM = function dotVM(x, y) {
    console.log('node 528');
    var i, j, k, p, q, r, ret, foo, bar, woo, i0, k0, p0, r0, s1, s2, s3, baz, accum;
    console.log('node 529');
    p = x.length;
    console.log('node 530');
    q = y[0].length;
    console.log('node 531');
    ret = Array(q);
    console.log('node 532');
    for (k = q - 1; k >= 0; k--) {
        console.log('node 534');
        woo = x[p - 1] * y[p - 1][k];
        console.log('node 535');
        for (j = p - 2; j >= 1; j -= 2) {
            console.log('node 537');
            i0 = j - 1;
            console.log('node 538');
            woo += x[j] * y[j][k] + x[i0] * y[i0][k];
        }
        console.log('node 539');
        if (j === 0) {
            console.log('node 541');
            woo += x[0] * y[0][k];
        } else {
            console.log('node 542');
            ;
        }
        console.log('node 543');
        ret[k] = woo;
    }
    console.log('node 544');
    return ret;
};
console.log('node 4984');
numeric.dotVV = function dotVV(x, y) {
    console.log('node 547');
    var i, n = x.length, i1, ret = x[n - 1] * y[n - 1];
    console.log('node 548');
    for (i = n - 2; i >= 1; i -= 2) {
        console.log('node 550');
        i1 = i - 1;
        console.log('node 551');
        ret += x[i] * y[i] + x[i1] * y[i1];
    }
    console.log('node 552');
    if (i === 0) {
        console.log('node 554');
        ret += x[0] * y[0];
    } else {
        console.log('node 555');
        ;
    }
    console.log('node 556');
    return ret;
};
console.log('node 4985');
numeric.dot = function dot(x, y) {
    console.log('node 559');
    var d = numeric.dim;
    console.log('node 560');
    switch (d(x).length * 1000 + d(y).length) {
    case 2002:
        console.log('node 563');
        if (y.length < 10) {
            console.log('node 565');
            return numeric.dotMMsmall(x, y);
        } else {
            console.log('node 566');
            return numeric.dotMMbig(x, y);
        }
    case 2001:
        console.log('node 568');
        return numeric.dotMV(x, y);
    case 1002:
        console.log('node 570');
        return numeric.dotVM(x, y);
    case 1001:
        console.log('node 572');
        return numeric.dotVV(x, y);
    case 1000:
        console.log('node 574');
        return numeric.mulVS(x, y);
    case 1:
        console.log('node 576');
        return numeric.mulSV(x, y);
    case 0:
        console.log('node 578');
        return x * y;
    default:
        throw new Error('numeric.dot only works on vectors and matrices');
    }
};
console.log('node 4986');
numeric.diag = function diag(d) {
    console.log('node 582');
    var i, i1, j, n = d.length, A = Array(n), Ai;
    console.log('node 583');
    for (i = n - 1; i >= 0; i--) {
        console.log('node 585');
        Ai = Array(n);
        console.log('node 586');
        i1 = i + 2;
        console.log('node 587');
        for (j = n - 1; j >= i1; j -= 2) {
            console.log('node 589');
            Ai[j] = 0;
            console.log('node 590');
            Ai[j - 1] = 0;
        }
        console.log('node 591');
        if (j > i) {
            console.log('node 593');
            Ai[j] = 0;
        } else {
            console.log('node 594');
            ;
        }
        console.log('node 595');
        Ai[i] = d[i];
        console.log('node 596');
        for (j = i - 1; j >= 1; j -= 2) {
            console.log('node 598');
            Ai[j] = 0;
            console.log('node 599');
            Ai[j - 1] = 0;
        }
        console.log('node 600');
        if (j === 0) {
            console.log('node 602');
            Ai[0] = 0;
        } else {
            console.log('node 603');
            ;
        }
        console.log('node 604');
        A[i] = Ai;
    }
    console.log('node 605');
    return A;
};
console.log('node 4987');
numeric.getDiag = function (A) {
    console.log('node 608');
    var n = Math.min(A.length, A[0].length), i, ret = Array(n);
    console.log('node 609');
    for (i = n - 1; i >= 1; --i) {
        console.log('node 611');
        ret[i] = A[i][i];
        console.log('node 612');
        --i;
        console.log('node 613');
        ret[i] = A[i][i];
    }
    console.log('node 614');
    if (i === 0) {
        console.log('node 616');
        ret[0] = A[0][0];
    } else {
        console.log('node 617');
        ;
    }
    console.log('node 618');
    return ret;
};
console.log('node 4988');
numeric.identity = function identity(n) {
    console.log('node 621');
    return numeric.diag(numeric.rep([n], 1));
};
console.log('node 4989');
numeric.pointwise = function pointwise(params, body, setup) {
    console.log('node 624');
    if (typeof setup === 'undefined') {
        console.log('node 626');
        setup = '';
    } else {
        console.log('node 627');
        ;
    }
    console.log('node 628');
    var fun = [];
    console.log('node 629');
    var k;
    console.log('node 630');
    var avec = /\[i\]$/, p, thevec = '';
    console.log('node 631');
    var haveret = false;
    console.log('node 632');
    for (k = 0; k < params.length; k++) {
        console.log('node 634');
        if (avec.test(params[k])) {
            console.log('node 636');
            p = params[k].substring(0, params[k].length - 3);
            console.log('node 637');
            thevec = p;
        } else {
            console.log('node 638');
            p = params[k];
        }
        console.log('node 639');
        if (p === 'ret') {
            console.log('node 641');
            haveret = true;
        } else {
            console.log('node 642');
            ;
        }
        console.log('node 643');
        fun.push(p);
    }
    console.log('node 644');
    fun[params.length] = '_s';
    console.log('node 645');
    fun[params.length + 1] = '_k';
    console.log('node 646');
    fun[params.length + 2] = 'if(typeof _s === "undefined") _s = numeric.dim(' + thevec + ');\n' + 'if(typeof _k === "undefined") _k = 0;\n' + 'var _n = _s[_k];\n' + 'var i' + (haveret ? '' : ', ret = Array(_n)') + ';\n' + 'if(_k < _s.length-1) {\n' + '    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(' + params.join(',') + ',_s,_k+1);\n' + '    return ret;\n' + '}\n' + setup + '\n' + 'for(i=_n-1;i!==-1;--i) {\n' + '    ' + body + '\n' + '}\n' + 'return ret;';
    console.log('node 647');
    return Function.apply(null, fun);
};
console.log('node 4990');
numeric.pointwise2 = function pointwise2(params, body, setup) {
    console.log('node 650');
    if (typeof setup === 'undefined') {
        console.log('node 652');
        setup = '';
    } else {
        console.log('node 653');
        ;
    }
    console.log('node 654');
    var fun = [];
    console.log('node 655');
    var k;
    console.log('node 656');
    var avec = /\[i\]$/, p, thevec = '';
    console.log('node 657');
    var haveret = false;
    console.log('node 658');
    for (k = 0; k < params.length; k++) {
        console.log('node 660');
        if (avec.test(params[k])) {
            console.log('node 662');
            p = params[k].substring(0, params[k].length - 3);
            console.log('node 663');
            thevec = p;
        } else {
            console.log('node 664');
            p = params[k];
        }
        console.log('node 665');
        if (p === 'ret') {
            console.log('node 667');
            haveret = true;
        } else {
            console.log('node 668');
            ;
        }
        console.log('node 669');
        fun.push(p);
    }
    console.log('node 670');
    fun[params.length] = 'var _n = ' + thevec + '.length;\n' + 'var i' + (haveret ? '' : ', ret = Array(_n)') + ';\n' + setup + '\n' + 'for(i=_n-1;i!==-1;--i) {\n' + body + '\n' + '}\n' + 'return ret;';
    console.log('node 671');
    return Function.apply(null, fun);
};
console.log('node 4991');
numeric._biforeach = function _biforeach(x, y, s, k, f) {
    console.log('node 674');
    if (k === s.length - 1) {
        console.log('node 676');
        f(x, y);
        console.log('node 677');
        return;
    } else {
        console.log('node 678');
        ;
    }
    console.log('node 679');
    var i, n = s[k];
    console.log('node 680');
    for (i = n - 1; i >= 0; i--) {
        console.log('node 682');
        _biforeach(typeof x === 'object' ? x[i] : x, typeof y === 'object' ? y[i] : y, s, k + 1, f);
    }
};
console.log('node 4992');
numeric._biforeach2 = function _biforeach2(x, y, s, k, f) {
    console.log('node 685');
    if (k === s.length - 1) {
        console.log('node 687');
        return f(x, y);
    } else {
        console.log('node 688');
        ;
    }
    console.log('node 689');
    var i, n = s[k], ret = Array(n);
    console.log('node 690');
    for (i = n - 1; i >= 0; --i) {
        console.log('node 692');
        ret[i] = _biforeach2(typeof x === 'object' ? x[i] : x, typeof y === 'object' ? y[i] : y, s, k + 1, f);
    }
    console.log('node 693');
    return ret;
};
console.log('node 4993');
numeric._foreach = function _foreach(x, s, k, f) {
    console.log('node 696');
    if (k === s.length - 1) {
        console.log('node 698');
        f(x);
        console.log('node 699');
        return;
    } else {
        console.log('node 700');
        ;
    }
    console.log('node 701');
    var i, n = s[k];
    console.log('node 702');
    for (i = n - 1; i >= 0; i--) {
        console.log('node 704');
        _foreach(x[i], s, k + 1, f);
    }
};
console.log('node 4994');
numeric._foreach2 = function _foreach2(x, s, k, f) {
    console.log('node 707');
    if (k === s.length - 1) {
        console.log('node 709');
        return f(x);
    } else {
        console.log('node 710');
        ;
    }
    console.log('node 711');
    var i, n = s[k], ret = Array(n);
    console.log('node 712');
    for (i = n - 1; i >= 0; i--) {
        console.log('node 714');
        ret[i] = _foreach2(x[i], s, k + 1, f);
    }
    console.log('node 715');
    return ret;
};
console.log('node 4995');
numeric.ops2 = {
    add: '+',
    sub: '-',
    mul: '*',
    div: '/',
    mod: '%',
    and: '&&',
    or: '||',
    eq: '===',
    neq: '!==',
    lt: '<',
    gt: '>',
    leq: '<=',
    geq: '>=',
    band: '&',
    bor: '|',
    bxor: '^',
    lshift: '<<',
    rshift: '>>',
    rrshift: '>>>'
};
console.log('node 4996');
numeric.opseq = {
    addeq: '+=',
    subeq: '-=',
    muleq: '*=',
    diveq: '/=',
    modeq: '%=',
    lshifteq: '<<=',
    rshifteq: '>>=',
    rrshifteq: '>>>=',
    bandeq: '&=',
    boreq: '|=',
    bxoreq: '^='
};
console.log('node 4997');
numeric.mathfuns = [
    'abs',
    'acos',
    'asin',
    'atan',
    'ceil',
    'cos',
    'exp',
    'floor',
    'log',
    'round',
    'sin',
    'sqrt',
    'tan',
    'isNaN',
    'isFinite'
];
console.log('node 4998');
numeric.mathfuns2 = [
    'atan2',
    'pow',
    'max',
    'min'
];
console.log('node 4999');
numeric.ops1 = {
    neg: '-',
    not: '!',
    bnot: '~',
    clone: ''
};
console.log('node 5000');
numeric.mapreducers = {
    any: [
        'if(xi) return true;',
        'var accum = false;'
    ],
    all: [
        'if(!xi) return false;',
        'var accum = true;'
    ],
    sum: [
        'accum += xi;',
        'var accum = 0;'
    ],
    prod: [
        'accum *= xi;',
        'var accum = 1;'
    ],
    norm2Squared: [
        'accum += xi*xi;',
        'var accum = 0;'
    ],
    norminf: [
        'accum = max(accum,abs(xi));',
        'var accum = 0, max = Math.max, abs = Math.abs;'
    ],
    norm1: [
        'accum += abs(xi)',
        'var accum = 0, abs = Math.abs;'
    ],
    sup: [
        'accum = max(accum,xi);',
        'var accum = -Infinity, max = Math.max;'
    ],
    inf: [
        'accum = min(accum,xi);',
        'var accum = Infinity, min = Math.min;'
    ]
};
console.log('node 5001');
(function () {
    console.log('node 718');
    var i, o;
    console.log('node 719');
    for (i = 0; i < numeric.mathfuns2.length; ++i) {
        console.log('node 721');
        o = numeric.mathfuns2[i];
        console.log('node 722');
        numeric.ops2[o] = o;
    }
    console.log('node 723');
    for (i in numeric.ops2) {
        console.log('node 725');
        if (numeric.ops2.hasOwnProperty(i)) {
            console.log('node 727');
            o = numeric.ops2[i];
            console.log('node 728');
            var code, codeeq, setup = '';
            console.log('node 729');
            if (numeric.myIndexOf.call(numeric.mathfuns2, i) !== -1) {
                console.log('node 731');
                setup = 'var ' + o + ' = Math.' + o + ';\n';
                console.log('node 732');
                code = function (r, x, y) {
                    console.log('node 788');
                    return r + ' = ' + o + '(' + x + ',' + y + ')';
                };
                console.log('node 733');
                codeeq = function (x, y) {
                    console.log('node 791');
                    return x + ' = ' + o + '(' + x + ',' + y + ')';
                };
            } else {
                console.log('node 734');
                code = function (r, x, y) {
                    console.log('node 794');
                    return r + ' = ' + x + ' ' + o + ' ' + y;
                };
                console.log('node 735');
                if (numeric.opseq.hasOwnProperty(i + 'eq')) {
                    console.log('node 737');
                    codeeq = function (x, y) {
                        console.log('node 797');
                        return x + ' ' + o + '= ' + y;
                    };
                } else {
                    console.log('node 738');
                    codeeq = function (x, y) {
                        console.log('node 800');
                        return x + ' = ' + x + ' ' + o + ' ' + y;
                    };
                }
            }
            console.log('node 739');
            numeric[i + 'VV'] = numeric.pointwise2([
                'x[i]',
                'y[i]'
            ], code('ret[i]', 'x[i]', 'y[i]'), setup);
            console.log('node 740');
            numeric[i + 'SV'] = numeric.pointwise2([
                'x',
                'y[i]'
            ], code('ret[i]', 'x', 'y[i]'), setup);
            console.log('node 741');
            numeric[i + 'VS'] = numeric.pointwise2([
                'x[i]',
                'y'
            ], code('ret[i]', 'x[i]', 'y'), setup);
            console.log('node 742');
            numeric[i] = Function('var n = arguments.length, i, x = arguments[0], y;\n' + 'var VV = numeric.' + i + 'VV, VS = numeric.' + i + 'VS, SV = numeric.' + i + 'SV;\n' + 'var dim = numeric.dim;\n' + 'for(i=1;i!==n;++i) { \n' + '  y = arguments[i];\n' + '  if(typeof x === "object") {\n' + '      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n' + '      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n' + '  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n' + '  else ' + codeeq('x', 'y') + '\n' + '}\nreturn x;\n');
            console.log('node 743');
            numeric[o] = numeric[i];
            console.log('node 744');
            numeric[i + 'eqV'] = numeric.pointwise2([
                'ret[i]',
                'x[i]'
            ], codeeq('ret[i]', 'x[i]'), setup);
            console.log('node 745');
            numeric[i + 'eqS'] = numeric.pointwise2([
                'ret[i]',
                'x'
            ], codeeq('ret[i]', 'x'), setup);
            console.log('node 746');
            numeric[i + 'eq'] = Function('var n = arguments.length, i, x = arguments[0], y;\n' + 'var V = numeric.' + i + 'eqV, S = numeric.' + i + 'eqS\n' + 'var s = numeric.dim(x);\n' + 'for(i=1;i!==n;++i) { \n' + '  y = arguments[i];\n' + '  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n' + '  else numeric._biforeach(x,y,s,0,S);\n' + '}\nreturn x;\n');
        } else {
            console.log('node 747');
            ;
        }
    }
    console.log('node 748');
    for (i = 0; i < numeric.mathfuns2.length; ++i) {
        console.log('node 750');
        o = numeric.mathfuns2[i];
        console.log('node 751');
        delete numeric.ops2[o];
    }
    console.log('node 752');
    for (i = 0; i < numeric.mathfuns.length; ++i) {
        console.log('node 754');
        o = numeric.mathfuns[i];
        console.log('node 755');
        numeric.ops1[o] = o;
    }
    console.log('node 756');
    for (i in numeric.ops1) {
        console.log('node 758');
        if (numeric.ops1.hasOwnProperty(i)) {
            console.log('node 760');
            setup = '';
            console.log('node 761');
            o = numeric.ops1[i];
            console.log('node 762');
            if (numeric.myIndexOf.call(numeric.mathfuns, i) !== -1) {
                console.log('node 764');
                if (Math.hasOwnProperty(o)) {
                    console.log('node 766');
                    setup = 'var ' + o + ' = Math.' + o + ';\n';
                } else {
                    console.log('node 767');
                    ;
                }
            } else {
                console.log('node 768');
                ;
            }
            console.log('node 769');
            numeric[i + 'eqV'] = numeric.pointwise2(['ret[i]'], 'ret[i] = ' + o + '(ret[i]);', setup);
            console.log('node 770');
            numeric[i + 'eq'] = Function('x', 'if(typeof x !== "object") return ' + o + 'x\n' + 'var i;\n' + 'var V = numeric.' + i + 'eqV;\n' + 'var s = numeric.dim(x);\n' + 'numeric._foreach(x,s,0,V);\n' + 'return x;\n');
            console.log('node 771');
            numeric[i + 'V'] = numeric.pointwise2(['x[i]'], 'ret[i] = ' + o + '(x[i]);', setup);
            console.log('node 772');
            numeric[i] = Function('x', 'if(typeof x !== "object") return ' + o + '(x)\n' + 'var i;\n' + 'var V = numeric.' + i + 'V;\n' + 'var s = numeric.dim(x);\n' + 'return numeric._foreach2(x,s,0,V);\n');
        } else {
            console.log('node 773');
            ;
        }
    }
    console.log('node 774');
    for (i = 0; i < numeric.mathfuns.length; ++i) {
        console.log('node 776');
        o = numeric.mathfuns[i];
        console.log('node 777');
        delete numeric.ops1[o];
    }
    console.log('node 778');
    for (i in numeric.mapreducers) {
        console.log('node 780');
        if (numeric.mapreducers.hasOwnProperty(i)) {
            console.log('node 782');
            o = numeric.mapreducers[i];
            console.log('node 783');
            numeric[i + 'V'] = numeric.mapreduce2(o[0], o[1]);
            console.log('node 784');
            numeric[i] = Function('x', 's', 'k', o[1] + 'if(typeof x !== "object") {' + '    xi = x;\n' + o[0] + ';\n' + '    return accum;\n' + '}' + 'if(typeof s === "undefined") s = numeric.dim(x);\n' + 'if(typeof k === "undefined") k = 0;\n' + 'if(k === s.length-1) return numeric.' + i + 'V(x);\n' + 'var xi;\n' + 'var n = x.length, i;\n' + 'for(i=n-1;i!==-1;--i) {\n' + '   xi = arguments.callee(x[i]);\n' + o[0] + ';\n' + '}\n' + 'return accum;\n');
        } else {
            console.log('node 785');
            ;
        }
    }
}());
console.log('node 5002');
numeric.truncVV = numeric.pointwise([
    'x[i]',
    'y[i]'
], 'ret[i] = round(x[i]/y[i])*y[i];', 'var round = Math.round;');
console.log('node 5003');
numeric.truncVS = numeric.pointwise([
    'x[i]',
    'y'
], 'ret[i] = round(x[i]/y)*y;', 'var round = Math.round;');
console.log('node 5004');
numeric.truncSV = numeric.pointwise([
    'x',
    'y[i]'
], 'ret[i] = round(x/y[i])*y[i];', 'var round = Math.round;');
console.log('node 5005');
numeric.trunc = function trunc(x, y) {
    console.log('node 803');
    if (typeof x === 'object') {
        console.log('node 805');
        if (typeof y === 'object') {
            console.log('node 807');
            return numeric.truncVV(x, y);
        } else {
            console.log('node 808');
            ;
        }
        console.log('node 809');
        return numeric.truncVS(x, y);
    } else {
        console.log('node 810');
        ;
    }
    console.log('node 811');
    if (typeof y === 'object') {
        console.log('node 813');
        return numeric.truncSV(x, y);
    } else {
        console.log('node 814');
        ;
    }
    console.log('node 815');
    return Math.round(x / y) * y;
};
console.log('node 5006');
numeric.inv = function inv(x) {
    console.log('node 818');
    var s = numeric.dim(x), abs = Math.abs, m = s[0], n = s[1];
    console.log('node 819');
    var A = numeric.clone(x), Ai, Aj;
    console.log('node 820');
    var I = numeric.identity(m), Ii, Ij;
    console.log('node 821');
    var i, j, k, x;
    console.log('node 822');
    for (j = 0; j < n; ++j) {
        console.log('node 824');
        var i0 = -1;
        console.log('node 825');
        var v0 = -1;
        console.log('node 826');
        for (i = j; i !== m; ++i) {
            console.log('node 828');
            k = abs(A[i][j]);
            console.log('node 829');
            if (k > v0) {
                console.log('node 831');
                i0 = i;
                console.log('node 832');
                v0 = k;
            } else {
                console.log('node 833');
                ;
            }
        }
        console.log('node 834');
        Aj = A[i0];
        console.log('node 835');
        A[i0] = A[j];
        console.log('node 836');
        A[j] = Aj;
        console.log('node 837');
        Ij = I[i0];
        console.log('node 838');
        I[i0] = I[j];
        console.log('node 839');
        I[j] = Ij;
        console.log('node 840');
        x = Aj[j];
        console.log('node 841');
        for (k = j; k !== n; ++k) {
            console.log('node 843');
            Aj[k] /= x;
        }
        console.log('node 844');
        for (k = n - 1; k !== -1; --k) {
            console.log('node 846');
            Ij[k] /= x;
        }
        console.log('node 847');
        for (i = m - 1; i !== -1; --i) {
            console.log('node 849');
            if (i !== j) {
                console.log('node 851');
                Ai = A[i];
                console.log('node 852');
                Ii = I[i];
                console.log('node 853');
                x = Ai[j];
                console.log('node 854');
                for (k = j + 1; k !== n; ++k) {
                    console.log('node 856');
                    Ai[k] -= Aj[k] * x;
                }
                console.log('node 857');
                for (k = n - 1; k > 0; --k) {
                    console.log('node 859');
                    Ii[k] -= Ij[k] * x;
                    console.log('node 860');
                    --k;
                    console.log('node 861');
                    Ii[k] -= Ij[k] * x;
                }
                console.log('node 862');
                if (k === 0) {
                    console.log('node 864');
                    Ii[0] -= Ij[0] * x;
                } else {
                    console.log('node 865');
                    ;
                }
            } else {
                console.log('node 866');
                ;
            }
        }
    }
    console.log('node 867');
    return I;
};
console.log('node 5007');
numeric.det = function det(x) {
    console.log('node 870');
    var s = numeric.dim(x);
    console.log('node 871');
    if (s.length !== 2 || s[0] !== s[1]) {
        throw new Error('numeric: det() only works on square matrices');
    } else {
        console.log('node 873');
        ;
    }
    console.log('node 874');
    var n = s[0], ret = 1, i, j, k, A = numeric.clone(x), Aj, Ai, alpha, temp, k1, k2, k3;
    console.log('node 875');
    for (j = 0; j < n - 1; j++) {
        console.log('node 877');
        k = j;
        console.log('node 878');
        for (i = j + 1; i < n; i++) {
            console.log('node 880');
            if (Math.abs(A[i][j]) > Math.abs(A[k][j])) {
                console.log('node 882');
                k = i;
            } else {
                console.log('node 883');
                ;
            }
        }
        console.log('node 884');
        if (k !== j) {
            console.log('node 886');
            temp = A[k];
            console.log('node 887');
            A[k] = A[j];
            console.log('node 888');
            A[j] = temp;
            console.log('node 889');
            ret *= -1;
        } else {
            console.log('node 890');
            ;
        }
        console.log('node 891');
        Aj = A[j];
        console.log('node 892');
        for (i = j + 1; i < n; i++) {
            console.log('node 894');
            Ai = A[i];
            console.log('node 895');
            alpha = Ai[j] / Aj[j];
            console.log('node 896');
            for (k = j + 1; k < n - 1; k += 2) {
                console.log('node 898');
                k1 = k + 1;
                console.log('node 899');
                Ai[k] -= Aj[k] * alpha;
                console.log('node 900');
                Ai[k1] -= Aj[k1] * alpha;
            }
            console.log('node 901');
            if (k !== n) {
                console.log('node 903');
                Ai[k] -= Aj[k] * alpha;
            } else {
                console.log('node 904');
                ;
            }
        }
        console.log('node 905');
        if (Aj[j] === 0) {
            console.log('node 907');
            return 0;
        } else {
            console.log('node 908');
            ;
        }
        console.log('node 909');
        ret *= Aj[j];
    }
    console.log('node 910');
    return ret * A[j][j];
};
console.log('node 5008');
numeric.transpose = function transpose(x) {
    console.log('node 913');
    var i, j, m = x.length, n = x[0].length, ret = Array(n), A0, A1, Bj;
    console.log('node 914');
    for (j = 0; j < n; j++) {
        console.log('node 916');
        ret[j] = Array(m);
    }
    console.log('node 917');
    for (i = m - 1; i >= 1; i -= 2) {
        console.log('node 919');
        A1 = x[i];
        console.log('node 920');
        A0 = x[i - 1];
        console.log('node 921');
        for (j = n - 1; j >= 1; --j) {
            console.log('node 923');
            Bj = ret[j];
            console.log('node 924');
            Bj[i] = A1[j];
            console.log('node 925');
            Bj[i - 1] = A0[j];
            console.log('node 926');
            --j;
            console.log('node 927');
            Bj = ret[j];
            console.log('node 928');
            Bj[i] = A1[j];
            console.log('node 929');
            Bj[i - 1] = A0[j];
        }
        console.log('node 930');
        if (j === 0) {
            console.log('node 932');
            Bj = ret[0];
            console.log('node 933');
            Bj[i] = A1[0];
            console.log('node 934');
            Bj[i - 1] = A0[0];
        } else {
            console.log('node 935');
            ;
        }
    }
    console.log('node 936');
    if (i === 0) {
        console.log('node 938');
        A0 = x[0];
        console.log('node 939');
        for (j = n - 1; j >= 1; --j) {
            console.log('node 941');
            ret[j][0] = A0[j];
            console.log('node 942');
            --j;
            console.log('node 943');
            ret[j][0] = A0[j];
        }
        console.log('node 944');
        if (j === 0) {
            console.log('node 946');
            ret[0][0] = A0[0];
        } else {
            console.log('node 947');
            ;
        }
    } else {
        console.log('node 948');
        ;
    }
    console.log('node 949');
    return ret;
};
console.log('node 5009');
numeric.negtranspose = function negtranspose(x) {
    console.log('node 952');
    var i, j, m = x.length, n = x[0].length, ret = Array(n), A0, A1, Bj;
    console.log('node 953');
    for (j = 0; j < n; j++) {
        console.log('node 955');
        ret[j] = Array(m);
    }
    console.log('node 956');
    for (i = m - 1; i >= 1; i -= 2) {
        console.log('node 958');
        A1 = x[i];
        console.log('node 959');
        A0 = x[i - 1];
        console.log('node 960');
        for (j = n - 1; j >= 1; --j) {
            console.log('node 962');
            Bj = ret[j];
            console.log('node 963');
            Bj[i] = -A1[j];
            console.log('node 964');
            Bj[i - 1] = -A0[j];
            console.log('node 965');
            --j;
            console.log('node 966');
            Bj = ret[j];
            console.log('node 967');
            Bj[i] = -A1[j];
            console.log('node 968');
            Bj[i - 1] = -A0[j];
        }
        console.log('node 969');
        if (j === 0) {
            console.log('node 971');
            Bj = ret[0];
            console.log('node 972');
            Bj[i] = -A1[0];
            console.log('node 973');
            Bj[i - 1] = -A0[0];
        } else {
            console.log('node 974');
            ;
        }
    }
    console.log('node 975');
    if (i === 0) {
        console.log('node 977');
        A0 = x[0];
        console.log('node 978');
        for (j = n - 1; j >= 1; --j) {
            console.log('node 980');
            ret[j][0] = -A0[j];
            console.log('node 981');
            --j;
            console.log('node 982');
            ret[j][0] = -A0[j];
        }
        console.log('node 983');
        if (j === 0) {
            console.log('node 985');
            ret[0][0] = -A0[0];
        } else {
            console.log('node 986');
            ;
        }
    } else {
        console.log('node 987');
        ;
    }
    console.log('node 988');
    return ret;
};
console.log('node 5010');
numeric._random = function _random(s, k) {
    console.log('node 991');
    var i, n = s[k], ret = Array(n), rnd;
    console.log('node 992');
    if (k === s.length - 1) {
        console.log('node 994');
        rnd = Math.random;
        console.log('node 995');
        for (i = n - 1; i >= 1; i -= 2) {
            console.log('node 997');
            ret[i] = rnd();
            console.log('node 998');
            ret[i - 1] = rnd();
        }
        console.log('node 999');
        if (i === 0) {
            console.log('node 1001');
            ret[0] = rnd();
        } else {
            console.log('node 1002');
            ;
        }
        console.log('node 1003');
        return ret;
    } else {
        console.log('node 1004');
        ;
    }
    console.log('node 1005');
    for (i = n - 1; i >= 0; i--) {
        console.log('node 1007');
        ret[i] = _random(s, k + 1);
    }
    console.log('node 1008');
    return ret;
};
console.log('node 5011');
numeric.random = function random(s) {
    console.log('node 1011');
    return numeric._random(s, 0);
};
console.log('node 5012');
numeric.norm2 = function norm2(x) {
    console.log('node 1014');
    return Math.sqrt(numeric.norm2Squared(x));
};
console.log('node 5013');
numeric.linspace = function linspace(a, b, n) {
    console.log('node 1017');
    if (typeof n === 'undefined') {
        console.log('node 1019');
        n = Math.max(Math.round(b - a) + 1, 1);
    } else {
        console.log('node 1020');
        ;
    }
    console.log('node 1021');
    if (n < 2) {
        console.log('node 1023');
        return n === 1 ? [a] : [];
    } else {
        console.log('node 1024');
        ;
    }
    console.log('node 1025');
    var i, ret = Array(n);
    console.log('node 1026');
    n--;
    console.log('node 1027');
    for (i = n; i >= 0; i--) {
        console.log('node 1029');
        ret[i] = (i * b + (n - i) * a) / n;
    }
    console.log('node 1030');
    return ret;
};
console.log('node 5014');
numeric.getBlock = function getBlock(x, from, to) {
    console.log('node 1047');
    var s = numeric.dim(x);
    console.log('node -1');
    function foo(x, k) {
        console.log('node 1035');
        var i, a = from[k], n = to[k] - a, ret = Array(n);
        console.log('node 1036');
        if (k === s.length - 1) {
            console.log('node 1038');
            for (i = n; i >= 0; i--) {
                console.log('node 1040');
                ret[i] = x[i + a];
            }
            console.log('node 1041');
            return ret;
        } else {
            console.log('node 1042');
            ;
        }
        console.log('node 1043');
        for (i = n; i >= 0; i--) {
            console.log('node 1045');
            ret[i] = foo(x[i + a], k + 1);
        }
        console.log('node 1046');
        return ret;
    }
    console.log('node 1048');
    return foo(x, 0);
};
console.log('node 5015');
numeric.setBlock = function setBlock(x, from, to, B) {
    console.log('node 1063');
    var s = numeric.dim(x);
    console.log('node -1');
    function foo(x, y, k) {
        console.log('node 1053');
        var i, a = from[k], n = to[k] - a;
        console.log('node 1054');
        if (k === s.length - 1) {
            console.log('node 1056');
            for (i = n; i >= 0; i--) {
                console.log('node 1058');
                x[i + a] = y[i];
            }
        } else {
            console.log('node 1059');
            ;
        }
        console.log('node 1060');
        for (i = n; i >= 0; i--) {
            console.log('node 1062');
            foo(x[i + a], y[i], k + 1);
        }
    }
    console.log('node 1064');
    foo(x, B, 0);
    console.log('node 1065');
    return x;
};
console.log('node 5016');
numeric.getRange = function getRange(A, I, J) {
    console.log('node 1068');
    var m = I.length, n = J.length;
    console.log('node 1069');
    var i, j;
    console.log('node 1070');
    var B = Array(m), Bi, AI;
    console.log('node 1071');
    for (i = m - 1; i !== -1; --i) {
        console.log('node 1073');
        B[i] = Array(n);
        console.log('node 1074');
        Bi = B[i];
        console.log('node 1075');
        AI = A[I[i]];
        console.log('node 1076');
        for (j = n - 1; j !== -1; --j) {
            console.log('node 1078');
            Bi[j] = AI[J[j]];
        }
    }
    console.log('node 1079');
    return B;
};
console.log('node 5017');
numeric.blockMatrix = function blockMatrix(X) {
    console.log('node 1082');
    var s = numeric.dim(X);
    console.log('node 1083');
    if (s.length < 4) {
        console.log('node 1085');
        return numeric.blockMatrix([X]);
    } else {
        console.log('node 1086');
        ;
    }
    console.log('node 1087');
    var m = s[0], n = s[1], M, N, i, j, Xij;
    console.log('node 1088');
    M = 0;
    console.log('node 1089');
    N = 0;
    console.log('node 1090');
    for (i = 0; i < m; ++i) {
        console.log('node 1092');
        M += X[i][0].length;
    }
    console.log('node 1093');
    for (j = 0; j < n; ++j) {
        console.log('node 1095');
        N += X[0][j][0].length;
    }
    console.log('node 1096');
    var Z = Array(M);
    console.log('node 1097');
    for (i = 0; i < M; ++i) {
        console.log('node 1099');
        Z[i] = Array(N);
    }
    console.log('node 1100');
    var I = 0, J, ZI, k, l, Xijk;
    console.log('node 1101');
    for (i = 0; i < m; ++i) {
        console.log('node 1103');
        J = N;
        console.log('node 1104');
        for (j = n - 1; j !== -1; --j) {
            console.log('node 1106');
            Xij = X[i][j];
            console.log('node 1107');
            J -= Xij[0].length;
            console.log('node 1108');
            for (k = Xij.length - 1; k !== -1; --k) {
                console.log('node 1110');
                Xijk = Xij[k];
                console.log('node 1111');
                ZI = Z[I + k];
                console.log('node 1112');
                for (l = Xijk.length - 1; l !== -1; --l) {
                    console.log('node 1114');
                    ZI[J + l] = Xijk[l];
                }
            }
        }
        console.log('node 1115');
        I += X[i][0].length;
    }
    console.log('node 1116');
    return Z;
};
console.log('node 5018');
numeric.tensor = function tensor(x, y) {
    console.log('node 1119');
    if (typeof x === 'number' || typeof y === 'number') {
        console.log('node 1121');
        return numeric.mul(x, y);
    } else {
        console.log('node 1122');
        ;
    }
    console.log('node 1123');
    var s1 = numeric.dim(x), s2 = numeric.dim(y);
    console.log('node 1124');
    if (s1.length !== 1 || s2.length !== 1) {
        throw new Error('numeric: tensor product is only defined for vectors');
    } else {
        console.log('node 1126');
        ;
    }
    console.log('node 1127');
    var m = s1[0], n = s2[0], A = Array(m), Ai, i, j, xi;
    console.log('node 1128');
    for (i = m - 1; i >= 0; i--) {
        console.log('node 1130');
        Ai = Array(n);
        console.log('node 1131');
        xi = x[i];
        console.log('node 1132');
        for (j = n - 1; j >= 3; --j) {
            console.log('node 1134');
            Ai[j] = xi * y[j];
            console.log('node 1135');
            --j;
            console.log('node 1136');
            Ai[j] = xi * y[j];
            console.log('node 1137');
            --j;
            console.log('node 1138');
            Ai[j] = xi * y[j];
            console.log('node 1139');
            --j;
            console.log('node 1140');
            Ai[j] = xi * y[j];
        }
        console.log('node 1141');
        while (j >= 0) {
            console.log('node 1143');
            Ai[j] = xi * y[j];
            console.log('node 1144');
            --j;
        }
        console.log('node 1145');
        A[i] = Ai;
    }
    console.log('node 1146');
    return A;
};
console.log('node 5019');
numeric.T = function T(x, y) {
    console.log('node 1149');
    this.x = x;
    console.log('node 1150');
    this.y = y;
};
console.log('node 5020');
numeric.t = function t(x, y) {
    console.log('node 1153');
    return new numeric.T(x, y);
};
console.log('node 5021');
numeric.Tbinop = function Tbinop(rr, rc, cr, cc, setup) {
    console.log('node 1156');
    var io = numeric.indexOf;
    console.log('node 1157');
    if (typeof setup !== 'string') {
        console.log('node 1159');
        var k;
        console.log('node 1160');
        setup = '';
        console.log('node 1161');
        for (k in numeric) {
            console.log('node 1163');
            if (numeric.hasOwnProperty(k) && (rr.indexOf(k) >= 0 || rc.indexOf(k) >= 0 || cr.indexOf(k) >= 0 || cc.indexOf(k) >= 0) && k.length > 1) {
                console.log('node 1165');
                setup += 'var ' + k + ' = numeric.' + k + ';\n';
            } else {
                console.log('node 1166');
                ;
            }
        }
    } else {
        console.log('node 1167');
        ;
    }
    console.log('node 1168');
    return Function(['y'], 'var x = this;\n' + 'if(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n' + setup + '\n' + 'if(x.y) {' + '  if(y.y) {' + '    return new numeric.T(' + cc + ');\n' + '  }\n' + '  return new numeric.T(' + cr + ');\n' + '}\n' + 'if(y.y) {\n' + '  return new numeric.T(' + rc + ');\n' + '}\n' + 'return new numeric.T(' + rr + ');\n');
};
console.log('node 5022');
numeric.T.prototype.add = numeric.Tbinop('add(x.x,y.x)', 'add(x.x,y.x),y.y', 'add(x.x,y.x),x.y', 'add(x.x,y.x),add(x.y,y.y)');
console.log('node 5023');
numeric.T.prototype.sub = numeric.Tbinop('sub(x.x,y.x)', 'sub(x.x,y.x),neg(y.y)', 'sub(x.x,y.x),x.y', 'sub(x.x,y.x),sub(x.y,y.y)');
console.log('node 5024');
numeric.T.prototype.mul = numeric.Tbinop('mul(x.x,y.x)', 'mul(x.x,y.x),mul(x.x,y.y)', 'mul(x.x,y.x),mul(x.y,y.x)', 'sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))');
console.log('node 5025');
numeric.T.prototype.reciprocal = function reciprocal() {
    console.log('node 1171');
    var mul = numeric.mul, div = numeric.div;
    console.log('node 1172');
    if (this.y) {
        console.log('node 1174');
        var d = numeric.add(mul(this.x, this.x), mul(this.y, this.y));
        console.log('node 1175');
        return new numeric.T(div(this.x, d), div(numeric.neg(this.y), d));
    } else {
        console.log('node 1176');
        ;
    }
    console.log('node 1177');
    return new T(div(1, this.x));
};
console.log('node 5026');
numeric.T.prototype.div = function div(y) {
    console.log('node 1180');
    if (!(y instanceof numeric.T)) {
        console.log('node 1182');
        y = new numeric.T(y);
    } else {
        console.log('node 1183');
        ;
    }
    console.log('node 1184');
    if (y.y) {
        console.log('node 1186');
        return this.mul(y.reciprocal());
    } else {
        console.log('node 1187');
        ;
    }
    console.log('node 1188');
    var div = numeric.div;
    console.log('node 1189');
    if (this.y) {
        console.log('node 1191');
        return new numeric.T(div(this.x, y.x), div(this.y, y.x));
    } else {
        console.log('node 1192');
        ;
    }
    console.log('node 1193');
    return new numeric.T(div(this.x, y.x));
};
console.log('node 5027');
numeric.T.prototype.dot = numeric.Tbinop('dot(x.x,y.x)', 'dot(x.x,y.x),dot(x.x,y.y)', 'dot(x.x,y.x),dot(x.y,y.x)', 'sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))');
console.log('node 5028');
numeric.T.prototype.transpose = function transpose() {
    console.log('node 1196');
    var t = numeric.transpose, x = this.x, y = this.y;
    console.log('node 1197');
    if (y) {
        console.log('node 1199');
        return new numeric.T(t(x), t(y));
    } else {
        console.log('node 1200');
        ;
    }
    console.log('node 1201');
    return new numeric.T(t(x));
};
console.log('node 5029');
numeric.T.prototype.transjugate = function transjugate() {
    console.log('node 1204');
    var t = numeric.transpose, x = this.x, y = this.y;
    console.log('node 1205');
    if (y) {
        console.log('node 1207');
        return new numeric.T(t(x), numeric.negtranspose(y));
    } else {
        console.log('node 1208');
        ;
    }
    console.log('node 1209');
    return new numeric.T(t(x));
};
console.log('node 5030');
numeric.Tunop = function Tunop(r, c, s) {
    console.log('node 1212');
    if (typeof s !== 'string') {
        console.log('node 1214');
        s = '';
    } else {
        console.log('node 1215');
        ;
    }
    console.log('node 1216');
    return Function('var x = this;\n' + s + '\n' + 'if(x.y) {' + '  ' + c + ';\n' + '}\n' + r + ';\n');
};
console.log('node 5031');
numeric.T.prototype.exp = numeric.Tunop('return new numeric.T(ex)', 'return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))', 'var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;');
console.log('node 5032');
numeric.T.prototype.conj = numeric.Tunop('return new numeric.T(x.x);', 'return new numeric.T(x.x,numeric.neg(x.y));');
console.log('node 5033');
numeric.T.prototype.neg = numeric.Tunop('return new numeric.T(neg(x.x));', 'return new numeric.T(neg(x.x),neg(x.y));', 'var neg = numeric.neg;');
console.log('node 5034');
numeric.T.prototype.sin = numeric.Tunop('return new numeric.T(numeric.sin(x.x))', 'return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));');
console.log('node 5035');
numeric.T.prototype.cos = numeric.Tunop('return new numeric.T(numeric.cos(x.x))', 'return x.exp().add(x.neg().exp()).div(2);');
console.log('node 5036');
numeric.T.prototype.abs = numeric.Tunop('return new numeric.T(numeric.abs(x.x));', 'return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));', 'var mul = numeric.mul;');
console.log('node 5037');
numeric.T.prototype.log = numeric.Tunop('return new numeric.T(numeric.log(x.x));', 'var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\n' + 'return new numeric.T(numeric.log(r.x),theta.x);');
console.log('node 5038');
numeric.T.prototype.norm2 = numeric.Tunop('return numeric.norm2(x.x);', 'var f = numeric.norm2Squared;\n' + 'return Math.sqrt(f(x.x)+f(x.y));');
console.log('node 5039');
numeric.T.prototype.inv = function inv() {
    console.log('node 1219');
    var A = this;
    console.log('node 1220');
    if (typeof A.y === 'undefined') {
        console.log('node 1222');
        return new numeric.T(numeric.inv(A.x));
    } else {
        console.log('node 1223');
        ;
    }
    console.log('node 1224');
    var n = A.x.length, i, j, k;
    console.log('node 1225');
    var Rx = numeric.identity(n), Ry = numeric.rep([
            n,
            n
        ], 0);
    console.log('node 1226');
    var Ax = numeric.clone(A.x), Ay = numeric.clone(A.y);
    console.log('node 1227');
    var Aix, Aiy, Ajx, Ajy, Rix, Riy, Rjx, Rjy;
    console.log('node 1228');
    var i, j, k, d, d1, ax, ay, bx, by, temp;
    console.log('node 1229');
    for (i = 0; i < n; i++) {
        console.log('node 1231');
        ax = Ax[i][i];
        console.log('node 1232');
        ay = Ay[i][i];
        console.log('node 1233');
        d = ax * ax + ay * ay;
        console.log('node 1234');
        k = i;
        console.log('node 1235');
        for (j = i + 1; j < n; j++) {
            console.log('node 1237');
            ax = Ax[j][i];
            console.log('node 1238');
            ay = Ay[j][i];
            console.log('node 1239');
            d1 = ax * ax + ay * ay;
            console.log('node 1240');
            if (d1 > d) {
                console.log('node 1242');
                k = j;
                console.log('node 1243');
                d = d1;
            } else {
                console.log('node 1244');
                ;
            }
        }
        console.log('node 1245');
        if (k !== i) {
            console.log('node 1247');
            temp = Ax[i];
            console.log('node 1248');
            Ax[i] = Ax[k];
            console.log('node 1249');
            Ax[k] = temp;
            console.log('node 1250');
            temp = Ay[i];
            console.log('node 1251');
            Ay[i] = Ay[k];
            console.log('node 1252');
            Ay[k] = temp;
            console.log('node 1253');
            temp = Rx[i];
            console.log('node 1254');
            Rx[i] = Rx[k];
            console.log('node 1255');
            Rx[k] = temp;
            console.log('node 1256');
            temp = Ry[i];
            console.log('node 1257');
            Ry[i] = Ry[k];
            console.log('node 1258');
            Ry[k] = temp;
        } else {
            console.log('node 1259');
            ;
        }
        console.log('node 1260');
        Aix = Ax[i];
        console.log('node 1261');
        Aiy = Ay[i];
        console.log('node 1262');
        Rix = Rx[i];
        console.log('node 1263');
        Riy = Ry[i];
        console.log('node 1264');
        ax = Aix[i];
        console.log('node 1265');
        ay = Aiy[i];
        console.log('node 1266');
        for (j = i + 1; j < n; j++) {
            console.log('node 1268');
            bx = Aix[j];
            console.log('node 1269');
            by = Aiy[j];
            console.log('node 1270');
            Aix[j] = (bx * ax + by * ay) / d;
            console.log('node 1271');
            Aiy[j] = (by * ax - bx * ay) / d;
        }
        console.log('node 1272');
        for (j = 0; j < n; j++) {
            console.log('node 1274');
            bx = Rix[j];
            console.log('node 1275');
            by = Riy[j];
            console.log('node 1276');
            Rix[j] = (bx * ax + by * ay) / d;
            console.log('node 1277');
            Riy[j] = (by * ax - bx * ay) / d;
        }
        console.log('node 1278');
        for (j = i + 1; j < n; j++) {
            console.log('node 1280');
            Ajx = Ax[j];
            console.log('node 1281');
            Ajy = Ay[j];
            console.log('node 1282');
            Rjx = Rx[j];
            console.log('node 1283');
            Rjy = Ry[j];
            console.log('node 1284');
            ax = Ajx[i];
            console.log('node 1285');
            ay = Ajy[i];
            console.log('node 1286');
            for (k = i + 1; k < n; k++) {
                console.log('node 1288');
                bx = Aix[k];
                console.log('node 1289');
                by = Aiy[k];
                console.log('node 1290');
                Ajx[k] -= bx * ax - by * ay;
                console.log('node 1291');
                Ajy[k] -= by * ax + bx * ay;
            }
            console.log('node 1292');
            for (k = 0; k < n; k++) {
                console.log('node 1294');
                bx = Rix[k];
                console.log('node 1295');
                by = Riy[k];
                console.log('node 1296');
                Rjx[k] -= bx * ax - by * ay;
                console.log('node 1297');
                Rjy[k] -= by * ax + bx * ay;
            }
        }
    }
    console.log('node 1298');
    for (i = n - 1; i > 0; i--) {
        console.log('node 1300');
        Rix = Rx[i];
        console.log('node 1301');
        Riy = Ry[i];
        console.log('node 1302');
        for (j = i - 1; j >= 0; j--) {
            console.log('node 1304');
            Rjx = Rx[j];
            console.log('node 1305');
            Rjy = Ry[j];
            console.log('node 1306');
            ax = Ax[j][i];
            console.log('node 1307');
            ay = Ay[j][i];
            console.log('node 1308');
            for (k = n - 1; k >= 0; k--) {
                console.log('node 1310');
                bx = Rix[k];
                console.log('node 1311');
                by = Riy[k];
                console.log('node 1312');
                Rjx[k] -= ax * bx - ay * by;
                console.log('node 1313');
                Rjy[k] -= ax * by + ay * bx;
            }
        }
    }
    console.log('node 1314');
    return new numeric.T(Rx, Ry);
};
console.log('node 5040');
numeric.T.prototype.get = function get(i) {
    console.log('node 1317');
    var x = this.x, y = this.y, k = 0, ik, n = i.length;
    console.log('node 1318');
    if (y) {
        console.log('node 1320');
        while (k < n) {
            console.log('node 1322');
            ik = i[k];
            console.log('node 1323');
            x = x[ik];
            console.log('node 1324');
            y = y[ik];
            console.log('node 1325');
            k++;
        }
        console.log('node 1326');
        return new numeric.T(x, y);
    } else {
        console.log('node 1327');
        ;
    }
    console.log('node 1328');
    while (k < n) {
        console.log('node 1330');
        ik = i[k];
        console.log('node 1331');
        x = x[ik];
        console.log('node 1332');
        k++;
    }
    console.log('node 1333');
    return new numeric.T(x);
};
console.log('node 5041');
numeric.T.prototype.set = function set(i, v) {
    console.log('node 1336');
    var x = this.x, y = this.y, k = 0, ik, n = i.length, vx = v.x, vy = v.y;
    console.log('node 1337');
    if (n === 0) {
        console.log('node 1339');
        if (vy) {
            console.log('node 1341');
            this.y = vy;
        } else {
            console.log('node 1342');
            if (y) {
                console.log('node 1344');
                this.y = undefined;
            } else {
                console.log('node 1345');
                ;
            }
        }
        console.log('node 1346');
        this.x = x;
        console.log('node 1347');
        return this;
    } else {
        console.log('node 1348');
        ;
    }
    console.log('node 1349');
    if (vy) {
        console.log('node 1351');
        if (y) {
        } else {
            console.log('node 1353');
            y = numeric.rep(numeric.dim(x), 0);
            console.log('node 1354');
            this.y = y;
        }
        console.log('node 1355');
        while (k < n - 1) {
            console.log('node 1357');
            ik = i[k];
            console.log('node 1358');
            x = x[ik];
            console.log('node 1359');
            y = y[ik];
            console.log('node 1360');
            k++;
        }
        console.log('node 1361');
        ik = i[k];
        console.log('node 1362');
        x[ik] = vx;
        console.log('node 1363');
        y[ik] = vy;
        console.log('node 1364');
        return this;
    } else {
        console.log('node 1365');
        ;
    }
    console.log('node 1366');
    if (y) {
        console.log('node 1368');
        while (k < n - 1) {
            console.log('node 1370');
            ik = i[k];
            console.log('node 1371');
            x = x[ik];
            console.log('node 1372');
            y = y[ik];
            console.log('node 1373');
            k++;
        }
        console.log('node 1374');
        ik = i[k];
        console.log('node 1375');
        x[ik] = vx;
        console.log('node 1376');
        if (vx instanceof Array) {
            console.log('node 1378');
            y[ik] = numeric.rep(numeric.dim(vx), 0);
        } else {
            console.log('node 1379');
            y[ik] = 0;
        }
        console.log('node 1380');
        return this;
    } else {
        console.log('node 1381');
        ;
    }
    console.log('node 1382');
    while (k < n - 1) {
        console.log('node 1384');
        ik = i[k];
        console.log('node 1385');
        x = x[ik];
        console.log('node 1386');
        k++;
    }
    console.log('node 1387');
    ik = i[k];
    console.log('node 1388');
    x[ik] = vx;
    console.log('node 1389');
    return this;
};
console.log('node 5042');
numeric.T.prototype.getRows = function getRows(i0, i1) {
    console.log('node 1392');
    var n = i1 - i0 + 1, j;
    console.log('node 1393');
    var rx = Array(n), ry, x = this.x, y = this.y;
    console.log('node 1394');
    for (j = i0; j <= i1; j++) {
        console.log('node 1396');
        rx[j - i0] = x[j];
    }
    console.log('node 1397');
    if (y) {
        console.log('node 1399');
        ry = Array(n);
        console.log('node 1400');
        for (j = i0; j <= i1; j++) {
            console.log('node 1402');
            ry[j - i0] = y[j];
        }
        console.log('node 1403');
        return new numeric.T(rx, ry);
    } else {
        console.log('node 1404');
        ;
    }
    console.log('node 1405');
    return new numeric.T(rx);
};
console.log('node 5043');
numeric.T.prototype.setRows = function setRows(i0, i1, A) {
    console.log('node 1408');
    var j;
    console.log('node 1409');
    var rx = this.x, ry = this.y, x = A.x, y = A.y;
    console.log('node 1410');
    for (j = i0; j <= i1; j++) {
        console.log('node 1412');
        rx[j] = x[j - i0];
    }
    console.log('node 1413');
    if (y) {
        console.log('node 1415');
        if (!ry) {
            console.log('node 1417');
            ry = numeric.rep(numeric.dim(rx), 0);
            console.log('node 1418');
            this.y = ry;
        } else {
            console.log('node 1419');
            ;
        }
        console.log('node 1420');
        for (j = i0; j <= i1; j++) {
            console.log('node 1422');
            ry[j] = y[j - i0];
        }
    } else {
        console.log('node 1423');
        if (ry) {
            console.log('node 1425');
            for (j = i0; j <= i1; j++) {
                console.log('node 1427');
                ry[j] = numeric.rep([x[j - i0].length], 0);
            }
        } else {
            console.log('node 1428');
            ;
        }
    }
    console.log('node 1429');
    return this;
};
console.log('node 5044');
numeric.T.prototype.getRow = function getRow(k) {
    console.log('node 1432');
    var x = this.x, y = this.y;
    console.log('node 1433');
    if (y) {
        console.log('node 1435');
        return new numeric.T(x[k], y[k]);
    } else {
        console.log('node 1436');
        ;
    }
    console.log('node 1437');
    return new numeric.T(x[k]);
};
console.log('node 5045');
numeric.T.prototype.setRow = function setRow(i, v) {
    console.log('node 1440');
    var rx = this.x, ry = this.y, x = v.x, y = v.y;
    console.log('node 1441');
    rx[i] = x;
    console.log('node 1442');
    if (y) {
        console.log('node 1444');
        if (!ry) {
            console.log('node 1446');
            ry = numeric.rep(numeric.dim(rx), 0);
            console.log('node 1447');
            this.y = ry;
        } else {
            console.log('node 1448');
            ;
        }
        console.log('node 1449');
        ry[i] = y;
    } else {
        console.log('node 1450');
        if (ry) {
            console.log('node 1452');
            ry = numeric.rep([x.length], 0);
        } else {
            console.log('node 1453');
            ;
        }
    }
    console.log('node 1454');
    return this;
};
console.log('node 5046');
numeric.T.prototype.getBlock = function getBlock(from, to) {
    console.log('node 1457');
    var x = this.x, y = this.y, b = numeric.getBlock;
    console.log('node 1458');
    if (y) {
        console.log('node 1460');
        return new numeric.T(b(x, from, to), b(y, from, to));
    } else {
        console.log('node 1461');
        ;
    }
    console.log('node 1462');
    return new numeric.T(b(x, from, to));
};
console.log('node 5047');
numeric.T.prototype.setBlock = function setBlock(from, to, A) {
    console.log('node 1465');
    if (!(A instanceof numeric.T)) {
        console.log('node 1467');
        A = new numeric.T(A);
    } else {
        console.log('node 1468');
        ;
    }
    console.log('node 1469');
    var x = this.x, y = this.y, b = numeric.setBlock, Ax = A.x, Ay = A.y;
    console.log('node 1470');
    if (Ay) {
        console.log('node 1472');
        if (!y) {
            console.log('node 1474');
            this.y = numeric.rep(numeric.dim(this), 0);
            console.log('node 1475');
            y = this.y;
        } else {
            console.log('node 1476');
            ;
        }
        console.log('node 1477');
        b(x, from, to, Ax);
        console.log('node 1478');
        b(y, from, to, Ay);
        console.log('node 1479');
        return this;
    } else {
        console.log('node 1480');
        ;
    }
    console.log('node 1481');
    b(x, from, to, Ax);
    console.log('node 1482');
    if (y) {
        console.log('node 1484');
        b(y, from, to, numeric.rep(numeric.dim(Ax), 0));
    } else {
        console.log('node 1485');
        ;
    }
};
console.log('node 5048');
numeric.T.rep = function rep(s, v) {
    console.log('node 1488');
    var T = numeric.T;
    console.log('node 1489');
    if (!(v instanceof T)) {
        console.log('node 1491');
        v = new T(v);
    } else {
        console.log('node 1492');
        ;
    }
    console.log('node 1493');
    var x = v.x, y = v.y, r = numeric.rep;
    console.log('node 1494');
    if (y) {
        console.log('node 1496');
        return new T(r(s, x), r(s, y));
    } else {
        console.log('node 1497');
        ;
    }
    console.log('node 1498');
    return new T(r(s, x));
};
console.log('node 5049');
numeric.T.diag = function diag(d) {
    console.log('node 1501');
    if (!(d instanceof numeric.T)) {
        console.log('node 1503');
        d = new numeric.T(d);
    } else {
        console.log('node 1504');
        ;
    }
    console.log('node 1505');
    var x = d.x, y = d.y, diag = numeric.diag;
    console.log('node 1506');
    if (y) {
        console.log('node 1508');
        return new numeric.T(diag(x), diag(y));
    } else {
        console.log('node 1509');
        ;
    }
    console.log('node 1510');
    return new numeric.T(diag(x));
};
console.log('node 5050');
numeric.T.eig = function eig() {
    console.log('node 1513');
    if (this.y) {
        throw new Error('eig: not implemented for complex matrices.');
    } else {
        console.log('node 1515');
        ;
    }
    console.log('node 1516');
    return numeric.eig(this.x);
};
console.log('node 5051');
numeric.T.identity = function identity(n) {
    console.log('node 1519');
    return new numeric.T(numeric.identity(n));
};
console.log('node 5052');
numeric.T.prototype.getDiag = function getDiag() {
    console.log('node 1522');
    var n = numeric;
    console.log('node 1523');
    var x = this.x, y = this.y;
    console.log('node 1524');
    if (y) {
        console.log('node 1526');
        return new n.T(n.getDiag(x), n.getDiag(y));
    } else {
        console.log('node 1527');
        ;
    }
    console.log('node 1528');
    return new n.T(n.getDiag(x));
};
console.log('node 5053');
numeric.house = function house(x) {
    console.log('node 1531');
    var v = numeric.clone(x);
    console.log('node 1532');
    var s = x[0] >= 0 ? 1 : -1;
    console.log('node 1533');
    var alpha = s * numeric.norm2(x);
    console.log('node 1534');
    v[0] += alpha;
    console.log('node 1535');
    var foo = numeric.norm2(v);
    console.log('node 1536');
    if (foo === 0) {
        throw new Error('eig: internal error');
    } else {
        console.log('node 1538');
        ;
    }
    console.log('node 1539');
    return numeric.div(v, foo);
};
console.log('node 5054');
numeric.toUpperHessenberg = function toUpperHessenberg(me) {
    console.log('node 1542');
    var s = numeric.dim(me);
    console.log('node 1543');
    if (s.length !== 2 || s[0] !== s[1]) {
        throw new Error('numeric: toUpperHessenberg() only works on square matrices');
    } else {
        console.log('node 1545');
        ;
    }
    console.log('node 1546');
    var m = s[0], i, j, k, x, v, A = numeric.clone(me), B, C, Ai, Ci, Q = numeric.identity(m), Qi;
    console.log('node 1547');
    for (j = 0; j < m - 2; j++) {
        console.log('node 1549');
        x = Array(m - j - 1);
        console.log('node 1550');
        for (i = j + 1; i < m; i++) {
            console.log('node 1552');
            x[i - j - 1] = A[i][j];
        }
        console.log('node 1553');
        if (numeric.norm2(x) > 0) {
            console.log('node 1555');
            v = numeric.house(x);
            console.log('node 1556');
            B = numeric.getBlock(A, [
                j + 1,
                j
            ], [
                m - 1,
                m - 1
            ]);
            console.log('node 1557');
            C = numeric.tensor(v, numeric.dot(v, B));
            console.log('node 1558');
            for (i = j + 1; i < m; i++) {
                console.log('node 1560');
                Ai = A[i];
                console.log('node 1561');
                Ci = C[i - j - 1];
                console.log('node 1562');
                for (k = j; k < m; k++) {
                    console.log('node 1564');
                    Ai[k] -= 2 * Ci[k - j];
                }
            }
            console.log('node 1565');
            B = numeric.getBlock(A, [
                0,
                j + 1
            ], [
                m - 1,
                m - 1
            ]);
            console.log('node 1566');
            C = numeric.tensor(numeric.dot(B, v), v);
            console.log('node 1567');
            for (i = 0; i < m; i++) {
                console.log('node 1569');
                Ai = A[i];
                console.log('node 1570');
                Ci = C[i];
                console.log('node 1571');
                for (k = j + 1; k < m; k++) {
                    console.log('node 1573');
                    Ai[k] -= 2 * Ci[k - j - 1];
                }
            }
            console.log('node 1574');
            B = Array(m - j - 1);
            console.log('node 1575');
            for (i = j + 1; i < m; i++) {
                console.log('node 1577');
                B[i - j - 1] = Q[i];
            }
            console.log('node 1578');
            C = numeric.tensor(v, numeric.dot(v, B));
            console.log('node 1579');
            for (i = j + 1; i < m; i++) {
                console.log('node 1581');
                Qi = Q[i];
                console.log('node 1582');
                Ci = C[i - j - 1];
                console.log('node 1583');
                for (k = 0; k < m; k++) {
                    console.log('node 1585');
                    Qi[k] -= 2 * Ci[k];
                }
            }
        } else {
            console.log('node 1586');
            ;
        }
    }
    console.log('node 1587');
    return {
        H: A,
        Q: Q
    };
};
console.log('node 5055');
numeric.epsilon = 2.220446049250313e-16;
console.log('node 5056');
numeric.QRFrancis = function (H, maxiter) {
    console.log('node 1590');
    if (typeof maxiter === 'undefined') {
        console.log('node 1592');
        maxiter = 10000;
    } else {
        console.log('node 1593');
        ;
    }
    console.log('node 1594');
    H = numeric.clone(H);
    console.log('node 1595');
    var H0 = numeric.clone(H);
    console.log('node 1596');
    var s = numeric.dim(H), m = s[0], x, v, a, b, c, d, det, tr, Hloc, Q = numeric.identity(m), Qi, Hi, B, C, Ci, i, j, k, iter;
    console.log('node 1597');
    if (m < 3) {
        console.log('node 1599');
        return {
            Q: Q,
            B: [[
                    0,
                    m - 1
                ]]
        };
    } else {
        console.log('node 1600');
        ;
    }
    console.log('node 1601');
    var epsilon = numeric.epsilon;
    console.log('node 1602');
    for (iter = 0; iter < maxiter; iter++) {
        console.log('node 1604');
        for (j = 0; j < m - 1; j++) {
            console.log('node 1606');
            if (Math.abs(H[j + 1][j]) < epsilon * (Math.abs(H[j][j]) + Math.abs(H[j + 1][j + 1]))) {
                console.log('node 1608');
                var QH1 = numeric.QRFrancis(numeric.getBlock(H, [
                    0,
                    0
                ], [
                    j,
                    j
                ]), maxiter);
                console.log('node 1609');
                var QH2 = numeric.QRFrancis(numeric.getBlock(H, [
                    j + 1,
                    j + 1
                ], [
                    m - 1,
                    m - 1
                ]), maxiter);
                console.log('node 1610');
                B = Array(j + 1);
                console.log('node 1611');
                for (i = 0; i <= j; i++) {
                    console.log('node 1613');
                    B[i] = Q[i];
                }
                console.log('node 1614');
                C = numeric.dot(QH1.Q, B);
                console.log('node 1615');
                for (i = 0; i <= j; i++) {
                    console.log('node 1617');
                    Q[i] = C[i];
                }
                console.log('node 1618');
                B = Array(m - j - 1);
                console.log('node 1619');
                for (i = j + 1; i < m; i++) {
                    console.log('node 1621');
                    B[i - j - 1] = Q[i];
                }
                console.log('node 1622');
                C = numeric.dot(QH2.Q, B);
                console.log('node 1623');
                for (i = j + 1; i < m; i++) {
                    console.log('node 1625');
                    Q[i] = C[i - j - 1];
                }
                console.log('node 1626');
                return {
                    Q: Q,
                    B: QH1.B.concat(numeric.add(QH2.B, j + 1))
                };
            } else {
                console.log('node 1627');
                ;
            }
        }
        console.log('node 1628');
        a = H[m - 2][m - 2];
        console.log('node 1629');
        b = H[m - 2][m - 1];
        console.log('node 1630');
        c = H[m - 1][m - 2];
        console.log('node 1631');
        d = H[m - 1][m - 1];
        console.log('node 1632');
        tr = a + d;
        console.log('node 1633');
        det = a * d - b * c;
        console.log('node 1634');
        Hloc = numeric.getBlock(H, [
            0,
            0
        ], [
            2,
            2
        ]);
        console.log('node 1635');
        if (tr * tr >= 4 * det) {
            console.log('node 1637');
            var s1, s2;
            console.log('node 1638');
            s1 = 0.5 * (tr + Math.sqrt(tr * tr - 4 * det));
            console.log('node 1639');
            s2 = 0.5 * (tr - Math.sqrt(tr * tr - 4 * det));
            console.log('node 1640');
            Hloc = numeric.add(numeric.sub(numeric.dot(Hloc, Hloc), numeric.mul(Hloc, s1 + s2)), numeric.diag(numeric.rep([3], s1 * s2)));
        } else {
            console.log('node 1641');
            Hloc = numeric.add(numeric.sub(numeric.dot(Hloc, Hloc), numeric.mul(Hloc, tr)), numeric.diag(numeric.rep([3], det)));
        }
        console.log('node 1642');
        x = [
            Hloc[0][0],
            Hloc[1][0],
            Hloc[2][0]
        ];
        console.log('node 1643');
        v = numeric.house(x);
        console.log('node 1644');
        B = [
            H[0],
            H[1],
            H[2]
        ];
        console.log('node 1645');
        C = numeric.tensor(v, numeric.dot(v, B));
        console.log('node 1646');
        for (i = 0; i < 3; i++) {
            console.log('node 1648');
            Hi = H[i];
            console.log('node 1649');
            Ci = C[i];
            console.log('node 1650');
            for (k = 0; k < m; k++) {
                console.log('node 1652');
                Hi[k] -= 2 * Ci[k];
            }
        }
        console.log('node 1653');
        B = numeric.getBlock(H, [
            0,
            0
        ], [
            m - 1,
            2
        ]);
        console.log('node 1654');
        C = numeric.tensor(numeric.dot(B, v), v);
        console.log('node 1655');
        for (i = 0; i < m; i++) {
            console.log('node 1657');
            Hi = H[i];
            console.log('node 1658');
            Ci = C[i];
            console.log('node 1659');
            for (k = 0; k < 3; k++) {
                console.log('node 1661');
                Hi[k] -= 2 * Ci[k];
            }
        }
        console.log('node 1662');
        B = [
            Q[0],
            Q[1],
            Q[2]
        ];
        console.log('node 1663');
        C = numeric.tensor(v, numeric.dot(v, B));
        console.log('node 1664');
        for (i = 0; i < 3; i++) {
            console.log('node 1666');
            Qi = Q[i];
            console.log('node 1667');
            Ci = C[i];
            console.log('node 1668');
            for (k = 0; k < m; k++) {
                console.log('node 1670');
                Qi[k] -= 2 * Ci[k];
            }
        }
        console.log('node 1671');
        var J;
        console.log('node 1672');
        for (j = 0; j < m - 2; j++) {
            console.log('node 1674');
            for (k = j; k <= j + 1; k++) {
                console.log('node 1676');
                if (Math.abs(H[k + 1][k]) < epsilon * (Math.abs(H[k][k]) + Math.abs(H[k + 1][k + 1]))) {
                    console.log('node 1678');
                    var QH1 = numeric.QRFrancis(numeric.getBlock(H, [
                        0,
                        0
                    ], [
                        k,
                        k
                    ]), maxiter);
                    console.log('node 1679');
                    var QH2 = numeric.QRFrancis(numeric.getBlock(H, [
                        k + 1,
                        k + 1
                    ], [
                        m - 1,
                        m - 1
                    ]), maxiter);
                    console.log('node 1680');
                    B = Array(k + 1);
                    console.log('node 1681');
                    for (i = 0; i <= k; i++) {
                        console.log('node 1683');
                        B[i] = Q[i];
                    }
                    console.log('node 1684');
                    C = numeric.dot(QH1.Q, B);
                    console.log('node 1685');
                    for (i = 0; i <= k; i++) {
                        console.log('node 1687');
                        Q[i] = C[i];
                    }
                    console.log('node 1688');
                    B = Array(m - k - 1);
                    console.log('node 1689');
                    for (i = k + 1; i < m; i++) {
                        console.log('node 1691');
                        B[i - k - 1] = Q[i];
                    }
                    console.log('node 1692');
                    C = numeric.dot(QH2.Q, B);
                    console.log('node 1693');
                    for (i = k + 1; i < m; i++) {
                        console.log('node 1695');
                        Q[i] = C[i - k - 1];
                    }
                    console.log('node 1696');
                    return {
                        Q: Q,
                        B: QH1.B.concat(numeric.add(QH2.B, k + 1))
                    };
                } else {
                    console.log('node 1697');
                    ;
                }
            }
            console.log('node 1698');
            J = Math.min(m - 1, j + 3);
            console.log('node 1699');
            x = Array(J - j);
            console.log('node 1700');
            for (i = j + 1; i <= J; i++) {
                console.log('node 1702');
                x[i - j - 1] = H[i][j];
            }
            console.log('node 1703');
            v = numeric.house(x);
            console.log('node 1704');
            B = numeric.getBlock(H, [
                j + 1,
                j
            ], [
                J,
                m - 1
            ]);
            console.log('node 1705');
            C = numeric.tensor(v, numeric.dot(v, B));
            console.log('node 1706');
            for (i = j + 1; i <= J; i++) {
                console.log('node 1708');
                Hi = H[i];
                console.log('node 1709');
                Ci = C[i - j - 1];
                console.log('node 1710');
                for (k = j; k < m; k++) {
                    console.log('node 1712');
                    Hi[k] -= 2 * Ci[k - j];
                }
            }
            console.log('node 1713');
            B = numeric.getBlock(H, [
                0,
                j + 1
            ], [
                m - 1,
                J
            ]);
            console.log('node 1714');
            C = numeric.tensor(numeric.dot(B, v), v);
            console.log('node 1715');
            for (i = 0; i < m; i++) {
                console.log('node 1717');
                Hi = H[i];
                console.log('node 1718');
                Ci = C[i];
                console.log('node 1719');
                for (k = j + 1; k <= J; k++) {
                    console.log('node 1721');
                    Hi[k] -= 2 * Ci[k - j - 1];
                }
            }
            console.log('node 1722');
            B = Array(J - j);
            console.log('node 1723');
            for (i = j + 1; i <= J; i++) {
                console.log('node 1725');
                B[i - j - 1] = Q[i];
            }
            console.log('node 1726');
            C = numeric.tensor(v, numeric.dot(v, B));
            console.log('node 1727');
            for (i = j + 1; i <= J; i++) {
                console.log('node 1729');
                Qi = Q[i];
                console.log('node 1730');
                Ci = C[i - j - 1];
                console.log('node 1731');
                for (k = 0; k < m; k++) {
                    console.log('node 1733');
                    Qi[k] -= 2 * Ci[k];
                }
            }
        }
    }
    throw new Error('numeric: eigenvalue iteration does not converge -- increase maxiter?');
};
console.log('node 5057');
numeric.eig = function eig(A, maxiter) {
    console.log('node 1736');
    var QH = numeric.toUpperHessenberg(A);
    console.log('node 1737');
    var QB = numeric.QRFrancis(QH.H, maxiter);
    console.log('node 1738');
    var T = numeric.T;
    console.log('node 1739');
    var n = A.length, i, k, flag = false, B = QB.B, H = numeric.dot(QB.Q, numeric.dot(QH.H, numeric.transpose(QB.Q)));
    console.log('node 1740');
    var Q = new T(numeric.dot(QB.Q, QH.Q)), Q0;
    console.log('node 1741');
    var m = B.length, j;
    console.log('node 1742');
    var a, b, c, d, p1, p2, disc, x, y, p, q, n1, n2;
    console.log('node 1743');
    var sqrt = Math.sqrt;
    console.log('node 1744');
    for (k = 0; k < m; k++) {
        console.log('node 1746');
        i = B[k][0];
        console.log('node 1747');
        if (i === B[k][1]) {
        } else {
            console.log('node 1749');
            j = i + 1;
            console.log('node 1750');
            a = H[i][i];
            console.log('node 1751');
            b = H[i][j];
            console.log('node 1752');
            c = H[j][i];
            console.log('node 1753');
            d = H[j][j];
            console.log('node 1754');
            if (b === 0 && c === 0) {
                console.log('node 1756');
                continue;
            } else {
                console.log('node 1757');
                ;
            }
            console.log('node 1758');
            p1 = -a - d;
            console.log('node 1759');
            p2 = a * d - b * c;
            console.log('node 1760');
            disc = p1 * p1 - 4 * p2;
            console.log('node 1761');
            if (disc >= 0) {
                console.log('node 1763');
                if (p1 < 0) {
                    console.log('node 1765');
                    x = -0.5 * (p1 - sqrt(disc));
                } else {
                    console.log('node 1766');
                    x = -0.5 * (p1 + sqrt(disc));
                }
                console.log('node 1767');
                n1 = (a - x) * (a - x) + b * b;
                console.log('node 1768');
                n2 = c * c + (d - x) * (d - x);
                console.log('node 1769');
                if (n1 > n2) {
                    console.log('node 1771');
                    n1 = sqrt(n1);
                    console.log('node 1772');
                    p = (a - x) / n1;
                    console.log('node 1773');
                    q = b / n1;
                } else {
                    console.log('node 1774');
                    n2 = sqrt(n2);
                    console.log('node 1775');
                    p = c / n2;
                    console.log('node 1776');
                    q = (d - x) / n2;
                }
                console.log('node 1777');
                Q0 = new T([
                    [
                        q,
                        -p
                    ],
                    [
                        p,
                        q
                    ]
                ]);
                console.log('node 1778');
                Q.setRows(i, j, Q0.dot(Q.getRows(i, j)));
            } else {
                console.log('node 1779');
                x = -0.5 * p1;
                console.log('node 1780');
                y = 0.5 * sqrt(-disc);
                console.log('node 1781');
                n1 = (a - x) * (a - x) + b * b;
                console.log('node 1782');
                n2 = c * c + (d - x) * (d - x);
                console.log('node 1783');
                if (n1 > n2) {
                    console.log('node 1785');
                    n1 = sqrt(n1 + y * y);
                    console.log('node 1786');
                    p = (a - x) / n1;
                    console.log('node 1787');
                    q = b / n1;
                    console.log('node 1788');
                    x = 0;
                    console.log('node 1789');
                    y /= n1;
                } else {
                    console.log('node 1790');
                    n2 = sqrt(n2 + y * y);
                    console.log('node 1791');
                    p = c / n2;
                    console.log('node 1792');
                    q = (d - x) / n2;
                    console.log('node 1793');
                    x = y / n2;
                    console.log('node 1794');
                    y = 0;
                }
                console.log('node 1795');
                Q0 = new T([
                    [
                        q,
                        -p
                    ],
                    [
                        p,
                        q
                    ]
                ], [
                    [
                        x,
                        y
                    ],
                    [
                        y,
                        -x
                    ]
                ]);
                console.log('node 1796');
                Q.setRows(i, j, Q0.dot(Q.getRows(i, j)));
            }
        }
    }
    console.log('node 1797');
    var R = Q.dot(A).dot(Q.transjugate()), n = A.length, E = numeric.T.identity(n);
    console.log('node 1798');
    for (j = 0; j < n; j++) {
        console.log('node 1800');
        if (j > 0) {
            console.log('node 1802');
            for (k = j - 1; k >= 0; k--) {
                console.log('node 1804');
                var Rk = R.get([
                        k,
                        k
                    ]), Rj = R.get([
                        j,
                        j
                    ]);
                console.log('node 1805');
                if (numeric.neq(Rk.x, Rj.x) || numeric.neq(Rk.y, Rj.y)) {
                    console.log('node 1807');
                    x = R.getRow(k).getBlock([k], [j - 1]);
                    console.log('node 1808');
                    y = E.getRow(j).getBlock([k], [j - 1]);
                    console.log('node 1809');
                    E.set([
                        j,
                        k
                    ], R.get([
                        k,
                        j
                    ]).neg().sub(x.dot(y)).div(Rk.sub(Rj)));
                } else {
                    console.log('node 1810');
                    E.setRow(j, E.getRow(k));
                    console.log('node 1811');
                    continue;
                }
            }
        } else {
            console.log('node 1812');
            ;
        }
    }
    console.log('node 1813');
    for (j = 0; j < n; j++) {
        console.log('node 1815');
        x = E.getRow(j);
        console.log('node 1816');
        E.setRow(j, x.div(x.norm2()));
    }
    console.log('node 1817');
    E = E.transpose();
    console.log('node 1818');
    E = Q.transjugate().dot(E);
    console.log('node 1819');
    return {
        lambda: R.getDiag(),
        E: E
    };
};
console.log('node 5058');
numeric.ccsSparse = function ccsSparse(A) {
    console.log('node 1822');
    var m = A.length, n, foo, i, j, counts = [];
    console.log('node 1823');
    for (i = m - 1; i !== -1; --i) {
        console.log('node 1825');
        foo = A[i];
        console.log('node 1826');
        for (j in foo) {
            console.log('node 1828');
            j = parseInt(j);
            console.log('node 1829');
            while (j >= counts.length) {
                console.log('node 1831');
                counts[counts.length] = 0;
            }
            console.log('node 1832');
            if (foo[j] !== 0) {
                console.log('node 1834');
                counts[j]++;
            } else {
                console.log('node 1835');
                ;
            }
        }
    }
    console.log('node 1836');
    var n = counts.length;
    console.log('node 1837');
    var Ai = Array(n + 1);
    console.log('node 1838');
    Ai[0] = 0;
    console.log('node 1839');
    for (i = 0; i < n; ++i) {
        console.log('node 1841');
        Ai[i + 1] = Ai[i] + counts[i];
    }
    console.log('node 1842');
    var Aj = Array(Ai[n]), Av = Array(Ai[n]);
    console.log('node 1843');
    for (i = m - 1; i !== -1; --i) {
        console.log('node 1845');
        foo = A[i];
        console.log('node 1846');
        for (j in foo) {
            console.log('node 1848');
            if (foo[j] !== 0) {
                console.log('node 1850');
                counts[j]--;
                console.log('node 1851');
                Aj[Ai[j] + counts[j]] = i;
                console.log('node 1852');
                Av[Ai[j] + counts[j]] = foo[j];
            } else {
                console.log('node 1853');
                ;
            }
        }
    }
    console.log('node 1854');
    return [
        Ai,
        Aj,
        Av
    ];
};
console.log('node 5059');
numeric.ccsFull = function ccsFull(A) {
    console.log('node 1857');
    var Ai = A[0], Aj = A[1], Av = A[2], s = numeric.ccsDim(A), m = s[0], n = s[1], i, j, j0, j1, k;
    console.log('node 1858');
    var B = numeric.rep([
        m,
        n
    ], 0);
    console.log('node 1859');
    for (i = 0; i < n; i++) {
        console.log('node 1861');
        j0 = Ai[i];
        console.log('node 1862');
        j1 = Ai[i + 1];
        console.log('node 1863');
        for (j = j0; j < j1; ++j) {
            console.log('node 1865');
            B[Aj[j]][i] = Av[j];
        }
    }
    console.log('node 1866');
    return B;
};
console.log('node 5060');
numeric.ccsTSolve = function ccsTSolve(A, b, x, bj, xj) {
    console.log('node 1882');
    var Ai = A[0], Aj = A[1], Av = A[2], m = Ai.length - 1, max = Math.max, n = 0;
    console.log('node 1883');
    if (typeof bj === 'undefined') {
        console.log('node 1885');
        x = numeric.rep([m], 0);
    } else {
        console.log('node 1886');
        ;
    }
    console.log('node 1887');
    if (typeof bj === 'undefined') {
        console.log('node 1889');
        bj = numeric.linspace(0, x.length - 1);
    } else {
        console.log('node 1890');
        ;
    }
    console.log('node 1891');
    if (typeof xj === 'undefined') {
        console.log('node 1893');
        xj = [];
    } else {
        console.log('node 1894');
        ;
    }
    console.log('node -1');
    function dfs(j) {
        console.log('node 1871');
        var k;
        console.log('node 1872');
        if (x[j] !== 0) {
            console.log('node 1874');
            return;
        } else {
            console.log('node 1875');
            ;
        }
        console.log('node 1876');
        x[j] = 1;
        console.log('node 1877');
        for (k = Ai[j]; k < Ai[j + 1]; ++k) {
            console.log('node 1879');
            dfs(Aj[k]);
        }
        console.log('node 1880');
        xj[n] = j;
        console.log('node 1881');
        ++n;
    }
    console.log('node 1895');
    var i, j, j0, j1, k, l, l0, l1, a;
    console.log('node 1896');
    for (i = bj.length - 1; i !== -1; --i) {
        console.log('node 1898');
        dfs(bj[i]);
    }
    console.log('node 1899');
    xj.length = n;
    console.log('node 1900');
    for (i = xj.length - 1; i !== -1; --i) {
        console.log('node 1902');
        x[xj[i]] = 0;
    }
    console.log('node 1903');
    for (i = bj.length - 1; i !== -1; --i) {
        console.log('node 1905');
        j = bj[i];
        console.log('node 1906');
        x[j] = b[j];
    }
    console.log('node 1907');
    for (i = xj.length - 1; i !== -1; --i) {
        console.log('node 1909');
        j = xj[i];
        console.log('node 1910');
        j0 = Ai[j];
        console.log('node 1911');
        j1 = max(Ai[j + 1], j0);
        console.log('node 1912');
        for (k = j0; k !== j1; ++k) {
            console.log('node 1914');
            if (Aj[k] === j) {
                console.log('node 1916');
                x[j] /= Av[k];
                console.log('node 1917');
                break;
            } else {
                console.log('node 1918');
                ;
            }
        }
        console.log('node 1919');
        a = x[j];
        console.log('node 1920');
        for (k = j0; k !== j1; ++k) {
            console.log('node 1922');
            l = Aj[k];
            console.log('node 1923');
            if (l !== j) {
                console.log('node 1925');
                x[l] -= a * Av[k];
            } else {
                console.log('node 1926');
                ;
            }
        }
    }
    console.log('node 1927');
    return x;
};
console.log('node 5061');
numeric.ccsDFS = function ccsDFS(n) {
    console.log('node 1930');
    this.k = Array(n);
    console.log('node 1931');
    this.k1 = Array(n);
    console.log('node 1932');
    this.j = Array(n);
};
console.log('node 5062');
numeric.ccsDFS.prototype.dfs = function dfs(J, Ai, Aj, x, xj, Pinv) {
    console.log('node 1935');
    var m = 0, foo, n = xj.length;
    console.log('node 1936');
    var k = this.k, k1 = this.k1, j = this.j, km, k11;
    console.log('node 1937');
    if (x[J] !== 0) {
        console.log('node 1939');
        return;
    } else {
        console.log('node 1940');
        ;
    }
    console.log('node 1941');
    x[J] = 1;
    console.log('node 1942');
    j[0] = J;
    console.log('node 1943');
    k[0] = km = Ai[J];
    console.log('node 1944');
    k1[0] = k11 = Ai[J + 1];
    console.log('node 1945');
    while (1) {
        console.log('node 1947');
        if (km >= k11) {
            console.log('node 1949');
            xj[n] = j[m];
            console.log('node 1950');
            if (m === 0) {
                console.log('node 1952');
                return;
            } else {
                console.log('node 1953');
                ;
            }
            console.log('node 1954');
            ++n;
            console.log('node 1955');
            --m;
            console.log('node 1956');
            km = k[m];
            console.log('node 1957');
            k11 = k1[m];
        } else {
            console.log('node 1958');
            foo = Pinv[Aj[km]];
            console.log('node 1959');
            if (x[foo] === 0) {
                console.log('node 1961');
                x[foo] = 1;
                console.log('node 1962');
                k[m] = km;
                console.log('node 1963');
                ++m;
                console.log('node 1964');
                j[m] = foo;
                console.log('node 1965');
                km = Ai[foo];
                console.log('node 1966');
                k1[m] = k11 = Ai[foo + 1];
            } else {
                console.log('node 1967');
                ++km;
            }
        }
    }
};
console.log('node 5063');
numeric.ccsLPSolve = function ccsLPSolve(A, B, x, xj, I, Pinv, dfs) {
    console.log('node 1970');
    var Ai = A[0], Aj = A[1], Av = A[2], m = Ai.length - 1, n = 0;
    console.log('node 1971');
    var Bi = B[0], Bj = B[1], Bv = B[2];
    console.log('node 1972');
    var i, i0, i1, j, J, j0, j1, k, l, l0, l1, a;
    console.log('node 1973');
    i0 = Bi[I];
    console.log('node 1974');
    i1 = Bi[I + 1];
    console.log('node 1975');
    xj.length = 0;
    console.log('node 1976');
    for (i = i0; i < i1; ++i) {
        console.log('node 1978');
        dfs.dfs(Pinv[Bj[i]], Ai, Aj, x, xj, Pinv);
    }
    console.log('node 1979');
    for (i = xj.length - 1; i !== -1; --i) {
        console.log('node 1981');
        x[xj[i]] = 0;
    }
    console.log('node 1982');
    for (i = i0; i !== i1; ++i) {
        console.log('node 1984');
        j = Pinv[Bj[i]];
        console.log('node 1985');
        x[j] = Bv[i];
    }
    console.log('node 1986');
    for (i = xj.length - 1; i !== -1; --i) {
        console.log('node 1988');
        j = xj[i];
        console.log('node 1989');
        j0 = Ai[j];
        console.log('node 1990');
        j1 = Ai[j + 1];
        console.log('node 1991');
        for (k = j0; k < j1; ++k) {
            console.log('node 1993');
            if (Pinv[Aj[k]] === j) {
                console.log('node 1995');
                x[j] /= Av[k];
                console.log('node 1996');
                break;
            } else {
                console.log('node 1997');
                ;
            }
        }
        console.log('node 1998');
        a = x[j];
        console.log('node 1999');
        for (k = j0; k < j1; ++k) {
            console.log('node 2001');
            l = Pinv[Aj[k]];
            console.log('node 2002');
            if (l !== j) {
                console.log('node 2004');
                x[l] -= a * Av[k];
            } else {
                console.log('node 2005');
                ;
            }
        }
    }
    console.log('node 2006');
    return x;
};
console.log('node 5064');
numeric.ccsLUP1 = function ccsLUP1(A, threshold) {
    console.log('node 2009');
    var m = A[0].length - 1;
    console.log('node 2010');
    var L = [
            numeric.rep([m + 1], 0),
            [],
            []
        ], U = [
            numeric.rep([m + 1], 0),
            [],
            []
        ];
    console.log('node 2011');
    var Li = L[0], Lj = L[1], Lv = L[2], Ui = U[0], Uj = U[1], Uv = U[2];
    console.log('node 2012');
    var x = numeric.rep([m], 0), xj = numeric.rep([m], 0);
    console.log('node 2013');
    var i, j, k, j0, j1, a, e, c, d, K;
    console.log('node 2014');
    var sol = numeric.ccsLPSolve, max = Math.max, abs = Math.abs;
    console.log('node 2015');
    var P = numeric.linspace(0, m - 1), Pinv = numeric.linspace(0, m - 1);
    console.log('node 2016');
    var dfs = new numeric.ccsDFS(m);
    console.log('node 2017');
    if (typeof threshold === 'undefined') {
        console.log('node 2019');
        threshold = 1;
    } else {
        console.log('node 2020');
        ;
    }
    console.log('node 2021');
    for (i = 0; i < m; ++i) {
        console.log('node 2023');
        sol(L, A, x, xj, i, Pinv, dfs);
        console.log('node 2024');
        a = -1;
        console.log('node 2025');
        e = -1;
        console.log('node 2026');
        for (j = xj.length - 1; j !== -1; --j) {
            console.log('node 2028');
            k = xj[j];
            console.log('node 2029');
            if (k <= i) {
                console.log('node 2031');
                continue;
            } else {
                console.log('node 2032');
                ;
            }
            console.log('node 2033');
            c = abs(x[k]);
            console.log('node 2034');
            if (c > a) {
                console.log('node 2036');
                e = k;
                console.log('node 2037');
                a = c;
            } else {
                console.log('node 2038');
                ;
            }
        }
        console.log('node 2039');
        if (abs(x[i]) < threshold * a) {
            console.log('node 2041');
            j = P[i];
            console.log('node 2042');
            a = P[e];
            console.log('node 2043');
            P[i] = a;
            console.log('node 2044');
            Pinv[a] = i;
            console.log('node 2045');
            P[e] = j;
            console.log('node 2046');
            Pinv[j] = e;
            console.log('node 2047');
            a = x[i];
            console.log('node 2048');
            x[i] = x[e];
            console.log('node 2049');
            x[e] = a;
        } else {
            console.log('node 2050');
            ;
        }
        console.log('node 2051');
        a = Li[i];
        console.log('node 2052');
        e = Ui[i];
        console.log('node 2053');
        d = x[i];
        console.log('node 2054');
        Lj[a] = P[i];
        console.log('node 2055');
        Lv[a] = 1;
        console.log('node 2056');
        ++a;
        console.log('node 2057');
        for (j = xj.length - 1; j !== -1; --j) {
            console.log('node 2059');
            k = xj[j];
            console.log('node 2060');
            c = x[k];
            console.log('node 2061');
            xj[j] = 0;
            console.log('node 2062');
            x[k] = 0;
            console.log('node 2063');
            if (k <= i) {
                console.log('node 2065');
                Uj[e] = k;
                console.log('node 2066');
                Uv[e] = c;
                console.log('node 2067');
                ++e;
            } else {
                console.log('node 2068');
                Lj[a] = P[k];
                console.log('node 2069');
                Lv[a] = c / d;
                console.log('node 2070');
                ++a;
            }
        }
        console.log('node 2071');
        Li[i + 1] = a;
        console.log('node 2072');
        Ui[i + 1] = e;
    }
    console.log('node 2073');
    for (j = Lj.length - 1; j !== -1; --j) {
        console.log('node 2075');
        Lj[j] = Pinv[Lj[j]];
    }
    console.log('node 2076');
    return {
        L: L,
        U: U,
        P: P,
        Pinv: Pinv
    };
};
console.log('node 5065');
numeric.ccsDFS0 = function ccsDFS0(n) {
    console.log('node 2079');
    this.k = Array(n);
    console.log('node 2080');
    this.k1 = Array(n);
    console.log('node 2081');
    this.j = Array(n);
};
console.log('node 5066');
numeric.ccsDFS0.prototype.dfs = function dfs(J, Ai, Aj, x, xj, Pinv, P) {
    console.log('node 2084');
    var m = 0, foo, n = xj.length;
    console.log('node 2085');
    var k = this.k, k1 = this.k1, j = this.j, km, k11;
    console.log('node 2086');
    if (x[J] !== 0) {
        console.log('node 2088');
        return;
    } else {
        console.log('node 2089');
        ;
    }
    console.log('node 2090');
    x[J] = 1;
    console.log('node 2091');
    j[0] = J;
    console.log('node 2092');
    k[0] = km = Ai[Pinv[J]];
    console.log('node 2093');
    k1[0] = k11 = Ai[Pinv[J] + 1];
    console.log('node 2094');
    while (1) {
        console.log('node 2096');
        if (isNaN(km)) {
            throw new Error('Ow!');
        } else {
            console.log('node 2098');
            ;
        }
        console.log('node 2099');
        if (km >= k11) {
            console.log('node 2101');
            xj[n] = Pinv[j[m]];
            console.log('node 2102');
            if (m === 0) {
                console.log('node 2104');
                return;
            } else {
                console.log('node 2105');
                ;
            }
            console.log('node 2106');
            ++n;
            console.log('node 2107');
            --m;
            console.log('node 2108');
            km = k[m];
            console.log('node 2109');
            k11 = k1[m];
        } else {
            console.log('node 2110');
            foo = Aj[km];
            console.log('node 2111');
            if (x[foo] === 0) {
                console.log('node 2113');
                x[foo] = 1;
                console.log('node 2114');
                k[m] = km;
                console.log('node 2115');
                ++m;
                console.log('node 2116');
                j[m] = foo;
                console.log('node 2117');
                foo = Pinv[foo];
                console.log('node 2118');
                km = Ai[foo];
                console.log('node 2119');
                k1[m] = k11 = Ai[foo + 1];
            } else {
                console.log('node 2120');
                ++km;
            }
        }
    }
};
console.log('node 5067');
numeric.ccsLPSolve0 = function ccsLPSolve0(A, B, y, xj, I, Pinv, P, dfs) {
    console.log('node 2123');
    var Ai = A[0], Aj = A[1], Av = A[2], m = Ai.length - 1, n = 0;
    console.log('node 2124');
    var Bi = B[0], Bj = B[1], Bv = B[2];
    console.log('node 2125');
    var i, i0, i1, j, J, j0, j1, k, l, l0, l1, a;
    console.log('node 2126');
    i0 = Bi[I];
    console.log('node 2127');
    i1 = Bi[I + 1];
    console.log('node 2128');
    xj.length = 0;
    console.log('node 2129');
    for (i = i0; i < i1; ++i) {
        console.log('node 2131');
        dfs.dfs(Bj[i], Ai, Aj, y, xj, Pinv, P);
    }
    console.log('node 2132');
    for (i = xj.length - 1; i !== -1; --i) {
        console.log('node 2134');
        j = xj[i];
        console.log('node 2135');
        y[P[j]] = 0;
    }
    console.log('node 2136');
    for (i = i0; i !== i1; ++i) {
        console.log('node 2138');
        j = Bj[i];
        console.log('node 2139');
        y[j] = Bv[i];
    }
    console.log('node 2140');
    for (i = xj.length - 1; i !== -1; --i) {
        console.log('node 2142');
        j = xj[i];
        console.log('node 2143');
        l = P[j];
        console.log('node 2144');
        j0 = Ai[j];
        console.log('node 2145');
        j1 = Ai[j + 1];
        console.log('node 2146');
        for (k = j0; k < j1; ++k) {
            console.log('node 2148');
            if (Aj[k] === l) {
                console.log('node 2150');
                y[l] /= Av[k];
                console.log('node 2151');
                break;
            } else {
                console.log('node 2152');
                ;
            }
        }
        console.log('node 2153');
        a = y[l];
        console.log('node 2154');
        for (k = j0; k < j1; ++k) {
            console.log('node 2156');
            y[Aj[k]] -= a * Av[k];
        }
        console.log('node 2157');
        y[l] = a;
    }
};
console.log('node 5068');
numeric.ccsLUP0 = function ccsLUP0(A, threshold) {
    console.log('node 2160');
    var m = A[0].length - 1;
    console.log('node 2161');
    var L = [
            numeric.rep([m + 1], 0),
            [],
            []
        ], U = [
            numeric.rep([m + 1], 0),
            [],
            []
        ];
    console.log('node 2162');
    var Li = L[0], Lj = L[1], Lv = L[2], Ui = U[0], Uj = U[1], Uv = U[2];
    console.log('node 2163');
    var y = numeric.rep([m], 0), xj = numeric.rep([m], 0);
    console.log('node 2164');
    var i, j, k, j0, j1, a, e, c, d, K;
    console.log('node 2165');
    var sol = numeric.ccsLPSolve0, max = Math.max, abs = Math.abs;
    console.log('node 2166');
    var P = numeric.linspace(0, m - 1), Pinv = numeric.linspace(0, m - 1);
    console.log('node 2167');
    var dfs = new numeric.ccsDFS0(m);
    console.log('node 2168');
    if (typeof threshold === 'undefined') {
        console.log('node 2170');
        threshold = 1;
    } else {
        console.log('node 2171');
        ;
    }
    console.log('node 2172');
    for (i = 0; i < m; ++i) {
        console.log('node 2174');
        sol(L, A, y, xj, i, Pinv, P, dfs);
        console.log('node 2175');
        a = -1;
        console.log('node 2176');
        e = -1;
        console.log('node 2177');
        for (j = xj.length - 1; j !== -1; --j) {
            console.log('node 2179');
            k = xj[j];
            console.log('node 2180');
            if (k <= i) {
                console.log('node 2182');
                continue;
            } else {
                console.log('node 2183');
                ;
            }
            console.log('node 2184');
            c = abs(y[P[k]]);
            console.log('node 2185');
            if (c > a) {
                console.log('node 2187');
                e = k;
                console.log('node 2188');
                a = c;
            } else {
                console.log('node 2189');
                ;
            }
        }
        console.log('node 2190');
        if (abs(y[P[i]]) < threshold * a) {
            console.log('node 2192');
            j = P[i];
            console.log('node 2193');
            a = P[e];
            console.log('node 2194');
            P[i] = a;
            console.log('node 2195');
            Pinv[a] = i;
            console.log('node 2196');
            P[e] = j;
            console.log('node 2197');
            Pinv[j] = e;
        } else {
            console.log('node 2198');
            ;
        }
        console.log('node 2199');
        a = Li[i];
        console.log('node 2200');
        e = Ui[i];
        console.log('node 2201');
        d = y[P[i]];
        console.log('node 2202');
        Lj[a] = P[i];
        console.log('node 2203');
        Lv[a] = 1;
        console.log('node 2204');
        ++a;
        console.log('node 2205');
        for (j = xj.length - 1; j !== -1; --j) {
            console.log('node 2207');
            k = xj[j];
            console.log('node 2208');
            c = y[P[k]];
            console.log('node 2209');
            xj[j] = 0;
            console.log('node 2210');
            y[P[k]] = 0;
            console.log('node 2211');
            if (k <= i) {
                console.log('node 2213');
                Uj[e] = k;
                console.log('node 2214');
                Uv[e] = c;
                console.log('node 2215');
                ++e;
            } else {
                console.log('node 2216');
                Lj[a] = P[k];
                console.log('node 2217');
                Lv[a] = c / d;
                console.log('node 2218');
                ++a;
            }
        }
        console.log('node 2219');
        Li[i + 1] = a;
        console.log('node 2220');
        Ui[i + 1] = e;
    }
    console.log('node 2221');
    for (j = Lj.length - 1; j !== -1; --j) {
        console.log('node 2223');
        Lj[j] = Pinv[Lj[j]];
    }
    console.log('node 2224');
    return {
        L: L,
        U: U,
        P: P,
        Pinv: Pinv
    };
};
console.log('node 5069');
numeric.ccsLUP = numeric.ccsLUP0;
console.log('node 5070');
numeric.ccsDim = function ccsDim(A) {
    console.log('node 2227');
    return [
        numeric.sup(A[1]) + 1,
        A[0].length - 1
    ];
};
console.log('node 5071');
numeric.ccsGetBlock = function ccsGetBlock(A, i, j) {
    console.log('node 2230');
    var s = numeric.ccsDim(A), m = s[0], n = s[1];
    console.log('node 2231');
    if (typeof i === 'undefined') {
        console.log('node 2233');
        i = numeric.linspace(0, m - 1);
    } else {
        console.log('node 2234');
        if (typeof i === 'number') {
            console.log('node 2236');
            i = [i];
        } else {
            console.log('node 2237');
            ;
        }
    }
    console.log('node 2238');
    if (typeof j === 'undefined') {
        console.log('node 2240');
        j = numeric.linspace(0, n - 1);
    } else {
        console.log('node 2241');
        if (typeof j === 'number') {
            console.log('node 2243');
            j = [j];
        } else {
            console.log('node 2244');
            ;
        }
    }
    console.log('node 2245');
    var p, p0, p1, P = i.length, q, Q = j.length, r, jq, ip;
    console.log('node 2246');
    var Bi = numeric.rep([n], 0), Bj = [], Bv = [], B = [
            Bi,
            Bj,
            Bv
        ];
    console.log('node 2247');
    var Ai = A[0], Aj = A[1], Av = A[2];
    console.log('node 2248');
    var x = numeric.rep([m], 0), count = 0, flags = numeric.rep([m], 0);
    console.log('node 2249');
    for (q = 0; q < Q; ++q) {
        console.log('node 2251');
        jq = j[q];
        console.log('node 2252');
        var q0 = Ai[jq];
        console.log('node 2253');
        var q1 = Ai[jq + 1];
        console.log('node 2254');
        for (p = q0; p < q1; ++p) {
            console.log('node 2256');
            r = Aj[p];
            console.log('node 2257');
            flags[r] = 1;
            console.log('node 2258');
            x[r] = Av[p];
        }
        console.log('node 2259');
        for (p = 0; p < P; ++p) {
            console.log('node 2261');
            ip = i[p];
            console.log('node 2262');
            if (flags[ip]) {
                console.log('node 2264');
                Bj[count] = p;
                console.log('node 2265');
                Bv[count] = x[i[p]];
                console.log('node 2266');
                ++count;
            } else {
                console.log('node 2267');
                ;
            }
        }
        console.log('node 2268');
        for (p = q0; p < q1; ++p) {
            console.log('node 2270');
            r = Aj[p];
            console.log('node 2271');
            flags[r] = 0;
        }
        console.log('node 2272');
        Bi[q + 1] = count;
    }
    console.log('node 2273');
    return B;
};
console.log('node 5072');
numeric.ccsDot = function ccsDot(A, B) {
    console.log('node 2276');
    var Ai = A[0], Aj = A[1], Av = A[2];
    console.log('node 2277');
    var Bi = B[0], Bj = B[1], Bv = B[2];
    console.log('node 2278');
    var sA = numeric.ccsDim(A), sB = numeric.ccsDim(B);
    console.log('node 2279');
    var m = sA[0], n = sA[1], o = sB[1];
    console.log('node 2280');
    var x = numeric.rep([m], 0), flags = numeric.rep([m], 0), xj = Array(m);
    console.log('node 2281');
    var Ci = numeric.rep([o], 0), Cj = [], Cv = [], C = [
            Ci,
            Cj,
            Cv
        ];
    console.log('node 2282');
    var i, j, k, j0, j1, i0, i1, l, p, a, b;
    console.log('node 2283');
    for (k = 0; k !== o; ++k) {
        console.log('node 2285');
        j0 = Bi[k];
        console.log('node 2286');
        j1 = Bi[k + 1];
        console.log('node 2287');
        p = 0;
        console.log('node 2288');
        for (j = j0; j < j1; ++j) {
            console.log('node 2290');
            a = Bj[j];
            console.log('node 2291');
            b = Bv[j];
            console.log('node 2292');
            i0 = Ai[a];
            console.log('node 2293');
            i1 = Ai[a + 1];
            console.log('node 2294');
            for (i = i0; i < i1; ++i) {
                console.log('node 2296');
                l = Aj[i];
                console.log('node 2297');
                if (flags[l] === 0) {
                    console.log('node 2299');
                    xj[p] = l;
                    console.log('node 2300');
                    flags[l] = 1;
                    console.log('node 2301');
                    p = p + 1;
                } else {
                    console.log('node 2302');
                    ;
                }
                console.log('node 2303');
                x[l] = x[l] + Av[i] * b;
            }
        }
        console.log('node 2304');
        j0 = Ci[k];
        console.log('node 2305');
        j1 = j0 + p;
        console.log('node 2306');
        Ci[k + 1] = j1;
        console.log('node 2307');
        for (j = p - 1; j !== -1; --j) {
            console.log('node 2309');
            b = j0 + j;
            console.log('node 2310');
            i = xj[j];
            console.log('node 2311');
            Cj[b] = i;
            console.log('node 2312');
            Cv[b] = x[i];
            console.log('node 2313');
            flags[i] = 0;
            console.log('node 2314');
            x[i] = 0;
        }
        console.log('node 2315');
        Ci[k + 1] = Ci[k] + p;
    }
    console.log('node 2316');
    return C;
};
console.log('node 5073');
numeric.ccsLUPSolve = function ccsLUPSolve(LUP, B) {
    console.log('node 2319');
    var L = LUP.L, U = LUP.U, P = LUP.P;
    console.log('node 2320');
    var Bi = B[0];
    console.log('node 2321');
    var flag = false;
    console.log('node 2322');
    if (typeof Bi !== 'object') {
        console.log('node 2324');
        B = [
            [
                0,
                B.length
            ],
            numeric.linspace(0, B.length - 1),
            B
        ];
        console.log('node 2325');
        Bi = B[0];
        console.log('node 2326');
        flag = true;
    } else {
        console.log('node 2327');
        ;
    }
    console.log('node 2328');
    var Bj = B[1], Bv = B[2];
    console.log('node 2329');
    var n = L[0].length - 1, m = Bi.length - 1;
    console.log('node 2330');
    var x = numeric.rep([n], 0), xj = Array(n);
    console.log('node 2331');
    var b = numeric.rep([n], 0), bj = Array(n);
    console.log('node 2332');
    var Xi = numeric.rep([m + 1], 0), Xj = [], Xv = [];
    console.log('node 2333');
    var sol = numeric.ccsTSolve;
    console.log('node 2334');
    var i, j, j0, j1, k, J, N = 0;
    console.log('node 2335');
    for (i = 0; i < m; ++i) {
        console.log('node 2337');
        k = 0;
        console.log('node 2338');
        j0 = Bi[i];
        console.log('node 2339');
        j1 = Bi[i + 1];
        console.log('node 2340');
        for (j = j0; j < j1; ++j) {
            console.log('node 2342');
            J = LUP.Pinv[Bj[j]];
            console.log('node 2343');
            bj[k] = J;
            console.log('node 2344');
            b[J] = Bv[j];
            console.log('node 2345');
            ++k;
        }
        console.log('node 2346');
        bj.length = k;
        console.log('node 2347');
        sol(L, b, x, bj, xj);
        console.log('node 2348');
        for (j = bj.length - 1; j !== -1; --j) {
            console.log('node 2350');
            b[bj[j]] = 0;
        }
        console.log('node 2351');
        sol(U, x, b, xj, bj);
        console.log('node 2352');
        if (flag) {
            console.log('node 2354');
            return b;
        } else {
            console.log('node 2355');
            ;
        }
        console.log('node 2356');
        for (j = xj.length - 1; j !== -1; --j) {
            console.log('node 2358');
            x[xj[j]] = 0;
        }
        console.log('node 2359');
        for (j = bj.length - 1; j !== -1; --j) {
            console.log('node 2361');
            J = bj[j];
            console.log('node 2362');
            Xj[N] = J;
            console.log('node 2363');
            Xv[N] = b[J];
            console.log('node 2364');
            b[J] = 0;
            console.log('node 2365');
            ++N;
        }
        console.log('node 2366');
        Xi[i + 1] = N;
    }
    console.log('node 2367');
    return [
        Xi,
        Xj,
        Xv
    ];
};
console.log('node 5074');
numeric.ccsbinop = function ccsbinop(body, setup) {
    console.log('node 2370');
    if (typeof setup === 'undefined') {
        console.log('node 2372');
        setup = '';
    } else {
        console.log('node 2373');
        ;
    }
    console.log('node 2374');
    return Function('X', 'Y', 'var Xi = X[0], Xj = X[1], Xv = X[2];\n' + 'var Yi = Y[0], Yj = Y[1], Yv = Y[2];\n' + 'var n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\n' + 'var Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\n' + 'var x = numeric.rep([m],0),y = numeric.rep([m],0);\n' + 'var xk,yk,zk;\n' + 'var i,j,j0,j1,k,p=0;\n' + setup + 'for(i=0;i<n;++i) {\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Xj[j];\n' + '    x[k] = 1;\n' + '    Zj[p] = k;\n' + '    ++p;\n' + '  }\n' + '  j0 = Yi[i]; j1 = Yi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Yj[j];\n' + '    y[k] = Yv[j];\n' + '    if(x[k] === 0) {\n' + '      Zj[p] = k;\n' + '      ++p;\n' + '    }\n' + '  }\n' + '  Zi[i+1] = p;\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n' + '  j0 = Zi[i]; j1 = Zi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Zj[j];\n' + '    xk = x[k];\n' + '    yk = y[k];\n' + body + '\n' + '    Zv[j] = zk;\n' + '  }\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n' + '  j0 = Yi[i]; j1 = Yi[i+1];\n' + '  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n' + '}\n' + 'return [Zi,Zj,Zv];');
};
console.log('node 5075');
(function () {
    console.log('node 2377');
    var k, A, B, C;
    console.log('node 2378');
    for (k in numeric.ops2) {
        console.log('node 2380');
        if (isFinite(eval('1' + numeric.ops2[k] + '0'))) {
            console.log('node 2382');
            A = '[Y[0],Y[1],numeric.' + k + '(X,Y[2])]';
        } else {
            console.log('node 2383');
            A = 'NaN';
        }
        console.log('node 2384');
        if (isFinite(eval('0' + numeric.ops2[k] + '1'))) {
            console.log('node 2386');
            B = '[X[0],X[1],numeric.' + k + '(X[2],Y)]';
        } else {
            console.log('node 2387');
            B = 'NaN';
        }
        console.log('node 2388');
        if (isFinite(eval('1' + numeric.ops2[k] + '0')) && isFinite(eval('0' + numeric.ops2[k] + '1'))) {
            console.log('node 2390');
            C = 'numeric.ccs' + k + 'MM(X,Y)';
        } else {
            console.log('node 2391');
            C = 'NaN';
        }
        console.log('node 2392');
        numeric['ccs' + k + 'MM'] = numeric.ccsbinop('zk = xk ' + numeric.ops2[k] + 'yk;');
        console.log('node 2393');
        numeric['ccs' + k] = Function('X', 'Y', 'if(typeof X === "number") return ' + A + ';\n' + 'if(typeof Y === "number") return ' + B + ';\n' + 'return ' + C + ';\n');
    }
}());
console.log('node 5076');
numeric.ccsScatter = function ccsScatter(A) {
    console.log('node 2396');
    var Ai = A[0], Aj = A[1], Av = A[2];
    console.log('node 2397');
    var n = numeric.sup(Aj) + 1, m = Ai.length;
    console.log('node 2398');
    var Ri = numeric.rep([n], 0), Rj = Array(m), Rv = Array(m);
    console.log('node 2399');
    var counts = numeric.rep([n], 0), i;
    console.log('node 2400');
    for (i = 0; i < m; ++i) {
        console.log('node 2402');
        counts[Aj[i]]++;
    }
    console.log('node 2403');
    for (i = 0; i < n; ++i) {
        console.log('node 2405');
        Ri[i + 1] = Ri[i] + counts[i];
    }
    console.log('node 2406');
    var ptr = Ri.slice(0), k, Aii;
    console.log('node 2407');
    for (i = 0; i < m; ++i) {
        console.log('node 2409');
        Aii = Aj[i];
        console.log('node 2410');
        k = ptr[Aii];
        console.log('node 2411');
        Rj[k] = Ai[i];
        console.log('node 2412');
        Rv[k] = Av[i];
        console.log('node 2413');
        ptr[Aii] = ptr[Aii] + 1;
    }
    console.log('node 2414');
    return [
        Ri,
        Rj,
        Rv
    ];
};
console.log('node 5077');
numeric.ccsGather = function ccsGather(A) {
    console.log('node 2417');
    var Ai = A[0], Aj = A[1], Av = A[2];
    console.log('node 2418');
    var n = Ai.length - 1, m = Aj.length;
    console.log('node 2419');
    var Ri = Array(m), Rj = Array(m), Rv = Array(m);
    console.log('node 2420');
    var i, j, j0, j1, p;
    console.log('node 2421');
    p = 0;
    console.log('node 2422');
    for (i = 0; i < n; ++i) {
        console.log('node 2424');
        j0 = Ai[i];
        console.log('node 2425');
        j1 = Ai[i + 1];
        console.log('node 2426');
        for (j = j0; j !== j1; ++j) {
            console.log('node 2428');
            Rj[p] = i;
            console.log('node 2429');
            Ri[p] = Aj[j];
            console.log('node 2430');
            Rv[p] = Av[j];
            console.log('node 2431');
            ++p;
        }
    }
    console.log('node 2432');
    return [
        Ri,
        Rj,
        Rv
    ];
};
console.log('node 5078');
numeric.sdim = function dim(A, ret, k) {
    console.log('node 2435');
    if (typeof ret === 'undefined') {
        console.log('node 2437');
        ret = [];
    } else {
        console.log('node 2438');
        ;
    }
    console.log('node 2439');
    if (typeof A !== 'object') {
        console.log('node 2441');
        return ret;
    } else {
        console.log('node 2442');
        ;
    }
    console.log('node 2443');
    if (typeof k === 'undefined') {
        console.log('node 2445');
        k = 0;
    } else {
        console.log('node 2446');
        ;
    }
    console.log('node 2447');
    if (!(k in ret)) {
        console.log('node 2449');
        ret[k] = 0;
    } else {
        console.log('node 2450');
        ;
    }
    console.log('node 2451');
    if (A.length > ret[k]) {
        console.log('node 2453');
        ret[k] = A.length;
    } else {
        console.log('node 2454');
        ;
    }
    console.log('node 2455');
    var i;
    console.log('node 2456');
    for (i in A) {
        console.log('node 2458');
        if (A.hasOwnProperty(i)) {
            console.log('node 2460');
            dim(A[i], ret, k + 1);
        } else {
            console.log('node 2461');
            ;
        }
    }
    console.log('node 2462');
    return ret;
};
console.log('node 5079');
numeric.sclone = function clone(A, k, n) {
    console.log('node 2465');
    if (typeof k === 'undefined') {
        console.log('node 2467');
        k = 0;
    } else {
        console.log('node 2468');
        ;
    }
    console.log('node 2469');
    if (typeof n === 'undefined') {
        console.log('node 2471');
        n = numeric.sdim(A).length;
    } else {
        console.log('node 2472');
        ;
    }
    console.log('node 2473');
    var i, ret = Array(A.length);
    console.log('node 2474');
    if (k === n - 1) {
        console.log('node 2476');
        for (i in A) {
            console.log('node 2478');
            if (A.hasOwnProperty(i)) {
                console.log('node 2480');
                ret[i] = A[i];
            } else {
                console.log('node 2481');
                ;
            }
        }
        console.log('node 2482');
        return ret;
    } else {
        console.log('node 2483');
        ;
    }
    console.log('node 2484');
    for (i in A) {
        console.log('node 2486');
        if (A.hasOwnProperty(i)) {
            console.log('node 2488');
            ret[i] = clone(A[i], k + 1, n);
        } else {
            console.log('node 2489');
            ;
        }
    }
    console.log('node 2490');
    return ret;
};
console.log('node 5080');
numeric.sdiag = function diag(d) {
    console.log('node 2493');
    var n = d.length, i, ret = Array(n), i1, i2, i3;
    console.log('node 2494');
    for (i = n - 1; i >= 1; i -= 2) {
        console.log('node 2496');
        i1 = i - 1;
        console.log('node 2497');
        ret[i] = [];
        console.log('node 2498');
        ret[i][i] = d[i];
        console.log('node 2499');
        ret[i1] = [];
        console.log('node 2500');
        ret[i1][i1] = d[i1];
    }
    console.log('node 2501');
    if (i === 0) {
        console.log('node 2503');
        ret[0] = [];
        console.log('node 2504');
        ret[0][0] = d[i];
    } else {
        console.log('node 2505');
        ;
    }
    console.log('node 2506');
    return ret;
};
console.log('node 5081');
numeric.sidentity = function identity(n) {
    console.log('node 2509');
    return numeric.sdiag(numeric.rep([n], 1));
};
console.log('node 5082');
numeric.stranspose = function transpose(A) {
    console.log('node 2512');
    var ret = [], n = A.length, i, j, Ai;
    console.log('node 2513');
    for (i in A) {
        console.log('node 2515');
        if (!A.hasOwnProperty(i)) {
            console.log('node 2517');
            continue;
        } else {
            console.log('node 2518');
            ;
        }
        console.log('node 2519');
        Ai = A[i];
        console.log('node 2520');
        for (j in Ai) {
            console.log('node 2522');
            if (!Ai.hasOwnProperty(j)) {
                console.log('node 2524');
                continue;
            } else {
                console.log('node 2525');
                ;
            }
            console.log('node 2526');
            if (typeof ret[j] !== 'object') {
                console.log('node 2528');
                ret[j] = [];
            } else {
                console.log('node 2529');
                ;
            }
            console.log('node 2530');
            ret[j][i] = Ai[j];
        }
    }
    console.log('node 2531');
    return ret;
};
console.log('node 5083');
numeric.sLUP = function LUP(A, tol) {
    throw new Error('The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.');
};
console.log('node 5084');
numeric.sdotMM = function dotMM(A, B) {
    console.log('node 2536');
    var p = A.length, q = B.length, BT = numeric.stranspose(B), r = BT.length, Ai, BTk;
    console.log('node 2537');
    var i, j, k, accum;
    console.log('node 2538');
    var ret = Array(p), reti;
    console.log('node 2539');
    for (i = p - 1; i >= 0; i--) {
        console.log('node 2541');
        reti = [];
        console.log('node 2542');
        Ai = A[i];
        console.log('node 2543');
        for (k = r - 1; k >= 0; k--) {
            console.log('node 2545');
            accum = 0;
            console.log('node 2546');
            BTk = BT[k];
            console.log('node 2547');
            for (j in Ai) {
                console.log('node 2549');
                if (!Ai.hasOwnProperty(j)) {
                    console.log('node 2551');
                    continue;
                } else {
                    console.log('node 2552');
                    ;
                }
                console.log('node 2553');
                if (j in BTk) {
                    console.log('node 2555');
                    accum += Ai[j] * BTk[j];
                } else {
                    console.log('node 2556');
                    ;
                }
            }
            console.log('node 2557');
            if (accum) {
                console.log('node 2559');
                reti[k] = accum;
            } else {
                console.log('node 2560');
                ;
            }
        }
        console.log('node 2561');
        ret[i] = reti;
    }
    console.log('node 2562');
    return ret;
};
console.log('node 5085');
numeric.sdotMV = function dotMV(A, x) {
    console.log('node 2565');
    var p = A.length, Ai, i, j;
    console.log('node 2566');
    var ret = Array(p), accum;
    console.log('node 2567');
    for (i = p - 1; i >= 0; i--) {
        console.log('node 2569');
        Ai = A[i];
        console.log('node 2570');
        accum = 0;
        console.log('node 2571');
        for (j in Ai) {
            console.log('node 2573');
            if (!Ai.hasOwnProperty(j)) {
                console.log('node 2575');
                continue;
            } else {
                console.log('node 2576');
                ;
            }
            console.log('node 2577');
            if (x[j]) {
                console.log('node 2579');
                accum += Ai[j] * x[j];
            } else {
                console.log('node 2580');
                ;
            }
        }
        console.log('node 2581');
        if (accum) {
            console.log('node 2583');
            ret[i] = accum;
        } else {
            console.log('node 2584');
            ;
        }
    }
    console.log('node 2585');
    return ret;
};
console.log('node 5086');
numeric.sdotVM = function dotMV(x, A) {
    console.log('node 2588');
    var i, j, Ai, alpha;
    console.log('node 2589');
    var ret = [], accum;
    console.log('node 2590');
    for (i in x) {
        console.log('node 2592');
        if (!x.hasOwnProperty(i)) {
            console.log('node 2594');
            continue;
        } else {
            console.log('node 2595');
            ;
        }
        console.log('node 2596');
        Ai = A[i];
        console.log('node 2597');
        alpha = x[i];
        console.log('node 2598');
        for (j in Ai) {
            console.log('node 2600');
            if (!Ai.hasOwnProperty(j)) {
                console.log('node 2602');
                continue;
            } else {
                console.log('node 2603');
                ;
            }
            console.log('node 2604');
            if (!ret[j]) {
                console.log('node 2606');
                ret[j] = 0;
            } else {
                console.log('node 2607');
                ;
            }
            console.log('node 2608');
            ret[j] += alpha * Ai[j];
        }
    }
    console.log('node 2609');
    return ret;
};
console.log('node 5087');
numeric.sdotVV = function dotVV(x, y) {
    console.log('node 2612');
    var i, ret = 0;
    console.log('node 2613');
    for (i in x) {
        console.log('node 2615');
        if (x[i] && y[i]) {
            console.log('node 2617');
            ret += x[i] * y[i];
        } else {
            console.log('node 2618');
            ;
        }
    }
    console.log('node 2619');
    return ret;
};
console.log('node 5088');
numeric.sdot = function dot(A, B) {
    console.log('node 2622');
    var m = numeric.sdim(A).length, n = numeric.sdim(B).length;
    console.log('node 2623');
    var k = m * 1000 + n;
    console.log('node 2624');
    switch (k) {
    case 0:
        console.log('node 2627');
        return A * B;
    case 1001:
        console.log('node 2629');
        return numeric.sdotVV(A, B);
    case 2001:
        console.log('node 2631');
        return numeric.sdotMV(A, B);
    case 1002:
        console.log('node 2633');
        return numeric.sdotVM(A, B);
    case 2002:
        console.log('node 2635');
        return numeric.sdotMM(A, B);
    default:
        throw new Error('numeric.sdot not implemented for tensors of order ' + m + ' and ' + n);
    }
};
console.log('node 5089');
numeric.sscatter = function scatter(V) {
    console.log('node 2639');
    var n = V[0].length, Vij, i, j, m = V.length, A = [], Aj;
    console.log('node 2640');
    for (i = n - 1; i >= 0; --i) {
        console.log('node 2642');
        if (!V[m - 1][i]) {
            console.log('node 2644');
            continue;
        } else {
            console.log('node 2645');
            ;
        }
        console.log('node 2646');
        Aj = A;
        console.log('node 2647');
        for (j = 0; j < m - 2; j++) {
            console.log('node 2649');
            Vij = V[j][i];
            console.log('node 2650');
            if (!Aj[Vij]) {
                console.log('node 2652');
                Aj[Vij] = [];
            } else {
                console.log('node 2653');
                ;
            }
            console.log('node 2654');
            Aj = Aj[Vij];
        }
        console.log('node 2655');
        Aj[V[j][i]] = V[j + 1][i];
    }
    console.log('node 2656');
    return A;
};
console.log('node 5090');
numeric.sgather = function gather(A, ret, k) {
    console.log('node 2659');
    if (typeof ret === 'undefined') {
        console.log('node 2661');
        ret = [];
    } else {
        console.log('node 2662');
        ;
    }
    console.log('node 2663');
    if (typeof k === 'undefined') {
        console.log('node 2665');
        k = [];
    } else {
        console.log('node 2666');
        ;
    }
    console.log('node 2667');
    var n, i, Ai;
    console.log('node 2668');
    n = k.length;
    console.log('node 2669');
    for (i in A) {
        console.log('node 2671');
        if (A.hasOwnProperty(i)) {
            console.log('node 2673');
            k[n] = parseInt(i);
            console.log('node 2674');
            Ai = A[i];
            console.log('node 2675');
            if (typeof Ai === 'number') {
                console.log('node 2677');
                if (Ai) {
                    console.log('node 2679');
                    if (ret.length === 0) {
                        console.log('node 2681');
                        for (i = n + 1; i >= 0; --i) {
                            console.log('node 2683');
                            ret[i] = [];
                        }
                    } else {
                        console.log('node 2684');
                        ;
                    }
                    console.log('node 2685');
                    for (i = n; i >= 0; --i) {
                        console.log('node 2687');
                        ret[i].push(k[i]);
                    }
                    console.log('node 2688');
                    ret[n + 1].push(Ai);
                } else {
                    console.log('node 2689');
                    ;
                }
            } else {
                console.log('node 2690');
                gather(Ai, ret, k);
            }
        } else {
            console.log('node 2691');
            ;
        }
    }
    console.log('node 2692');
    if (k.length > n) {
        console.log('node 2694');
        k.pop();
    } else {
        console.log('node 2695');
        ;
    }
    console.log('node 2696');
    return ret;
};
console.log('node 5091');
numeric.cLU = function LU(A) {
    console.log('node 2699');
    var I = A[0], J = A[1], V = A[2];
    console.log('node 2700');
    var p = I.length, m = 0, i, j, k, a, b, c;
    console.log('node 2701');
    for (i = 0; i < p; i++) {
        console.log('node 2703');
        if (I[i] > m) {
            console.log('node 2705');
            m = I[i];
        } else {
            console.log('node 2706');
            ;
        }
    }
    console.log('node 2707');
    m++;
    console.log('node 2708');
    var L = Array(m), U = Array(m), left = numeric.rep([m], Infinity), right = numeric.rep([m], -Infinity);
    console.log('node 2709');
    var Ui, Uj, alpha;
    console.log('node 2710');
    for (k = 0; k < p; k++) {
        console.log('node 2712');
        i = I[k];
        console.log('node 2713');
        j = J[k];
        console.log('node 2714');
        if (j < left[i]) {
            console.log('node 2716');
            left[i] = j;
        } else {
            console.log('node 2717');
            ;
        }
        console.log('node 2718');
        if (j > right[i]) {
            console.log('node 2720');
            right[i] = j;
        } else {
            console.log('node 2721');
            ;
        }
    }
    console.log('node 2722');
    for (i = 0; i < m - 1; i++) {
        console.log('node 2724');
        if (right[i] > right[i + 1]) {
            console.log('node 2726');
            right[i + 1] = right[i];
        } else {
            console.log('node 2727');
            ;
        }
    }
    console.log('node 2728');
    for (i = m - 1; i >= 1; i--) {
        console.log('node 2730');
        if (left[i] < left[i - 1]) {
            console.log('node 2732');
            left[i - 1] = left[i];
        } else {
            console.log('node 2733');
            ;
        }
    }
    console.log('node 2734');
    var countL = 0, countU = 0;
    console.log('node 2735');
    for (i = 0; i < m; i++) {
        console.log('node 2737');
        U[i] = numeric.rep([right[i] - left[i] + 1], 0);
        console.log('node 2738');
        L[i] = numeric.rep([i - left[i]], 0);
        console.log('node 2739');
        countL += i - left[i] + 1;
        console.log('node 2740');
        countU += right[i] - i + 1;
    }
    console.log('node 2741');
    for (k = 0; k < p; k++) {
        console.log('node 2743');
        i = I[k];
        console.log('node 2744');
        U[i][J[k] - left[i]] = V[k];
    }
    console.log('node 2745');
    for (i = 0; i < m - 1; i++) {
        console.log('node 2747');
        a = i - left[i];
        console.log('node 2748');
        Ui = U[i];
        console.log('node 2749');
        for (j = i + 1; left[j] <= i && j < m; j++) {
            console.log('node 2751');
            b = i - left[j];
            console.log('node 2752');
            c = right[i] - i;
            console.log('node 2753');
            Uj = U[j];
            console.log('node 2754');
            alpha = Uj[b] / Ui[a];
            console.log('node 2755');
            if (alpha) {
                console.log('node 2757');
                for (k = 1; k <= c; k++) {
                    console.log('node 2759');
                    Uj[k + b] -= alpha * Ui[k + a];
                }
                console.log('node 2760');
                L[j][i - left[j]] = alpha;
            } else {
                console.log('node 2761');
                ;
            }
        }
    }
    console.log('node 2762');
    var Ui = [], Uj = [], Uv = [], Li = [], Lj = [], Lv = [];
    console.log('node 2763');
    var p, q, foo;
    console.log('node 2764');
    p = 0;
    console.log('node 2765');
    q = 0;
    console.log('node 2766');
    for (i = 0; i < m; i++) {
        console.log('node 2768');
        a = left[i];
        console.log('node 2769');
        b = right[i];
        console.log('node 2770');
        foo = U[i];
        console.log('node 2771');
        for (j = i; j <= b; j++) {
            console.log('node 2773');
            if (foo[j - a]) {
                console.log('node 2775');
                Ui[p] = i;
                console.log('node 2776');
                Uj[p] = j;
                console.log('node 2777');
                Uv[p] = foo[j - a];
                console.log('node 2778');
                p++;
            } else {
                console.log('node 2779');
                ;
            }
        }
        console.log('node 2780');
        foo = L[i];
        console.log('node 2781');
        for (j = a; j < i; j++) {
            console.log('node 2783');
            if (foo[j - a]) {
                console.log('node 2785');
                Li[q] = i;
                console.log('node 2786');
                Lj[q] = j;
                console.log('node 2787');
                Lv[q] = foo[j - a];
                console.log('node 2788');
                q++;
            } else {
                console.log('node 2789');
                ;
            }
        }
        console.log('node 2790');
        Li[q] = i;
        console.log('node 2791');
        Lj[q] = i;
        console.log('node 2792');
        Lv[q] = 1;
        console.log('node 2793');
        q++;
    }
    console.log('node 2794');
    return {
        U: [
            Ui,
            Uj,
            Uv
        ],
        L: [
            Li,
            Lj,
            Lv
        ]
    };
};
console.log('node 5092');
numeric.cLUsolve = function LUsolve(lu, b) {
    console.log('node 2797');
    var L = lu.L, U = lu.U, ret = numeric.clone(b);
    console.log('node 2798');
    var Li = L[0], Lj = L[1], Lv = L[2];
    console.log('node 2799');
    var Ui = U[0], Uj = U[1], Uv = U[2];
    console.log('node 2800');
    var p = Ui.length, q = Li.length;
    console.log('node 2801');
    var m = ret.length, i, j, k;
    console.log('node 2802');
    k = 0;
    console.log('node 2803');
    for (i = 0; i < m; i++) {
        console.log('node 2805');
        while (Lj[k] < i) {
            console.log('node 2807');
            ret[i] -= Lv[k] * ret[Lj[k]];
            console.log('node 2808');
            k++;
        }
        console.log('node 2809');
        k++;
    }
    console.log('node 2810');
    k = p - 1;
    console.log('node 2811');
    for (i = m - 1; i >= 0; i--) {
        console.log('node 2813');
        while (Uj[k] > i) {
            console.log('node 2815');
            ret[i] -= Uv[k] * ret[Uj[k]];
            console.log('node 2816');
            k--;
        }
        console.log('node 2817');
        ret[i] /= Uv[k];
        console.log('node 2818');
        k--;
    }
    console.log('node 2819');
    return ret;
};
console.log('node 5093');
numeric.cgrid = function grid(n, shape) {
    console.log('node 2822');
    if (typeof n === 'number') {
        console.log('node 2824');
        n = [
            n,
            n
        ];
    } else {
        console.log('node 2825');
        ;
    }
    console.log('node 2826');
    var ret = numeric.rep(n, -1);
    console.log('node 2827');
    var i, j, count;
    console.log('node 2828');
    if (typeof shape !== 'function') {
        console.log('node 2830');
        switch (shape) {
        case 'L':
            console.log('node 2833');
            shape = function (i, j) {
                console.log('node 2852');
                return i >= n[0] / 2 || j < n[1] / 2;
            };
            console.log('node 2834');
            break;
        default:
            console.log('node 2836');
            shape = function (i, j) {
                console.log('node 2855');
                return true;
            };
            console.log('node 2837');
            break;
        }
    } else {
        console.log('node 2838');
        ;
    }
    console.log('node 2839');
    count = 0;
    console.log('node 2840');
    for (i = 1; i < n[0] - 1; i++) {
        console.log('node 2842');
        for (j = 1; j < n[1] - 1; j++) {
            console.log('node 2844');
            if (shape(i, j)) {
                console.log('node 2846');
                ret[i][j] = count;
                console.log('node 2847');
                count++;
            } else {
                console.log('node 2848');
                ;
            }
        }
    }
    console.log('node 2849');
    return ret;
};
console.log('node 5094');
numeric.cdelsq = function delsq(g) {
    console.log('node 2858');
    var dir = [
        [
            -1,
            0
        ],
        [
            0,
            -1
        ],
        [
            0,
            1
        ],
        [
            1,
            0
        ]
    ];
    console.log('node 2859');
    var s = numeric.dim(g), m = s[0], n = s[1], i, j, k, p, q;
    console.log('node 2860');
    var Li = [], Lj = [], Lv = [];
    console.log('node 2861');
    for (i = 1; i < m - 1; i++) {
        console.log('node 2863');
        for (j = 1; j < n - 1; j++) {
            console.log('node 2865');
            if (g[i][j] < 0) {
                console.log('node 2867');
                continue;
            } else {
                console.log('node 2868');
                ;
            }
            console.log('node 2869');
            for (k = 0; k < 4; k++) {
                console.log('node 2871');
                p = i + dir[k][0];
                console.log('node 2872');
                q = j + dir[k][1];
                console.log('node 2873');
                if (g[p][q] < 0) {
                    console.log('node 2875');
                    continue;
                } else {
                    console.log('node 2876');
                    ;
                }
                console.log('node 2877');
                Li.push(g[i][j]);
                console.log('node 2878');
                Lj.push(g[p][q]);
                console.log('node 2879');
                Lv.push(-1);
            }
            console.log('node 2880');
            Li.push(g[i][j]);
            console.log('node 2881');
            Lj.push(g[i][j]);
            console.log('node 2882');
            Lv.push(4);
        }
    }
    console.log('node 2883');
    return [
        Li,
        Lj,
        Lv
    ];
};
console.log('node 5095');
numeric.cdotMV = function dotMV(A, x) {
    console.log('node 2886');
    var ret, Ai = A[0], Aj = A[1], Av = A[2], k, p = Ai.length, N;
    console.log('node 2887');
    N = 0;
    console.log('node 2888');
    for (k = 0; k < p; k++) {
        console.log('node 2890');
        if (Ai[k] > N) {
            console.log('node 2892');
            N = Ai[k];
        } else {
            console.log('node 2893');
            ;
        }
    }
    console.log('node 2894');
    N++;
    console.log('node 2895');
    ret = numeric.rep([N], 0);
    console.log('node 2896');
    for (k = 0; k < p; k++) {
        console.log('node 2898');
        ret[Ai[k]] += Av[k] * x[Aj[k]];
    }
    console.log('node 2899');
    return ret;
};
console.log('node 5096');
numeric.Spline = function Spline(x, yl, yr, kl, kr) {
    console.log('node 2902');
    this.x = x;
    console.log('node 2903');
    this.yl = yl;
    console.log('node 2904');
    this.yr = yr;
    console.log('node 2905');
    this.kl = kl;
    console.log('node 2906');
    this.kr = kr;
};
console.log('node 5097');
numeric.Spline.prototype._at = function _at(x1, p) {
    console.log('node 2909');
    var x = this.x;
    console.log('node 2910');
    var yl = this.yl;
    console.log('node 2911');
    var yr = this.yr;
    console.log('node 2912');
    var kl = this.kl;
    console.log('node 2913');
    var kr = this.kr;
    console.log('node 2914');
    var x1, a, b, t;
    console.log('node 2915');
    var add = numeric.add, sub = numeric.sub, mul = numeric.mul;
    console.log('node 2916');
    a = sub(mul(kl[p], x[p + 1] - x[p]), sub(yr[p + 1], yl[p]));
    console.log('node 2917');
    b = add(mul(kr[p + 1], x[p] - x[p + 1]), sub(yr[p + 1], yl[p]));
    console.log('node 2918');
    t = (x1 - x[p]) / (x[p + 1] - x[p]);
    console.log('node 2919');
    var s = t * (1 - t);
    console.log('node 2920');
    return add(add(add(mul(1 - t, yl[p]), mul(t, yr[p + 1])), mul(a, s * (1 - t))), mul(b, s * t));
};
console.log('node 5098');
numeric.Spline.prototype.at = function at(x0) {
    console.log('node 2923');
    if (typeof x0 === 'number') {
        console.log('node 2925');
        var x = this.x;
        console.log('node 2926');
        var n = x.length;
        console.log('node 2927');
        var p, q, mid, floor = Math.floor, a, b, t;
        console.log('node 2928');
        p = 0;
        console.log('node 2929');
        q = n - 1;
        console.log('node 2930');
        while (q - p > 1) {
            console.log('node 2932');
            mid = floor((p + q) / 2);
            console.log('node 2933');
            if (x[mid] <= x0) {
                console.log('node 2935');
                p = mid;
            } else {
                console.log('node 2936');
                q = mid;
            }
        }
        console.log('node 2937');
        return this._at(x0, p);
    } else {
        console.log('node 2938');
        ;
    }
    console.log('node 2939');
    var n = x0.length, i, ret = Array(n);
    console.log('node 2940');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 2942');
        ret[i] = this.at(x0[i]);
    }
    console.log('node 2943');
    return ret;
};
console.log('node 5099');
numeric.Spline.prototype.diff = function diff() {
    console.log('node 2946');
    var x = this.x;
    console.log('node 2947');
    var yl = this.yl;
    console.log('node 2948');
    var yr = this.yr;
    console.log('node 2949');
    var kl = this.kl;
    console.log('node 2950');
    var kr = this.kr;
    console.log('node 2951');
    var n = yl.length;
    console.log('node 2952');
    var i, dx, dy;
    console.log('node 2953');
    var zl = kl, zr = kr, pl = Array(n), pr = Array(n);
    console.log('node 2954');
    var add = numeric.add, mul = numeric.mul, div = numeric.div, sub = numeric.sub;
    console.log('node 2955');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 2957');
        dx = x[i + 1] - x[i];
        console.log('node 2958');
        dy = sub(yr[i + 1], yl[i]);
        console.log('node 2959');
        pl[i] = div(add(mul(dy, 6), mul(kl[i], -4 * dx), mul(kr[i + 1], -2 * dx)), dx * dx);
        console.log('node 2960');
        pr[i + 1] = div(add(mul(dy, -6), mul(kl[i], 2 * dx), mul(kr[i + 1], 4 * dx)), dx * dx);
    }
    console.log('node 2961');
    return new numeric.Spline(x, zl, zr, pl, pr);
};
console.log('node 5100');
numeric.Spline.prototype.roots = function roots() {
    console.log('node -1');
    function sqr(x) {
        console.log('node 2966');
        return x * x;
    }
    console.log('node -1');
    function heval(y0, y1, k0, k1, x) {
        console.log('node 2969');
        var A = k0 * 2 - (y1 - y0);
        console.log('node 2970');
        var B = -k1 * 2 + (y1 - y0);
        console.log('node 2971');
        var t = (x + 1) * 0.5;
        console.log('node 2972');
        var s = t * (1 - t);
        console.log('node 2973');
        return (1 - t) * y0 + t * y1 + A * s * (1 - t) + B * s * t;
    }
    console.log('node 2974');
    var ret = [];
    console.log('node 2975');
    var x = this.x, yl = this.yl, yr = this.yr, kl = this.kl, kr = this.kr;
    console.log('node 2976');
    if (typeof yl[0] === 'number') {
        console.log('node 2978');
        yl = [yl];
        console.log('node 2979');
        yr = [yr];
        console.log('node 2980');
        kl = [kl];
        console.log('node 2981');
        kr = [kr];
    } else {
        console.log('node 2982');
        ;
    }
    console.log('node 2983');
    var m = yl.length, n = x.length - 1, i, j, k, y, s, t;
    console.log('node 2984');
    var ai, bi, ci, di, ret = Array(m), ri, k0, k1, y0, y1, A, B, D, dx, cx, stops, z0, z1, zm, t0, t1, tm;
    console.log('node 2985');
    var sqrt = Math.sqrt;
    console.log('node 2986');
    for (i = 0; i !== m; ++i) {
        console.log('node 2988');
        ai = yl[i];
        console.log('node 2989');
        bi = yr[i];
        console.log('node 2990');
        ci = kl[i];
        console.log('node 2991');
        di = kr[i];
        console.log('node 2992');
        ri = [];
        console.log('node 2993');
        for (j = 0; j !== n; j++) {
            console.log('node 2995');
            if (j > 0 && bi[j] * ai[j] < 0) {
                console.log('node 2997');
                ri.push(x[j]);
            } else {
                console.log('node 2998');
                ;
            }
            console.log('node 2999');
            dx = x[j + 1] - x[j];
            console.log('node 3000');
            cx = x[j];
            console.log('node 3001');
            y0 = ai[j];
            console.log('node 3002');
            y1 = bi[j + 1];
            console.log('node 3003');
            k0 = ci[j] / dx;
            console.log('node 3004');
            k1 = di[j + 1] / dx;
            console.log('node 3005');
            D = sqr(k0 - k1 + 3 * (y0 - y1)) + 12 * k1 * y0;
            console.log('node 3006');
            A = k1 + 3 * y0 + 2 * k0 - 3 * y1;
            console.log('node 3007');
            B = 3 * (k1 + k0 + 2 * (y0 - y1));
            console.log('node 3008');
            if (D <= 0) {
                console.log('node 3010');
                z0 = A / B;
                console.log('node 3011');
                if (z0 > x[j] && z0 < x[j + 1]) {
                    console.log('node 3013');
                    stops = [
                        x[j],
                        z0,
                        x[j + 1]
                    ];
                } else {
                    console.log('node 3014');
                    stops = [
                        x[j],
                        x[j + 1]
                    ];
                }
            } else {
                console.log('node 3015');
                z0 = (A - sqrt(D)) / B;
                console.log('node 3016');
                z1 = (A + sqrt(D)) / B;
                console.log('node 3017');
                stops = [x[j]];
                console.log('node 3018');
                if (z0 > x[j] && z0 < x[j + 1]) {
                    console.log('node 3020');
                    stops.push(z0);
                } else {
                    console.log('node 3021');
                    ;
                }
                console.log('node 3022');
                if (z1 > x[j] && z1 < x[j + 1]) {
                    console.log('node 3024');
                    stops.push(z1);
                } else {
                    console.log('node 3025');
                    ;
                }
                console.log('node 3026');
                stops.push(x[j + 1]);
            }
            console.log('node 3027');
            t0 = stops[0];
            console.log('node 3028');
            z0 = this._at(t0, j);
            console.log('node 3029');
            for (k = 0; k < stops.length - 1; k++) {
                console.log('node 3031');
                t1 = stops[k + 1];
                console.log('node 3032');
                z1 = this._at(t1, j);
                console.log('node 3033');
                if (z0 === 0) {
                    console.log('node 3035');
                    ri.push(t0);
                    console.log('node 3036');
                    t0 = t1;
                    console.log('node 3037');
                    z0 = z1;
                    console.log('node 3038');
                    continue;
                } else {
                    console.log('node 3039');
                    ;
                }
                console.log('node 3040');
                if (z1 === 0 || z0 * z1 > 0) {
                    console.log('node 3042');
                    t0 = t1;
                    console.log('node 3043');
                    z0 = z1;
                    console.log('node 3044');
                    continue;
                } else {
                    console.log('node 3045');
                    ;
                }
                console.log('node 3046');
                var side = 0;
                console.log('node 3047');
                while (1) {
                    console.log('node 3049');
                    tm = (z0 * t1 - z1 * t0) / (z0 - z1);
                    console.log('node 3050');
                    if (tm <= t0 || tm >= t1) {
                        console.log('node 3052');
                        break;
                    } else {
                        console.log('node 3053');
                        ;
                    }
                    console.log('node 3054');
                    zm = this._at(tm, j);
                    console.log('node 3055');
                    if (zm * z1 > 0) {
                        console.log('node 3057');
                        t1 = tm;
                        console.log('node 3058');
                        z1 = zm;
                        console.log('node 3059');
                        if (side === -1) {
                            console.log('node 3061');
                            z0 *= 0.5;
                        } else {
                            console.log('node 3062');
                            ;
                        }
                        console.log('node 3063');
                        side = -1;
                    } else {
                        console.log('node 3064');
                        if (zm * z0 > 0) {
                            console.log('node 3066');
                            t0 = tm;
                            console.log('node 3067');
                            z0 = zm;
                            console.log('node 3068');
                            if (side === 1) {
                                console.log('node 3070');
                                z1 *= 0.5;
                            } else {
                                console.log('node 3071');
                                ;
                            }
                            console.log('node 3072');
                            side = 1;
                        } else {
                            console.log('node 3073');
                            break;
                        }
                    }
                }
                console.log('node 3074');
                ri.push(tm);
                console.log('node 3075');
                t0 = stops[k + 1];
                console.log('node 3076');
                z0 = this._at(t0, j);
            }
            console.log('node 3077');
            if (z1 === 0) {
                console.log('node 3079');
                ri.push(t1);
            } else {
                console.log('node 3080');
                ;
            }
        }
        console.log('node 3081');
        ret[i] = ri;
    }
    console.log('node 3082');
    if (typeof this.yl[0] === 'number') {
        console.log('node 3084');
        return ret[0];
    } else {
        console.log('node 3085');
        ;
    }
    console.log('node 3086');
    return ret;
};
console.log('node 5101');
numeric.spline = function spline(x, y, k1, kn) {
    console.log('node 3089');
    var n = x.length, b = [], dx = [], dy = [];
    console.log('node 3090');
    var i;
    console.log('node 3091');
    var sub = numeric.sub, mul = numeric.mul, add = numeric.add;
    console.log('node 3092');
    for (i = n - 2; i >= 0; i--) {
        console.log('node 3094');
        dx[i] = x[i + 1] - x[i];
        console.log('node 3095');
        dy[i] = sub(y[i + 1], y[i]);
    }
    console.log('node 3096');
    if (typeof k1 === 'string' || typeof kn === 'string') {
        console.log('node 3098');
        k1 = kn = 'periodic';
    } else {
        console.log('node 3099');
        ;
    }
    console.log('node 3100');
    var T = [
        [],
        [],
        []
    ];
    console.log('node 3101');
    switch (typeof k1) {
    case 'undefined':
        console.log('node 3104');
        b[0] = mul(3 / (dx[0] * dx[0]), dy[0]);
        console.log('node 3105');
        T[0].push(0, 0);
        console.log('node 3106');
        T[1].push(0, 1);
        console.log('node 3107');
        T[2].push(2 / dx[0], 1 / dx[0]);
        console.log('node 3108');
        break;
    case 'string':
        console.log('node 3110');
        b[0] = add(mul(3 / (dx[n - 2] * dx[n - 2]), dy[n - 2]), mul(3 / (dx[0] * dx[0]), dy[0]));
        console.log('node 3111');
        T[0].push(0, 0, 0);
        console.log('node 3112');
        T[1].push(n - 2, 0, 1);
        console.log('node 3113');
        T[2].push(1 / dx[n - 2], 2 / dx[n - 2] + 2 / dx[0], 1 / dx[0]);
        console.log('node 3114');
        break;
    default:
        console.log('node 3116');
        b[0] = k1;
        console.log('node 3117');
        T[0].push(0);
        console.log('node 3118');
        T[1].push(0);
        console.log('node 3119');
        T[2].push(1);
        console.log('node 3120');
        break;
    }
    console.log('node 3121');
    for (i = 1; i < n - 1; i++) {
        console.log('node 3123');
        b[i] = add(mul(3 / (dx[i - 1] * dx[i - 1]), dy[i - 1]), mul(3 / (dx[i] * dx[i]), dy[i]));
        console.log('node 3124');
        T[0].push(i, i, i);
        console.log('node 3125');
        T[1].push(i - 1, i, i + 1);
        console.log('node 3126');
        T[2].push(1 / dx[i - 1], 2 / dx[i - 1] + 2 / dx[i], 1 / dx[i]);
    }
    console.log('node 3127');
    switch (typeof kn) {
    case 'undefined':
        console.log('node 3130');
        b[n - 1] = mul(3 / (dx[n - 2] * dx[n - 2]), dy[n - 2]);
        console.log('node 3131');
        T[0].push(n - 1, n - 1);
        console.log('node 3132');
        T[1].push(n - 2, n - 1);
        console.log('node 3133');
        T[2].push(1 / dx[n - 2], 2 / dx[n - 2]);
        console.log('node 3134');
        break;
    case 'string':
        console.log('node 3136');
        T[1][T[1].length - 1] = 0;
        console.log('node 3137');
        break;
    default:
        console.log('node 3139');
        b[n - 1] = kn;
        console.log('node 3140');
        T[0].push(n - 1);
        console.log('node 3141');
        T[1].push(n - 1);
        console.log('node 3142');
        T[2].push(1);
        console.log('node 3143');
        break;
    }
    console.log('node 3144');
    if (typeof b[0] !== 'number') {
        console.log('node 3146');
        b = numeric.transpose(b);
    } else {
        console.log('node 3147');
        b = [b];
    }
    console.log('node 3148');
    var k = Array(b.length);
    console.log('node 3149');
    if (typeof k1 === 'string') {
        console.log('node 3151');
        for (i = k.length - 1; i !== -1; --i) {
            console.log('node 3153');
            k[i] = numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(T)), b[i]);
            console.log('node 3154');
            k[i][n - 1] = k[i][0];
        }
    } else {
        console.log('node 3155');
        for (i = k.length - 1; i !== -1; --i) {
            console.log('node 3157');
            k[i] = numeric.cLUsolve(numeric.cLU(T), b[i]);
        }
    }
    console.log('node 3158');
    if (typeof y[0] === 'number') {
        console.log('node 3160');
        k = k[0];
    } else {
        console.log('node 3161');
        k = numeric.transpose(k);
    }
    console.log('node 3162');
    return new numeric.Spline(x, y, y, k, k);
};
console.log('node 5102');
numeric.fftpow2 = function fftpow2(x, y) {
    console.log('node 3165');
    var n = x.length;
    console.log('node 3166');
    if (n === 1) {
        console.log('node 3168');
        return;
    } else {
        console.log('node 3169');
        ;
    }
    console.log('node 3170');
    var cos = Math.cos, sin = Math.sin, i, j;
    console.log('node 3171');
    var xe = Array(n / 2), ye = Array(n / 2), xo = Array(n / 2), yo = Array(n / 2);
    console.log('node 3172');
    j = n / 2;
    console.log('node 3173');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 3175');
        --j;
        console.log('node 3176');
        xo[j] = x[i];
        console.log('node 3177');
        yo[j] = y[i];
        console.log('node 3178');
        --i;
        console.log('node 3179');
        xe[j] = x[i];
        console.log('node 3180');
        ye[j] = y[i];
    }
    console.log('node 3181');
    fftpow2(xe, ye);
    console.log('node 3182');
    fftpow2(xo, yo);
    console.log('node 3183');
    j = n / 2;
    console.log('node 3184');
    var t, k = -6.283185307179586 / n, ci, si;
    console.log('node 3185');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 3187');
        --j;
        console.log('node 3188');
        if (j === -1) {
            console.log('node 3190');
            j = n / 2 - 1;
        } else {
            console.log('node 3191');
            ;
        }
        console.log('node 3192');
        t = k * i;
        console.log('node 3193');
        ci = cos(t);
        console.log('node 3194');
        si = sin(t);
        console.log('node 3195');
        x[i] = xe[j] + ci * xo[j] - si * yo[j];
        console.log('node 3196');
        y[i] = ye[j] + ci * yo[j] + si * xo[j];
    }
};
console.log('node 5103');
numeric._ifftpow2 = function _ifftpow2(x, y) {
    console.log('node 3199');
    var n = x.length;
    console.log('node 3200');
    if (n === 1) {
        console.log('node 3202');
        return;
    } else {
        console.log('node 3203');
        ;
    }
    console.log('node 3204');
    var cos = Math.cos, sin = Math.sin, i, j;
    console.log('node 3205');
    var xe = Array(n / 2), ye = Array(n / 2), xo = Array(n / 2), yo = Array(n / 2);
    console.log('node 3206');
    j = n / 2;
    console.log('node 3207');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 3209');
        --j;
        console.log('node 3210');
        xo[j] = x[i];
        console.log('node 3211');
        yo[j] = y[i];
        console.log('node 3212');
        --i;
        console.log('node 3213');
        xe[j] = x[i];
        console.log('node 3214');
        ye[j] = y[i];
    }
    console.log('node 3215');
    _ifftpow2(xe, ye);
    console.log('node 3216');
    _ifftpow2(xo, yo);
    console.log('node 3217');
    j = n / 2;
    console.log('node 3218');
    var t, k = 6.283185307179586 / n, ci, si;
    console.log('node 3219');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 3221');
        --j;
        console.log('node 3222');
        if (j === -1) {
            console.log('node 3224');
            j = n / 2 - 1;
        } else {
            console.log('node 3225');
            ;
        }
        console.log('node 3226');
        t = k * i;
        console.log('node 3227');
        ci = cos(t);
        console.log('node 3228');
        si = sin(t);
        console.log('node 3229');
        x[i] = xe[j] + ci * xo[j] - si * yo[j];
        console.log('node 3230');
        y[i] = ye[j] + ci * yo[j] + si * xo[j];
    }
};
console.log('node 5104');
numeric.ifftpow2 = function ifftpow2(x, y) {
    console.log('node 3233');
    numeric._ifftpow2(x, y);
    console.log('node 3234');
    numeric.diveq(x, x.length);
    console.log('node 3235');
    numeric.diveq(y, y.length);
};
console.log('node 5105');
numeric.convpow2 = function convpow2(ax, ay, bx, by) {
    console.log('node 3238');
    numeric.fftpow2(ax, ay);
    console.log('node 3239');
    numeric.fftpow2(bx, by);
    console.log('node 3240');
    var i, n = ax.length, axi, bxi, ayi, byi;
    console.log('node 3241');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 3243');
        axi = ax[i];
        console.log('node 3244');
        ayi = ay[i];
        console.log('node 3245');
        bxi = bx[i];
        console.log('node 3246');
        byi = by[i];
        console.log('node 3247');
        ax[i] = axi * bxi - ayi * byi;
        console.log('node 3248');
        ay[i] = axi * byi + ayi * bxi;
    }
    console.log('node 3249');
    numeric.ifftpow2(ax, ay);
};
console.log('node 5106');
numeric.T.prototype.fft = function fft() {
    console.log('node 3252');
    var x = this.x, y = this.y;
    console.log('node 3253');
    var n = x.length, log = Math.log, log2 = log(2), p = Math.ceil(log(2 * n - 1) / log2), m = Math.pow(2, p);
    console.log('node 3254');
    var cx = numeric.rep([m], 0), cy = numeric.rep([m], 0), cos = Math.cos, sin = Math.sin;
    console.log('node 3255');
    var k, c = -3.141592653589793 / n, t;
    console.log('node 3256');
    var a = numeric.rep([m], 0), b = numeric.rep([m], 0), nhalf = Math.floor(n / 2);
    console.log('node 3257');
    for (k = 0; k < n; k++) {
        console.log('node 3259');
        a[k] = x[k];
    }
    console.log('node 3260');
    if (typeof y !== 'undefined') {
        console.log('node 3262');
        for (k = 0; k < n; k++) {
            console.log('node 3264');
            b[k] = y[k];
        }
    } else {
        console.log('node 3265');
        ;
    }
    console.log('node 3266');
    cx[0] = 1;
    console.log('node 3267');
    for (k = 1; k <= m / 2; k++) {
        console.log('node 3269');
        t = c * k * k;
        console.log('node 3270');
        cx[k] = cos(t);
        console.log('node 3271');
        cy[k] = sin(t);
        console.log('node 3272');
        cx[m - k] = cos(t);
        console.log('node 3273');
        cy[m - k] = sin(t);
    }
    console.log('node 3274');
    var X = new numeric.T(a, b), Y = new numeric.T(cx, cy);
    console.log('node 3275');
    X = X.mul(Y);
    console.log('node 3276');
    numeric.convpow2(X.x, X.y, numeric.clone(Y.x), numeric.neg(Y.y));
    console.log('node 3277');
    X = X.mul(Y);
    console.log('node 3278');
    X.x.length = n;
    console.log('node 3279');
    X.y.length = n;
    console.log('node 3280');
    return X;
};
console.log('node 5107');
numeric.T.prototype.ifft = function ifft() {
    console.log('node 3283');
    var x = this.x, y = this.y;
    console.log('node 3284');
    var n = x.length, log = Math.log, log2 = log(2), p = Math.ceil(log(2 * n - 1) / log2), m = Math.pow(2, p);
    console.log('node 3285');
    var cx = numeric.rep([m], 0), cy = numeric.rep([m], 0), cos = Math.cos, sin = Math.sin;
    console.log('node 3286');
    var k, c = 3.141592653589793 / n, t;
    console.log('node 3287');
    var a = numeric.rep([m], 0), b = numeric.rep([m], 0), nhalf = Math.floor(n / 2);
    console.log('node 3288');
    for (k = 0; k < n; k++) {
        console.log('node 3290');
        a[k] = x[k];
    }
    console.log('node 3291');
    if (typeof y !== 'undefined') {
        console.log('node 3293');
        for (k = 0; k < n; k++) {
            console.log('node 3295');
            b[k] = y[k];
        }
    } else {
        console.log('node 3296');
        ;
    }
    console.log('node 3297');
    cx[0] = 1;
    console.log('node 3298');
    for (k = 1; k <= m / 2; k++) {
        console.log('node 3300');
        t = c * k * k;
        console.log('node 3301');
        cx[k] = cos(t);
        console.log('node 3302');
        cy[k] = sin(t);
        console.log('node 3303');
        cx[m - k] = cos(t);
        console.log('node 3304');
        cy[m - k] = sin(t);
    }
    console.log('node 3305');
    var X = new numeric.T(a, b), Y = new numeric.T(cx, cy);
    console.log('node 3306');
    X = X.mul(Y);
    console.log('node 3307');
    numeric.convpow2(X.x, X.y, numeric.clone(Y.x), numeric.neg(Y.y));
    console.log('node 3308');
    X = X.mul(Y);
    console.log('node 3309');
    X.x.length = n;
    console.log('node 3310');
    X.y.length = n;
    console.log('node 3311');
    return X.div(n);
};
console.log('node 5108');
numeric.gradient = function gradient(f, x) {
    console.log('node 3314');
    var n = x.length;
    console.log('node 3315');
    var f0 = f(x);
    console.log('node 3316');
    if (isNaN(f0)) {
        throw new Error('gradient: f(x) is a NaN!');
    } else {
        console.log('node 3318');
        ;
    }
    console.log('node 3319');
    var max = Math.max;
    console.log('node 3320');
    var i, x0 = numeric.clone(x), f1, f2, J = Array(n);
    console.log('node 3321');
    var div = numeric.div, sub = numeric.sub, errest, roundoff, max = Math.max, eps = 0.001, abs = Math.abs, min = Math.min;
    console.log('node 3322');
    var t0, t1, t2, it = 0, d1, d2, N;
    console.log('node 3323');
    for (i = 0; i < n; i++) {
        console.log('node 3325');
        var h = max(0.000001 * f0, 1e-8);
        console.log('node 3326');
        while (1) {
            console.log('node 3328');
            ++it;
            console.log('node 3329');
            if (it > 20) {
                throw new Error('Numerical gradient fails');
            } else {
                console.log('node 3331');
                ;
            }
            console.log('node 3332');
            x0[i] = x[i] + h;
            console.log('node 3333');
            f1 = f(x0);
            console.log('node 3334');
            x0[i] = x[i] - h;
            console.log('node 3335');
            f2 = f(x0);
            console.log('node 3336');
            x0[i] = x[i];
            console.log('node 3337');
            if (isNaN(f1) || isNaN(f2)) {
                console.log('node 3339');
                h /= 16;
                console.log('node 3340');
                continue;
            } else {
                console.log('node 3341');
                ;
            }
            console.log('node 3342');
            J[i] = (f1 - f2) / (2 * h);
            console.log('node 3343');
            t0 = x[i] - h;
            console.log('node 3344');
            t1 = x[i];
            console.log('node 3345');
            t2 = x[i] + h;
            console.log('node 3346');
            d1 = (f1 - f0) / h;
            console.log('node 3347');
            d2 = (f0 - f2) / h;
            console.log('node 3348');
            N = max(abs(J[i]), abs(f0), abs(f1), abs(f2), abs(t0), abs(t1), abs(t2), 1e-8);
            console.log('node 3349');
            errest = min(max(abs(d1 - J[i]), abs(d2 - J[i]), abs(d1 - d2)) / N, h / N);
            console.log('node 3350');
            if (errest > eps) {
                console.log('node 3352');
                h /= 16;
            } else {
                console.log('node 3353');
                break;
            }
        }
    }
    console.log('node 3354');
    return J;
};
console.log('node 5109');
numeric.uncmin = function uncmin(f, x0, tol, gradient, maxit, callback, options) {
    console.log('node 3357');
    var grad = numeric.gradient;
    console.log('node 3358');
    if (typeof options === 'undefined') {
        console.log('node 3360');
        options = {};
    } else {
        console.log('node 3361');
        ;
    }
    console.log('node 3362');
    if (typeof tol === 'undefined') {
        console.log('node 3364');
        tol = 1e-8;
    } else {
        console.log('node 3365');
        ;
    }
    console.log('node 3366');
    if (typeof gradient === 'undefined') {
        console.log('node 3368');
        gradient = function (x) {
            console.log('node 3456');
            return grad(f, x);
        };
    } else {
        console.log('node 3369');
        ;
    }
    console.log('node 3370');
    if (typeof maxit === 'undefined') {
        console.log('node 3372');
        maxit = 1000;
    } else {
        console.log('node 3373');
        ;
    }
    console.log('node 3374');
    x0 = numeric.clone(x0);
    console.log('node 3375');
    var n = x0.length;
    console.log('node 3376');
    var f0 = f(x0), f1, df0;
    console.log('node 3377');
    if (isNaN(f0)) {
        throw new Error('uncmin: f(x0) is a NaN!');
    } else {
        console.log('node 3379');
        ;
    }
    console.log('node 3380');
    var max = Math.max, norm2 = numeric.norm2;
    console.log('node 3381');
    tol = max(tol, numeric.epsilon);
    console.log('node 3382');
    var step, g0, g1, H1 = options.Hinv || numeric.identity(n);
    console.log('node 3383');
    var dot = numeric.dot, inv = numeric.inv, sub = numeric.sub, add = numeric.add, ten = numeric.tensor, div = numeric.div, mul = numeric.mul;
    console.log('node 3384');
    var all = numeric.all, isfinite = numeric.isFinite, neg = numeric.neg;
    console.log('node 3385');
    var it = 0, i, s, x1, y, Hy, Hs, ys, i0, t, nstep, t1, t2;
    console.log('node 3386');
    var msg = '';
    console.log('node 3387');
    g0 = gradient(x0);
    console.log('node 3388');
    while (it < maxit) {
        console.log('node 3390');
        if (typeof callback === 'function') {
            console.log('node 3392');
            if (callback(it, x0, f0, g0, H1)) {
                console.log('node 3394');
                msg = 'Callback returned true';
                console.log('node 3395');
                break;
            } else {
                console.log('node 3396');
                ;
            }
        } else {
            console.log('node 3397');
            ;
        }
        console.log('node 3398');
        if (!all(isfinite(g0))) {
            console.log('node 3400');
            msg = 'Gradient has Infinity or NaN';
            console.log('node 3401');
            break;
        } else {
            console.log('node 3402');
            ;
        }
        console.log('node 3403');
        step = neg(dot(H1, g0));
        console.log('node 3404');
        if (!all(isfinite(step))) {
            console.log('node 3406');
            msg = 'Search direction has Infinity or NaN';
            console.log('node 3407');
            break;
        } else {
            console.log('node 3408');
            ;
        }
        console.log('node 3409');
        nstep = norm2(step);
        console.log('node 3410');
        if (nstep < tol) {
            console.log('node 3412');
            msg = 'Newton step smaller than tol';
            console.log('node 3413');
            break;
        } else {
            console.log('node 3414');
            ;
        }
        console.log('node 3415');
        t = 1;
        console.log('node 3416');
        df0 = dot(g0, step);
        console.log('node 3417');
        x1 = x0;
        console.log('node 3418');
        while (it < maxit) {
            console.log('node 3420');
            if (t * nstep < tol) {
                console.log('node 3422');
                break;
            } else {
                console.log('node 3423');
                ;
            }
            console.log('node 3424');
            s = mul(step, t);
            console.log('node 3425');
            x1 = add(x0, s);
            console.log('node 3426');
            f1 = f(x1);
            console.log('node 3427');
            if (f1 - f0 >= 0.1 * t * df0 || isNaN(f1)) {
                console.log('node 3429');
                t *= 0.5;
                console.log('node 3430');
                ++it;
                console.log('node 3431');
                continue;
            } else {
                console.log('node 3432');
                ;
            }
            console.log('node 3433');
            break;
        }
        console.log('node 3434');
        if (t * nstep < tol) {
            console.log('node 3436');
            msg = 'Line search step size smaller than tol';
            console.log('node 3437');
            break;
        } else {
            console.log('node 3438');
            ;
        }
        console.log('node 3439');
        if (it === maxit) {
            console.log('node 3441');
            msg = 'maxit reached during line search';
            console.log('node 3442');
            break;
        } else {
            console.log('node 3443');
            ;
        }
        console.log('node 3444');
        g1 = gradient(x1);
        console.log('node 3445');
        y = sub(g1, g0);
        console.log('node 3446');
        ys = dot(y, s);
        console.log('node 3447');
        Hy = dot(H1, y);
        console.log('node 3448');
        H1 = sub(add(H1, mul((ys + dot(y, Hy)) / (ys * ys), ten(s, s))), div(add(ten(Hy, s), ten(s, Hy)), ys));
        console.log('node 3449');
        x0 = x1;
        console.log('node 3450');
        f0 = f1;
        console.log('node 3451');
        g0 = g1;
        console.log('node 3452');
        ++it;
    }
    console.log('node 3453');
    return {
        solution: x0,
        f: f0,
        gradient: g0,
        invHessian: H1,
        iterations: it,
        message: msg
    };
};
console.log('node 5110');
numeric.Dopri = function Dopri(x, y, f, ymid, iterations, msg, events) {
    console.log('node 3459');
    this.x = x;
    console.log('node 3460');
    this.y = y;
    console.log('node 3461');
    this.f = f;
    console.log('node 3462');
    this.ymid = ymid;
    console.log('node 3463');
    this.iterations = iterations;
    console.log('node 3464');
    this.events = events;
    console.log('node 3465');
    this.message = msg;
};
console.log('node 5111');
numeric.Dopri.prototype._at = function _at(xi, j) {
    console.log('node -1');
    function sqr(x) {
        console.log('node 3470');
        return x * x;
    }
    console.log('node 3471');
    var sol = this;
    console.log('node 3472');
    var xs = sol.x;
    console.log('node 3473');
    var ys = sol.y;
    console.log('node 3474');
    var k1 = sol.f;
    console.log('node 3475');
    var ymid = sol.ymid;
    console.log('node 3476');
    var n = xs.length;
    console.log('node 3477');
    var x0, x1, xh, y0, y1, yh, xi;
    console.log('node 3478');
    var floor = Math.floor, h;
    console.log('node 3479');
    var c = 0.5;
    console.log('node 3480');
    var add = numeric.add, mul = numeric.mul, sub = numeric.sub, p, q, w;
    console.log('node 3481');
    x0 = xs[j];
    console.log('node 3482');
    x1 = xs[j + 1];
    console.log('node 3483');
    y0 = ys[j];
    console.log('node 3484');
    y1 = ys[j + 1];
    console.log('node 3485');
    h = x1 - x0;
    console.log('node 3486');
    xh = x0 + c * h;
    console.log('node 3487');
    yh = ymid[j];
    console.log('node 3488');
    p = sub(k1[j], mul(y0, 1 / (x0 - xh) + 2 / (x0 - x1)));
    console.log('node 3489');
    q = sub(k1[j + 1], mul(y1, 1 / (x1 - xh) + 2 / (x1 - x0)));
    console.log('node 3490');
    w = [
        sqr(xi - x1) * (xi - xh) / sqr(x0 - x1) / (x0 - xh),
        sqr(xi - x0) * sqr(xi - x1) / sqr(x0 - xh) / sqr(x1 - xh),
        sqr(xi - x0) * (xi - xh) / sqr(x1 - x0) / (x1 - xh),
        (xi - x0) * sqr(xi - x1) * (xi - xh) / sqr(x0 - x1) / (x0 - xh),
        (xi - x1) * sqr(xi - x0) * (xi - xh) / sqr(x0 - x1) / (x1 - xh)
    ];
    console.log('node 3491');
    return add(add(add(add(mul(y0, w[0]), mul(yh, w[1])), mul(y1, w[2])), mul(p, w[3])), mul(q, w[4]));
};
console.log('node 5112');
numeric.Dopri.prototype.at = function at(x) {
    console.log('node 3494');
    var i, j, k, floor = Math.floor;
    console.log('node 3495');
    if (typeof x !== 'number') {
        console.log('node 3497');
        var n = x.length, ret = Array(n);
        console.log('node 3498');
        for (i = n - 1; i !== -1; --i) {
            console.log('node 3500');
            ret[i] = this.at(x[i]);
        }
        console.log('node 3501');
        return ret;
    } else {
        console.log('node 3502');
        ;
    }
    console.log('node 3503');
    var x0 = this.x;
    console.log('node 3504');
    i = 0;
    console.log('node 3505');
    j = x0.length - 1;
    console.log('node 3506');
    while (j - i > 1) {
        console.log('node 3508');
        k = floor(0.5 * (i + j));
        console.log('node 3509');
        if (x0[k] <= x) {
            console.log('node 3511');
            i = k;
        } else {
            console.log('node 3512');
            j = k;
        }
    }
    console.log('node 3513');
    return this._at(x, i);
};
console.log('node 5113');
numeric.dopri = function dopri(x0, x1, y0, f, tol, maxit, event) {
    console.log('node 3516');
    if (typeof tol === 'undefined') {
        console.log('node 3518');
        tol = 0.000001;
    } else {
        console.log('node 3519');
        ;
    }
    console.log('node 3520');
    if (typeof maxit === 'undefined') {
        console.log('node 3522');
        maxit = 1000;
    } else {
        console.log('node 3523');
        ;
    }
    console.log('node 3524');
    var xs = [x0], ys = [y0], k1 = [f(x0, y0)], k2, k3, k4, k5, k6, k7, ymid = [];
    console.log('node 3525');
    var A2 = 1 / 5;
    console.log('node 3526');
    var A3 = [
        3 / 40,
        9 / 40
    ];
    console.log('node 3527');
    var A4 = [
        44 / 45,
        -56 / 15,
        32 / 9
    ];
    console.log('node 3528');
    var A5 = [
        19372 / 6561,
        -25360 / 2187,
        64448 / 6561,
        -212 / 729
    ];
    console.log('node 3529');
    var A6 = [
        9017 / 3168,
        -355 / 33,
        46732 / 5247,
        49 / 176,
        -5103 / 18656
    ];
    console.log('node 3530');
    var b = [
        35 / 384,
        0,
        500 / 1113,
        125 / 192,
        -2187 / 6784,
        11 / 84
    ];
    console.log('node 3531');
    var bm = [
        0.5 * 6025192743 / 30085553152,
        0,
        0.5 * 51252292925 / 65400821598,
        0.5 * -2691868925 / 45128329728,
        0.5 * 187940372067 / 1594534317056,
        0.5 * -1776094331 / 19743644256,
        0.5 * 11237099 / 235043384
    ];
    console.log('node 3532');
    var c = [
        1 / 5,
        3 / 10,
        4 / 5,
        8 / 9,
        1,
        1
    ];
    console.log('node 3533');
    var e = [
        -71 / 57600,
        0,
        71 / 16695,
        -71 / 1920,
        17253 / 339200,
        -22 / 525,
        1 / 40
    ];
    console.log('node 3534');
    var i = 0, er, j;
    console.log('node 3535');
    var h = (x1 - x0) / 10;
    console.log('node 3536');
    var it = 0;
    console.log('node 3537');
    var add = numeric.add, mul = numeric.mul, y1, erinf;
    console.log('node 3538');
    var max = Math.max, min = Math.min, abs = Math.abs, norminf = numeric.norminf, pow = Math.pow;
    console.log('node 3539');
    var any = numeric.any, lt = numeric.lt, and = numeric.and, sub = numeric.sub;
    console.log('node 3540');
    var e0, e1, ev;
    console.log('node 3541');
    var ret = new numeric.Dopri(xs, ys, k1, ymid, -1, '');
    console.log('node 3542');
    if (typeof event === 'function') {
        console.log('node 3544');
        e0 = event(x0, y0);
    } else {
        console.log('node 3545');
        ;
    }
    console.log('node 3546');
    while (x0 < x1 && it < maxit) {
        console.log('node 3548');
        ++it;
        console.log('node 3549');
        if (x0 + h > x1) {
            console.log('node 3551');
            h = x1 - x0;
        } else {
            console.log('node 3552');
            ;
        }
        console.log('node 3553');
        k2 = f(x0 + c[0] * h, add(y0, mul(A2 * h, k1[i])));
        console.log('node 3554');
        k3 = f(x0 + c[1] * h, add(add(y0, mul(A3[0] * h, k1[i])), mul(A3[1] * h, k2)));
        console.log('node 3555');
        k4 = f(x0 + c[2] * h, add(add(add(y0, mul(A4[0] * h, k1[i])), mul(A4[1] * h, k2)), mul(A4[2] * h, k3)));
        console.log('node 3556');
        k5 = f(x0 + c[3] * h, add(add(add(add(y0, mul(A5[0] * h, k1[i])), mul(A5[1] * h, k2)), mul(A5[2] * h, k3)), mul(A5[3] * h, k4)));
        console.log('node 3557');
        k6 = f(x0 + c[4] * h, add(add(add(add(add(y0, mul(A6[0] * h, k1[i])), mul(A6[1] * h, k2)), mul(A6[2] * h, k3)), mul(A6[3] * h, k4)), mul(A6[4] * h, k5)));
        console.log('node 3558');
        y1 = add(add(add(add(add(y0, mul(k1[i], h * b[0])), mul(k3, h * b[2])), mul(k4, h * b[3])), mul(k5, h * b[4])), mul(k6, h * b[5]));
        console.log('node 3559');
        k7 = f(x0 + h, y1);
        console.log('node 3560');
        er = add(add(add(add(add(mul(k1[i], h * e[0]), mul(k3, h * e[2])), mul(k4, h * e[3])), mul(k5, h * e[4])), mul(k6, h * e[5])), mul(k7, h * e[6]));
        console.log('node 3561');
        if (typeof er === 'number') {
            console.log('node 3563');
            erinf = abs(er);
        } else {
            console.log('node 3564');
            erinf = norminf(er);
        }
        console.log('node 3565');
        if (erinf > tol) {
            console.log('node 3567');
            h = 0.2 * h * pow(tol / erinf, 0.25);
            console.log('node 3568');
            if (x0 + h === x0) {
                console.log('node 3570');
                ret.msg = 'Step size became too small';
                console.log('node 3571');
                break;
            } else {
                console.log('node 3572');
                ;
            }
            console.log('node 3573');
            continue;
        } else {
            console.log('node 3574');
            ;
        }
        console.log('node 3575');
        ymid[i] = add(add(add(add(add(add(y0, mul(k1[i], h * bm[0])), mul(k3, h * bm[2])), mul(k4, h * bm[3])), mul(k5, h * bm[4])), mul(k6, h * bm[5])), mul(k7, h * bm[6]));
        console.log('node 3576');
        ++i;
        console.log('node 3577');
        xs[i] = x0 + h;
        console.log('node 3578');
        ys[i] = y1;
        console.log('node 3579');
        k1[i] = k7;
        console.log('node 3580');
        if (typeof event === 'function') {
            console.log('node 3582');
            var yi, xl = x0, xr = x0 + 0.5 * h, xi;
            console.log('node 3583');
            e1 = event(xr, ymid[i - 1]);
            console.log('node 3584');
            ev = and(lt(e0, 0), lt(0, e1));
            console.log('node 3585');
            if (!any(ev)) {
                console.log('node 3587');
                xl = xr;
                console.log('node 3588');
                xr = x0 + h;
                console.log('node 3589');
                e0 = e1;
                console.log('node 3590');
                e1 = event(xr, y1);
                console.log('node 3591');
                ev = and(lt(e0, 0), lt(0, e1));
            } else {
                console.log('node 3592');
                ;
            }
            console.log('node 3593');
            if (any(ev)) {
                console.log('node 3595');
                var xc, yc, en, ei;
                console.log('node 3596');
                var side = 0, sl = 1, sr = 1;
                console.log('node 3597');
                while (1) {
                    console.log('node 3599');
                    if (typeof e0 === 'number') {
                        console.log('node 3601');
                        xi = (sr * e1 * xl - sl * e0 * xr) / (sr * e1 - sl * e0);
                    } else {
                        console.log('node 3602');
                        xi = xr;
                        console.log('node 3603');
                        for (j = e0.length - 1; j !== -1; --j) {
                            console.log('node 3605');
                            if (e0[j] < 0 && e1[j] > 0) {
                                console.log('node 3607');
                                xi = min(xi, (sr * e1[j] * xl - sl * e0[j] * xr) / (sr * e1[j] - sl * e0[j]));
                            } else {
                                console.log('node 3608');
                                ;
                            }
                        }
                    }
                    console.log('node 3609');
                    if (xi <= xl || xi >= xr) {
                        console.log('node 3611');
                        break;
                    } else {
                        console.log('node 3612');
                        ;
                    }
                    console.log('node 3613');
                    yi = ret._at(xi, i - 1);
                    console.log('node 3614');
                    ei = event(xi, yi);
                    console.log('node 3615');
                    en = and(lt(e0, 0), lt(0, ei));
                    console.log('node 3616');
                    if (any(en)) {
                        console.log('node 3618');
                        xr = xi;
                        console.log('node 3619');
                        e1 = ei;
                        console.log('node 3620');
                        ev = en;
                        console.log('node 3621');
                        sr = 1;
                        console.log('node 3622');
                        if (side === -1) {
                            console.log('node 3624');
                            sl *= 0.5;
                        } else {
                            console.log('node 3625');
                            sl = 1;
                        }
                        console.log('node 3626');
                        side = -1;
                    } else {
                        console.log('node 3627');
                        xl = xi;
                        console.log('node 3628');
                        e0 = ei;
                        console.log('node 3629');
                        sl = 1;
                        console.log('node 3630');
                        if (side === 1) {
                            console.log('node 3632');
                            sr *= 0.5;
                        } else {
                            console.log('node 3633');
                            sr = 1;
                        }
                        console.log('node 3634');
                        side = 1;
                    }
                }
                console.log('node 3635');
                y1 = ret._at(0.5 * (x0 + xi), i - 1);
                console.log('node 3636');
                ret.f[i] = f(xi, yi);
                console.log('node 3637');
                ret.x[i] = xi;
                console.log('node 3638');
                ret.y[i] = yi;
                console.log('node 3639');
                ret.ymid[i - 1] = y1;
                console.log('node 3640');
                ret.events = ev;
                console.log('node 3641');
                ret.iterations = it;
                console.log('node 3642');
                return ret;
            } else {
                console.log('node 3643');
                ;
            }
        } else {
            console.log('node 3644');
            ;
        }
        console.log('node 3645');
        x0 += h;
        console.log('node 3646');
        y0 = y1;
        console.log('node 3647');
        e0 = e1;
        console.log('node 3648');
        h = min(0.8 * h * pow(tol / erinf, 0.25), 4 * h);
    }
    console.log('node 3649');
    ret.iterations = it;
    console.log('node 3650');
    return ret;
};
console.log('node 5114');
numeric.LU = function (A, fast) {
    console.log('node 3653');
    fast = fast || false;
    console.log('node 3654');
    var abs = Math.abs;
    console.log('node 3655');
    var i, j, k, absAjk, Akk, Ak, Pk, Ai;
    console.log('node 3656');
    var max;
    console.log('node 3657');
    var n = A.length, n1 = n - 1;
    console.log('node 3658');
    var P = new Array(n);
    console.log('node 3659');
    if (!fast) {
        console.log('node 3661');
        A = numeric.clone(A);
    } else {
        console.log('node 3662');
        ;
    }
    console.log('node 3663');
    for (k = 0; k < n; ++k) {
        console.log('node 3665');
        Pk = k;
        console.log('node 3666');
        Ak = A[k];
        console.log('node 3667');
        max = abs(Ak[k]);
        console.log('node 3668');
        for (j = k + 1; j < n; ++j) {
            console.log('node 3670');
            absAjk = abs(A[j][k]);
            console.log('node 3671');
            if (max < absAjk) {
                console.log('node 3673');
                max = absAjk;
                console.log('node 3674');
                Pk = j;
            } else {
                console.log('node 3675');
                ;
            }
        }
        console.log('node 3676');
        P[k] = Pk;
        console.log('node 3677');
        if (Pk != k) {
            console.log('node 3679');
            A[k] = A[Pk];
            console.log('node 3680');
            A[Pk] = Ak;
            console.log('node 3681');
            Ak = A[k];
        } else {
            console.log('node 3682');
            ;
        }
        console.log('node 3683');
        Akk = Ak[k];
        console.log('node 3684');
        for (i = k + 1; i < n; ++i) {
            console.log('node 3686');
            A[i][k] /= Akk;
        }
        console.log('node 3687');
        for (i = k + 1; i < n; ++i) {
            console.log('node 3689');
            Ai = A[i];
            console.log('node 3690');
            for (j = k + 1; j < n1; ++j) {
                console.log('node 3692');
                Ai[j] -= Ai[k] * Ak[j];
                console.log('node 3693');
                ++j;
                console.log('node 3694');
                Ai[j] -= Ai[k] * Ak[j];
            }
            console.log('node 3695');
            if (j === n1) {
                console.log('node 3697');
                Ai[j] -= Ai[k] * Ak[j];
            } else {
                console.log('node 3698');
                ;
            }
        }
    }
    console.log('node 3699');
    return {
        LU: A,
        P: P
    };
};
console.log('node 5115');
numeric.LUsolve = function LUsolve(LUP, b) {
    console.log('node 3702');
    var i, j;
    console.log('node 3703');
    var LU = LUP.LU;
    console.log('node 3704');
    var n = LU.length;
    console.log('node 3705');
    var x = numeric.clone(b);
    console.log('node 3706');
    var P = LUP.P;
    console.log('node 3707');
    var Pi, LUi, LUii, tmp;
    console.log('node 3708');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 3710');
        x[i] = b[i];
    }
    console.log('node 3711');
    for (i = 0; i < n; ++i) {
        console.log('node 3713');
        Pi = P[i];
        console.log('node 3714');
        if (P[i] !== i) {
            console.log('node 3716');
            tmp = x[i];
            console.log('node 3717');
            x[i] = x[Pi];
            console.log('node 3718');
            x[Pi] = tmp;
        } else {
            console.log('node 3719');
            ;
        }
        console.log('node 3720');
        LUi = LU[i];
        console.log('node 3721');
        for (j = 0; j < i; ++j) {
            console.log('node 3723');
            x[i] -= x[j] * LUi[j];
        }
    }
    console.log('node 3724');
    for (i = n - 1; i >= 0; --i) {
        console.log('node 3726');
        LUi = LU[i];
        console.log('node 3727');
        for (j = i + 1; j < n; ++j) {
            console.log('node 3729');
            x[i] -= x[j] * LUi[j];
        }
        console.log('node 3730');
        x[i] /= LUi[i];
    }
    console.log('node 3731');
    return x;
};
console.log('node 5116');
numeric.solve = function solve(A, b, fast) {
    console.log('node 3734');
    return numeric.LUsolve(numeric.LU(A, fast), b);
};
console.log('node 5117');
numeric.echelonize = function echelonize(A) {
    console.log('node 3737');
    var s = numeric.dim(A), m = s[0], n = s[1];
    console.log('node 3738');
    var I = numeric.identity(m);
    console.log('node 3739');
    var P = Array(m);
    console.log('node 3740');
    var i, j, k, l, Ai, Ii, Z, a;
    console.log('node 3741');
    var abs = Math.abs;
    console.log('node 3742');
    var diveq = numeric.diveq;
    console.log('node 3743');
    A = numeric.clone(A);
    console.log('node 3744');
    for (i = 0; i < m; ++i) {
        console.log('node 3746');
        k = 0;
        console.log('node 3747');
        Ai = A[i];
        console.log('node 3748');
        Ii = I[i];
        console.log('node 3749');
        for (j = 1; j < n; ++j) {
            console.log('node 3751');
            if (abs(Ai[k]) < abs(Ai[j])) {
                console.log('node 3753');
                k = j;
            } else {
                console.log('node 3754');
                ;
            }
        }
        console.log('node 3755');
        P[i] = k;
        console.log('node 3756');
        diveq(Ii, Ai[k]);
        console.log('node 3757');
        diveq(Ai, Ai[k]);
        console.log('node 3758');
        for (j = 0; j < m; ++j) {
            console.log('node 3760');
            if (j !== i) {
                console.log('node 3762');
                Z = A[j];
                console.log('node 3763');
                a = Z[k];
                console.log('node 3764');
                for (l = n - 1; l !== -1; --l) {
                    console.log('node 3766');
                    Z[l] -= Ai[l] * a;
                }
                console.log('node 3767');
                Z = I[j];
                console.log('node 3768');
                for (l = m - 1; l !== -1; --l) {
                    console.log('node 3770');
                    Z[l] -= Ii[l] * a;
                }
            } else {
                console.log('node 3771');
                ;
            }
        }
    }
    console.log('node 3772');
    return {
        I: I,
        A: A,
        P: P
    };
};
console.log('node 5118');
numeric.__solveLP = function __solveLP(c, A, b, tol, maxit, x, flag) {
    console.log('node 3775');
    var sum = numeric.sum, log = numeric.log, mul = numeric.mul, sub = numeric.sub, dot = numeric.dot, div = numeric.div, add = numeric.add;
    console.log('node 3776');
    var m = c.length, n = b.length, y;
    console.log('node 3777');
    var unbounded = false, cb, i0 = 0;
    console.log('node 3778');
    var alpha = 1;
    console.log('node 3779');
    var f0, df0, AT = numeric.transpose(A), svd = numeric.svd, transpose = numeric.transpose, leq = numeric.leq, sqrt = Math.sqrt, abs = Math.abs;
    console.log('node 3780');
    var muleq = numeric.muleq;
    console.log('node 3781');
    var norm = numeric.norminf, any = numeric.any, min = Math.min;
    console.log('node 3782');
    var all = numeric.all, gt = numeric.gt;
    console.log('node 3783');
    var p = Array(m), A0 = Array(n), e = numeric.rep([n], 1), H;
    console.log('node 3784');
    var solve = numeric.solve, z = sub(b, dot(A, x)), count;
    console.log('node 3785');
    var dotcc = dot(c, c);
    console.log('node 3786');
    var g;
    console.log('node 3787');
    for (count = i0; count < maxit; ++count) {
        console.log('node 3789');
        var i, j, d;
        console.log('node 3790');
        for (i = n - 1; i !== -1; --i) {
            console.log('node 3792');
            A0[i] = div(A[i], z[i]);
        }
        console.log('node 3793');
        var A1 = transpose(A0);
        console.log('node 3794');
        for (i = m - 1; i !== -1; --i) {
            console.log('node 3796');
            p[i] = sum(A1[i]);
        }
        console.log('node 3797');
        alpha = 0.25 * abs(dotcc / dot(c, p));
        console.log('node 3798');
        var a1 = 100 * sqrt(dotcc / dot(p, p));
        console.log('node 3799');
        if (!isFinite(alpha) || alpha > a1) {
            console.log('node 3801');
            alpha = a1;
        } else {
            console.log('node 3802');
            ;
        }
        console.log('node 3803');
        g = add(c, mul(alpha, p));
        console.log('node 3804');
        H = dot(A1, A0);
        console.log('node 3805');
        for (i = m - 1; i !== -1; --i) {
            console.log('node 3807');
            H[i][i] += 1;
        }
        console.log('node 3808');
        d = solve(H, div(g, alpha), true);
        console.log('node 3809');
        var t0 = div(z, dot(A, d));
        console.log('node 3810');
        var t = 1;
        console.log('node 3811');
        for (i = n - 1; i !== -1; --i) {
            console.log('node 3813');
            if (t0[i] < 0) {
                console.log('node 3815');
                t = min(t, -0.999 * t0[i]);
            } else {
                console.log('node 3816');
                ;
            }
        }
        console.log('node 3817');
        y = sub(x, mul(d, t));
        console.log('node 3818');
        z = sub(b, dot(A, y));
        console.log('node 3819');
        if (!all(gt(z, 0))) {
            console.log('node 3821');
            return {
                solution: x,
                message: '',
                iterations: count
            };
        } else {
            console.log('node 3822');
            ;
        }
        console.log('node 3823');
        x = y;
        console.log('node 3824');
        if (alpha < tol) {
            console.log('node 3826');
            return {
                solution: y,
                message: '',
                iterations: count
            };
        } else {
            console.log('node 3827');
            ;
        }
        console.log('node 3828');
        if (flag) {
            console.log('node 3830');
            var s = dot(c, g), Ag = dot(A, g);
            console.log('node 3831');
            unbounded = true;
            console.log('node 3832');
            for (i = n - 1; i !== -1; --i) {
                console.log('node 3834');
                if (s * Ag[i] < 0) {
                    console.log('node 3836');
                    unbounded = false;
                    console.log('node 3837');
                    break;
                } else {
                    console.log('node 3838');
                    ;
                }
            }
        } else {
            console.log('node 3839');
            if (x[m - 1] >= 0) {
                console.log('node 3841');
                unbounded = false;
            } else {
                console.log('node 3842');
                unbounded = true;
            }
        }
        console.log('node 3843');
        if (unbounded) {
            console.log('node 3845');
            return {
                solution: y,
                message: 'Unbounded',
                iterations: count
            };
        } else {
            console.log('node 3846');
            ;
        }
    }
    console.log('node 3847');
    return {
        solution: x,
        message: 'maximum iteration count exceeded',
        iterations: count
    };
};
console.log('node 5119');
numeric._solveLP = function _solveLP(c, A, b, tol, maxit) {
    console.log('node 3850');
    var m = c.length, n = b.length, y;
    console.log('node 3851');
    var sum = numeric.sum, log = numeric.log, mul = numeric.mul, sub = numeric.sub, dot = numeric.dot, div = numeric.div, add = numeric.add;
    console.log('node 3852');
    var c0 = numeric.rep([m], 0).concat([1]);
    console.log('node 3853');
    var J = numeric.rep([
        n,
        1
    ], -1);
    console.log('node 3854');
    var A0 = numeric.blockMatrix([[
            A,
            J
        ]]);
    console.log('node 3855');
    var b0 = b;
    console.log('node 3856');
    var y = numeric.rep([m], 0).concat(Math.max(0, numeric.sup(numeric.neg(b))) + 1);
    console.log('node 3857');
    var x0 = numeric.__solveLP(c0, A0, b0, tol, maxit, y, false);
    console.log('node 3858');
    var x = numeric.clone(x0.solution);
    console.log('node 3859');
    x.length = m;
    console.log('node 3860');
    var foo = numeric.inf(sub(b, dot(A, x)));
    console.log('node 3861');
    if (foo < 0) {
        console.log('node 3863');
        return {
            solution: NaN,
            message: 'Infeasible',
            iterations: x0.iterations
        };
    } else {
        console.log('node 3864');
        ;
    }
    console.log('node 3865');
    var ret = numeric.__solveLP(c, A, b, tol, maxit - x0.iterations, x, true);
    console.log('node 3866');
    ret.iterations += x0.iterations;
    console.log('node 3867');
    return ret;
};
console.log('node 5120');
numeric.solveLP = function solveLP(c, A, b, Aeq, beq, tol, maxit) {
    console.log('node 3870');
    if (typeof maxit === 'undefined') {
        console.log('node 3872');
        maxit = 1000;
    } else {
        console.log('node 3873');
        ;
    }
    console.log('node 3874');
    if (typeof tol === 'undefined') {
        console.log('node 3876');
        tol = numeric.epsilon;
    } else {
        console.log('node 3877');
        ;
    }
    console.log('node 3878');
    if (typeof Aeq === 'undefined') {
        console.log('node 3880');
        return numeric._solveLP(c, A, b, tol, maxit);
    } else {
        console.log('node 3881');
        ;
    }
    console.log('node 3882');
    var m = Aeq.length, n = Aeq[0].length, o = A.length;
    console.log('node 3883');
    var B = numeric.echelonize(Aeq);
    console.log('node 3884');
    var flags = numeric.rep([n], 0);
    console.log('node 3885');
    var P = B.P;
    console.log('node 3886');
    var Q = [];
    console.log('node 3887');
    var i;
    console.log('node 3888');
    for (i = P.length - 1; i !== -1; --i) {
        console.log('node 3890');
        flags[P[i]] = 1;
    }
    console.log('node 3891');
    for (i = n - 1; i !== -1; --i) {
        console.log('node 3893');
        if (flags[i] === 0) {
            console.log('node 3895');
            Q.push(i);
        } else {
            console.log('node 3896');
            ;
        }
    }
    console.log('node 3897');
    var g = numeric.getRange;
    console.log('node 3898');
    var I = numeric.linspace(0, m - 1), J = numeric.linspace(0, o - 1);
    console.log('node 3899');
    var Aeq2 = g(Aeq, I, Q), A1 = g(A, J, P), A2 = g(A, J, Q), dot = numeric.dot, sub = numeric.sub;
    console.log('node 3900');
    var A3 = dot(A1, B.I);
    console.log('node 3901');
    var A4 = sub(A2, dot(A3, Aeq2)), b4 = sub(b, dot(A3, beq));
    console.log('node 3902');
    var c1 = Array(P.length), c2 = Array(Q.length);
    console.log('node 3903');
    for (i = P.length - 1; i !== -1; --i) {
        console.log('node 3905');
        c1[i] = c[P[i]];
    }
    console.log('node 3906');
    for (i = Q.length - 1; i !== -1; --i) {
        console.log('node 3908');
        c2[i] = c[Q[i]];
    }
    console.log('node 3909');
    var c4 = sub(c2, dot(c1, dot(B.I, Aeq2)));
    console.log('node 3910');
    var S = numeric._solveLP(c4, A4, b4, tol, maxit);
    console.log('node 3911');
    var x2 = S.solution;
    console.log('node 3912');
    if (x2 !== x2) {
        console.log('node 3914');
        return S;
    } else {
        console.log('node 3915');
        ;
    }
    console.log('node 3916');
    var x1 = dot(B.I, sub(beq, dot(Aeq2, x2)));
    console.log('node 3917');
    var x = Array(c.length);
    console.log('node 3918');
    for (i = P.length - 1; i !== -1; --i) {
        console.log('node 3920');
        x[P[i]] = x1[i];
    }
    console.log('node 3921');
    for (i = Q.length - 1; i !== -1; --i) {
        console.log('node 3923');
        x[Q[i]] = x2[i];
    }
    console.log('node 3924');
    return {
        solution: x,
        message: S.message,
        iterations: S.iterations
    };
};
console.log('node 5121');
numeric.MPStoLP = function MPStoLP(MPS) {
    console.log('node 3929');
    if (MPS instanceof String) {
        console.log('node 3931');
        MPS.split('\n');
    } else {
        console.log('node 3932');
        ;
    }
    console.log('node 3933');
    var state = 0;
    console.log('node 3934');
    var states = [
        'Initial state',
        'NAME',
        'ROWS',
        'COLUMNS',
        'RHS',
        'BOUNDS',
        'ENDATA'
    ];
    console.log('node 3935');
    var n = MPS.length;
    console.log('node 3936');
    var i, j, z, N = 0, rows = {}, sign = [], rl = 0, vars = {}, nv = 0;
    console.log('node 3937');
    var name;
    console.log('node 3938');
    var c = [], A = [], b = [];
    console.log('node -1');
    function err(e) {
        throw new Error('MPStoLP: ' + e + '\nLine ' + i + ': ' + MPS[i] + '\nCurrent state: ' + states[state] + '\n');
    }
    console.log('node 3939');
    for (i = 0; i < n; ++i) {
        console.log('node 3941');
        z = MPS[i];
        console.log('node 3942');
        var w0 = z.match(/\S*/g);
        console.log('node 3943');
        var w = [];
        console.log('node 3944');
        for (j = 0; j < w0.length; ++j) {
            console.log('node 3946');
            if (w0[j] !== '') {
                console.log('node 3948');
                w.push(w0[j]);
            } else {
                console.log('node 3949');
                ;
            }
        }
        console.log('node 3950');
        if (w.length === 0) {
            console.log('node 3952');
            continue;
        } else {
            console.log('node 3953');
            ;
        }
        console.log('node 3954');
        for (j = 0; j < states.length; ++j) {
            console.log('node 3956');
            if (z.substr(0, states[j].length) === states[j]) {
                console.log('node 3958');
                break;
            } else {
                console.log('node 3959');
                ;
            }
        }
        console.log('node 3960');
        if (j < states.length) {
            console.log('node 3962');
            state = j;
            console.log('node 3963');
            if (j === 1) {
                console.log('node 3965');
                name = w[1];
            } else {
                console.log('node 3966');
                ;
            }
            console.log('node 3967');
            if (j === 6) {
                console.log('node 3969');
                return {
                    name: name,
                    c: c,
                    A: numeric.transpose(A),
                    b: b,
                    rows: rows,
                    vars: vars
                };
            } else {
                console.log('node 3970');
                ;
            }
            console.log('node 3971');
            continue;
        } else {
            console.log('node 3972');
            ;
        }
        console.log('node 3973');
        switch (state) {
        case 0:
        case 1:
            console.log('node 3977');
            err('Unexpected line');
        case 2:
            console.log('node 3979');
            switch (w[0]) {
            case 'N':
                console.log('node 3982');
                if (N === 0) {
                    console.log('node 3984');
                    N = w[1];
                } else {
                    console.log('node 3985');
                    err('Two or more N rows');
                }
                console.log('node 3986');
                break;
            case 'L':
                console.log('node 3988');
                rows[w[1]] = rl;
                console.log('node 3989');
                sign[rl] = 1;
                console.log('node 3990');
                b[rl] = 0;
                console.log('node 3991');
                ++rl;
                console.log('node 3992');
                break;
            case 'G':
                console.log('node 3994');
                rows[w[1]] = rl;
                console.log('node 3995');
                sign[rl] = -1;
                console.log('node 3996');
                b[rl] = 0;
                console.log('node 3997');
                ++rl;
                console.log('node 3998');
                break;
            case 'E':
                console.log('node 4000');
                rows[w[1]] = rl;
                console.log('node 4001');
                sign[rl] = 0;
                console.log('node 4002');
                b[rl] = 0;
                console.log('node 4003');
                ++rl;
                console.log('node 4004');
                break;
            default:
                console.log('node 4006');
                err('Parse error ' + numeric.prettyPrint(w));
            }
            console.log('node 4007');
            break;
        case 3:
            console.log('node 4009');
            if (!vars.hasOwnProperty(w[0])) {
                console.log('node 4011');
                vars[w[0]] = nv;
                console.log('node 4012');
                c[nv] = 0;
                console.log('node 4013');
                A[nv] = numeric.rep([rl], 0);
                console.log('node 4014');
                ++nv;
            } else {
                console.log('node 4015');
                ;
            }
            console.log('node 4016');
            var p = vars[w[0]];
            console.log('node 4017');
            for (j = 1; j < w.length; j += 2) {
                console.log('node 4019');
                if (w[j] === N) {
                    console.log('node 4021');
                    c[p] = parseFloat(w[j + 1]);
                    console.log('node 4022');
                    continue;
                } else {
                    console.log('node 4023');
                    ;
                }
                console.log('node 4024');
                var q = rows[w[j]];
                console.log('node 4025');
                A[p][q] = (sign[q] < 0 ? -1 : 1) * parseFloat(w[j + 1]);
            }
            console.log('node 4026');
            break;
        case 4:
            console.log('node 4028');
            for (j = 1; j < w.length; j += 2) {
                console.log('node 4030');
                b[rows[w[j]]] = (sign[rows[w[j]]] < 0 ? -1 : 1) * parseFloat(w[j + 1]);
            }
            console.log('node 4031');
            break;
        case 5:
            console.log('node 4033');
            break;
        case 6:
            console.log('node 4035');
            err('Internal error');
        }
    }
    console.log('node 4036');
    err('Reached end of file without ENDATA');
};
console.log('node 5122');
numeric.seedrandom = {
    pow: Math.pow,
    random: Math.random
};
console.log('node 5123');
(function (pool, math, width, chunks, significance, overflow, startdenom) {
    console.log('node 4089');
    math['seedrandom'] = function seedrandom(seed, use_entropy) {
        console.log('node 4096');
        var key = [];
        console.log('node 4097');
        var arc4;
        console.log('node 4098');
        seed = mixkey(flatten(use_entropy ? [
            seed,
            pool
        ] : arguments.length ? seed : [
            new Date().getTime(),
            pool,
            window
        ], 3), key);
        console.log('node 4099');
        arc4 = new ARC4(key);
        console.log('node 4100');
        mixkey(arc4.S, pool);
        console.log('node 4101');
        math['random'] = function random() {
            console.log('node 4105');
            var n = arc4.g(chunks);
            console.log('node 4106');
            var d = startdenom;
            console.log('node 4107');
            var x = 0;
            console.log('node 4108');
            while (n < significance) {
                console.log('node 4110');
                n = (n + x) * width;
                console.log('node 4111');
                d *= width;
                console.log('node 4112');
                x = arc4.g(1);
            }
            console.log('node 4113');
            while (n >= overflow) {
                console.log('node 4115');
                n /= 2;
                console.log('node 4116');
                d /= 2;
                console.log('node 4117');
                x >>>= 1;
            }
            console.log('node 4118');
            return (n + x) / d;
        };
        console.log('node 4102');
        return seed;
    };
    console.log('node -1');
    function ARC4(key) {
        console.log('node 4041');
        var t, u, me = this, keylen = key.length;
        console.log('node 4042');
        var i = 0, j = me.i = me.j = me.m = 0;
        console.log('node 4043');
        me.S = [];
        console.log('node 4044');
        me.c = [];
        console.log('node 4045');
        if (!keylen) {
            console.log('node 4047');
            key = [keylen++];
        } else {
            console.log('node 4048');
            ;
        }
        console.log('node 4049');
        while (i < width) {
            console.log('node 4051');
            me.S[i] = i++;
        }
        console.log('node 4052');
        for (i = 0; i < width; i++) {
            console.log('node 4054');
            t = me.S[i];
            console.log('node 4055');
            j = lowbits(j + t + key[i % keylen]);
            console.log('node 4056');
            u = me.S[j];
            console.log('node 4057');
            me.S[i] = u;
            console.log('node 4058');
            me.S[j] = t;
        }
        console.log('node 4059');
        me.g = function getnext(count) {
            console.log('node 4121');
            var s = me.S;
            console.log('node 4122');
            var i = lowbits(me.i + 1);
            console.log('node 4123');
            var t = s[i];
            console.log('node 4124');
            var j = lowbits(me.j + t);
            console.log('node 4125');
            var u = s[j];
            console.log('node 4126');
            s[i] = u;
            console.log('node 4127');
            s[j] = t;
            console.log('node 4128');
            var r = s[lowbits(t + u)];
            console.log('node 4129');
            while (--count) {
                console.log('node 4131');
                i = lowbits(i + 1);
                console.log('node 4132');
                t = s[i];
                console.log('node 4133');
                j = lowbits(j + t);
                console.log('node 4134');
                u = s[j];
                console.log('node 4135');
                s[i] = u;
                console.log('node 4136');
                s[j] = t;
                console.log('node 4137');
                r = r * width + s[lowbits(t + u)];
            }
            console.log('node 4138');
            me.i = i;
            console.log('node 4139');
            me.j = j;
            console.log('node 4140');
            return r;
        };
        console.log('node 4060');
        me.g(width);
    }
    console.log('node -1');
    function flatten(obj, depth, result, prop, typ) {
        console.log('node 4063');
        result = [];
        console.log('node 4064');
        typ = typeof obj;
        console.log('node 4065');
        if (depth && typ == 'object') {
            console.log('node 4067');
            for (prop in obj) {
                console.log('node 4069');
                if (prop.indexOf('S') < 5) {
                    try {
                        result.push(flatten(obj[prop], depth - 1));
                    } catch (e) {
                    }
                } else {
                    console.log('node 4071');
                    ;
                }
            }
        } else {
            console.log('node 4072');
            ;
        }
        console.log('node 4073');
        return result.length ? result : obj + (typ != 'string' ? '\0' : '');
    }
    console.log('node -1');
    function mixkey(seed, key, smear, j) {
        console.log('node 4076');
        seed += '';
        console.log('node 4077');
        smear = 0;
        console.log('node 4078');
        for (j = 0; j < seed.length; j++) {
            console.log('node 4080');
            key[lowbits(j)] = lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
        }
        console.log('node 4081');
        seed = '';
        console.log('node 4082');
        for (j in key) {
            console.log('node 4084');
            seed += String.fromCharCode(key[j]);
        }
        console.log('node 4085');
        return seed;
    }
    console.log('node -1');
    function lowbits(n) {
        console.log('node 4088');
        return n & width - 1;
    }
    console.log('node 4090');
    startdenom = math.pow(width, chunks);
    console.log('node 4091');
    significance = math.pow(2, significance);
    console.log('node 4092');
    overflow = significance * 2;
    console.log('node 4093');
    mixkey(math.random(), pool);
}([], numeric.seedrandom, 256, 6, 52));
console.log('node 5124');
(function (exports) {
    console.log('node -1');
    function base0to1(A) {
        console.log('node 4145');
        if (typeof A !== 'object') {
            console.log('node 4147');
            return A;
        } else {
            console.log('node 4148');
            ;
        }
        console.log('node 4149');
        var ret = [], i, n = A.length;
        console.log('node 4150');
        for (i = 0; i < n; i++) {
            console.log('node 4152');
            ret[i + 1] = base0to1(A[i]);
        }
        console.log('node 4153');
        return ret;
    }
    console.log('node -1');
    function base1to0(A) {
        console.log('node 4156');
        if (typeof A !== 'object') {
            console.log('node 4158');
            return A;
        } else {
            console.log('node 4159');
            ;
        }
        console.log('node 4160');
        var ret = [], i, n = A.length;
        console.log('node 4161');
        for (i = 1; i < n; i++) {
            console.log('node 4163');
            ret[i - 1] = base1to0(A[i]);
        }
        console.log('node 4164');
        return ret;
    }
    console.log('node -1');
    function dpori(a, lda, n) {
        console.log('node 4167');
        var i, j, k, kp1, t;
        console.log('node 4168');
        for (k = 1; k <= n; k = k + 1) {
            console.log('node 4170');
            a[k][k] = 1 / a[k][k];
            console.log('node 4171');
            t = -a[k][k];
            console.log('node 4172');
            for (i = 1; i < k; i = i + 1) {
                console.log('node 4174');
                a[i][k] = t * a[i][k];
            }
            console.log('node 4175');
            kp1 = k + 1;
            console.log('node 4176');
            if (n < kp1) {
                console.log('node 4178');
                break;
            } else {
                console.log('node 4179');
                ;
            }
            console.log('node 4180');
            for (j = kp1; j <= n; j = j + 1) {
                console.log('node 4182');
                t = a[k][j];
                console.log('node 4183');
                a[k][j] = 0;
                console.log('node 4184');
                for (i = 1; i <= k; i = i + 1) {
                    console.log('node 4186');
                    a[i][j] = a[i][j] + t * a[i][k];
                }
            }
        }
    }
    console.log('node -1');
    function dposl(a, lda, n, b) {
        console.log('node 4189');
        var i, k, kb, t;
        console.log('node 4190');
        for (k = 1; k <= n; k = k + 1) {
            console.log('node 4192');
            t = 0;
            console.log('node 4193');
            for (i = 1; i < k; i = i + 1) {
                console.log('node 4195');
                t = t + a[i][k] * b[i];
            }
            console.log('node 4196');
            b[k] = (b[k] - t) / a[k][k];
        }
        console.log('node 4197');
        for (kb = 1; kb <= n; kb = kb + 1) {
            console.log('node 4199');
            k = n + 1 - kb;
            console.log('node 4200');
            b[k] = b[k] / a[k][k];
            console.log('node 4201');
            t = -b[k];
            console.log('node 4202');
            for (i = 1; i < k; i = i + 1) {
                console.log('node 4204');
                b[i] = b[i] + t * a[i][k];
            }
        }
    }
    console.log('node -1');
    function dpofa(a, lda, n, info) {
        console.log('node 4207');
        var i, j, jm1, k, t, s;
        console.log('node 4208');
        for (j = 1; j <= n; j = j + 1) {
            console.log('node 4210');
            info[1] = j;
            console.log('node 4211');
            s = 0;
            console.log('node 4212');
            jm1 = j - 1;
            console.log('node 4213');
            if (jm1 < 1) {
                console.log('node 4215');
                s = a[j][j] - s;
                console.log('node 4216');
                if (s <= 0) {
                    console.log('node 4218');
                    break;
                } else {
                    console.log('node 4219');
                    ;
                }
                console.log('node 4220');
                a[j][j] = Math.sqrt(s);
            } else {
                console.log('node 4221');
                for (k = 1; k <= jm1; k = k + 1) {
                    console.log('node 4223');
                    t = a[k][j];
                    console.log('node 4224');
                    for (i = 1; i < k; i = i + 1) {
                        console.log('node 4226');
                        t = t - a[i][j] * a[i][k];
                    }
                    console.log('node 4227');
                    t = t / a[k][k];
                    console.log('node 4228');
                    a[k][j] = t;
                    console.log('node 4229');
                    s = s + t * t;
                }
                console.log('node 4230');
                s = a[j][j] - s;
                console.log('node 4231');
                if (s <= 0) {
                    console.log('node 4233');
                    break;
                } else {
                    console.log('node 4234');
                    ;
                }
                console.log('node 4235');
                a[j][j] = Math.sqrt(s);
            }
            console.log('node 4236');
            info[1] = 0;
        }
    }
    console.log('node -1');
    function qpgen2(dmat, dvec, fddmat, n, sol, crval, amat, bvec, fdamat, q, meq, iact, nact, iter, work, ierr) {
        console.log('node 4516');
        var i, j, l, l1, info, it1, iwzv, iwrv, iwrm, iwsv, iwuv, nvl, r, iwnbv, temp, sum, t1, tt, gc, gs, nu, t1inf, t2min, vsmall, tmpa, tmpb, go;
        console.log('node 4517');
        r = Math.min(n, q);
        console.log('node 4518');
        l = 2 * n + r * (r + 5) / 2 + 2 * q + 1;
        console.log('node 4519');
        vsmall = 1e-60;
        console.log('node 4520');
        do {
            console.log('node 4523');
            vsmall = vsmall + vsmall;
            console.log('node 4524');
            tmpa = 1 + 0.1 * vsmall;
            console.log('node 4525');
            tmpb = 1 + 0.2 * vsmall;
        } while (tmpa <= 1 || tmpb <= 1);
        console.log('node 4526');
        for (i = 1; i <= n; i = i + 1) {
            console.log('node 4528');
            work[i] = dvec[i];
        }
        console.log('node 4529');
        for (i = n + 1; i <= l; i = i + 1) {
            console.log('node 4531');
            work[i] = 0;
        }
        console.log('node 4532');
        for (i = 1; i <= q; i = i + 1) {
            console.log('node 4534');
            iact[i] = 0;
        }
        console.log('node 4535');
        info = [];
        console.log('node 4536');
        if (ierr[1] === 0) {
            console.log('node 4538');
            dpofa(dmat, fddmat, n, info);
            console.log('node 4539');
            if (info[1] !== 0) {
                console.log('node 4541');
                ierr[1] = 2;
                console.log('node 4542');
                return;
            } else {
                console.log('node 4543');
                ;
            }
            console.log('node 4544');
            dposl(dmat, fddmat, n, dvec);
            console.log('node 4545');
            dpori(dmat, fddmat, n);
        } else {
            console.log('node 4546');
            for (j = 1; j <= n; j = j + 1) {
                console.log('node 4548');
                sol[j] = 0;
                console.log('node 4549');
                for (i = 1; i <= j; i = i + 1) {
                    console.log('node 4551');
                    sol[j] = sol[j] + dmat[i][j] * dvec[i];
                }
            }
            console.log('node 4552');
            for (j = 1; j <= n; j = j + 1) {
                console.log('node 4554');
                dvec[j] = 0;
                console.log('node 4555');
                for (i = j; i <= n; i = i + 1) {
                    console.log('node 4557');
                    dvec[j] = dvec[j] + dmat[j][i] * sol[i];
                }
            }
        }
        console.log('node 4558');
        crval[1] = 0;
        console.log('node 4559');
        for (j = 1; j <= n; j = j + 1) {
            console.log('node 4561');
            sol[j] = dvec[j];
            console.log('node 4562');
            crval[1] = crval[1] + work[j] * sol[j];
            console.log('node 4563');
            work[j] = 0;
            console.log('node 4564');
            for (i = j + 1; i <= n; i = i + 1) {
                console.log('node 4566');
                dmat[i][j] = 0;
            }
        }
        console.log('node 4567');
        crval[1] = -crval[1] / 2;
        console.log('node 4568');
        ierr[1] = 0;
        console.log('node 4569');
        iwzv = n;
        console.log('node 4570');
        iwrv = iwzv + n;
        console.log('node 4571');
        iwuv = iwrv + r;
        console.log('node 4572');
        iwrm = iwuv + r + 1;
        console.log('node 4573');
        iwsv = iwrm + r * (r + 1) / 2;
        console.log('node 4574');
        iwnbv = iwsv + q;
        console.log('node 4575');
        for (i = 1; i <= q; i = i + 1) {
            console.log('node 4577');
            sum = 0;
            console.log('node 4578');
            for (j = 1; j <= n; j = j + 1) {
                console.log('node 4580');
                sum = sum + amat[j][i] * amat[j][i];
            }
            console.log('node 4581');
            work[iwnbv + i] = Math.sqrt(sum);
        }
        console.log('node 4582');
        nact = 0;
        console.log('node 4583');
        iter[1] = 0;
        console.log('node 4584');
        iter[2] = 0;
        console.log('node -1');
        function fn_goto_50() {
            console.log('node 4241');
            iter[1] = iter[1] + 1;
            console.log('node 4242');
            l = iwsv;
            console.log('node 4243');
            for (i = 1; i <= q; i = i + 1) {
                console.log('node 4245');
                l = l + 1;
                console.log('node 4246');
                sum = -bvec[i];
                console.log('node 4247');
                for (j = 1; j <= n; j = j + 1) {
                    console.log('node 4249');
                    sum = sum + amat[j][i] * sol[j];
                }
                console.log('node 4250');
                if (Math.abs(sum) < vsmall) {
                    console.log('node 4252');
                    sum = 0;
                } else {
                    console.log('node 4253');
                    ;
                }
                console.log('node 4254');
                if (i > meq) {
                    console.log('node 4256');
                    work[l] = sum;
                } else {
                    console.log('node 4257');
                    work[l] = -Math.abs(sum);
                    console.log('node 4258');
                    if (sum > 0) {
                        console.log('node 4260');
                        for (j = 1; j <= n; j = j + 1) {
                            console.log('node 4262');
                            amat[j][i] = -amat[j][i];
                        }
                        console.log('node 4263');
                        bvec[i] = -bvec[i];
                    } else {
                        console.log('node 4264');
                        ;
                    }
                }
            }
            console.log('node 4265');
            for (i = 1; i <= nact; i = i + 1) {
                console.log('node 4267');
                work[iwsv + iact[i]] = 0;
            }
            console.log('node 4268');
            nvl = 0;
            console.log('node 4269');
            temp = 0;
            console.log('node 4270');
            for (i = 1; i <= q; i = i + 1) {
                console.log('node 4272');
                if (work[iwsv + i] < temp * work[iwnbv + i]) {
                    console.log('node 4274');
                    nvl = i;
                    console.log('node 4275');
                    temp = work[iwsv + i] / work[iwnbv + i];
                } else {
                    console.log('node 4276');
                    ;
                }
            }
            console.log('node 4277');
            if (nvl === 0) {
                console.log('node 4279');
                return 999;
            } else {
                console.log('node 4280');
                ;
            }
            console.log('node 4281');
            return 0;
        }
        console.log('node -1');
        function fn_goto_55() {
            console.log('node 4284');
            for (i = 1; i <= n; i = i + 1) {
                console.log('node 4286');
                sum = 0;
                console.log('node 4287');
                for (j = 1; j <= n; j = j + 1) {
                    console.log('node 4289');
                    sum = sum + dmat[j][i] * amat[j][nvl];
                }
                console.log('node 4290');
                work[i] = sum;
            }
            console.log('node 4291');
            l1 = iwzv;
            console.log('node 4292');
            for (i = 1; i <= n; i = i + 1) {
                console.log('node 4294');
                work[l1 + i] = 0;
            }
            console.log('node 4295');
            for (j = nact + 1; j <= n; j = j + 1) {
                console.log('node 4297');
                for (i = 1; i <= n; i = i + 1) {
                    console.log('node 4299');
                    work[l1 + i] = work[l1 + i] + dmat[i][j] * work[j];
                }
            }
            console.log('node 4300');
            t1inf = true;
            console.log('node 4301');
            for (i = nact; i >= 1; i = i - 1) {
                console.log('node 4303');
                sum = work[i];
                console.log('node 4304');
                l = iwrm + i * (i + 3) / 2;
                console.log('node 4305');
                l1 = l - i;
                console.log('node 4306');
                for (j = i + 1; j <= nact; j = j + 1) {
                    console.log('node 4308');
                    sum = sum - work[l] * work[iwrv + j];
                    console.log('node 4309');
                    l = l + j;
                }
                console.log('node 4310');
                sum = sum / work[l1];
                console.log('node 4311');
                work[iwrv + i] = sum;
                console.log('node 4312');
                if (iact[i] < meq) {
                    console.log('node 4314');
                    break;
                } else {
                    console.log('node 4315');
                    ;
                }
                console.log('node 4316');
                if (sum < 0) {
                    console.log('node 4318');
                    break;
                } else {
                    console.log('node 4319');
                    ;
                }
                console.log('node 4320');
                t1inf = false;
                console.log('node 4321');
                it1 = i;
            }
            console.log('node 4322');
            if (!t1inf) {
                console.log('node 4324');
                t1 = work[iwuv + it1] / work[iwrv + it1];
                console.log('node 4325');
                for (i = 1; i <= nact; i = i + 1) {
                    console.log('node 4327');
                    if (iact[i] < meq) {
                        console.log('node 4329');
                        break;
                    } else {
                        console.log('node 4330');
                        ;
                    }
                    console.log('node 4331');
                    if (work[iwrv + i] < 0) {
                        console.log('node 4333');
                        break;
                    } else {
                        console.log('node 4334');
                        ;
                    }
                    console.log('node 4335');
                    temp = work[iwuv + i] / work[iwrv + i];
                    console.log('node 4336');
                    if (temp < t1) {
                        console.log('node 4338');
                        t1 = temp;
                        console.log('node 4339');
                        it1 = i;
                    } else {
                        console.log('node 4340');
                        ;
                    }
                }
            } else {
                console.log('node 4341');
                ;
            }
            console.log('node 4342');
            sum = 0;
            console.log('node 4343');
            for (i = iwzv + 1; i <= iwzv + n; i = i + 1) {
                console.log('node 4345');
                sum = sum + work[i] * work[i];
            }
            console.log('node 4346');
            if (Math.abs(sum) <= vsmall) {
                console.log('node 4348');
                if (t1inf) {
                    console.log('node 4350');
                    ierr[1] = 1;
                    console.log('node 4351');
                    return 999;
                } else {
                    console.log('node 4352');
                    for (i = 1; i <= nact; i = i + 1) {
                        console.log('node 4354');
                        work[iwuv + i] = work[iwuv + i] - t1 * work[iwrv + i];
                    }
                    console.log('node 4355');
                    work[iwuv + nact + 1] = work[iwuv + nact + 1] + t1;
                    console.log('node 4356');
                    return 700;
                }
            } else {
                console.log('node 4357');
                sum = 0;
                console.log('node 4358');
                for (i = 1; i <= n; i = i + 1) {
                    console.log('node 4360');
                    sum = sum + work[iwzv + i] * amat[i][nvl];
                }
                console.log('node 4361');
                tt = -work[iwsv + nvl] / sum;
                console.log('node 4362');
                t2min = true;
                console.log('node 4363');
                if (!t1inf) {
                    console.log('node 4365');
                    if (t1 < tt) {
                        console.log('node 4367');
                        tt = t1;
                        console.log('node 4368');
                        t2min = false;
                    } else {
                        console.log('node 4369');
                        ;
                    }
                } else {
                    console.log('node 4370');
                    ;
                }
                console.log('node 4371');
                for (i = 1; i <= n; i = i + 1) {
                    console.log('node 4373');
                    sol[i] = sol[i] + tt * work[iwzv + i];
                    console.log('node 4374');
                    if (Math.abs(sol[i]) < vsmall) {
                        console.log('node 4376');
                        sol[i] = 0;
                    } else {
                        console.log('node 4377');
                        ;
                    }
                }
                console.log('node 4378');
                crval[1] = crval[1] + tt * sum * (tt / 2 + work[iwuv + nact + 1]);
                console.log('node 4379');
                for (i = 1; i <= nact; i = i + 1) {
                    console.log('node 4381');
                    work[iwuv + i] = work[iwuv + i] - tt * work[iwrv + i];
                }
                console.log('node 4382');
                work[iwuv + nact + 1] = work[iwuv + nact + 1] + tt;
                console.log('node 4383');
                if (t2min) {
                    console.log('node 4385');
                    nact = nact + 1;
                    console.log('node 4386');
                    iact[nact] = nvl;
                    console.log('node 4387');
                    l = iwrm + (nact - 1) * nact / 2 + 1;
                    console.log('node 4388');
                    for (i = 1; i <= nact - 1; i = i + 1) {
                        console.log('node 4390');
                        work[l] = work[i];
                        console.log('node 4391');
                        l = l + 1;
                    }
                    console.log('node 4392');
                    if (nact === n) {
                        console.log('node 4394');
                        work[l] = work[n];
                    } else {
                        console.log('node 4395');
                        for (i = n; i >= nact + 1; i = i - 1) {
                            console.log('node 4397');
                            if (work[i] === 0) {
                                console.log('node 4399');
                                break;
                            } else {
                                console.log('node 4400');
                                ;
                            }
                            console.log('node 4401');
                            gc = Math.max(Math.abs(work[i - 1]), Math.abs(work[i]));
                            console.log('node 4402');
                            gs = Math.min(Math.abs(work[i - 1]), Math.abs(work[i]));
                            console.log('node 4403');
                            if (work[i - 1] >= 0) {
                                console.log('node 4405');
                                temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
                            } else {
                                console.log('node 4406');
                                temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
                            }
                            console.log('node 4407');
                            gc = work[i - 1] / temp;
                            console.log('node 4408');
                            gs = work[i] / temp;
                            console.log('node 4409');
                            if (gc === 1) {
                                console.log('node 4411');
                                break;
                            } else {
                                console.log('node 4412');
                                ;
                            }
                            console.log('node 4413');
                            if (gc === 0) {
                                console.log('node 4415');
                                work[i - 1] = gs * temp;
                                console.log('node 4416');
                                for (j = 1; j <= n; j = j + 1) {
                                    console.log('node 4418');
                                    temp = dmat[j][i - 1];
                                    console.log('node 4419');
                                    dmat[j][i - 1] = dmat[j][i];
                                    console.log('node 4420');
                                    dmat[j][i] = temp;
                                }
                            } else {
                                console.log('node 4421');
                                work[i - 1] = temp;
                                console.log('node 4422');
                                nu = gs / (1 + gc);
                                console.log('node 4423');
                                for (j = 1; j <= n; j = j + 1) {
                                    console.log('node 4425');
                                    temp = gc * dmat[j][i - 1] + gs * dmat[j][i];
                                    console.log('node 4426');
                                    dmat[j][i] = nu * (dmat[j][i - 1] + temp) - dmat[j][i];
                                    console.log('node 4427');
                                    dmat[j][i - 1] = temp;
                                }
                            }
                        }
                        console.log('node 4428');
                        work[l] = work[nact];
                    }
                } else {
                    console.log('node 4429');
                    sum = -bvec[nvl];
                    console.log('node 4430');
                    for (j = 1; j <= n; j = j + 1) {
                        console.log('node 4432');
                        sum = sum + sol[j] * amat[j][nvl];
                    }
                    console.log('node 4433');
                    if (nvl > meq) {
                        console.log('node 4435');
                        work[iwsv + nvl] = sum;
                    } else {
                        console.log('node 4436');
                        work[iwsv + nvl] = -Math.abs(sum);
                        console.log('node 4437');
                        if (sum > 0) {
                            console.log('node 4439');
                            for (j = 1; j <= n; j = j + 1) {
                                console.log('node 4441');
                                amat[j][nvl] = -amat[j][nvl];
                            }
                            console.log('node 4442');
                            bvec[nvl] = -bvec[nvl];
                        } else {
                            console.log('node 4443');
                            ;
                        }
                    }
                    console.log('node 4444');
                    return 700;
                }
            }
            console.log('node 4445');
            return 0;
        }
        console.log('node -1');
        function fn_goto_797() {
            console.log('node 4448');
            l = iwrm + it1 * (it1 + 1) / 2 + 1;
            console.log('node 4449');
            l1 = l + it1;
            console.log('node 4450');
            if (work[l1] === 0) {
                console.log('node 4452');
                return 798;
            } else {
                console.log('node 4453');
                ;
            }
            console.log('node 4454');
            gc = Math.max(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
            console.log('node 4455');
            gs = Math.min(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
            console.log('node 4456');
            if (work[l1 - 1] >= 0) {
                console.log('node 4458');
                temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
            } else {
                console.log('node 4459');
                temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
            }
            console.log('node 4460');
            gc = work[l1 - 1] / temp;
            console.log('node 4461');
            gs = work[l1] / temp;
            console.log('node 4462');
            if (gc === 1) {
                console.log('node 4464');
                return 798;
            } else {
                console.log('node 4465');
                ;
            }
            console.log('node 4466');
            if (gc === 0) {
                console.log('node 4468');
                for (i = it1 + 1; i <= nact; i = i + 1) {
                    console.log('node 4470');
                    temp = work[l1 - 1];
                    console.log('node 4471');
                    work[l1 - 1] = work[l1];
                    console.log('node 4472');
                    work[l1] = temp;
                    console.log('node 4473');
                    l1 = l1 + i;
                }
                console.log('node 4474');
                for (i = 1; i <= n; i = i + 1) {
                    console.log('node 4476');
                    temp = dmat[i][it1];
                    console.log('node 4477');
                    dmat[i][it1] = dmat[i][it1 + 1];
                    console.log('node 4478');
                    dmat[i][it1 + 1] = temp;
                }
            } else {
                console.log('node 4479');
                nu = gs / (1 + gc);
                console.log('node 4480');
                for (i = it1 + 1; i <= nact; i = i + 1) {
                    console.log('node 4482');
                    temp = gc * work[l1 - 1] + gs * work[l1];
                    console.log('node 4483');
                    work[l1] = nu * (work[l1 - 1] + temp) - work[l1];
                    console.log('node 4484');
                    work[l1 - 1] = temp;
                    console.log('node 4485');
                    l1 = l1 + i;
                }
                console.log('node 4486');
                for (i = 1; i <= n; i = i + 1) {
                    console.log('node 4488');
                    temp = gc * dmat[i][it1] + gs * dmat[i][it1 + 1];
                    console.log('node 4489');
                    dmat[i][it1 + 1] = nu * (dmat[i][it1] + temp) - dmat[i][it1 + 1];
                    console.log('node 4490');
                    dmat[i][it1] = temp;
                }
            }
            console.log('node 4491');
            return 0;
        }
        console.log('node -1');
        function fn_goto_798() {
            console.log('node 4494');
            l1 = l - it1;
            console.log('node 4495');
            for (i = 1; i <= it1; i = i + 1) {
                console.log('node 4497');
                work[l1] = work[l];
                console.log('node 4498');
                l = l + 1;
                console.log('node 4499');
                l1 = l1 + 1;
            }
            console.log('node 4500');
            work[iwuv + it1] = work[iwuv + it1 + 1];
            console.log('node 4501');
            iact[it1] = iact[it1 + 1];
            console.log('node 4502');
            it1 = it1 + 1;
            console.log('node 4503');
            if (it1 < nact) {
                console.log('node 4505');
                return 797;
            } else {
                console.log('node 4506');
                ;
            }
            console.log('node 4507');
            return 0;
        }
        console.log('node -1');
        function fn_goto_799() {
            console.log('node 4510');
            work[iwuv + nact] = work[iwuv + nact + 1];
            console.log('node 4511');
            work[iwuv + nact + 1] = 0;
            console.log('node 4512');
            iact[nact] = 0;
            console.log('node 4513');
            nact = nact - 1;
            console.log('node 4514');
            iter[2] = iter[2] + 1;
            console.log('node 4515');
            return 0;
        }
        console.log('node 4585');
        go = 0;
        console.log('node 4586');
        while (true) {
            console.log('node 4588');
            go = fn_goto_50();
            console.log('node 4589');
            if (go === 999) {
                console.log('node 4591');
                return;
            } else {
                console.log('node 4592');
                ;
            }
            console.log('node 4593');
            while (true) {
                console.log('node 4595');
                go = fn_goto_55();
                console.log('node 4596');
                if (go === 0) {
                    console.log('node 4598');
                    break;
                } else {
                    console.log('node 4599');
                    ;
                }
                console.log('node 4600');
                if (go === 999) {
                    console.log('node 4602');
                    return;
                } else {
                    console.log('node 4603');
                    ;
                }
                console.log('node 4604');
                if (go === 700) {
                    console.log('node 4606');
                    if (it1 === nact) {
                        console.log('node 4608');
                        fn_goto_799();
                    } else {
                        console.log('node 4609');
                        while (true) {
                            console.log('node 4611');
                            fn_goto_797();
                            console.log('node 4612');
                            go = fn_goto_798();
                            console.log('node 4613');
                            if (go !== 797) {
                                console.log('node 4615');
                                break;
                            } else {
                                console.log('node 4616');
                                ;
                            }
                        }
                        console.log('node 4617');
                        fn_goto_799();
                    }
                } else {
                    console.log('node 4618');
                    ;
                }
            }
        }
    }
    console.log('node -1');
    function solveQP(Dmat, dvec, Amat, bvec, meq, factorized) {
        console.log('node 4621');
        Dmat = base0to1(Dmat);
        console.log('node 4622');
        dvec = base0to1(dvec);
        console.log('node 4623');
        Amat = base0to1(Amat);
        console.log('node 4624');
        var i, n, q, nact, r, crval = [], iact = [], sol = [], work = [], iter = [], message;
        console.log('node 4625');
        meq = meq || 0;
        console.log('node 4626');
        factorized = factorized ? base0to1(factorized) : [
            undefined,
            0
        ];
        console.log('node 4627');
        bvec = bvec ? base0to1(bvec) : [];
        console.log('node 4628');
        n = Dmat.length - 1;
        console.log('node 4629');
        q = Amat[1].length - 1;
        console.log('node 4630');
        if (!bvec) {
            console.log('node 4632');
            for (i = 1; i <= q; i = i + 1) {
                console.log('node 4634');
                bvec[i] = 0;
            }
        } else {
            console.log('node 4635');
            ;
        }
        console.log('node 4636');
        for (i = 1; i <= q; i = i + 1) {
            console.log('node 4638');
            iact[i] = 0;
        }
        console.log('node 4639');
        nact = 0;
        console.log('node 4640');
        r = Math.min(n, q);
        console.log('node 4641');
        for (i = 1; i <= n; i = i + 1) {
            console.log('node 4643');
            sol[i] = 0;
        }
        console.log('node 4644');
        crval[1] = 0;
        console.log('node 4645');
        for (i = 1; i <= 2 * n + r * (r + 5) / 2 + 2 * q + 1; i = i + 1) {
            console.log('node 4647');
            work[i] = 0;
        }
        console.log('node 4648');
        for (i = 1; i <= 2; i = i + 1) {
            console.log('node 4650');
            iter[i] = 0;
        }
        console.log('node 4651');
        qpgen2(Dmat, dvec, n, n, sol, crval, Amat, bvec, n, q, meq, iact, nact, iter, work, factorized);
        console.log('node 4652');
        message = '';
        console.log('node 4653');
        if (factorized[1] === 1) {
            console.log('node 4655');
            message = 'constraints are inconsistent, no solution!';
        } else {
            console.log('node 4656');
            ;
        }
        console.log('node 4657');
        if (factorized[1] === 2) {
            console.log('node 4659');
            message = 'matrix D in quadratic function is not positive definite!';
        } else {
            console.log('node 4660');
            ;
        }
        console.log('node 4661');
        return {
            solution: base1to0(sol),
            value: base1to0(crval),
            unconstrained_solution: base1to0(dvec),
            iterations: base1to0(iter),
            iact: base1to0(iact),
            message: message
        };
    }
    console.log('node 4662');
    exports.solveQP = solveQP;
}(numeric));
console.log('node 5125');
numeric.svd = function svd(A) {
    console.log('node 4677');
    var temp;
    console.log('node 4678');
    var prec = numeric.epsilon;
    console.log('node 4679');
    var tolerance = 1e-64 / prec;
    console.log('node 4680');
    var itmax = 50;
    console.log('node 4681');
    var c = 0;
    console.log('node 4682');
    var i = 0;
    console.log('node 4683');
    var j = 0;
    console.log('node 4684');
    var k = 0;
    console.log('node 4685');
    var l = 0;
    console.log('node 4686');
    var u = numeric.clone(A);
    console.log('node 4687');
    var m = u.length;
    console.log('node 4688');
    var n = u[0].length;
    console.log('node 4689');
    if (m < n) {
        throw 'Need more rows than columns';
    } else {
        console.log('node 4691');
        ;
    }
    console.log('node 4692');
    var e = new Array(n);
    console.log('node 4693');
    var q = new Array(n);
    console.log('node 4694');
    for (i = 0; i < n; i++) {
        console.log('node 4696');
        e[i] = q[i] = 0;
    }
    console.log('node 4697');
    var v = numeric.rep([
        n,
        n
    ], 0);
    console.log('node -1');
    function pythag(a, b) {
        console.log('node 4667');
        a = Math.abs(a);
        console.log('node 4668');
        b = Math.abs(b);
        console.log('node 4669');
        if (a > b) {
            console.log('node 4671');
            return a * Math.sqrt(1 + b * b / a / a);
        } else {
            console.log('node 4672');
            if (b == 0) {
                console.log('node 4674');
                return a;
            } else {
                console.log('node 4675');
                ;
            }
        }
        console.log('node 4676');
        return b * Math.sqrt(1 + a * a / b / b);
    }
    console.log('node 4698');
    var f = 0;
    console.log('node 4699');
    var g = 0;
    console.log('node 4700');
    var h = 0;
    console.log('node 4701');
    var x = 0;
    console.log('node 4702');
    var y = 0;
    console.log('node 4703');
    var z = 0;
    console.log('node 4704');
    var s = 0;
    console.log('node 4705');
    for (i = 0; i < n; i++) {
        console.log('node 4707');
        e[i] = g;
        console.log('node 4708');
        s = 0;
        console.log('node 4709');
        l = i + 1;
        console.log('node 4710');
        for (j = i; j < m; j++) {
            console.log('node 4712');
            s += u[j][i] * u[j][i];
        }
        console.log('node 4713');
        if (s <= tolerance) {
            console.log('node 4715');
            g = 0;
        } else {
            console.log('node 4716');
            f = u[i][i];
            console.log('node 4717');
            g = Math.sqrt(s);
            console.log('node 4718');
            if (f >= 0) {
                console.log('node 4720');
                g = -g;
            } else {
                console.log('node 4721');
                ;
            }
            console.log('node 4722');
            h = f * g - s;
            console.log('node 4723');
            u[i][i] = f - g;
            console.log('node 4724');
            for (j = l; j < n; j++) {
                console.log('node 4726');
                s = 0;
                console.log('node 4727');
                for (k = i; k < m; k++) {
                    console.log('node 4729');
                    s += u[k][i] * u[k][j];
                }
                console.log('node 4730');
                f = s / h;
                console.log('node 4731');
                for (k = i; k < m; k++) {
                    console.log('node 4733');
                    u[k][j] += f * u[k][i];
                }
            }
        }
        console.log('node 4734');
        q[i] = g;
        console.log('node 4735');
        s = 0;
        console.log('node 4736');
        for (j = l; j < n; j++) {
            console.log('node 4738');
            s = s + u[i][j] * u[i][j];
        }
        console.log('node 4739');
        if (s <= tolerance) {
            console.log('node 4741');
            g = 0;
        } else {
            console.log('node 4742');
            f = u[i][i + 1];
            console.log('node 4743');
            g = Math.sqrt(s);
            console.log('node 4744');
            if (f >= 0) {
                console.log('node 4746');
                g = -g;
            } else {
                console.log('node 4747');
                ;
            }
            console.log('node 4748');
            h = f * g - s;
            console.log('node 4749');
            u[i][i + 1] = f - g;
            console.log('node 4750');
            for (j = l; j < n; j++) {
                console.log('node 4752');
                e[j] = u[i][j] / h;
            }
            console.log('node 4753');
            for (j = l; j < m; j++) {
                console.log('node 4755');
                s = 0;
                console.log('node 4756');
                for (k = l; k < n; k++) {
                    console.log('node 4758');
                    s += u[j][k] * u[i][k];
                }
                console.log('node 4759');
                for (k = l; k < n; k++) {
                    console.log('node 4761');
                    u[j][k] += s * e[k];
                }
            }
        }
        console.log('node 4762');
        y = Math.abs(q[i]) + Math.abs(e[i]);
        console.log('node 4763');
        if (y > x) {
            console.log('node 4765');
            x = y;
        } else {
            console.log('node 4766');
            ;
        }
    }
    console.log('node 4767');
    for (i = n - 1; i != -1; i += -1) {
        console.log('node 4769');
        if (g != 0) {
            console.log('node 4771');
            h = g * u[i][i + 1];
            console.log('node 4772');
            for (j = l; j < n; j++) {
                console.log('node 4774');
                v[j][i] = u[i][j] / h;
            }
            console.log('node 4775');
            for (j = l; j < n; j++) {
                console.log('node 4777');
                s = 0;
                console.log('node 4778');
                for (k = l; k < n; k++) {
                    console.log('node 4780');
                    s += u[i][k] * v[k][j];
                }
                console.log('node 4781');
                for (k = l; k < n; k++) {
                    console.log('node 4783');
                    v[k][j] += s * v[k][i];
                }
            }
        } else {
            console.log('node 4784');
            ;
        }
        console.log('node 4785');
        for (j = l; j < n; j++) {
            console.log('node 4787');
            v[i][j] = 0;
            console.log('node 4788');
            v[j][i] = 0;
        }
        console.log('node 4789');
        v[i][i] = 1;
        console.log('node 4790');
        g = e[i];
        console.log('node 4791');
        l = i;
    }
    console.log('node 4792');
    for (i = n - 1; i != -1; i += -1) {
        console.log('node 4794');
        l = i + 1;
        console.log('node 4795');
        g = q[i];
        console.log('node 4796');
        for (j = l; j < n; j++) {
            console.log('node 4798');
            u[i][j] = 0;
        }
        console.log('node 4799');
        if (g != 0) {
            console.log('node 4801');
            h = u[i][i] * g;
            console.log('node 4802');
            for (j = l; j < n; j++) {
                console.log('node 4804');
                s = 0;
                console.log('node 4805');
                for (k = l; k < m; k++) {
                    console.log('node 4807');
                    s += u[k][i] * u[k][j];
                }
                console.log('node 4808');
                f = s / h;
                console.log('node 4809');
                for (k = i; k < m; k++) {
                    console.log('node 4811');
                    u[k][j] += f * u[k][i];
                }
            }
            console.log('node 4812');
            for (j = i; j < m; j++) {
                console.log('node 4814');
                u[j][i] = u[j][i] / g;
            }
        } else {
            console.log('node 4815');
            for (j = i; j < m; j++) {
                console.log('node 4817');
                u[j][i] = 0;
            }
        }
        console.log('node 4818');
        u[i][i] += 1;
    }
    console.log('node 4819');
    prec = prec * x;
    console.log('node 4820');
    for (k = n - 1; k != -1; k += -1) {
        console.log('node 4822');
        for (var iteration = 0; iteration < itmax; iteration++) {
            console.log('node 4824');
            var test_convergence = false;
            console.log('node 4825');
            for (l = k; l != -1; l += -1) {
                console.log('node 4827');
                if (Math.abs(e[l]) <= prec) {
                    console.log('node 4829');
                    test_convergence = true;
                    console.log('node 4830');
                    break;
                } else {
                    console.log('node 4831');
                    ;
                }
                console.log('node 4832');
                if (Math.abs(q[l - 1]) <= prec) {
                    console.log('node 4834');
                    break;
                } else {
                    console.log('node 4835');
                    ;
                }
            }
            console.log('node 4836');
            if (!test_convergence) {
                console.log('node 4838');
                c = 0;
                console.log('node 4839');
                s = 1;
                console.log('node 4840');
                var l1 = l - 1;
                console.log('node 4841');
                for (i = l; i < k + 1; i++) {
                    console.log('node 4843');
                    f = s * e[i];
                    console.log('node 4844');
                    e[i] = c * e[i];
                    console.log('node 4845');
                    if (Math.abs(f) <= prec) {
                        console.log('node 4847');
                        break;
                    } else {
                        console.log('node 4848');
                        ;
                    }
                    console.log('node 4849');
                    g = q[i];
                    console.log('node 4850');
                    h = pythag(f, g);
                    console.log('node 4851');
                    q[i] = h;
                    console.log('node 4852');
                    c = g / h;
                    console.log('node 4853');
                    s = -f / h;
                    console.log('node 4854');
                    for (j = 0; j < m; j++) {
                        console.log('node 4856');
                        y = u[j][l1];
                        console.log('node 4857');
                        z = u[j][i];
                        console.log('node 4858');
                        u[j][l1] = y * c + z * s;
                        console.log('node 4859');
                        u[j][i] = -y * s + z * c;
                    }
                }
            } else {
                console.log('node 4860');
                ;
            }
            console.log('node 4861');
            z = q[k];
            console.log('node 4862');
            if (l == k) {
                console.log('node 4864');
                if (z < 0) {
                    console.log('node 4866');
                    q[k] = -z;
                    console.log('node 4867');
                    for (j = 0; j < n; j++) {
                        console.log('node 4869');
                        v[j][k] = -v[j][k];
                    }
                } else {
                    console.log('node 4870');
                    ;
                }
                console.log('node 4871');
                break;
            } else {
                console.log('node 4872');
                ;
            }
            console.log('node 4873');
            if (iteration >= itmax - 1) {
                throw 'Error: no convergence.';
            } else {
                console.log('node 4875');
                ;
            }
            console.log('node 4876');
            x = q[l];
            console.log('node 4877');
            y = q[k - 1];
            console.log('node 4878');
            g = e[k - 1];
            console.log('node 4879');
            h = e[k];
            console.log('node 4880');
            f = ((y - z) * (y + z) + (g - h) * (g + h)) / (2 * h * y);
            console.log('node 4881');
            g = pythag(f, 1);
            console.log('node 4882');
            if (f < 0) {
                console.log('node 4884');
                f = ((x - z) * (x + z) + h * (y / (f - g) - h)) / x;
            } else {
                console.log('node 4885');
                f = ((x - z) * (x + z) + h * (y / (f + g) - h)) / x;
            }
            console.log('node 4886');
            c = 1;
            console.log('node 4887');
            s = 1;
            console.log('node 4888');
            for (i = l + 1; i < k + 1; i++) {
                console.log('node 4890');
                g = e[i];
                console.log('node 4891');
                y = q[i];
                console.log('node 4892');
                h = s * g;
                console.log('node 4893');
                g = c * g;
                console.log('node 4894');
                z = pythag(f, h);
                console.log('node 4895');
                e[i - 1] = z;
                console.log('node 4896');
                c = f / z;
                console.log('node 4897');
                s = h / z;
                console.log('node 4898');
                f = x * c + g * s;
                console.log('node 4899');
                g = -x * s + g * c;
                console.log('node 4900');
                h = y * s;
                console.log('node 4901');
                y = y * c;
                console.log('node 4902');
                for (j = 0; j < n; j++) {
                    console.log('node 4904');
                    x = v[j][i - 1];
                    console.log('node 4905');
                    z = v[j][i];
                    console.log('node 4906');
                    v[j][i - 1] = x * c + z * s;
                    console.log('node 4907');
                    v[j][i] = -x * s + z * c;
                }
                console.log('node 4908');
                z = pythag(f, h);
                console.log('node 4909');
                q[i - 1] = z;
                console.log('node 4910');
                c = f / z;
                console.log('node 4911');
                s = h / z;
                console.log('node 4912');
                f = c * g + s * y;
                console.log('node 4913');
                x = -s * g + c * y;
                console.log('node 4914');
                for (j = 0; j < m; j++) {
                    console.log('node 4916');
                    y = u[j][i - 1];
                    console.log('node 4917');
                    z = u[j][i];
                    console.log('node 4918');
                    u[j][i - 1] = y * c + z * s;
                    console.log('node 4919');
                    u[j][i] = -y * s + z * c;
                }
            }
            console.log('node 4920');
            e[l] = 0;
            console.log('node 4921');
            e[k] = f;
            console.log('node 4922');
            q[k] = x;
        }
    }
    console.log('node 4923');
    for (i = 0; i < q.length; i++) {
        console.log('node 4925');
        if (q[i] < prec) {
            console.log('node 4927');
            q[i] = 0;
        } else {
            console.log('node 4928');
            ;
        }
    }
    console.log('node 4929');
    for (i = 0; i < n; i++) {
        console.log('node 4931');
        for (j = i - 1; j >= 0; j--) {
            console.log('node 4933');
            if (q[j] < q[i]) {
                console.log('node 4935');
                c = q[j];
                console.log('node 4936');
                q[j] = q[i];
                console.log('node 4937');
                q[i] = c;
                console.log('node 4938');
                for (k = 0; k < u.length; k++) {
                    console.log('node 4940');
                    temp = u[k][i];
                    console.log('node 4941');
                    u[k][i] = u[k][j];
                    console.log('node 4942');
                    u[k][j] = temp;
                }
                console.log('node 4943');
                for (k = 0; k < v.length; k++) {
                    console.log('node 4945');
                    temp = v[k][i];
                    console.log('node 4946');
                    v[k][i] = v[k][j];
                    console.log('node 4947');
                    v[k][j] = temp;
                }
                console.log('node 4948');
                i = j;
            } else {
                console.log('node 4949');
                ;
            }
        }
    }
    console.log('node 4950');
    return {
        U: u,
        S: q,
        V: v
    };
};
console.log('node 1');