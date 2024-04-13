// let userInfo_ = new Object(); // конструктор объекта
// let userInfo = {}; // литерал объекта

// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     "likes javascript": true,
// };
// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo['name']);
// console.log(userInfo["likes javascript"]);

// let firstPart = 'likes ';
// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     [firstPart + "javascript"]: true,
// };
// console.log(userInfo["likes javascript"]);

// let firstPart = 'likes';
// let userInfo = {
//     name: "vasya",
//     age: 20,
//     [firstPart]: true,
// };
// console.log(userInfo[firstPart]);

// let key = 'name';
// console.log(userInfo[key]);

// let id = Symbol('id');
// let userInfo = {
//     let: "vasya",
//     for: 30,
//     0: 'petya',
//     [id]: 'Некое значение',
// };
// console.log(userInfo);
// console.log(userInfo.let);
// console.log(userInfo.for);
// console.log(userInfo['0']);
// console.log(userInfo[0]);

// let userInfo = {
//     name: 'Vasya',
//     age: 18,
//     address: {
//         city: 'Moscow',
//         street: 'Tverskaya'
//     }
// };
// console.log(userInfo);
// console.log(userInfo.address);
// console.log(userInfo.address.city);

// function makeUserInfo(name, surname, age) {
//     return {
//         name: name, // name, === name: name,
//         surname, // surname: surname,
//         age: age, // age, === age: age,
//         'likes javascript': true,

//     };
// }
// let user = makeUserInfo('Vasya', 'Pupkin', 30);
// console.log(user);

// let userInfo = {
//     name: 'Vasya',
// };
// console.log(userInfo);

// userInfo.age = 30;
// console.log(userInfo);

// userInfo['likes javascript'] = true;
// console.log(userInfo);

// userInfo.address = {
//     city: 'Moscow',
//     street: 'Pushkinskaya',
// };
// console.log(userInfo);

// let userInfo = {
//     name: 'vasya',
//     age: 20,
//     'likes javascript': true,
// };
// console.log(userInfo);
// delete userInfo.age;
// console.log(userInfo);
// delete userInfo['likes javascript'];
// console.log(userInfo);

// let userInfo = {
//     name: 'vasya',
//     age: 20,
// };
// console.log(userInfo);

// userInfo.age = 10;
// console.log(userInfo);

// const userInfo = {
//     name: 'vasya',
//     age: 20,
// };
// console.log(userInfo);

// userInfo.age = 10;
// console.log(userInfo);

// let userInfo = {
//     name: 'petya',
//     age: 40,
// };
// console.log(userInfo);

// let user = userInfo;
// console.log(user);
// user.age = 18;
// console.log(userInfo); // дубликат ключа, но не новый объект

// Object.assign(куда(объект), что(свойство 1), что(свойство 2));

// let userInfo = {
//     name: 'petya',
//     age: 20,
// };
// let user = Object.assign({}, userInfo);
// user.age = 18;
// console.log(userInfo);
// console.log(user);

// let userInfo = {
//     name: 'vasya',
//     age: 10,
// };
// Object.assign(userInfo, { ['likes javascript']: true, city: 'Moscow' });
// console.log(userInfo);

// let userInfo = {
//     name: 'petya',
//     age: 40,
// };
// if (userInfo.age) {
//     console.log(userInfo.age);
// } else {
//     console.log(`Данная перменная отсутствует в Объекте ${userInfo}`)
// };

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     address: {
//         city: 'Moscow',
//         street: 'Chehovskaya',
//     }
// };

// console.log(userInfo.address.city);
// console.log(userInfo?.address?.city); 

// if ('city' in userInfo.address) {
//     console.log(userInfo.address.city);
// } else {
//     console.log('Значения не существует!');
// };

// let userInfo = {
//     name: undefined,
// };

// if (userInfo.name) /* false */ {
//     console.log(userInfo.name);
// }

// if ('name' in userInfo) /* true */ {
//     console.log(userInfo.name);
// }

// let userInfo = {
//     name: 'petya',
//     age: 20,
//     address: {
//         city: 'Yalta',
//         street: 'Kievskaya',
//     }
// };

// for (let key in userInfo) {
//     console.log(key); // имена ключей
//     console.log(userInfo[key]); // вывод значения ключей
// };

// for (let key in userInfo.address) { 
//     console.log(key), // ключей имена
//     console.log(userInfo.address[key]); // значения ключей
// }

// let userInfo = {
//     name: 'vasya',
//     age: 18,
//     address: {
//         city: 'Moscow',
//         street: 'Rozovaya',
//     },
//     showInfo: function() {
//         console.log(`${userInfo.name}, ${userInfo.age} years old. Address: town is ${userInfo.address.city} and street is ${userInfo.address.street}`);
//         console.log(`${this.name}, ${this.age} years old. Address: town is ${this.address.city} and street is ${this.address.street}`); // this - ссылка на текущий объект
//     }
// }
// userInfo.showInfo();

// function UserInfo(name) { // func конструктор всегда называется с Большой буквы не lowerCamelCase, а BigCamelCase
//     this.name = name;
//     this.age = 30;
//     // return this; // выполняется автоматически
// }
// console.log(new UserInfo('Vasya'));
// console.log(new UserInfo('Lena'));