const arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
// function findMissingNumber(arr) {
//   let sum = arr.reduce((sum, value) => sum += value);
//   let sumOfNIntegers = 0
//   for (let i = 1; i < arr.length + 2; i++) {
//     sumOfNIntegers += i;
//   }
//   return sumOfNIntegers - sum
// }

function findMissingNumber(arr) {
  let sum = arr.reduce((sum, value) => sum += value);
  let sumN = (1 + Math.max(...arr)) * (arr.length + 1) / 2;
  arr.sort((a, b) => a - b);
  return ((1 + arr.length * (arr[1] - arr[0])) != arr[arr.length - 1])
    ? (1 + arr.length * (arr[1] - arr[0]))
    : (sumN - sum);
}

console.log(findMissingNumber(arrayOfIntegers)); // 8
console.log(findMissingNumber([2, 5, 1, 4, 8, 6, 3, 7])); // 9
console.log(findMissingNumber([2, 5, 9, 4, 8, 6, 3, 7])); // 1
console.log(findMissingNumber([2, 1, 4, 5, 3])); // 6
console.log(findMissingNumber([2, 5, 1, 4, 3, 7, 6])); // 8