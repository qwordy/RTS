var a, s, i;
console.log('node6'), a = [
    1,
    2,
    3,
    4
];
console.log('node7'), s = 0;
for (i in a) {
    if (a[i] < 0)
        console.log('node12'), process.exit(1);
    else
        console.log('node13'), s += a[i];
    break;
}
console.log('node15'), console.log(s);
console.log('node16'), hello();
function hello() {
    return;
    console.log('hello');
}
console.log('node17'), foo = function () {
};
console.log('node18'), s = 'asdf';
console.log('node19'), b = {};
console.log('node20'), b[s] = 1;
console.log('node21'), console.log(b);