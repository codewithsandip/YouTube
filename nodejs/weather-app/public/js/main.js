const formEl = document.querySelector('.weather-form');
const searchEl = document.querySelector('.search-input');

const locationEl = document.querySelector('.location');
const currentEl = document.querySelector('.current');
const errorEl = document.querySelector('.error');

function reset() {
    errorEl.textContent = "";
    locationEl.textContent = "";
    currentEl.textContent = "";
}

formEl.addEventListener('submit', (e) => {
    fetch(`/weather?location=${searchEl.value}`)
        .then(response => response.json())
        .then(data => {
            const { current, location, condition } = data;

            reset();

            if (data.error) {
                errorEl.textContent = data.error;
            } else {
                locationEl.textContent = location;
                currentEl.textContent = `${current}, ${condition.text}`;
            }
            
        })
        .catch((err) => {
            console.log(err);
        });
});