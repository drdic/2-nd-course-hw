// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3]
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10
// После вывода значения 10в консоль цикл должен прекратить свою работу.
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break;
  }
}


// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3] Найдите индекс значения 4 в этом массиве.
const arr = [1, 5, 4, 10, 0, 3];
const index = arr.indexOf(4);
console.log(index);


// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20]
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').
const numbers = [1, 3, 5, 10, 20];
const result = numbers.join(' ');
console.log(result);


// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
const size = 3;
const matrix = [];

for (let i = 0; i < size; i++) {
  const row = [];
  for (let j = 0; j < size; j++) {
    row.push(1);
  }
  matrix.push(row);
}
console.log(matrix);


// Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.
const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);


// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5]
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.
const arr = [9, 8, 7, 'a', 6, 5];
const sortedArr = arr.sort();
const filteredArr = sortedArr.filter(item => typeof item === 'number');
console.log(filteredArr);


// Задание 7
// Дан массив: [9, 8, 7, 6, 5] Попросите пользователя угадать число с помощью метода prompt
// Если значение, которое ввел пользователь, есть в массиве, выведите в alert 
// «Угадал», в противном случае — «Не угадал».
const numbers = [9, 8, 7, 6, 5];
const userGuess = prompt("Угадайте число от 5 до 9");
alert(numbers.includes(Number(userGuess)) ? "Угадал" : "Не угадал");


// Задание 8
// Дана строка: 'abcdef' Выведите в консоль 'fedcba'
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);


// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]
const qw = [[1, 2, 3], [4, 5, 6]];
const newqw = [];

for (let elem of qw) {
    for (item of elem) {
        newqw.push(item)
    }
}

console.log(newqw);


// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10).Переберите его с помощью цикла for.
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
const array1 = [3, 7, 1, 9, 4, 6, -2, 8, 5, 10];
for (let i = 0; i < array1.length - 1; i++) {
    console.log(array1[i] + array1[i + 1])
}


// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.
const squareArray = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr.map(item => item ** 2);
}

const array1 = [1, 2, 3, 4, 5];
console.log(squareArray(array1));


// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
const string = ['wswswv', 'rerer', 'dadactttzzzz', 'dadadaq']
const getLenghtWords = (string) => string.map(item => item.length)
console.log(getLenghtWords(string))


// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.
const onlyNegative = (x) => x.filter(item => item < 0) 
console.log(onlyNegative(array1))


// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив. 
// Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.
const originalArray = Array.from({ length: 10 }, () => Math.random() * 10);

const roundedArray = originalArray.map(num => Math.floor(num));
const evenArray = roundedArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", roundedArray);
console.log("Массив с четными значениями:", evenArray);


// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random()
// в диапазоне от 1 до 10. Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.
const array2 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const sum = array2.reduce((acc, num) => acc + num, 0);
const average = sum / array2.length;

console.log("Сгенерированный массив:", array2);
console.log("Среднее арифметическое:", average.toFixed(1));
