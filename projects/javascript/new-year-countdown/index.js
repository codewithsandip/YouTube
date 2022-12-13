const now = new Date();
const yearTo = now.getFullYear() + 1;

const year = document.querySelector(".year");
year.textContent = yearTo;

const newYearDate = new Date(`${yearTo}-01-01T00:00:00`);

const loader = document.querySelector(".loader");
const countdown = document.querySelector(".countdown");
const message = document.querySelector(".message");

function formatClockUnits(time, part) {
    if (time.length === 2) {
        document.querySelector(`.${part}1`).textContent = time[0];
        document.querySelector(`.${part}2`).textContent = time[1];
    } else {
        document.querySelector(`.${part}1`).textContent = 0;
        document.querySelector(`.${part}2`).textContent = time[0];
    }
}

function updateClock() {
    const timeRemaining = newYearDate.getTime() - new Date().getTime();
    if (timeRemaining <= 0) {
        message.classList.add("visible");
        countdown.classList.add("hidden");
        return;
    }
    formatClockUnits(String(Math.floor((timeRemaining/1000)%60)), "seconds");
    formatClockUnits(String(Math.floor((timeRemaining/1000/60)%60)), "minutes");
    formatClockUnits(String(Math.floor((timeRemaining/1000/60/60)%24)), "hours");
    formatClockUnits(String(Math.floor((timeRemaining/1000/60/60/24))), "days");
}

setInterval(updateClock, 1000);

setTimeout(() => {
    loader.classList.add("hidden");
    countdown.classList.add("visible");
}, 1000);

