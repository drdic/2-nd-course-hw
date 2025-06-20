// task1
const getMinNumber = (a, b) => a < b ? a : b;

// task2
function checkEven(number) {
    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

// task3
function printSquare(number) {
    const square = number * number;
    console.log(`Квадрат числа ${number} равен ${square}`);
}

function getSquare(number) {
    return number * number;
}

// task4
function checkAge() {
    const age = prompt('Сколько вам лет?');
    const ageNumber = Number(age);

    if (isNaN(ageNumber)) {
        alert('Вы ввели не число');
    }
    else if (ageNumber < 0) {
        alert('Вы ввели неправильное значение');
    }
    else if (ageNumber >= 0 && ageNumber <= 12) {
        alert('Привет, друг!');
    }
    else {
        alert('Добро пожаловать!');
    }
}

checkAge();

// task5
function multiplyNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  
  if (isNaN(numA) || isNaN(numB)) {
    return 'Одно или оба значения не являются числом';
  }
  
  return numA * numB;
}

// task6
function calculateCube() {
  const userInput = prompt('Пожалуйста, введите число:');
  const number = Number(userInput);
  
  if (isNaN(number)) {
    return 'Переданный параметр не является числом';
  }
  
  const cube = Math.pow(number, 3); // или number ** 3
  return `${number} в кубе равняется ${cube}`;
}

for (let i = 0; i <= 10; i++) {
  console.log(calculateCube(i));
}

// task7
function getArea() {
    return Math.PI * Math.pow(this.radius, 2);
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
};

const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
};