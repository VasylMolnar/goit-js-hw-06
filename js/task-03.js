const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryEl = document.querySelector('.gallery');

const elements = images.map(el => {
    return `<li class="images-item">
        <img class="image"
        src="${el.url}" 
        alt="${el.alt}">
        </li>`;
});

galleryEl.insertAdjacentHTML('afterbegin', elements);

/*
const elements = images.map(el => {
    const listEl = document.createElement('li');
    listEl.classList.add('images-item');

    const img = document.createElement('img');
    img.classList.add('image');
    img.src = el.url;
    img.alt = el.alt;

    listEl.appendChild(img);

    return listEl;
});

galleryEl.append(...elements);
elements.forEach(a => console.log(a));
*/