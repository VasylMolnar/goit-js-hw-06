const refs = {
    btnIncrement: document.querySelector("button[data-action='increment']"),
    btnDecrement: document.querySelector("button[data-action='decrement']"),
    counter: document.querySelector('#value'),
};

let num = Number(refs.counter.textContent);

refs.btnIncrement.addEventListener('click', event => {
    num++;
    refs.counter.textContent = num;
});

refs.btnDecrement.addEventListener('click', () => {
    num--;
    refs.counter.textContent = num;
});