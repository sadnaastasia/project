function Obj() {
    alert('Работает!');
}
Obj.prototype = {};
let obj = new Obj();
let obj2 = new obj.constructor();