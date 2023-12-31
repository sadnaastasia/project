function sumSalaries(obj) {
  let sum = 0;
  for (let salary of Object.values(obj)) {
    sum += salary;
  }
  return sum;
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
