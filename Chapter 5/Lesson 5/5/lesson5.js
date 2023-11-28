function copySorted(arr) {
    let arrSorted = [];
    for (let i = 0; i < arr.length; i++) {
        arrSorted[i] = arr[i];
    }
    arrSorted.sort((a, b) => a.localeCompare(b));
    return arrSorted;

}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)