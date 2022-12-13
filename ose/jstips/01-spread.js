// combine arrays into new array
let arr1 = [1,2,3]; 
let arr2 = [4,5,6]; 
let newArray = [...arr1,...arr2]; 
console.log(newArray);
// [ 1, 2, 3, 4, 5, 6 ]

// copying array elements
let arr3 = ["a","b","c"]; 
let newArray2 = [...arr3]; 
console.log(newArray);
// ["a", "b", "c"]

// expanding arrays
let arr4 = ["a","b"]; 
let newArray3 = [...arr4,"c","d"]; 
console.log(newArray);
// ["a", "b", "c", "d"]

// merging objects
const userInfo = { 
	name: "Shonali", 
	age: 22,
}; 
const userMoreInfo = { 
	country: "India", 
	city: "Pune", 
}; 
const user = {
    ...userInfo, 
    ...userMoreInfo
};
/* {  
    name: "Shonali",  
    age: 22, 
    country: "India", 
    city: "Pune" 
} */