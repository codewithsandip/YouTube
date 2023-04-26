const personName = "Sandip";
const personAge = 40;
const personJob = "Front end engineer";

const person = {
    name: "Sandip",
    age: 40,
    job: "Front end developer",
    sayHello: function () {
        console.log("Hello " + this.name);
    }
}

console.log(person.name);
console.log(person.age);
console.log(person);

person.city = "Pune";
person.age = 30;

person.sayHello();


