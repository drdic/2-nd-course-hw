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
