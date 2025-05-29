// task1
let a = 10;
alert(a);
a = 20;
alert(a);

// task2
let iphoneYear = 2007;
alert(`Год выпуска первого iPhone - ${iphoneYear}`);

// task3
let creator = 'Brendan Eich';
alert(`Имя создателя языка JS - ${creator}`);

// task4
let a = 10, b = 2;
alert (`${a} + ${b} = ${a+b}`);
alert (`${a} - ${b} = ${a-b}`);
alert (`${a} * ${b} = ${a*b}`);
alert (`${a} / ${b} = ${a/b}`);

// task5
let result = 2 ** 5;
alert(`2 ** 5 = ${result}`);

// task6
let a = 9;
let b = 2;
let remainder = a % b;
alert(`Остаток от деления ${a} на ${b} равен ${remainder}`);

// task7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// task8
let age = Number (prompt('Сколько вам лет?'));
alert(age);

// task9
const user = {
    name: 'Иван',
    age: 25,
    isAdmin: true
};

// task10
const userName = prompt('Введите ваше имя') || 'Гость';
alert(`Привет, ${userName}!`);

// additional task
const number = Number(prompt('Загадайте любое число'));
const doubled = number * 2;
alert(`Удвоенное число: ${doubled}`);
const plusTen = doubled + 10;
alert(`После прибавления 10: ${plusTen}`);
const halved = plusTen / 2;
alert(`После деления на 2: ${halved}`);
const finalResult = halved - number;
alert(`После вычитания исходного числа: ${finalResult}`);
alert('Ответ равен 5!'); // Ответ всегда равен 5 - математический фокус