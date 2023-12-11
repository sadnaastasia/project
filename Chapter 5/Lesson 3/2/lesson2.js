function checkSpam(str) {
  return str.toUpperCase().includes('XXX') || str.toLowerCase().includes('viagra');
}

alert(checkSpam('buy ViAgRA now'))  //== true
alert(checkSpam('free xxxxx'))  //== true
alert(checkSpam("innocent rabbit"))  //== false