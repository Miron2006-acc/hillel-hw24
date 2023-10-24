"use strict"

function mainFunction(callback) {
    // Запитуємо у користувача два числа
    let number = parseFloat(prompt("Введіть число:"));
    let power = parseInt(prompt("Введіть ступінь:"));

    // Викликаємо callback функцію і передаємо в неї обидва числа
    callback(number, power);
}

// Функція, яка обчислює число в заданій ступені і виводить результат у спливаючому вікні
function calculateAndDisplayResult(number, power) {
    let result = Math.pow(number, power);
    alert("Результат: " + number + "^" + power + " = " + result);
}

// Викликаємо основну функцію, передаючи в неї callback
mainFunction(calculateAndDisplayResult);


// Функція exponentiation приймає два параметри: number та power
function exponentiation(number, power) {
    // Зводимо число в задану ступінь і зберігаємо результат у змінній result
    let result = Math.pow(number, power);

    // Виводимо результат у спливаючому вікні
    alert("Результат: " + number + "^" + power + " = " + result);
}

// Використовуємо цю функцію у mainFunction
function mainFunction(callback) {
    let number = parseFloat(prompt("Введіть число:"));
    let power = parseInt(prompt("Введіть ступінь:"));
    callback(number, power); // Викликаємо callback і передаємо введені числа
}

// Викликаємо основну функцію, передаючи в неї функцію exponentiation як callback
mainFunction(exponentiation);
