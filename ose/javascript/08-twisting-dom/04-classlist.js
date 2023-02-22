const todo = document.querySelector('#todos .todo');

// Setting styles one at a time is not ideal:
// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%'


// We can use a class instead!
// In app.css I've defined a 'done' class that we can apply

// OPTION 1 - using setAttribute
//This adds the class 'done', but it overwrites any existing classes...
// todo.setAttribute('class', 'done');

// OPTION 2 - classList
// We can use the classList property and it's methods to add,remove, and toggle classes!
todo.classList.add('done');
//to remove it
todo.classList.remove('done');
//to toggle:
todo.classList.toggle('done'); //add
todo.classList.toggle('done'); //remove
todo.classList.toggle('done'); //add
todo.classList.toggle('done'); //remove
todo.classList.toggle('done'); //add