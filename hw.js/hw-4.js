// task1
// с использованием цикла for

for (let i = 0; i < 2; i++) {
  console.log("Привет");
}

// с использованием цикла while

let count = 0;
while (count < 2) {
  console.log("Привет");
  count++;
}

// task2
// с использованием цикла for

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// через while

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// через do...while

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// task3

for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// task4

const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (const name in obj) {
  console.log(`${name} — зарплата ${obj[name]} долларов`);
}

// task5
// с циклом for решение компактнее

let n = 1000;
let num = 0;

for (; n >= 50; num++) {
  n /= 2;
}

console.log("Полученное число:", n);
console.log("Количество итераций:", num);

// task6

const firstFriday = 3; //первая пятница месяца - число
const totalDays = 31; //дней в месяце

console.log(`Первая пятница месяца: ${firstFriday}-е число`);

for (let day = firstFriday; day <= totalDays; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

// продвинутое решение

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

for (let day = 1; day <= 31; day++) {
    const date = new Date(currentYear, currentMonth, day);
    if (date.getDay() === 5 && date.getMonth() === currentMonth) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }
}
