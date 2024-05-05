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
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

printReverseList(list);
