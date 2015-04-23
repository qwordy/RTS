console.log('node 2');
for (i in a) {
    console.log('node 4');
    ;
}
console.log('node 5');
for (i in a) {
}
console.log('node 7');
for (i in a) {
    console.log('node 9');
    a;
    console.log('node 10');
    b;
}
console.log('node 11');
for (i in a) {
    console.log('node 13');
    b;
}
console.log('node 14');
for (i in a) {
    console.log('node 16');
    for (i in a) {
        console.log('node 18');
        ;
    }
    console.log('node 19');
    var a;
    console.log('node 20');
    a;
    console.log('node 21');
    break;
}