import faker from 'faker';

const cartString = `<div>You have ${faker.datatype.number(20)} items in your cart!`;

document.querySelector('#cart-list').innerHTML = cartString;