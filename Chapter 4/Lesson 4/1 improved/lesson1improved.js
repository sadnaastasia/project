function readNumber(promptText) {
    while (true) {
        let numberStr = prompt(promptText);
        if (isNaN(numberStr)) {
            alert("Вы ввели не число!");
            continue;
        }
        if (numberStr === '' || numberStr === null) {
            alert("Введите число!");
            continue;
        }
        return Number(numberStr);
    }
}

let calculator = {
    read() {
        this.a = readNumber("Введите число a");
        this.b = readNumber("Введите число b");
    },
    sum() {
        return sum = this.a + this.b;
    },
    mul() {
        return mul = this.a * this.b;
    }
}


calculator.read();
alert(calculator.sum());
alert(calculator.mul());