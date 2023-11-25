function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;
    for (let key of arr) {
        sum += key;
        maxSum = Math.max(sum, maxSum);
        if (key < 0) sum = 0;
    } return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9]));