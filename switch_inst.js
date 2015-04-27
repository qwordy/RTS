console.log('node 2');
a = 1;
console.log('node 3');
switch (a) {
case 0:
case 1:
    console.log('node 7');
    console.log(1);
    console.log('node 8');
    break;
    a = 2;
default:
    console.log('node 10');
    console.log(0);
}
console.log('node 1');