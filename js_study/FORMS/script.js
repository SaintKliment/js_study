// const mainForm = document.forms[0]; // живая коллекция
// const mainForm = document.forms.main; // обращение к name в теге form из html
// const mainForm = document.querySelectorAll('form'); // совсем не живая коллекция, при изменении не довабляет их :(
// console.log(mainForm);

// const mainForm = document.forms.main;
// console.log(mainForm.elements); // вывод всех элементов из формы

// const mainInput = mainForm.elements[0]; 
// console.log(mainInput);

// function myFunction() {
//     document.getElementById('myDropdown').classList.toggle('show');
// }
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName('dropdown-content');
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }