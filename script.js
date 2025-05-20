const menu = document.querySelector('.menu');
let scrollSpeed = 1; // Скорость прокрутки (пикселей за кадр)
let isScrolling = true;

// Дублируем элементы для бесконечной прокрутки
menu.innerHTML += menu.innerHTML;

// Функция анимации
function autoScroll() {
    if (isScrolling) {
        menu.scrollLeft += scrollSpeed;
        
        // Если дошли до середины (конец оригинального контента) — возвращаемся в начало
        if (menu.scrollLeft >= menu.scrollWidth / 2) {
            menu.scrollLeft = 0;
        }
    }
    requestAnimationFrame(autoScroll);
}

// Останавливаем прокрутку при наведении (опционально)
menu.addEventListener('mouseenter', () => isScrolling = false);
menu.addEventListener('mouseleave', () => isScrolling = true);

// Запускаем анимацию
autoScroll();