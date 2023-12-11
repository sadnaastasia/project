function sumInput() {
  let inputArray = [];
  while (true) {
    let input = prompt('Введите число');

    if (input === '' || input === null || isNaN(input)) break;

    inputArray.push(+input);
  }
  return inputArray.reduce((sumInput, input) => sumInput + input, 0);
}

alert(sumInput());