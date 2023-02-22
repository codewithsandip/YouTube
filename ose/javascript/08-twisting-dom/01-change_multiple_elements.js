// Select all LI's on the page:
const allLis = document.querySelectorAll('li');

// One option, a regular for loop:
for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = 'WE ARE THE CHAMPIONS!'
}

//Another option using for...of:
for (let li of allLis) {
  li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
}