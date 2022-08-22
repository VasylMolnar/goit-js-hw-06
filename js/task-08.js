const form = document.querySelector('.login-form');
const elForm = {
    email: '',
    password: '',
};

const formSubmit = form.addEventListener('submit', event => {
    event.preventDefault();
    //console.log(event.currentTarget.elements);
    //console.log(event.currentTarget.elements.email.value);
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value == '' || password.value == '') {
        return window.alert('Всі поля повинні бути заповнені.');
    } 
    
    elForm.email = email.value;
    elForm.password = password.value;
    
    event.currentTarget.reset();
    console.log(`Email: ${elForm.email}, Password: ${elForm.password}`);
});
