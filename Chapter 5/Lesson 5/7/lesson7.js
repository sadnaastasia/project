let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
let result = [];
function transformator() {
    for (let i = 0; i < users.length; i++) {
        result[i] = users[i].name;
    }
    return result;
}
transformator();

let names = result;

alert(names); // Вася, Петя, Маша
