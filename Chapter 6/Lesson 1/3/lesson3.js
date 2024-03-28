function fib(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i == 1 || i == 2) {
            (arr[i] = 1); continue;
        }
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

function bench(f) {
    let start = Date.now();
    return function (n) {
        let result = f(n);
        alert(result);
        let finish = Date.now();
        return `Time spent: ${finish - start} ms`;
    }
}

fib = bench(fib);

// function fib(n) {
//     if (n == 1 || n == 2) {
//         return 1;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
