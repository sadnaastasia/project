let a = +prompt('Введите число a', '');
let b = +prompt('Введите число b', '');
min = (a, b) => a < b ? a : b;

alert(min(a, b));
