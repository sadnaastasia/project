let x = +prompt('Введите число a', '');
let n = +prompt('Введите число b', '');
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    alert(result);
}
pow(x, n);
