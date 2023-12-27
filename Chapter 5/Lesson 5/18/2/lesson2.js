let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  if (Object.keys(salaries).length === 0)
    return null;
  let arr = Object.entries(salaries);
  let result = arr.reduce((maxSalary, salary) => {
    if (maxSalary[1] < salary[1]) {
      return [maxSalary] = salary;
    } return maxSalary;
  }, [0, 0])
  return result[0];
}

topSalary(salaries);