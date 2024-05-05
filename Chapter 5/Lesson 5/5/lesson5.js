function copySorted(arr) {
    let arrSorted = [];
    arrSorted = arr.slice();
    arrSorted.sort((a, b) => a.localeCompare(b));
    return arrSorted;

}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)