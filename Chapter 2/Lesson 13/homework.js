let sum = 0;

while (true) {
let number = prompt ('Введите число');

    if (number === '' || number === null) break; 
    if (isNaN(number)) {
        alert('Это не число!'); continue;
    }
    sum += +number;
    
}   
alert (sum);