let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let container = document.getElementById('container');
// function createTree(container, data) {
//   let json = JSON.stringify(data);
//   json = json.split('":{"').join('<ul><li>');
//   json = json.split(':{}}').join(':{}}</ul>');
//   json = json.split(',').join('<li>');
//   json = json.split('{}').join('</li>');
//   json = json.split('{').join('<li>');
//   json = json.split('}').join('</li>');
//   json = json.split('"').join('');
//   json = json.split(':').join('');
//   container.innerHTML = json;
// }

function createTree(container, data) {
  if (Object.keys(data).length != 0) {
    for (let arr of Object.entries(data)) {
      let li = document.createElement('li');
      li.innerHTML = arr[0];
      container.append(li);
      let ul;
      if (Object.keys(arr[1]).length != 0) {
        ul = document.createElement('ul');
        li.append(ul);
      }
      createTree(ul, arr[1]);
    }
  }
}

createTree(container, data); 