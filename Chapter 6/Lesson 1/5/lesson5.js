let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// function printReverseList(list) {
//   let list2 = list;
//   let arr = [];
//   while (true) {
//     if (list2 === null) break;
//     arr.push(list2.value);
//     list2 = list2.next;
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

function printReverseList(list) {
  let arr = [];
  function getArrayOfValues(list) {
    if (list === null) {
      return arr;
    } else {
      arr.push(list.value);
      list = list.next;
      getArrayOfValues(list);
    }
  }
  getArrayOfValues(list);
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list);
