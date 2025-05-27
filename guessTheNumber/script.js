
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;

const guessInput = document.getElementById('guessInput');
const resultMessage = document.getElementById('resultMessage');
const attempts = document.getElementById('attempts');
const submitGuess = document.getElementById('submitGuess');
const resetGame = document.getElementById('resetGame');

submitGuess.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attemptCount++;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        resultMessage.textContent = 'Введите число от 1 до 100.';
    } else if (userGuess === randomNumber) {
        resultMessage.textContent = `Умничка! Вы угадали число за ${attemptCount} попыток!`;
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Больше';
    } else {
        resultMessage.textContent = 'Меньше';
    }

    attempts.textContent = `Попытки: ${attemptCount}`;
});

resetGame.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    resultMessage.textContent = '';
    attempts.textContent = 'Попытки: 0';
    guessInput.value = '';
});

if ('ontouchstart' in window) {
  document.getElementById('guessInput').setAttribute('inputmode', 'numeric');
  document.getElementById('guessInput').removeAttribute('pattern');
}

window.addEventListener('resize', function() {
  if (window.visualViewport.height < window.screen.height * 0.7) {
    
    document.querySelector('header').style.display = 'none';
  } else {
    document.querySelector('header').style.display = 'block';
  }
});

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function() {
  try {
    // Пытаемся закрыть попап
    if (window.opener && !window.opener.closed) {
      window.opener.postMessage('gameWindowClosed', window.location.origin);
      window.close();
    } else {
      // Альтернативный вариант для мобильных/блокировки попапов
      const mainPageUrl = window.location.pathname.includes('/guessTheNumber/')
        ? '../index.html#game-1'
        : 'index.html#game-1';
      
      window.location.href = mainPageUrl;
    }
  } catch (e) {
    console.error('Ошибка при закрытии:', e);
    window.location.href = 'index.html#game-1';
  }
});

// Обработчик для кнопки "Назад" в мобильном браузере
window.addEventListener('beforeunload', function() {
  if (window.opener) {
    window.opener.postMessage('gameWindowClosed', window.location.origin);
  }
});