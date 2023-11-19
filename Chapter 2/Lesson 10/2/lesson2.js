/* Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

let a = prompt('Введите число a!', '');
a = Number(a);
let b = prompt('Введите число b!', '');
b = Number(b);
let result = (a + b < 4) ? 'Мало' :
  'Много';

alert(result);
