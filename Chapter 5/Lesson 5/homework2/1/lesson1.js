const arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
function findMissingNumber(arr) {
  let arr2 = arr.sort(compareNumeric);
  function compareNumeric(a, b) {
    return a - b;
  }
  if (arr2[0] == 1) {
    for (let i = 1; i < arr2.length + 1; i++) {
      if (arr2[i] == arr2[arr2.length]) return arr2.length + 1;
      if (arr2[i] != arr2[i-1] + 1) return arr2[i-1] + 1;
    } 
  } return 1;
}

console.log(findMissingNumber(arrayOfIntegers)); // 8
console.log(findMissingNumber([2, 5, 1, 4, 8, 6, 3, 7])); // 9
console.log(findMissingNumber([2, 5, 9, 4, 8, 6, 3, 7])); // 1