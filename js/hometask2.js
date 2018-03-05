// var a = prompt('Enter a');
// var b = prompt('Enter b');
//
// if (a>=0 && b>=0) {
//     alert(Number(a)-Number(b));
// } else if (a<0 && b<0) {
//     alert(Number(a)*Number(b));
// } else {
//     alert(Number(a)+Number(b));
// }
var a = parseInt(Math.random() * (15-1)+1);

function f(x) {
    switch (x) {
        case Number(16):
            return;
    }

    document.write(x + ' ');
    f(++x);
}

f(a);

function summ(x,y) {
    z = x + y;
    return z;
}

function diff(x,y) {
    z = x - y;
    return z;
}

function mult(x,y) {
    z = x * y;
    return z;
}

function divis(x,y) {
    z = x / y;
    return z;
}

console.warn('Задание 4:');

console.warn(summ(5,4));
console.warn(diff(5,4));
console.warn(mult(5,4));
console.warn(divis(5,4));

console.warn('Задание 5:');
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'first':
            console.warn(Number(arg1) + Number(arg2));
            break;
        case 'second':
            console.warn(Number(arg1) - Number(arg2));
            break;
        case 'third':
            console.warn(Number(arg1) * Number(arg2));
            break;
    }
}

mathOperation(5,5,'first');
mathOperation(5,5,'second');
mathOperation(5,5,'third');