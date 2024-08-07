function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

function spy(func) {
  function f(...args) {
    f.calls.push([...args]);
    return func.call(this, ...args);
  }
  f.calls = [];
  return f;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert('call:' + args.join()); // "call:1,2", "call:4,5"
}