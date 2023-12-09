let arr = [1, 2, 3];
function shuffle(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let j = Math.ceil(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    alert(arr);
  }
  shuffle(arr);
  shuffle(arr);
  shuffle(arr);
  shuffle(arr);