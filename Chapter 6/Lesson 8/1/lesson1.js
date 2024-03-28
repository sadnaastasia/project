// function printNumbers(from, to) {
//   let current = from;
//   timerid = setInterval(function () {
//     alert(current);
//     if (current == to) clearInterval(timerid);
//     current++;
//   }, 1000);
// }

function printNumbers(from, to) {
  let current = from;
  setTimeout(function func() {
    alert(current);
    if (current < to) setTimeout(func, 1000);
    current++;
  }, 1000);
}

printNumbers(1, 10);
