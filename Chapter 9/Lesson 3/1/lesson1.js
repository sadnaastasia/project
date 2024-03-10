class Rabbit extends Object {
  constructor(name) {
    super(...arguments);
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); 
alert (typeof Object);