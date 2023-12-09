function sumInput() {
  let inputArray = [];
  while (true) {
    let input = prompt('Введите число');

    if (input === '' || input === null || isNaN(input)) break;

    inputArray.push(+input);
  }
  let sumInput = 0;

  for (let input of inputArray) {
    sumInput += input;
  }
  return sumInput;
}

alert(sumInput());