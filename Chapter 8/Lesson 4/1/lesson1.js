let dictionary = Object.create(null);
dictionary.toString = function() {
    return Object.keys(dictionary).join(', ');
}
Object.defineProperty(dictionary, "toString", {
    enumerable: false,
  });
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"