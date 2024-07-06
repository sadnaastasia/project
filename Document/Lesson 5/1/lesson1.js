let element = [];
function func(mainParent) {
    for (let elem of mainParent.firstElementChild.children) {
        element.push(elem);
        if (elem.children.length > 0) {
            for (let elemElse of elem.firstElementChild.children) {
                element.push(elemElse);
                func(elemElse);
            } 
        } else {
            continue;
        }
        element.map(item => alert(item.firstChild.textContent.replace(/\s+/g, '') + ": " + item.querySelectorAll("li").length));
        element = [];
    }  
}
func(document.body);