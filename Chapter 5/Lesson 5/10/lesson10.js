let arr = [1, 2, 3];
function shuffle(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = Math.ceil(Math.random() * (arr.length - i));
    if (j == 0) [array[i], array[j]] = [array[j], array[i]];
    [array[i], array[(array.length - j)]] = [array[(array.length - j)], array[i]];
  }
  alert(arr);
}
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);


// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// alert(shuffle(arr));
// alert(shuffle(arr));
// alert(shuffle(arr));
// alert(shuffle(arr));