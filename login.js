//Sign-up form
let form2 = document.querySelector('#sign-up-form');
let regEmail = document.querySelector('#email1');
let regName = document.querySelector('#name');
let regPassword = document.querySelector('#password1');
let confirmRegPassword = document.querySelector('#password2');

//form
form2.addEventListener('submit', (event) => {
    //event.preventDefault();

    validateForm();
});

const validateForm = () => {
    //regEmail
    if(regEmail.value.trim() == '') {
        setError(regEmail, 'Provide email address');
    } else if(isEmailValid(regEmail)) {
        setSuccess(regEmail);
    } else {
        setError(regEmail);
    }
    //regName
    if(regName.value.trim() === '') {
        setError(regName, 'Name cannot be empty');
    } else if(regName.value.trim().length < 5 || regName.value.trim().lenth >= 20) {
        setError(regName, 'Name must be min 5 characters and max 20 characters')
    } else {
        setSuccess(regName);
    }
    //regPassword
    if(regPassword.value.trim() === '') {
        setError(regPassword, 'Password cannot be empty');
    } else if(regPassword.value.trim().length < 8) {
        setError(regPassword, 'Password must be more than 8 charcaters');
    } else if(isPasswordValid(regPassword)) {
        setSuccess(regPassword);
    } else {
        setError(regPassword, 'Password must contain uppercase and lowercase letters and at least one number and one special character');
    }
    //confirmRegPassword
    if(confirmRegPassword.value.trim() === '') {
        setError(confirmRegPassword, 'Password cannot be empty');
    } else if(confirmRegPassword.value !== regPassword.value) {
        setError(confirmRegPassword, 'Password does not match')
    } else {
        setSuccess(confirmRegPassword);
    }
};

const setError = (element, errorMessage) => {
    const parent = element.parentElement;
    parent.classList.add('error');
    parent.classList.remove('success');
    const paragraph = parent.querySelector('p');
    paragraph.innerHTML = errorMessage;
};

const setSuccess = element => {
    const parent = element.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
};

const isEmailValid = regEmail => {
    const regex = ;
    return regex.test(regEmail);
};

const isPasswordValid = regPassword => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(regPassword);
};


//Login form
let loginEmail = doument.getElementById('email');
let loginPassword = document.getElementById('password');
let loginBtn = document.getElementsByClassName('.sign-in-button');
let loginByTwitter = document.getElementsByClassName('.sign-in-twitter-button');