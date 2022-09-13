/******* ARROW FUNCTIONS ********/

// traditional way
function greet(name) {
    return "Hello " + name;
}

greet("Sandip"); //returns "Hello Sandip"

// arrow function
const greet = name => "Hello " + name;

greet("Sonia"); //returns "Hello Sonia"

/******* FUNCTION DEFAULT PARAMETER VALUE ********/

function say(msg="hello") {
    return "You said " + msg;
}

say(); //returns "You said hello"
say("nothing"); //returns "You said nothing"

/******* OBJECT/ARRAY DESTRUCTURING ********/

/*const employee = {
    name: "Sandip",
    age: 30,
    designation: "Web Developer"
}*/

// without destructuring
// const name = employee.name;
// const age = employee.age;
// const designation = employee.designation;

// with destructuring
const { name, age, designation } = employee;

const keyCodes = [8, 13, 32, 46];

// without destructuring
const backspace = keyCodes[0];
const enter = keyCodes[1];
const space = keyCodes[2];
const del = keyCodes[3];

// with destructuring
//const [ backspace, enter, space, del ] = keyCodes;

/******* ARRAY FUNCTIONS ********/
const numbers = [0, 1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map(
    n => n * 2
); // [0, 2, 4, 6, 8, 10, 12]

const evenNumbers = numbers.filter(
    n => n % 2 === 0
); // [0, 2, 4, 6]

/******* SPREAD OPERATOR ********/

//const fruits = ["apple", "banana"];
const groceryList = ["milk", "butter", ...fruits]; 
console.log(groceryList); //["milk", "butter", "apple", "banana"]

const company = {
    orgName: "Google",
    address: "USA"
};
const employee = {
    name: "Sandip",
    ...company
};
console.log(employee); 
// { name: "Sandip", orgName: "Google", address: "USA" }

/******* TEMPLATE LITERALS ********/

const fullName = "John Smith";
const job = "Web Designer";
console.log(`His name is ${fullName} and he works as ${job}`);
// His name is John Smith and he works as Web Designer

const fruits = ["apple", "banana"];
console.log(`I bought ${fruits} from the market`);
// I bought apple,banana from the market

/******* IMPORT/EXPORT ********/
// greeter.js
function greet(name) {
    return `Hello ${name}`;
}

export { greet };

// app.js
import { greet } from "greeter";

console.log(greet("Sandip"));

/******* CLASSES/EXTENDS/SUPER ********/

// Old way (before ES6)
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return "Hello, I'm " + this.name + " and I'm " + this.age;
}

// New way (ES6 syntax)
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    toString() {
      return `Hello, I'm ${this.name} and I am ${this.age}`;
    }
}

const person = new Person("Sonia", 22);
console.log(person.age) // 22
console.log(person.toString()) // "Hello, I'm Sonia and I'm 22

// Inheritance
class Product {
    constructor(price, color, brand) {
        this.price = price;
        this.color = color;
        this.brand = brand;
    }

    toString() {
        console.log("This is Product");
    }
}

class Shirt extends Product {
    constructor(price, color, brand, size) {
        super(price, color, brand);
        this.size = size;
    }

    toString() {
        console.log("This is Shirt");
    }
}

class Pants extends Product {
    constructor(price, color, brand, waist) {
        super(price, color, brand);
        this.waist = waist;
    }

    toString() {
        console.log("This is Pant");
    }
}

/******* ASYNC/AWAIT ********/
async function getGithubUser(username) { 
    const response = await fetch(
        `https://api.github.com/users/${username}`
    ); // Wait here until fetch promise is fulfilled
    
    // this line executes after the promise is fulfilled
    console.log(response.json()); 
}





