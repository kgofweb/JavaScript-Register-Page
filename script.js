// Form 
const form = document.querySelector('.form');
// Error 
const errorBlock = document.querySelector('.error-block');
const errorText = document.querySelector('.error');
// Inputs
const username = document.querySelector('.username-input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.pw-input');
const repeatPassword = document.querySelector('.rpw-input');


const fields = [
    username, email, password, repeatPassword
];
const usersFromDB = [
    'test', 'test123', 'halelujah'
];

// Error message
const throwError = message => {
    errorBlock.style.display = 'block';
    errorText.innerHTML = message;
};

const emptyFields = fields => {
    let isEmpty;
    fields.forEach(field => 
        field.value.length === 0 
        ? 
        (isEmpty = true) 
        :
        (isEmpty = false)
    );
    return isEmpty;
};

const uniqueUser = (usersFromDB, username) => {
    if (!usersFromDB.indexOf(username.value))
    return false;
    else 
    return true;
};
const validUsername = username => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username.value)
    ?
    true
    :
    false;
};

const validateEmail = email => {
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(email.value)
    ?
    true
    :
    false;
};

const validPass = password => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return passwordRegex.test(password.value)
    ?
    true
    :
    false;
}

const validPassword = password => {
    if(password.value.length < 6)
    return false;
    else 
    return true;
};

const validRepeat = (password, repeatPassword) => {
    if (password.value === repeatPassword.value)
    return true;
    else 
    return false;
};

form.addEventListener('submit', e => {
    // e.preventDefault();
    
    // Check for empty fields
    if(emptyFields(fields)) throwError('All fields must be completed.');

    // Check for unique Username
    else if (!uniqueUser(usersFromDB, username)) throwError('Username taken');

    else if (!validUsername(username)) throwError('Your username is not valide.');

    // Chek for valid Email
    else if (!validateEmail(email)) throwError('You must enter a valid email.');

    else if (!validPass(password)) throwError('Your password is not strong');

    else if (!validPassword(password)) throwError('Your password must have at least 6 characters.');

    else if (!validRepeat(password, repeatPassword)) throwError('Your password do not match');

    else {
        errorBlock.classList.add('success');
        throwError('Submited');
    }
});