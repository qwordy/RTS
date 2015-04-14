function hello() {
    console.log('node4'), hello();
    if (0)
        console.log('node7'), a = 0;
    else
        console.log('node8');
}
if (1) {
    console.log('node11'), hello();
    console.log('node12'), a = 1;
} else {
    console.log('node13'), hello();
    console.log('node14'), a = 2;
}