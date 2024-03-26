for (let li of document.querySelectorAll('li')) {
  if (li.querySelectorAll('li').length > 0) {
    li.firstChild.textContent = `${li.firstChild.textContent} [${li.querySelectorAll('li').length}]`;
  }
}