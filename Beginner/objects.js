// create an object
var dog = {
    name: "yoda",
    age: 4,
    talk: function() { alert("come here you will"); }
};

console.log(dog.name);
console.log(dog.age);

// can change and add properties to objects
dog.name = "Obi";
dog.collar = "Blue";

console.log(dog.name);
console.log(dog.collar);

// adding an object as a property of another object,
// creates a nested object

var person = {
    age: 26
};

person.name = {
    first: "Billie",
    last: "Joe"
};