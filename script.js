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