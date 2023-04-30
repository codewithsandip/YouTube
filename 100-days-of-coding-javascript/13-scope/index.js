let firstname = "Sonia";

function greet() {
    let firstname = "Sandip";
    console.log("Hello " + firstname);

    function innerFn() {
        let innerVar = 10;
    }

    innerFn();
}

console.log(firstname);

greet();
