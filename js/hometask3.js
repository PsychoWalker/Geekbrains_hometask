console.warn('1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100');
var element = document.getElementsByClassName('text')[0];
nextPrime:
    for (var i = 2; i <= 100; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        console.log( i ); // простое
    }

console.warn('2) С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:');
var upper = 0;
do {
    if (upper === 0) {
        console.log(upper + ' - это ноль');
    } else if (upper % 2) {
        console.log(upper + ' – нечетное число');
    } else console.log(upper + ' – четное число');

    upper++;
} while (upper < 11);

console.warn('3) * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.');

for (var i = 0; i < 10; console.log(i++)) {}