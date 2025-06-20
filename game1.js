document.getElementById('playGame1').addEventListener('click', function () {

    const predictedNumber = Math.floor(Math.random() * 100) + 1;
    userNumber = 0;
    while (userNumber !== predictedNumber) {

        const userNumber = Number(prompt('Попробуй угадать число от 1 до 100'));

        if (userNumber === 0) {
            break;
        } else if (userNumber < 1 || userNumber > 100) {
            alert('От 1 до 100, подумай!');
        } else if (userNumber === predictedNumber) {
            alert(`Отлично! Молодец! Загаданное число: ${predictedNumber}.`);
            break;
        } else if (userNumber < predictedNumber) {
            alert('Загаданное число больше)');
        } else if (userNumber > predictedNumber) {
            alert('Загаданное число меньше)');
        } else {
            alert('Ошибка');
            break;
        }
    }
})
