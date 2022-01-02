const cards = document.querySelectorAll(".card");
let prevCard = cards[0];

cards.forEach((card) => {
    card.addEventListener('click', () => {
        prevCard.classList.remove('active');
        card.classList.add('active');
        prevCard = card;
    });
});