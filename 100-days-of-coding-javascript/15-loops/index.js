for (let i = 0; i < 5; i++) {
    console.log("hello");
}

console.log("done");

// 0 < 5
// 1 < 5
// 2 < 5
// 3 < 5
// 4 < 5
// 5 < 5 false

let j = 1;
while (j < 5) {
    console.log("HA!");
    j++;
}

console.log("HA Done!");

// 1 < 5
// 2 < 5
// 3 < 5
// 4 < 5
// 5 < 5

const fruits = ["apple", "banana", "orange", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("fruits printing done!");

// 0 < 4 apple
// 1 < 4 banana
// 2 < 4 orange
// 3 < 4 kiwi
// 4 < 4 