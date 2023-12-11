let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
function transformArrayListToNames(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i].name;
    }
    return result;
}

alert(transformArrayListToNames(users));

// let names = users.map(item => item.name);

// alert(names); // Вася, Петя, Маша
