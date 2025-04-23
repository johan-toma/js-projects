//no username + no password  x
//no password but username written x 
//password written but no username x
//password to short (<8)  x
//password has no special characters x
//password has no capital letters x
//password has no numbers x

const userValidation = document.querySelector('.user-validation');
const password = document.querySelector('#password');
const username = document.querySelector('#username');
const form = document.querySelector('.form');

const regex = /^[a-zA-Z0-9!@#$^&*?+-_]{8,}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const passwordValue = password.value.trim();
    const usernameValue = username.value.trim();

    if(usernameValue === '' && passwordValue === '') {
        userValidation.textContent = "Username and password-fields are empty";
    }
    else if(usernameValue !== '' && passwordValue === '') {
        userValidation.textContent = "Password-field cannot be left empty";
    }
    else if(usernameValue === '' && passwordValue !== '') {
        userValidation.textContent = "Username-field cannot be left empty";
    }
    else {
        if(regex.test(passwordValue) === false) {
            userValidation.textContent = "Password incorrect: make sure it fits to the standards of above 8 characters, one special character, one small letter, one capitalized letter, one number...";
        }
    }
    
}

