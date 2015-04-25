console.log('node -1');
function hello() {
    console.log('node 4');
    hello();
    console.log('node 5');
    if (0) {
        console.log('node 7');
        a = 0;
    } else {
        console.log('node 8');
        ;
    }
}
console.log('node 9');
if (1) {
    console.log('node 11');
    hello();
    console.log('node 12');
    a = 1;
} else {
    console.log('node 13');
    hello();
    console.log('node 14');
    a = 2;
}