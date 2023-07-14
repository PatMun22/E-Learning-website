//Login and Registration Buttons
let loginBtn = document.querySelector('#open-login-form');
let registerBtn = document.querySelector('#open-registration-form');
let loginForm = document.querySelector('.signInForm');
let registerForm = document.querySelector('.signUpForm');

loginBtn.addEventListener('click', () => {
    loginForm.style.visibility = 'visible';
    registerForm.style.visibility = 'hidden';
});

registerBtn.addEventListener('click', () => {
    loginForm.style.visibility = 'hidden';
    registerForm.style.visibility = 'visible';
});

//signIn and SignUp Forms display
let closeSignIn = document.querySelector('.xmark1');
let closeSignUp = document.querySelector('.xmark2');

closeSignIn.addEventListener('click', () => {
    loginForm.style.display = 'none';
});
closeSignUp.addEventListener('click', () => {
    registerForm.style.display = 'none';
});

//let bars = document.querySelector('.fa-bars');

//bars.addEventListener('click', () => {
//    
//});

//Sign In form vaidation
let signUpName = document.querySelector('#signUpName');
let signUpEmail = document.querySelector('#signUpEmail');
let signUpPassword = document.querySelector('#signUpPassword');
let confirmSignUpPassword = document.querySelector('#signUPConfirmPassword');
let submitSignUpForm = document.querySelector('#submitSignUpForm');

submitSignUpForm.addEventListener('click', (event) => {
    event.preventDefault;

    validateSignUpForm();
});

const validateSignUpForm = () => {
    //signUpName
    if(signUpName.value.trim() === '') {
        setError(signUpName, 'Name cannot be empty');
    } else if(signUpName.value.trim().length < 5 || signUpName.value.trim().length > 20) {
        setError(signUpName, 'Name must have min 5 and max 20 characters');
    } else {
        setSuccess(signUpName);
    }
    //signUpEmail
    if(signUpEmail.value.trim() === '') {
        setError(signUpEmail, 'Email cannot be empty');
    } else if(isEmailValid(signUpEmail.value)) {
        setSuccess(signUpEmail);
    } else {
        setError(signUpEmail, 'Invalid email address');
    }

    //signUpPassword
    if(signUpPassword.value.trim() === '') {
        setError(signUpPassword, 'Password cannot be empty');
    } else if(isPasswordValid(signUpPassword.value)) {
        setSuccess(signUpPassword);
    } else {
        setError(signUpPassword, 'Invalid password');
    }
    //confirmSignUpPassword
    if(confirmSignUpPassword.value.trim() === '') {
        setError(confirmSignUpPassword, 'Password cannot be empty');
    } else if(confirmSignUpPassword.value.trim() !== signUpPassword.value.trim()) {
        setError(confirmSignUpPassword, 'Password does not much');
    } else {
        setSuccess(confirmSignUpPassword);
    }
};

//Sign Up Form validation
let signInEmail = document.querySelector('#signInEmail');
let signInPassword = document.querySelector('#signInpassword');
let submitSignInForm = document.querySelector('#submitSignInForm');

submitSignInForm.addEventListener('click', (event) => {
    event.preventDefault;

    validateSignInForm();
});

const validateSignInForm = () => {
    //email
    if(signInEmail.value.trim() === '') {
        Error(signInEmail, 'Email cannot be empty');
    } else if(isEmailValid(signInEmail.value)) {
        setSuccess(signInEmail);
    } else {
        setError(signInEmail, "Invalid email");
    }
    //password
    if(signInPassword.value.trim() === '') {
        setError(signInPassword, 'Password cannot be empty');
    } else if(isPasswordValid(signInPassword.value)) {
        setSuccess(signInPassword);
    } else {
        setError(signInPassword, 'Invalid password');
    }
};

//Newsletter email subscription authentication

let newsletterEmail = document.querySelector('#newsletter');
let subscriptionBtn = document.querySelector('#newsletter-email');

subscriptionBtn.addEventListener('click', (event) => {
    validateSubscriptionEmail();
});

const validateSubscriptionEmail = () => {
    //email
    if(isEmailValid) {
        setSuccess(newsletterEmail);
    } else {
        setError(newsletterEmail, 'Invalid email');
    }
}

const setError = (element, errorMessage) => {
    const parent = element.parentElement;
    parent.classList.add('error');
    parent.classList.remove('success');
    const paragraph = parent.querySelector('p');
    paragraph.innerHTML = errorMessage;
}

const setSuccess = (element) => {
    const parent = element.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
}

const isEmailValid = element => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(element);
}

const isPasswordValid = element => {
    const regP = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    return regP.test(element);
}