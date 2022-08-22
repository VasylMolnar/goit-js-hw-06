const input = document.querySelector('#validation-input');

input.addEventListener('input', event => {
    input.classList.add('invalid');
    if (input.value.length == event.currentTarget.dataset.length) {
        input.classList.replace('invalid', 'valid');
    } else {
        input.classList.add('invalid');
    }
    //console.log(event.currentTarget.dataset.length);
});
