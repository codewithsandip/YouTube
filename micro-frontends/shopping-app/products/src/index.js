import faker from 'faker';

let productString = '';

for (let i = 0; i < 10; i++) {
    productString += `<div>${faker.commerce.productName()}</div>`;
}

document.querySelector('#product-list').innerHTML = productString;