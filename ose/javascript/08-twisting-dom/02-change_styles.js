// Changing the color and background-color:
const h1 = document.querySelector('h1');
h1.style.color = 'pink';
h1.style.backgroundColor = 'yellow' //camel cased! (not background-color but backgroundColor)

// Changing Multiple Elements:
const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

allLis.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
})