const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(el => {
    const listEl = document.createElement('li');
    listEl.textContent = el;
    listEl.classList.add('item');
    return listEl;
});

listIngredients.append(...elements);
