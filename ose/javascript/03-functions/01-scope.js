//These variables are SCOPED to the function
function lol() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
  console.log(age);
}
// These variables are SCOPED to changeColor()
function changeColor() {
  let color = 'purple';
  const age = 19;
  console.log(age);
}
lol();
changeColor();
age; //DOES NOT EXIST!
color; //DOES NOT EXIST!
person; //DOES NOT EXIST!


let bird = 'mandarin duck';

function birdWatch() {
  //this bird is scoped to birdWatch()
  let bird = 'golden pheasant';
  console.log(bird); //"golden pheasant"
}
birdWatch();
console.log(bird); //"mandarin duck"