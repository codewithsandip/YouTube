const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");

let errors = [];

function showError(field, message) {
    const formField = field.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = message;
}

function showSuccess(field) {
    const formField = field.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
}

// errors = [{field: username, messages: ["Username is required"]}]

function checkError(field, message) {
    for (let i=0; i < errors.length; i++) {
        if (field === errors[i].field) {
            errors[i].messages =[...errors[i].messages, message];
            return;
        }
    }

    errors.push({field, messages: [message]});
}

function showErrors() {
    errors.forEach(({field, messages}) => {
        showError(field, messages[0]);
    });
}

function checkRequired(fieldArr) {
    fieldArr.forEach((field) => {
        if (field.value === "") {
            checkError(field, `${field.name} is required`);
         } else {
            showSuccess(field);
         }
     
    });
}

function checkLength(field, min) {
    if (field.value.length < min) {
        checkError(field, `${field.name} should have min length of ${min} chars`);
    } else {
        showSuccess(field);
    }
}

function isValidEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function checkEmail(field) {
    if (!isValidEmail(field.value)) {
        checkError(field, "Email is not valid");
    } else {
        showSuccess(field);
    }
}

function checkPasswords() {
    if (password1.value !== password2.value) {
        checkError(password1, "Password should match");
        checkError(password2, "Password should match");
    } else {
        showSuccess(password1);
        showSuccess(password2);
    }
}

function validateForm(e) {
    e.preventDefault();

    errors = [];

    checkRequired([username, email, password1, password2]);
    checkLength(username, 5);
    checkLength(password1, 8);
    checkLength(password2, 8);
    checkEmail(email);
    checkPasswords();

    showErrors();
}

form.addEventListener("submit", validateForm);