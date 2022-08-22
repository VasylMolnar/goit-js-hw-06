function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
});
