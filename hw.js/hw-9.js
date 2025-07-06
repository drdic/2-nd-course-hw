// Задание 1. Скрытие и показ текста
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.

const titleEl = document.querySelector(".heading");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener('click', () => {
    if (titleEl.style.display === 'none') {
        titleEl.style.display = 'block';
    } else {
        titleEl.style.display = 'none';
    }
})


// Задание 2. Изменение стиля элемента
// Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>.

const btnColorEl = document.querySelector('.btn-Color');
const textColorEl = document.querySelector('.text-Color');

btnColorEl.addEventListener('click', () => {
    if (textColorEl.style.color === 'red') {
        textColorEl.style.color = 'black';
    } else {
        textColorEl.style.color = 'red';
    }
})


// Задание 3. Динамическое изменение текста
// Задача: создайте кнопку, которая меняет текст в заголовке <h1>.

const btnTextEl = document.querySelector('.btn-Text');
const headingTextEl = document.querySelector('.heading-Text');

btnTextEl.addEventListener('click', () => {
    headingTextEl.textContent = 'Привет, мир!';
})


// Задание 4. Поиск и изменение элементов по классу
// Задача: найдите все элементы с классом description
// и измените их текст на «Измененный текст».

const allDescription = document.querySelectorAll('.description');

allDescription.forEach(description => {
    description.textContent = 'Изменённый текст';
})


// Задание 5. Работа с querySelectorAll
// Задача: создайте несколько элементов <p> с разными классами. Используйте 
// querySelectorAll, чтобы найти все элементы с классом description и изменить их текст.

const allDescription1 = document.querySelectorAll('.description1');

allDescription1.forEach(description => {
    description.textContent = 'Новый текст';
})


// Задание 6. Добавление нового элемента в DOM
// Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.

const btnNewTextEl = document.querySelector('.btn-New-Text');
const contentEl = document.querySelector('.content');

btnNewTextEl.addEventListener('click', () => {
    const paragraphEl = document.createElement('p');
    paragraphEl.textContent = 'Новый абзац';
    paragraphEl.classList.add('paragraph');
    contentEl.appendChild(paragraphEl);
})


// Задание 7. Удаление элемента
// Задача: создайте кнопку, которая удаляет первый элемент <p> с классом description.

const btnDeletTextEl = document.querySelector('.btn-Delete-Text');

btnDeletTextEl.addEventListener('click', () => {
    const descriptionEl = document.querySelector('.Description');
    if (descriptionEl) {
        descriptionEl.remove();
    }
})
