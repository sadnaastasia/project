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
function Calculator() {

    this.read = function () {
        this.a = readNumber("Введите число a");
        this.b = readNumber("Введите число b");
    },

        this.sum = function () {
            return sum = this.a + this.b;

        },

        this.mul = function () {
            return mul = this.a * this.b;

        }

}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());