// let & const are BLOCK SCOPED
if (true) {
  const animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //NOT DEFINED!

// VAR IS NOT BLOCK SCOPED
if (true) {
  var animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //'eel'

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for (var i = 0; i < animals.length; i++) {
//   console.log(i, animals[i])
// }
// console.log(i)


// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// let i = 10;
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i])
// }
// console.log(i) 


function doubleArr(arr) {
  const result = []; //scoped to the doubleArr function
  for (let num of arr) {
    let double = num * 2; //scoped to this loop
    result.push(double);
  }
  return result;
}