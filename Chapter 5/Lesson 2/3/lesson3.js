function readNumber() {
    let numberStr;
    while (isNaN(numberStr)) {
        numberStr = prompt('Введите число','0');
        if (numberStr === '' || numberStr === null){
            return null; break;
        }
    }
    return numberStr;
}
alert(readNumber()); 