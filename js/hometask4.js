function toObject(num) {

    var arrayNumber = num.split('');
    while (arrayNumber.length < 3)
    {
        arrayNumber.unshift(0);
    }
    var objectNumber = {};
    if (arrayNumber.length > 3)
    {
        return null;
    }
    else
    {
        objectNumber['сотни'] = +arrayNumber[0];
        objectNumber['десятки'] = +arrayNumber[1];
        objectNumber['единицы'] = +arrayNumber[2];
        return objectNumber;
    }
}
var number = prompt("Введите число");
var obj = toObject(number);
if (obj == null)
{
    console.warn("Здесь ничего нет!");
}
else
{
    console.warn(obj);
}