// Step 1: Define initial state of the application
let initState = {
    msg: "Start guessing (1 to 20)...",
    userNumber: "",
    computerNumber: "?",
    score: 20,
    highScore: 0,
    win: false
};

// Step 2: Define current state of the application
let currentState = {};

// Step 3: Initialize all dom elements
const msgEl = document.querySelector(".msg");
const userNumberEl = document.querySelector(".user-number-input");
const playAgainBtnEl = document.querySelector(".play-again-btn");
const computerNumberEl = document.querySelector(".computer-number");
const scoreEl = document.querySelector(".score span");
const highScoreEl = document.querySelector(".high-score span");

// Step 4: Initialize the game
let random;
function init() {
    // generate random number
    random = Math.round(Math.random() * 20);
    currentState = {...initState};
    render(currentState);
}

// Step 5: Render application
function render(state) {
    msgEl.textContent = state.msg;
    userNumberEl.value = state.userNumber;
    computerNumberEl.textContent = state.computerNumber;
    scoreEl.textContent = state.score;
    highScoreEl.textContent = state.highScore;

    if (state.win) {
        playAgainBtnEl.classList.remove("hide");
        userNumberEl.classList.add("hide");
    } else {
        playAgainBtnEl.classList.add("hide");
        userNumberEl.classList.remove("hide");
    }
}

// Step 6: Add event listeners
function addListeners() {
    userNumberEl.addEventListener("change", (e) => {
        const num = parseInt(e.target.value);
        updateState(num);
    });

    playAgainBtnEl.addEventListener("click", () => {
        init();
    });
}

// Step 7: Update the state
function updateState(num) {
    if (isNaN(num) && num <= 0) {
        return;
    }

    currentState.score--;

    if (num > random) {
        currentState.msg = "Too high...Try again";
    } else if (num < random) {
        currentState.msg = "Too low...Try again";
    } else if (num === random) {
        currentState.msg = "Congratulations! you win";
        currentState.highScore = currentState.score;
        initState.highScore = currentState.score;
        currentState.computerNumber = random;
        currentState.win = true;
    }

    currentState.userNumber = num;

    render(currentState);
}

// start the game here
init();
addListeners();