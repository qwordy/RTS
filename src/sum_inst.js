console.log('node 8');
var a, s, i;
console.log('node 9');
a = [
    1,
    2,
    3,
    4
];
console.log('node 10');
s = 0;
console.log('node 11');
for (i in a) {
    console.log('node 13');
    if (a[i] < 0) {
        console.log('node 15');
        process.exit(1);
    } else {
        console.log('node 16');
        s += a[i];
    }
}
console.log('node 17');
console.log(s);
console.log('node 18');
hello();
console.log('node -1');
function hello() {
    console.log('node 6');
    a++;
    console.log('node 7');
    console.log('hello');
}
console.log('node 19');
foo = function () {
};
console.log('node 20');
s = 'asdf';
console.log('node 21');
b = {};
console.log('node 22');
b[s] = 1;
console.log('node 23');
console.log(b);
console.log('node 3');