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
    console.log("submit");
    evt.preventDefault();
});

copyBtn.addEventListener("click", function () {
    console.log.log("copy password logic goes here");
});