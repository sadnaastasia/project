for (let a of document.querySelectorAll('a')) {
  if (a.getAttribute('href')) {
    let str = a.getAttribute('href');
    if (str.includes('://') && !str.includes('http://internal.com')) {
      a.style.color = 'orange';
    }
  }
}
