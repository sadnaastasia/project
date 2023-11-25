function sumInput() {
  let inputArray = [];
  while (true) {
    let input = prompt('Введите число');
    if (input === '' || input === null || isNaN(input)) {
      let sumInput = 0;
      for (let key = 0; key < inputArray.length; key++) {
        sumInput += Number(inputArray[key]);
      } return sumInput;
    } inputArray.push(input);
  }
}

alert(sumInput());