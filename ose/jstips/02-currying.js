// usual function definition
function add(a, b, c) {
    return a + b + c;
};

console.log(add(1, 2, 3));
// 6

// simple curry function definition
function add(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
};
console.log(add(1)(2)(3));
// 6