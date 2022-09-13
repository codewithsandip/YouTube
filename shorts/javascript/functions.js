/****** Higher Order Functions *******/

// hof accepting func as an argument
function callTwice(f) {
    f();
    f();
}

function laugh() {
    console.log("HA HA HA HA HA!!!");
}

// prints
// HA HA HA HA HA!!!
// HA HA HA HA HA!!!
callTwice(laugh);

// another example
function repeat(action, count) {
    for (let i = 0; i < count; i++) {
        action();
    }
}

function cry() {
    console.log("I am so SAD!!!");
}

// prints
// I am so SAD!!!
// I am so SAD!!!
// I am so SAD!!!
repeat(cry, 3);

// hof returning func as value
function multiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

const triple = multiplyBy(3);

// returns 15
triple(5);

// another example
function range(start, end) {
    return function(num) {
        return num >= start && num <= end;
    }
}

const isAdult = range(18, 99);
isAdult(9); // return false
isAdult(60); // return true









