//no username + no password 
//no password but username written 
//password written but no username
//password to short (<8)
//password has no special characters
//password has no capital letters
//password has no numbers

const userValidation = document.querySelector('.user-validation');
const password = document.querySelector('#password');
const username = document.querySelector('#username');
const form = document.querySelector('.form');

const checks = [
    /[a-z]/,
    /[A-Z]/,
    /\d/,
    /[@.#$!%^&*.?]/
];

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const passwordValue = password.value.trim();
    const usernameValue = username.value.trim();

    if(usernameValue === '') {

    }

    if(passwordValue === '') {
        
    }
}

