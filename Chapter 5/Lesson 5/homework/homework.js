// function containDuplicate(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function containDuplicate(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return true
    }
    obj[arr[i]] = true
  }
  return false;
}

nums = [1, 2, 3, 1]
alert(containDuplicate(nums));
// Output: true
nums = [1, 2, 3, 4]
alert(containDuplicate(nums));
// Output: false
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
alert(containDuplicate(nums));
// Output: true
