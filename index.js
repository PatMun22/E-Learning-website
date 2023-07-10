
let loginForm = document.querySelector('#open-login-form');
let registerForm = document.querySelector('#open-registration-form');


login.addEventListener('click', () => {
    login.style.display = 'block';
    register.style.display = 'none';
})

register.addEventListener('onClick', () => {
    register.style.display = 'block';
    login.style.display = 'none';
});