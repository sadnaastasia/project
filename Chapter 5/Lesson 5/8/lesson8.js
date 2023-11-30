let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

// let result = [];
// function transformator() {
//   for (let i = 0; i < users.length; i++) {
//     for (let key in users[i]) {
//       result[i] = {};
//       result[i].fullName = users[i].name + ' ' + users[i].surname;
//       result[i].id = users[i].id;
//       // delete users[i].name;
//       // delete users[i].surname;
//     }
//   }
//   return result
// }

// transformator();
// let usersMapped = result;

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
alert( usersMapped[1].id )
alert( usersMapped[1].fullName )
alert( usersMapped[2].id )
alert( usersMapped[2].fullName )
