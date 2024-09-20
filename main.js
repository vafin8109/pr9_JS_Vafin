"use strict";

let form = document.forms.newform;
let nameInput = form.elements.name;
let yearInput = form.elements.year;

form.addEventListener('submit', userAge);

let flag = true;

function userAge(event) {

    event.preventDefault();
    nameError.innerHTML = '';
    yearError.innerHTML = '';
    flag = true;

    if (nameInput.classList.contains('error__input')) {
        nameInput.classList.remove('error__input');
    }
    if (yearInput.classList.contains('error__input')) {
        yearInput.classList.remove('error__input');
    }

    if (!nameInput.value) {
        nameError.innerHTML = 'Введите имя';
        nameInput.classList.add('error__input');
        flag = false;
    } else if (nameInput.value.length <= 2) {
        nameError.innerHTML = 'Имя должно быть короче 2 символов';
        nameInput.classList.add('error__input');
        flag = false;
    }

    if (!yearInput.value) {
        yearError.innerHTML = 'Введите год рождения';
        yearInput.classList.add('error__input');
        flag = false;
    } else if (yearInput.value.length != 4) {
        yearError.innerHTML = 'Год рождения должен состоять из 4 символов';
        yearInput.classList.add('error__input');
        flag = false;
    } else if (2024 - yearInput.value < 18) {
        yearError.innerHTML = 'Вам нет 18!';
        yearInput.classList.add('error__input');
        flag = false;
    }

    if (flag == true) {
        alert("Ошибки отсутсвуют")
    }
}