// This function accepts another function as an argument
function callThreeTimes(f) {
  //And calls it 3 times:
  f();
  f();
  f();
}

function cry() {
  console.log("BOO HOO I'M SO SAD!");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
  // call action (a function) num number of times
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 13);

// Accepts 2 functions as arguments
// Randomly selects 1 to execute
function pickOne(f1, f2) {
  let rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}