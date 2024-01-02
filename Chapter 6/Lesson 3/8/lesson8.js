function inBetween(a, b) {
    return function (item) {
        return a <= item && item <= b;
    }
}

function inArray(arr) {
    let arrNew = [];
    return function (item) {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] == item) return item;
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2