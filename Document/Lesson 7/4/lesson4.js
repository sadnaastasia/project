let elementText = true;
while (true) {
  elementText = prompt("Введите элемент нашего списка");
  let element = document.createElement('li');
  element.textContent = elementText;
  ul.append(element);
  if (elementText == null ||  elementText == "") {
    element.remove(); break;
  }
}
