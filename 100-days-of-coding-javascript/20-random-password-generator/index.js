const passwordInput = document.querySelector(".password-input");
const lengthInput = document.querySelector(".length-input");
const numbersCheckbox = document.querySelector(".number-input");
const symbolCheckbox = document.querySelector(".symbols-input");
const generateBtn = document.querySelector(".generate-button");
const copyBtn = document.querySelector(".copy-button");
const form = document.querySelector(".password-form");

let passwordLength = 0;
let includeNumbers = false;
let includeSymbols = false;

lengthInput.addEventListener("change", function (evt) {
    passwordLength = evt.target.value;
});

numbersCheckbox.addEventListener("change", function (evt) {
    includeNumbers = evt.target.checked;
});

symbolCheckbox.addEventListener("change", function (evt) {
    includeSymbols = evt.target.checked;
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    generatePassword();
});

function generatePassword() {
    if (passwordLength < 3) {
        alert("Password length must be greater than 2");
        return;
    }

    let symbolPartLength;
    let charPartLength;
    let numberPartLength;
    if (includeNumbers && includeSymbols) {
        let parts = splitNumber(passwordLength);
        symbolPartLength = parts[0];
        charPartLength = parts[1];
        numberPartLength = parts[2];

        passwordInput.value = generateSpecialCharsString(symbolPartLength) +
            generateAlphabetCharsString(charPartLength) +
            generateNumberCharsString(numberPartLength);
    } else if (includeNumbers) {
        numberPartLength = Math.floor(passwordLength / 2);
        charPartLength = Math.ceil(passwordLength / 2);
        passwordInput.value = generateAlphabetCharsString(charPartLength) +
            generateNumberCharsString(numberPartLength);
    } else if (includeSymbols) {
        symbolPartLength = Math.floor(passwordLength / 2);
        charPartLength = Math.ceil(passwordLength / 2);
        passwordInput.value = generateAlphabetCharsString(charPartLength) +
            generateSpecialCharsString(symbolPartLength);
    } else {
        passwordInput.value = generateAlphabetCharsString(passwordLength);
    }
}

copyBtn.addEventListener("click", function () {
    console.log.log("copy password logic goes here");
});