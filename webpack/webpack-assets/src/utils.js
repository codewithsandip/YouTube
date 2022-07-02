import carImg from './car.jpg';
import altText from './alt-text.txt';

function addImage(el) {
    const imgEl = document.createElement('img');
    imgEl.alt = altText;
    imgEl.width = 500;
    imgEl.src = carImg;

    if (el) el.appendChild(imgEl);
}

export {
    addImage
}