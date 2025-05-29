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


document.querySelector('.mini-games__button').addEventListener('click', function () {
    // Определяем мобильное устройство
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Параметры для разных устройств
    const desktopParams = {
        width: 500,
        height: 600,
        resizable: true
    };

    const mobileParams = {
        width: screen.width * 0.95,
        height: screen.height * 0.85,
        resizable: false
    };

    // Выбираем параметры в зависимости от устройства
    const params = isMobile ? mobileParams : desktopParams;

    // Центрирование окна
    const windowLeft = (screen.width - params.width) / 2;
    const windowTop = (screen.height - params.height) / 2;

    // Настройки всплывающего окна
    const windowSettings = `
    width=${params.width},
    height=${params.height},
    left=${windowLeft},
    top=${windowTop},
    menubar=no,
    toolbar=no,
    location=no,
    status=no,
    resizable=${params.resizable},
    scrollbars=no
  `.replace(/\s+/g, '');

    // Для мобильных - открываем в текущей вкладке
    if (isMobile) {
        window.location.href = 'guessTheNumber/index.html';
        return;
    }

    // Для десктопа - открываем popup
    const gameWindow = window.open(
        'guessTheNumber/index.html',
        'GuessTheNumber',
        windowSettings
    );

    if (gameWindow) {
        gameWindow.focus();
    }
});

