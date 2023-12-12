const arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
function findMissingNumber(arr) {
  arr.sort(compareNumeric);
  function compareNumeric(a, b) {
    return a - b;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] - arr[i] > 1)
    return arr[i] + 1;
    }
}

console.log(findMissingNumber(arrayOfIntegers)); // 8