// function Obj() {
//     alert('Работает!');
// }
// let obj = new Obj();
// let obj2 = new obj.constructor();

function Obj() {
    alert('Не работает!');
}
Obj.prototype = {};
let obj = new Obj();
let obj2 = new obj.constructor();