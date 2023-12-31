let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  if (Object.keys(salaries).length === 0)
    return null;
  let arrayOfPersonsAndSalaries = Object.entries(salaries);
  let result = arrayOfPersonsAndSalaries.reduce((arrayOfPersonWithMaxSalaryAndHisSalary, salary) => {
    if (arrayOfPersonWithMaxSalaryAndHisSalary[1] < salary[1]) {
      return [arrayOfPersonWithMaxSalaryAndHisSalary] = salary;
    } return arrayOfPersonWithMaxSalaryAndHisSalary;
  }, [0, 0])
  return result[0];
}

topSalary(salaries);