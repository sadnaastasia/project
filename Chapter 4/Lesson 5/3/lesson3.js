function Accumulator(startingValue) {
    this.value = startingValue,
        this.read = function () {
            while (true) {
                let inPutStr = prompt('Введите число', '');
                if (isNaN(inPutStr)) {
                    alert('Вы ввели не число!'); continue;
                }
                if (inPutStr === '' || inPutStr === null) {
                    alert('Введите число!'); continue;
                }
                return this.value += (Number(inPutStr));
            }
        }
}
let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений