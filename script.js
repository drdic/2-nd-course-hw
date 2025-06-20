const menu = document.querySelector('.menu');

let scrollSpeed = 1;
let isScrolling = true;

menu.innerHTML += menu.innerHTML;

function autoScroll() {
    if (isScrolling) {
        menu.scrollLeft += scrollSpeed;
        
        if (menu.scrollLeft >= menu.scrollWidth / 2) {
            menu.scrollLeft = 0;
        }
    }
    requestAnimationFrame(autoScroll);
}
// Останавливаем скроллинг при наведении

// menu.addEventListener('mouseenter', () => isScrolling = false);
// menu.addEventListener('mouseleave', () => isScrolling = true);

autoScroll();


document.getElementById('playGame1').addEventListener('click', function () {

    const predictedNumber = Math.floor(Math.random() * 100) + 1;
    userNumber = 0;
    while (userNumber !== predictedNumber) {

        const userNumber = Number(prompt('Попробуй угадать число от 1 до 100'));

        if (userNumber === 0) {
            break;
        } else if (userNumber < 1 || userNumber > 100) {
            alert('Введи число 1 до 100.');
        } else if (userNumber === predictedNumber) {
            alert(`Отлично, молодец! Загаданное число: ${predictedNumber}.`);
            break;
        } else if (userNumber < predictedNumber) {
            alert('Загаданное число больше, попробуй ещё.');
        } else if (userNumber > predictedNumber) {
            alert('Загаданное число меньше, попробуй ещё.');
        } else {
            alert('Ошибка');
            break;
        }
    }
})


document.getElementById('playGame2').addEventListener('click', function () {

    const operators = ['+', '-', '*', '/'];
    const funcOper = operators[Math.floor((Math.random() * operators.length))];
    let numb1 = Math.floor(Math.random() * 10) + 1;
    let numb2 = Math.floor(Math.random() * 10) + 1;

    switch (funcOper) {
        case '+':
            userAnswer = prompt(`Решите: ${numb1} + ${numb2} = ?`);
            result = numb1 + numb2;
            break;
        case '-':
            userAnswer = prompt(`Решите: ${numb1} - ${numb2} = ?`);
            result = numb1 - numb2;
            break;
        case '*':
            userAnswer = prompt(`Решите: ${numb1} x ${numb2} = ?`);
            result = numb1 * numb2;
            break;
        case '/':
            if (numb1 > numb2) {
                userAnswer = prompt(`Решите: ${numb1} : ${numb2} = ? и округлите ответ до целого числа`);
                result = numb1 / numb2;
                break;
            } else {
                userAnswer = prompt(`Решите: ${numb2} : ${numb1} = ? и округлите ответ до целого числа`);
                result = numb2 / numb1;
                break;
            };
        default:
            alert("Ошибка");
    }

    if (Number(userAnswer) === Math.round(result)) {
        alert("Верно");
    } else if (userAnswer === null) {
        alert("До новых встреч!");
    } else if (userAnswer === "") {
        alert("Нет ответа(");
    } else {
        alert("Неверно");
    }
})
