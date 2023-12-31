function count(obj) {
  let arr = [];
  for (let key of Object.keys(obj)) {
    arr.push(key);
  }
  return arr.length;
}
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2