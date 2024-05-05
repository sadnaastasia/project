function readNumber() {
    let numberStr;
    while (isNaN(numberStr)) {
        numberStr = prompt('Введите число');
    }
    if (numberStr === '' || numberStr === null) {
        return null;
    }
    return +numberStr;
}
alert(readNumber()); 