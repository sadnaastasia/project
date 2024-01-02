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

// function printList(list) {
//     let list2 = list;
//     while (true) {
//         if (list2 === null) break;
//         console.log(list2.value);
//         list2 = list2.next;
//     }
// }

function printList(list) {
  if (list === null) {
    return null;
  } else {
    console.log(list.value);
    list = list.next;
    printList(list);
  }
}

printList(list);
