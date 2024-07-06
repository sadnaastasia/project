function findScrollBottom(elem) {
    setInterval(() => alert(elem.scrollHeight - elem.scrollTop - elem.clientHeight), 3000);
}

findScrollBottom(example);