console.log('node -1');
function ismail(mail) {
    console.log('node 4');
    return new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(mail);
}
console.log('node 5');
ismail('1@');
console.log('node 1');