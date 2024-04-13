// let arr = new Array();
// let arr1 = [];
 
// let arrOne = [
//     'Ваня',
//     'Иштван',
//     'Оля',
// ];


// let arrTwo = [
//     'Колян',
//     {
//         type: 'JS',
//         age: 36
//     },
//     true,
//     function() {
//         console.log('Привет, меня зовут Коля');
//     }
// ];

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// let arrOne = [
//     'ваня',
//     'женя',
//     'петя',
// ];
// console.log(arrOne[1]);
// console.log(arrOne[2]);

// console.log(matrix[1][1]);
// console.log(arrTwo[1].age);

// arrTwo[3](); // вызов func из массива

// let arrOne = ['vanya', 'kolya', 'zhenya'];
// console.log(arrOne);
// console.log(arrOne.length);

// let arr = ['vanya', 'kolya', 'zhenya'];
// console.log(arr);
// let arrNew = arr;
// arrNew.length = 2;
// console.log(arr);

// let arr = ['vanya', 'kolya', 'zhenya'];
// arr[0] = 'Коля';
// console.log(arr);
// arr[3] = 'Ваня';
// console.log(arr);

// let arr = ['Ваня', 'Иштван', 'Оля'];
// arr.push('Вася');
// console.log(arr);
// arr.push('Дима', 'Катя');
// console.log(arr);

// let arr = ['Ваня', 'Иштван', 'Оля'];
// arr.shift(); // удаляет элемент из начала списка
// console.log(arr);

// let arr = ['Ваня', 'Иштван', 'Оля'];
// arr.pop(); // del из end list
// console.log(arr);

// let arr = ['Ваня', 'Иштван', 'Оля'];
// arr.unshift('Васян'); // добавляет в начало списка элем
// console.log(arr);

// let arr = ['ваня', 'Иштван', 'Оля'];
// delete arr[1];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);

// let arr = ['ваня', 'Иштван', 'Оля',];
// arr.splice(1, 1);
// console.log(arr);

// let arrOne = ['ваня', 'Иштван', 'Оля',];
// let removed = arrOne.splice(1, 1);
// console.log(removed);

// let arrTwo = ['ваня', 'Иштван', 'Оля',];
// arrTwo.splice(0, 1, 'Коля');
// console.log(arrTwo);

// let arrThree = ['ваня', 'Иштван', 'Оля',];
// arrThree.splice(1, 0, 'Коля', 'Маша');
// console.log(arrThree);

// let arrFour = ['ваня', 'Иштван', 'Оля',];
// arrFour.splice(-1, -1);
// console.log(arrFour); // splice(start, (кол-во элементов, над которыми будет проведена операция), то на что будем заменять)

// let arrOne = ['Ваня', 'Иштван', 'Ольга'];

// let arrTwo = arrOne.slice(1, 2);
// console.log(arrTwo);

// let arrThree = arrOne.slice(-2, -1);
// console.log(arrThree);

// let arrFour = arrOne.slice();
// console.log(arrFour);

// let arrOne = ['Ваня', 'Иштван', 'Оля'];
// let arrTwo = arrOne.concat('Петя');
// console.log(arrTwo);

// let arr = ['kotlin', 'python', 'pascal'];

// console.log(arr.indexOf('kotlin'));
// console.log(arr.indexOf('python', 2)); // indexOf(elem, start_position)
// console.log(arr.indexOf('pascal', 2));

// console.log(arr.includes('kotlin'));
// console.log(arr.includes('python'));
// console.log(arr.includes('pascal', 2));

// let arr = [
//     { name: 'pascal', age: 40 },
//     { name: 'kotlin', age: 10 },
//     { name: 'python', age: 20 },
// ];

// let resultOne = arr.find(function (item, index, array) {
//     return item.age === 40;
// });

// let resultThree = arr.find(item => item.age === 20)
// console.log(resultThree);

// let resultTwo = arr.findIndex(item => item.age === 20)
// console.log(resultTwo);

// let result = arr.filter(function (item, index, array) {
//     return item.age >= 15;
// })
// console.log(result);

// let arrOne = ['Ваня', 'Иштван', 'Оля'];
// console.log(arrOne.sort());

// let arrTwo = [8, 22, 1,];
// console.log(arrTwo.sort());

// console.log('8' > '22');

// function compareNumeric(a, b) {
//     console.log(`Сравниваем ${a} и ${b}`);
//     // if (a > b) return 1;
//     // if (a == b) return 0;  === return a - b 
//     // if (a < b) return -1;

//     return a - b 
// }
// console.log(arrTwo.sort(compareNumeric));

// console.log(arrTwo.sort((a, b) => a - b));

// let arrOne = ['zhenya', 'vanya', 'petya'];
// console.log(arrOne.reverse());

// let arr = ['vanya', 'ishtvan', 'azizbek'];
// let result = arr.map(function (item, index, array) {
//     return item[0];
// });
// console.log(arr);
// console.log(result);

// let str = 'ваня,Иштван,Оля';

// let arr = str.split(',', 2); // split('знак разделителя', кол-во выводимых элем)
// console.log(arr);

// let arr = ['Ваня', 'Иштван', 'Оля',];
// let srt = arr.join(',')
// console.log(srt);

// let arrTwo = ['Ваня', 'Иштван', 'Оля',];
// console.log(String(arr)); // но без разделителя, а по умолчанию ","

// let arr = [];

// if (Array.isArray(arr)) {
//     console.log('Это массив!');
// } else {
//     console.log('Это не массив :(')
// }

// let arr = ['Ваня', 'Иштван', 'Оля',];
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
// }

// for (let arrItem of arr) {
//     console.log(arrItem);
// }

// arr.forEach(function (item, index, array) {
//     console.log(`${item} находится на ${index} позиции в ${array}`);
// });

// arr.forEach((item, index, array) => {
//     console.log(`${item} находится на ${index} позиции в ${array}`);
// });

// let arr = ['Ваня', 'Иштван', 'Оля',];
// arr.forEach(show);

// function show(item) {
//     console.log(item);
// }

// let value = arr.reduce(function(previousValue, item, index, array) {
//     // ...
// }, [initial]);

// let arrOne = [1, 2, 3, 4,];
// let reduceValueOne = arrOne.reduce(function(previousValue, item, index, array) {
//     return item + previousValue;
// }, 0);
// console.log(reduceValueOne);

// let arrTwo = ['Ваня', 'Иштван', 'Оля'];

// let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
//     console.log(previousValue);
//     console.log(item);
//     return `${item}, ${previousValue}`;
// });
// console.log(`Пользователи: ${reduceValueTwo}`);

/* не используй так массивы
let arr = ['ваня', 'иштван', 'оля'];
console.log(typeof arr);

arr.name = 'Коля';
console.log(arr);
*/

// массивы - упорядоченная коллекция данных