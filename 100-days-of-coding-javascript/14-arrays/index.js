let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange";

const fruits = ["apple", "banana", "orange", "kiwi"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

console.log(fruits.length);

fruits.push("grapes");

console.log(fruits);

const element = fruits.pop();
console.log(element);
console.log(fruits);

const students = [
    { name: "John", grade: "C-" },
    { name: "Lynda", grade: "A" }
];

console.log(students[1].name);

const mixedArray = ["apple", 123, true, null, undefined];

console.log(mixedArray);