function showNotification({ top = 0, right = 0, className, html }) {
    let div = document.createElement('div');
    div.className = 'notification';
    document.body.prepend(div);
    div.textContent = html;
    div.style.top = top + 'px';
    div.style.right = right + 'px';
    if (className) {
        div.classList.add(className);
      }
    setTimeout(() => div.style.display = "none", 1000);

}

// test it
let i = 1;
setInterval(() => {
    showNotification({
        top: 20,
        right: 50,
        className: "welcome",
        html: 'Hello ' + i++,
    });
}, 2000);