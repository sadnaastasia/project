let nodeList = document.querySelectorAll('tr:not(:last-child) > td:first-child');
let arrayName = [];
for (let tr of nodeList) {
    arrayName.push(tr.textContent);
}
arrayNameSorted = arrayName.sort((a, b) => a.localeCompare(b));
for (let tr of nodeList) {
    tr.textContent = arrayNameSorted.shift();
}