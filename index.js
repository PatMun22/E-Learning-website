
let login = document.querySelector('.login');
let register = document.querySelector('.register');

login.addEventListener('onClick', () => {
    login.style.display = 'block';
    register.style.display = 'none';
})

register.addEventListener('onClick', () => {
    register.style.display = 'block';
    login.style.display = 'none';
});