function checkSpam(str) {
  if ((str.toUpperCase().includes('XXX')) || (str.toLowerCase().includes('viagra'))) {
    return true;
  }
  return false;
}

alert(checkSpam('buy ViAgRA now'))  //== true
alert(checkSpam('free xxxxx'))  //== true
alert(checkSpam("innocent rabbit"))  //== false