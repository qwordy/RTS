console.log('node 6');
var a, s, i;
console.log('node 7');
a = [
    1,
    2,
    3,
    4
];
console.log('node 8');
s = 0;
console.log('node 9');
for (i in a) {
    console.log('node 11');
    if (a[i] < 0) {
        console.log('node 13');
        process.exit(1);
    } else {
        console.log('node 14');
        s += a[i];
    }
}
console.log('node 15');
console.log(s);
console.log('node 16');
hello();
console.log('node -1');
function hello() {
    console.log('node 4');
    a++;
    console.log('node 5');
    console.log('hello');
}
console.log('node 17');
foo = function () {
};
console.log('node 18');
s = 'asdf';
console.log('node 19');
b = {};
console.log('node 20');
b[s] = 1;
console.log('node 21');
console.log(b);
console.log('node 1');