function camelize(str) {
  let arr = str.split('-');
  for (let key = 1; key < arr.length; key++) {
    arr[key] = arr[key][0].toUpperCase() + arr[key].slice(1);
  }
  return arr.join('');;
}
alert(camelize("background-color")) //== 'backgroundColor';
alert(camelize("list-style-image")) //== 'listStyleImage';
alert(camelize("-webkit-transition")) //== 'WebkitTransition';