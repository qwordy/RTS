console.log('node -1');
function hello() {
    console.log('node -1');
    function c(x) {
    }
    console.log('node 6');
    a = 1;
}
console.log('node 10');
hello();
console.log('node 11');
b() + hello();
console.log('node -1');
function b() {
    console.log('node 9');
    hello();
}
console.log('node 1');