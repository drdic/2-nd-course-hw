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


document.getElementById('playGame2').addEventListener('click', function generateTask() {
    let amount = 5;
    const operations = ['+', '-', '*', '/'];

    let userAgree = confirm(`Вам необходимо решить ${amount} примеров на сложение, вычитание, умножение или деление!`);
    if (!userAgree) {
        alert('Приходите ещё!');
        return;
    } else {
        let correctAnswers = 0;

        for (let i = 0; i < amount; i++) {
            let num1 = Math.floor(Math.random() * 10) + 1;
            let num2 = Math.floor(Math.random() * 10) + 1;
            const operation = operations[Math.floor(Math.random() * operations.length)];

            if (operation === '/') {
                const largerNum = Math.max(num1, num2);
                const smallerNum = Math.min(num1, num2);
                num1 = largerNum;
                num2 = smallerNum;
            }


            let userAnswer = prompt(`Решите: ${num1} ${operation} ${num2} = ? (введите 'exit' для выхода)`);

            if (userAnswer.toLowerCase() === 'exit') {
                alert('Вы вышли из игры. Спасибо за участие!');
                return;
            }

            userAnswer = Number(userAnswer);

            let correctAnswer;
            switch (operation) {
                case '+':
                    correctAnswer = num1 + num2;
                    break;
                case '-':
                    correctAnswer = num1 - num2;
                    break;
                case '*':
                    correctAnswer = num1 * num2;
                    break;
                case '/':
                    correctAnswer = (num2 !== 0) ? Number((num1 / num2).toFixed(1)) : 'undefined';
                    break;
            }
            console.log(typeof (userAnswer))
            console.log(typeof (correctAnswer))
            console.log(userAnswer)
            console.log(correctAnswer)

            if (userAnswer === correctAnswer) {
                alert('Это правильный ответ!');
                correctAnswers++;
            } else {
                alert(`Не верно. Правильный ответ: ${correctAnswer}`);
            }
        }
        alert(`Вы ответили правильно на ${correctAnswers} из ${amount} примеров.`);
    }
})


document.getElementById('playGame3').addEventListener('click', function () {

    function reverseString(str) {
        return [...str].reverse().join("");
    }

    const userText = prompt('Введи любое слово и мы его перевернём');

    if (userText === null) {
        alert('До новых встреч)');
    } else if (!userText.trim()) {
        alert("Нет букв(");
    } else {
        alert(`Получилось: ${reverseString(userText)}`);
    }
})


document.getElementById('playGame4').addEventListener('click', function () {

    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красного", "2. Синего", "3. Зеленого"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    function runQuiz() {
        let score = 0;

        for (let i = 0; i < quiz.length; i++) {
            const currentQuestion = quiz[i];
            let questionText = `${currentQuestion.question}\n${currentQuestion.options.join('\n')}`;
            const userAnswer = parseInt(prompt(questionText));

            if (userAnswer === currentQuestion.correctAnswer) {
                score++;
                alert("Правильно!");
            } else {
                alert(`Неправильно! Правильный ответ: ${currentQuestion.correctAnswer}`);
            }
        }

        alert(`Викторина завершена!\nПравильных ответов: ${score} из ${quiz.length}`);
    }

    runQuiz();
})


document.getElementById('playGame5').addEventListener('click', function () {

    const userChoice = prompt('Выберите: камень, ножницы или бумага')?.toLowerCase();

    if (userChoice === null) {
        alert('До свидания!');
    } else if (!['камень', 'ножницы', 'бумага'].includes(userChoice)) {
        alert('Ошибка: нужно выбрать "камень", "ножницы" или "бумага"');
    } else {
        const choices = ['камень', 'ножницы', 'бумага'];
        const compChoice = choices[Math.floor(Math.random() * choices.length)];

        let result;
        if (userChoice === compChoice) {
            result = 'НИЧЬЯ';
        } else if (
            (userChoice === 'камень' && compChoice === 'ножницы') ||
            (userChoice === 'ножницы' && compChoice === 'бумага') ||
            (userChoice === 'бумага' && compChoice === 'камень')
        ) {
            result = 'ПОБЕДА';
        } else {
            result = 'ПОРАЖЕНИЕ';
        }

        alert(`${result}. У вас ${userChoice}, у компьютера ${compChoice}`);
    }
})
