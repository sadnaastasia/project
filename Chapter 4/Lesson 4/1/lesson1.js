let calculator = {
    read() {
        let a = +prompt('Введите число a', '');
        let b = +prompt('Введите число b', '');

        this.a = a;
        this.b = b;
    },

    sum() {
        return sum = this.a + this.b;
    },

    mul() {
        return mul = calculator.a * calculator.b;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());