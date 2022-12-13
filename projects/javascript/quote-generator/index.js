const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector(".quote-text");
const authorText = document.querySelector(".author-text");
const slideshowBtn = document.querySelector(".slideshow-btn");
const newQuoteBtn = document.querySelector(".new-quote-btn");
const loader = document.querySelector(".loader");

let quotes = [];
let quoteInterval = null;

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const render = ({ author, content }) => {
    quoteText.textContent = content;
    authorText.textContent = author;
}

const newQuote = () => {
    const index = random(0, 19);
    const quote = quotes[index];
    render(quote);
}

const fetchingQuotes = () => {
    quoteContainer.hidden = true;
    loader.hidden = false;
}

const fetchingQuotesSuccess = () => {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

const startSlideshow = () => {
    quoteInterval = setInterval(() => {
        newQuote();
    }, 3000);
}

const fetchQuotes = async () => {
    const url = "https://api.quotable.io/quotes";
    //const url = "http://localhost:3000/results";

    try {
        fetchingQuotes();
        const response = await fetch(url);
        const result = await response.json();
        quotes = result.results;
        //quotes = result;
        newQuote();
        fetchingQuotesSuccess();
    } catch(err) {
        console.log(err);
    }
}

fetchQuotes();

// event listeners
newQuoteBtn.addEventListener("click", () => {
    clearInterval(quoteInterval);
    newQuote();
});

slideshowBtn.addEventListener("click", startSlideshow);