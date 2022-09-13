/*********** VAR **********/

// variables declared as 
// var are function scoped
function greet() {
    var name = "Sandip";
    // name is accessible 
    // inside function              
    console.log(name);
}

greet();

// throws a ReferenceError, 
// name is not accessible 
// outside function
console.log(name);

// var declared 
// variables are hoisted

// undefined, no error raised
console.log(name); 
var name = "Sandip";

// how javascript reads it
var name;
console.log(name); 
name = "Sandip";

// redefine will erase 
// the previous value
function greet() {
    var name = "Sandip";
    if (true) {
      // prev "Sandip" 
      // will be erased 
      var name = "Sonia";
    }
    // this will print "Sonia"              
    console.log(name);  
  }
  greet();

/*********** LET/CONST **********/
// variables declared as 
// let are block scoped
function greet() {
    if (true) {
        let name = "Sandip";
    }
    // name is not accessible              
    console.log(name);  
}
greet();


// raises a Reference error!
console.log(name); 
let name = "Sandip";

// redefine will create 
// another variable
function greet() {
    let name = "Sandip";
    if (true) {
        // this will create a new name
        // variable in if block 
        let name = "Sonia";
    }
    // this will print "Sandip"              
    console.log(name);  
}
greet();

// can't be re-assigned
// raises a Type error!
const name = "Sandip"; 
name = "Sonia";





