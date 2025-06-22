// Задание 1

const string = 'js';

console.log(string);
console.log(string.toUpperCase());


// Задание 2

function searchString(array, string) {

    array.forEach((product) => {
        if (product.toLowerCase().startsWith(string.toLowerCase())) {
            console.log(product);
        }
    })
}

const a = ['Молоко пастеризованное', 'Хлеб бородинский', 'Сыр классический', 'Молоко безлактозное', 'Колбаса вареная', 'Молоко топленое', 'Молоко парное'];
const b = 'молоко';

console.log(a);
searchString(a, b);


// Задание 3

const number = 32.58884;

console.log(`Дано число: ${number}`);
console.log(`Округление до меньшего числа: ${Math.floor(number)}`);
console.log(`Округление до большего числа: ${Math.ceil(number)}`);
console.log(`Округление до ближайшего целого числа: ${Math.round(number)}`);


// Задание 4

const arr = [52, 53, 49, 77, 21, 32];

console.log(arr);
console.log(`Минимальное число: ${Math.min(...arr)}`);
console.log(`Максимальное число: ${Math.max(...arr)}`);


// Задание 5

function randomNumber() {

    let number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
}

randomNumber();


// Задание 6

function arrayRandom(numb) {

    const arr = [];

    for (let i = 0; i < numb / 2; i++) {
        arr.push(Math.floor(Math.random() * numb) + 1)
    }
    console.log(arr);
}

arrayRandom(16);

// Задание 7

function randomNumberFromRange(numb1, numb2) {

    if (numb1 > numb2) {
        console.log(Math.floor(Math.random() * (numb1 - numb2)) + numb2)
    } else {
        console.log(Math.floor(Math.random() * (numb2 - numb1)) + numb1)
    }
}

randomNumberFromRange(8, 20);


// Задание 8

let nowDate8 = new Date();

console.log(nowDate8.toLocaleDateString('ru-Ru'));


// Задание 9

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

const options = { year: 'numeric', month: 'long', day: 'numeric' };

console.log(`Дата через 73 дня: ${currentDate.toLocaleDateString('ru-RU', options)}`);


// Задание 10

function determineDate(nowDate) {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dayWeek = { weekday: 'long' };

    console.log(`${nowDate.toLocaleDateString('ru-RU', options)} - это ${nowDate.toLocaleDateString('ru-RU', dayWeek)}.`);
    console.log(`Время: ${nowDate.toLocaleTimeString('ru-RU')}`);
}

const nowDate10 = new Date();

determineDate(nowDate10);
