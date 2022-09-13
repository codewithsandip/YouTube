/****** Creating Arrays ******/

// list of comments in 
// an instagram post
const comments = [ 
    "hello", "hi", "nice"
];

// list of grocery items
const groceryList = [ 
    "milk", "eggs", "sugar" 
];

// songs in a playlist
const songs = [ 
    "bad habit", "one kiss", "ghost" 
];


/****** Accessing Arrays ******/

const colors = [ 
    "red", "green", "blue", 
    "white", "black", "purple" 
];

console.log(colors[0]); // red
console.log(colors[1]); // green
console.log(colors[2]); // blue
console.log(colors[3]); // white
console.log(colors[4]); // black
console.log(colors[5]); // white

// array length
console.log(colors.length); // 6


/****** Modifying Arrays ******/

const todos = [ 
    "wake up at 5",
    "exercise",
    "code",
    "repeat"
];

// modify item at particular index
todos[1] = "exercise for 1 hour";
todos[2] = "code for 4 hours";


/****** Array Methods to add/remove elements ******/

const products = [ "phone", "televison", "laptop" ];

// adds an element to the end
products.push("tablet"); // return length - 4

console.log(products);

// removes last element
products.pop(); // return last element - tablet

const guitarPracticeToDo = [ "triads", "rhythm" ];

// adds an element at the beginning
guitarPracticeToDo.unshift("exercises"); // returns length - 3

console.log(guitarPracticeToDo);

// removes the first element
guitarPracticeToDo.shift(); // returns first element - exercises

/****************************/

// merge two or more arrays
let fruits = [ "apple", "banana" ];
let vegetables = [ "ladyfinger", "spinach" ];

// returns new array - 
// [ "apple", "banana", "ladyfinger", "spinach" ]
let fruitsAndVegetables = fruits.concat(vegetables);

console.log(fruitsAndVegetables);

// search an array
const pets = [ "dog", "cat", "fish" ];

pets.includes("snake"); // return false
pets.includes("cat"); // return true

pets.indexOf("snake"); // returns -1
pets.indexOf("fish"); // returns 2


/****************************/

// reverse an array
const numbers = [ 1, 2, 3, 4, 5 ];

// reverse the same array
numbers.reverse();
console.log(numbers);

// join array elements
const numStr = numbers.join("-");
console.log(numStr);

/****************************/

const food = [ 
    "milk", "beer", "banana", "apple", 
    "grapes", "ladyfinger", "spinach" 
];

// get a slice of an array
const drink = food.slice(0, 2);
console.log(drink); // ["milk", "beer"]

const fruit = food.slice(2, 5);
console.log(fruit); // ["banana", "apple", "grapes"]

const veggie = food.slice(-2);
console.log(veggie); // ["ladyfinger", "spinach"]

// creates copy of an array
const foodCopy = food.slice();

console.log(foodCopy); 
//[ 
//    "milk", "beer", "banana", "apple", 
//    "grapes", "ladyfinger", "spinach" 
//];

/****************************/

// array add/remove/replace elements
// mostly in the middle of an array
// arr.splice(startIndex, deleteCount, itemsToInsert)
const alphabets = [ "a", "d", "b", "e"];

// add new element
alphabets.splice(1, 0, "b");
console.log(alphabets); // [ "a", "b", "d", "b", "e"]

// [ "a", "b", "d", "b", "e"]
// deleting element(s)
alphabets.splice(3, 1); // returns "b"
console.log(alphabets); // [ "a", "b", "d", "e"]

// [ "a", "b", "d", "e"]
// replace elements
alphabets.splice(2, 2, "c", "d", "e"); // returns "d", "e"
console.log(alphabets); // [ "a", "b", "c", "d", "e"]











































