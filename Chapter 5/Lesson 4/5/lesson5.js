function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;
    for (let number of arr) {
        sum += number;
        maxSum = Math.max(sum, maxSum);
        if (number < 0) sum = 0;
    } return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0