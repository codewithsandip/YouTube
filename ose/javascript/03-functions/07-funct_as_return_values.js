// This function returns a function!
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

//triple holds a function:
const triple = multiplyBy(3);
//we can call it:
triple(4); //12
triple(10); //30

const double = multiplyBy(2);
double(3); //6
double(9); //18

const halve = multiplyBy(0.5);
halve(5); //2.5
halve(100); //50

// This function also acts as a "function factory"
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}
// This function checks if a value is between 0 and 18
const isChild = makeBetweenFunc(0, 18);
isChild(10); //true
isChild(56); //false

const isInNineties = makeBetweenFunc(1990, 1999);
isInNineties(1994); //true
isInNineties(1987); //false

const isNiceWeather = makeBetweenFunc(60, 79);
isNiceWeather(68); //true
isNiceWeather(98); //false