function aclean(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length == arr[j].length) {
        let a = arr[i].toLowerCase().split('').sort().join('');
        let b = arr[j].toLowerCase().split('').sort().join('');
        if (a == b) {
          arr2.push(arr[i]);
          arr.splice(i, 1);
          arr.splice(j - 1, 1);
        }
      }
    }
  }
  return arr2;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"