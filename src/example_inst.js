console.log('node 2');
var s, a;
console.log('node 3');
s = 0;
console.log('node 4');
a = 2;
console.log('node 5');
if (s > 0) {
    console.log('node 7');
    s = 1;
} else {
    console.log('node 8');
    ;
}
console.log('node 9');
if (s > 0) {
    console.log('node 11');
    s += a;
} else {
    console.log('node 12');
    s += 1;
    console.log('node 13');
    s--;
}
console.log('node 1');