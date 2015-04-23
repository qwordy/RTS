console.log('node 5');
var a, s, i;
console.log('node 6');
a = [
    1,
    2,
    3,
    4
];
console.log('node 7');
s = 0;
console.log('node 8');
for (i in a) {
    console.log('node 10');
    if (a[i] < 0) {
        console.log('node 12');
        process.exit(1);
    } else {
        console.log('node 13');
        s += a[i];
    }
}
console.log('node 14');
console.log(s);
console.log('node -1');
function hello() {
    console.log('node 4');
    return;
    console.log('hello');
}
console.log('node 15');
foo = function () {
};
console.log('node 16');
s = 'asdf';
console.log('node 17');
b = {};
console.log('node 18');
b[s] = 1;
console.log('node 19');
console.log(b);