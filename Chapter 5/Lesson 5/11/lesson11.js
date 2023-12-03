// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];
// function getAverageAge() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].age;
//   }
//   return sum / arr.length;
// }

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(users) {
  return arr.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // 28