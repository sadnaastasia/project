// function randomInteger(min, max) {
//     let random;
//     while (true){
//     random = Math.round(Math.random()*100);
//     if (random >= min && random < max) break;
//     } 
//     return min + random;
//   }
  
//   alert( randomInteger(1, 10) );
//   alert( randomInteger(1, 100) );
//   alert( randomInteger(1, 99) );

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 100) );