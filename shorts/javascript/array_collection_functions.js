/******** forEach ********/
// accepts a callback function
// calls the function once per item
const nums = [1, 2, 3, 4];
nums.forEach(function(num) {
    // prints the double of
    // each num from an array
    console.log(num * 2);
});

/******** map ********/
// creates a new array
// calls the function once per item

const numbers = [1, 2, 3, 4];
// creates a new array of doubles elements
// original array will stay as is
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]

const names = ["sandip", "sonia", "rahul"];
const caps = names.map(function(name) {
    return name.toUpperCase();
});
console.log(caps); // ['SANDIP', 'SONIA', 'RAHUL']

/******** find ********/
// returns the first matching element
// and stop the iteration for other elements
const movies = [
    "Aya Sawan Jhoom Ke", 
    "Ayi Milan Ki Bela",
    "Aye Din Bahar Ke", 
    "Baat Ek Raat Ki", 
    "Bin Phere Hum Tere"
];

const movie = movies.find(
    (m) => m.includes("Aye")
);

console.log(movie); // Aye Din Bahar Ke

/******** filter ********/
// creates a new array
// based on condition 
// that each element pass
const words = [
    "hi", "hello", 
    "bye", "see ya"
];

const shortWords = words.filter(
    word => {
        return word.length <= 2;
    }
);
console.log(shortWords); // ["hi"]


/******** every ********/
// returns a boolean
// check if every element 
// pass the condition

const people = [
    "Sandip", "Sonia",
    "Sachin", "Sandhya"
];

const test1 = people.every(
    p => p.startsWith("S")
);
console.log(test1); // true

const test2 = people.every(
    p => p.length < 5
);
console.log(test2); // false

/******** some ********/
// returns a boolean
// check if any element 
// pass the condition

const prices = [1000, 500, 5000];

const test3 = prices.some(
    p => p <= 500
);
console.log(test3); // true

/******** reduce ********/
// executes a reducer function
// on each element 
// resulting in a single value

// summing an array
const result = [5, 3, 10, 24].reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    }
);

console.log(result); // 42

// accumulator  currentValue
// 5            3
// 8            10
// 18           24
// 42   

// find max score using reduce
const score = [45, 10, 80, 100, 90];
const maxScore = score.reduce(
    (max, currentVal) => {
        return currentVal > max
            ? currentVal 
            : max;
    }
);
console.log(maxScore); // 100

// habit tracker
const exercise = [
    "y", "y", "n", 
    "y", "n", "y", "y"
];
const tracker = exercise.reduce(
    (tracker, val)=> {
        if (tracker[val]) {
            tracker[val]++;
        } else {
            tracker[val] = 1;
        }
        return tracker;
    },
{});

console.log(tracker); // {y:5, n:2}























