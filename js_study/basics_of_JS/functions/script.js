// showMessage();
// showMessage();
// function showMessage() {
//     console.log('Привет мир!');
// }
// showMessage();

// function getSumm() {
//     let numOne, numTwo;

//     function getNumOne() {
//         numOne = 1;
//     }
//     function getNumTwo() {
//         numTwo = 2;
//     }

//     getNumOne();
//     getNumTwo();
    
//     let numSumm = numOne + numTwo;
//     console.log(numSumm);
// }
// getSumm();

// let globalMessage // объявление переменной, которая доступна везде (называется 'внешней')

// function showMessage() {
//     // local переменная
//     let message = 'Сообщение';
//     console.log(message);
// }
// console.log(message); // невозможно тк message определена выше и заключена в func и из вне она недоступна

// function calcSumm(numOne = 0, numTwo = 0) {
//     console.log(`Переменная numOne: ${numOne}`);
//     console.log(`Переменная numTwo: ${numTwo}`);

//     let numSumm = numOne + numTwo;

//     console.log(`Сумма: ${numSumm}`);
// }
// calcSumm(-10, 10);

// function calcSumm(numOne, numTwo, more, less) {
//     let numSumm = numOne + numTwo;

//     if (numSumm > 3) {
//         more();
//     } else {
//         less();
//     }
// }

// function showMoreMessage() {
//     console.log('Больше чем 3');
// }
// function showLessMessage() {
//     console.log('Меньше чем 3');
// }
// calcSumm(1, 5, showMoreMessage, showLessMessage);

// function calcSumm(numOne, numTwo) {
//     let numSumm = numOne + numTwo;
//     // возврат
//     return numSumm;
//     // дальше код не выполняется
// }
// let funcResult = calcSumm(1, 2);
// console.log(`Сумма равна ${funcResult}`);

// function getSumm(numOne, numTwo) {
//     let numSumm = calcSumm(numOne, numTwo);
//     console.log(numSumm);
// }
// function calcSumm(numOne, numTwo) {
//     return numOne + numTwo;
// }
// getSumm(5, 5);

// function calcSumm(numOne, numTwo) {
//     let result = 1;
//     for (let i = 0; i < numTwo; i++) {
//         result *= numOne;
//     }
//     return result;
// }
// console.log(calcSumm(2,3));
    
// function calcSumm(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne;
//     } else {
//         return numOne * calcSumm(numOne, numTwo - 1);
//     }
// }
// console.log(calcSumm(2, 3));

// let showMessage = function () { // функцию вложенную в переменную мы можем вызвать только после объявления, а обычную func можно в любой части программы
//     console.log('Привет!');
// };
// showMessage();

// function getSumm() {
//     let summ = 1 + 2;
//     console.log(summ);
// };
// let someVar = getSumm;
// someVar();
// getSumm();

// 'use strict'
// let getSumm;

// if (2>1) {
//     getSumm = function() {
//         let summ = 1 + 2;
//         console.log(summ);
//     };
// }
// getSumm();

// let getMessage = (text, name) => text + ', ' + name + '!';
// console.log(getMessage('Privet', 'Vasya'));

// let getMessage = (text, name) => {
//     let message =  text + ', ' + name + '!';
//     return message;
// };
// console.log(getMessage('Privet', 'Vasya'));

// setTimeout(функция или код, задержка, параметр, ...параметр);
// setInterval(функция или код, задержка, параметр, ...параметр);

// function showMessage(text, name) {
//     console.log(`${text}, ${name}`);
// }

// setTimeout(showMessage, 3000, 'Privet', 'Vasyan');
// setInterval(showMessage, 500, 'Privet', 'Vasyan'); // вечный повтор

// function showMessage(text, name) {
//     console.log(`${text}, ${name}`);
//     setTimeout(showMessage, 500, text, name);
// }
// setTimeout(showMessage, 1000, 'привет', 'вася');

// function showNumber(num) {
//     console.log(num);
//     if (num < 5) {
//         setTimeout(showNumber, 500, ++num);
//     }
// }
// setTimeout(showNumber, 1000, 1);

// function showNumber(num) {
//     console.log(num);
//     let timeId = setTimeout(showNumber, 1000, ++num);
//     if (num === 6) {
//         clearTimeout(timeId);
//     }
// }
// setTimeout(showNumber, 1000, 1);

// let result = 0;
// function showNumber(num) {
//     result += num;
//     console.log(result);
//     if (result === 5) {
//         clearInterval(timeId);
//     }
// }
// let timeId = setInterval(showNumber, 1000, 1);

// function createMessage(text, name) {
//     return `${text}, ${name}`;
// }
// function showMessage(message) {
//     console.log(message);
// }
// function initMessage(text, name) {
//     showMessage(createMessage(text, name));
// }
// initMessage('Привет', 'Фрилансер');