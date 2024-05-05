function compareNumeric(a, b) {
  // if (a > b) return -1;
  // if (a == b) return 0;
  // if (a < b) return 1;
  return b - a;
}
let arr = [5, 2, 1, -10, 8];
arr.sort(compareNumeric);

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10