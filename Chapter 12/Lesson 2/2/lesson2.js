function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('value'), ms);
  });
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
