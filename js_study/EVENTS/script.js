// const btn = document.querySelector('.button');
// btn.onclick = function() {
//     console.log('кликнул!!!');
// }
// function showConsole() {
//     console.log('ты кликнул!');
// }
// btn.onclick = showConsole;

// btn.addEventListener('click', function(e) {
//     console.log('клик.');
// })
// btn.addEventListener('click', function(e) {
//     console.log('клак.')
// })

// function showConsole() {
//     console.log('ты кликнул!');
//     btn.removeEventListener('click', showConsole); // после выполнения кода просто удаляет событие
// }
// btn.addEventListener('click', showConsole);

// const options = {
//     "capture": false, // фаза на которой должен сработать обработчик
//     "once": false, // если T, то после выполнения удалится событие (removeAddEvent())
//     "passive": false // никогда не вызовет preventDefault()
// }
// function showConsole() {
//     console.log('ты клик!');
// }
// btn.addEventListener('click', showConsole, options);

// function showConsole(event) {
//     console.log(event.type);
// console.log(event.target);
// console.log(event.currentTarget);
// console.log(event.clientX);
// console.log(event.clientY);

//}
// btn.addEventListener('click', showConsole);
// btn.addEventListener('mouseenter', showConsole);

// const block = document.querySelector('.block');
// const blockInner = document.querySelector('.block__inner');
// const blockInnerInner = document.querySelector('.block__inner-inner');

// block.addEventListener('click', function (event) {
//     console.log('Клик на Блок!');
//     // console.log(event.target);
// });
// blockInner.addEventListener('click', function (event) {
//     console.log('Клик на Блок второго уровня!');
// }, {"capture": false});
// blockInnerInner.addEventListener('click', function (event) {
//     console.log('Клик на Блок третьего уровня!');
//     event.stopPropagation()
// });

// const btn = document.querySelectorAll('.button');
// function showConsole() {
//     console.log('УРА!!!');
// }
// btn.forEach(buttonItem => {
//     buttonItem.addEventListener('click', showConsole);
// });

// const lsn = document.querySelector('.lesson');
// function showConsole() {
//     console.log('УРА!!!');
// }
// lsn.addEventListener('click', function(event) {
//     if (event.target.closest('.button')) {
//         showConsole();
//     }
// });

// Реши css и будет работать js

const menuBody = document.querySelector('.menu')
document.addEventListener('click', menu)
function menu(event) {
	if (event.target.closest('menu__button')) {
		menuBody.classList.toggle('_active')
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active')
	}
}

// const link = document.querySelector('.link');
// link.addEventListener('click', function (event) {
//     console.log('Наши действия');
//     event.preventDefault(); //именно это команда отменяет выполнение действий браузере (сейчас это переход по ссылке)
// }); // {"passive": true} отменяет превентдефолт)

// const btn = document.querySelector('.button');
// btn.addEventListener('mousedown', function (event) {
//     console.log(`Нажата кнопка ${event.which}`);
// });
// btn.addEventListener('click', function (event) {
//     console.log(`Нажата основная кнопка`);
// });
// btn.addEventListener('contextmenu', function (event) {
//     console.log(`вызвано меню, не основная кнопка`);
// });

// const blockForMouse = document.querySelector('.block-for-mouse');
// blockForMouse.addEventListener('mousemove', function(event){
//     blockForMouse.innerHTML =
//         `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
// });

// blockForMouse.addEventListener('mouseover', function(event) {
//     blockForMouse.innerHTML = 'Курсор над элементом';
//     console.log(event.target);
//     console.log(event.relatedTarget);
// });
// blockForMouse.addEventListener('mouseout', function(event) {
//     blockForMouse.innerHTML = 'Курсор ушел из области элемента';
//     console.log(event.target);
//     console.log(event.relatedTarget);
// });

// blockForMouse.addEventListener('mouseover', function(event) {
//     console.log('Курсор над элементом');
// });
// blockForMouse.addEventListener('mouseout', function(event) {
//     console.log('Курсор вне элемента');
// });

// blockForMouse.addEventListener('mouseenter', function(event) {
//     console.log('Курсор над элементом');
// });
// blockForMouse.addEventListener('mouseleave', function(event) {
//     console.log('Курсор вне элемента');
// });

// const blockForMouse = document.querySelector('.block-for-mouse-1');
// blockForMouse.addEventListener('mouseover', function(event) {
//     let target = event.target.closest('span');
//     if (!target) return;
//     target.style.cssText = `background-color: #77608d`;
// });
// blockForMouse.addEventListener("mouseout", function(event) {
//     let target = event.target.closest('span');
//     if (!target) return;
//     target.style.cssText = ``;
// });

// document.addEventListener('keydown', function(event) {
//     console.log(`нажата клавиша ${event.code} (${event.key})`);
// });
// document.addEventListener('keyup', function(event) {
//     console.log(`отжата клавиша ${event.code} (${event.key})`);
// });

// document.addEventListener('keydown', function (event) {
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//         console.log('Отмена действий!');
//     }
// });

// document.addEventListener('keydown', function(event) {
//     console.log(`Нажата клавиша ${event.code} ${event.key}`);
//     console.log(event.repeat);
// });

// const txtItem = document.querySelector('.textarea__item');
// const txtItemLimit = txtItem.getAttribute('maxlength');
// const txtCounter = document.querySelector('.textarea__counter span');
// txtCounter.innerHTML = txtItemLimit;

// txtItem.addEventListener('keyup', txtSetCounter);
// txtItem.addEventListener('keydown', function (event) {
//     if (event.repeat) txtSetCounter();
// });

// function txtSetCounter() {
//     const txtCounterResult = txtItemLimit - txtItem.value.length;
//     txtCounter.innerHTML = txtCounterResult;
// }

// window.addEventListener('scroll', function (event) {
//     console.log(`${scrollY}px`);
// });

// document.addEventListener('DOMContentLoaded', readyDom);
// window.addEventListener('load', readyLoad);
// function readyDom() {
//     const image = document.querySelector('.image');
//     console.log(document.readyState);
//     console.log('DOM загружен');
//     console.log(image.offsetWidth);
// }
// function readyLoad() {
//     console.log(document.readyState);
//     const image = document.querySelector('.image');
//     console.log('Страница загружена!');
//     console.log(image.offsetWidth);
// }

// window.addEventListener("beforeunload", beforeUnLoad);
// function beforeUnLoad(event) {
//     event.preventDefault();
//     event.returnValue = '';
// }

//сделать форму, которая открывается по кнопке, а закрывается по клику на любое место и escape. Также надо добавить счетчик для формы
