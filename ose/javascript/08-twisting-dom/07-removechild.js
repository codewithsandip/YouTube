// USING removeChild()
//Select the element you want to remove;
const removeMe = document.querySelector('.special')
//We call removeChild() on the parent element and pass in the element we want to remove:
removeMe.parentElement.removeChild(removeMe)

// USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
//Select the H1
const h1 = document.querySelector('h1');
h1.remove(); //REMOVE IT!