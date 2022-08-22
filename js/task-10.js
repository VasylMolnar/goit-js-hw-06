function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnDestroy.addEventListener('click', () => {
    boxes.innerHTML = '';
});

btnCreate.addEventListener('click', () => {
    const amount = input.value;
    const items = [];

    for (let i = 1; i <= amount; i++) {
        const createDiv = document.createElement('div');

        createDiv.style.backgroundColor = getRandomHexColor();
        createDiv.style.width = i * 10 + 30 + 'px';
        createDiv.style.height = i * 10 + 30 + 'px';

        items.push(createDiv);
    }

    boxes.append(...items);

    input.value = '';
});
