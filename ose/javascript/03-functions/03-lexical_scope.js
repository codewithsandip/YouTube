function outer() {
  let movie = 'Amadeus';

  function inner() {
    // let movie = "The Shining";

    function extraInner() {
      //movie is not defined in this function
      //but it has access to parent function's variables
      console.log(movie.toUpperCase())
    }
    extraInner();
  }
  inner();
}

outer(); //'AMADEUS'