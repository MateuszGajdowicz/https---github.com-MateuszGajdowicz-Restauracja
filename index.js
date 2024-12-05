const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const imagesContainer = document.querySelector('.images');
let offset = 0;
const images = document.querySelectorAll('.images img');
const totalImages = images.length;

button1.addEventListener('click', () => {
    // Przesuwanie w lewo (z zapętleniem)
    offset = (offset === 0) ? totalImages - 1 : offset - 1;
    updateImagePosition();
});

button2.addEventListener('click', () => {
    // Przesuwanie w prawo (z zapętleniem)
    offset = (offset === totalImages - 1) ? 0 : offset + 1;
    updateImagePosition();
});

function updateImagePosition() {
    const offsetValue = -offset * 420; // 420px to szerokość obrazu + margines
    imagesContainer.style.transform = `translateX(${offsetValue}px)`;
}
