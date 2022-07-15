# Java

## Getting Started
- We write java code inside classes.
- Your program should have atleast one java class.
- main() method is an entry point for the application.
- To compile Java code: javac file-name.java
- To run Java code: java file-name
- Classname must have camelcase naming.

## Variables
- Java has 6 main datatypes
- int: whole numbers (upto 2B)
- long: large whole numbers (upto 9 quintillion)
- double: decimal numbers
- String: text
- char: a single character
- boolean: true or false value

## Math Operators
- +: addition
- -: subtraction
- *: multiplication
- /: division
- %: modulus, returns the remainder of division operation
- ++: add one
- --: subtract one
- +=: add by value on rhs
- -=: subtract by value on rhs

## Scanner
- Scanner is used to collect values from users
- We can ask questions to users and based on there answers we can collect those values of different data types
- **nextLine** method is used to wait for a string input from user
- **nextDouble** is used to wait for double value 
- **nextInt** is used to wait for integer value
- Exception is throws when user enters a wrong value type
- Scanner has to be closed using **close** method else it will cause a memory leak
- Use **\n** to add a new line

## Booleans
- Boolean is a datatype like int, long, double, char, strings we have used previously
- Booleans can store true or false value
- Booleans help us in comparison & making decisions based on those comparisons
- We can use to form expressions which will be evaluated to a value of true or false

## Comparisons
- ">" : greater than
- < : less than
- ">=" : greater than or equal to
- <= : less than or equal to
- == : equal to
- != : not equal to
- equals : equal to for strings
- !equals : not equal to for strings

## Functions
- Function are like mini-tasks helps in organizing your code 
- Level of access: private or public
- functions can take argument
- functions can return value
- function name should be written in camelcases
- parameters: value recieved by the function
- arguments: value passed into the function

## Loops
- for loops: when you know how many times a code is going to run
- while: when its unknown how many times code is going to run
- break: breaks the loop
- continue: continue the loop

## Objects
- Class: blueprint from which you can create objects
- Object: an object is a thing that you can see or describe
- Field: class variable that describes an object
- Action: method or function that represents what the object can do
- Constructor: runs when you create a new object
- Copy Constructor: creates copy of an object
- Setter: method or function that updates the value of a private field
- toString: method that returns a String representation of every field in an object
- public: provides public access to a field or method from anywhere
- Constructors and methods tend to be public
- private: prevents direct access of a field or method outside of its class
- To protect the state of an object, fields tend to be private

## Interview Questions
- Difference between for and a while loop, which one to use when?
- how to create a copy constructor which will take same class object as an argument and returns a new object
-  
