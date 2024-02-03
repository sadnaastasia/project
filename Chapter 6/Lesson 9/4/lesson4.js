function f(a) {
  console.log(a);
}

function throttle(f, ms) {
  let timeout;
  let count = 0;
  let start = Date.now();
  return function () {
    if (count == 0) {
      count++;
      return f.call(this, ...arguments);
    }
    if (Date.now() - start > 999) {
      clearTimeout(timeout);
      start = Date.now();
      return f.call(this, ...arguments);
    } else if (Date.now() - start <= 999) {
      clearTimeout(timeout);
      timeout = setTimeout(() => f.apply(this, arguments), ms - (Date.now() - start));
    }
  };
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

