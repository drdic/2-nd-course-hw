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

// document.querySelector('.mini-games__button').addEventListener('click', function() {
//   const popup = window.open('', 'Угадай число', 'width=600,height=600');
//   popup.document.write(`
//     <iframe src="guessTheNumber/index.html" 
//             style="width:100%;height:100%;border:none;"></iframe>
//   `);
// });

document.querySelector('.mini-games__button').addEventListener('click', function () {
    // Параметры окна
    const windowWidth = 700;  // ширина окна с игрой
    const windowHeight = 600; // высота окна

    // Вычисление позиции для центрирования
    const windowLeft = (screen.width - windowWidth) / 2;
    const windowTop = (screen.height - windowHeight) / 2;

    // Настройки всплывающего окна
    const windowSettings = `
    width=${windowWidth},
    height=${windowHeight},
    left=${windowLeft},
    top=${windowTop},
    menubar=no,
    toolbar=no,
    location=no,
    status=no,
    resizable=yes,
    scrollbars=no
  `.replace(/\s+/g, ''); // Удаляем все пробелы

    // Открываем окно с игрой
    const gameWindow = window.open(
        'guessTheNumber/index.html',
        'GuessTheNumber',
        windowSettings
    );

    // Фокусируем окно (если не заблокировано)
    if (gameWindow) {
        gameWindow.focus();
    } else {
        // Альтернатива если всплывающие окна заблокированы
        window.location.href = 'guessTheNumber/index.html';
    }
});
