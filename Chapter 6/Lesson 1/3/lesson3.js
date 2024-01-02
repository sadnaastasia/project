function fib(n) {
    let start = Date.now();
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i == 1 || i == 2) {
            (arr[i] = 1); continue;
        }
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    let finish = Date.now();

    return `Result: ${arr[n]}, time spent: ${finish - start} ms`;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
