function moreThanOnce (arr) {
  let result;
  cycl : for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result = true; break cycl;
      } result = false; continue;
    }
  }
  return result;
}

nums = [1,2,3,1]
alert(moreThanOnce(nums));
// Output: true
nums = [1,2,3,4]
alert(moreThanOnce(nums));
// Output: false
nums = [1,1,1,3,3,4,3,2,4,2]
alert(moreThanOnce(nums));
// Output: true
