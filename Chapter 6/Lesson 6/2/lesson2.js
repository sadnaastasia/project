let sum = function func(a) {
  function f (b) {
    return func(a + b);
  }
  f.toString = function() {
    return a;
  }
  return f;
}

// let sum = function func(a) {
//   let count = a;
//   function f (b) {
//      count += b;
//      return f;
//   }
//   f.toString = function() {
//     return count;
//   }
//   return f;
// }

const result1 = sum(1);
const result2 = result1(2);
const result3 = result2(3);
const result4 = result3(4);
alert(result1(1));
alert(sum(1)(2));  
alert(sum(1)(2)(3));  
alert(sum(5)(-1)(2)); 
alert(sum(6)(-1)(-2)(-3)); 
alert(sum(0)(1)(2)(3)(4)(5)); 