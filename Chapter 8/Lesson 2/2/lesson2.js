// function Obj() {
//     alert('Работает!');
// }
// Obj.prototype = {};
// let obj = new Obj();
// let obj2 = new obj.constructor();

function Obj() {
    alert('Не работает!');
}
User.prototype = {};
let obj = new Obj();
let obj2 = new obj.constructor();