// JSON is used to transfer information between the browser and the server,
// or to save in text files for later use
// Data gets either converted to or from JSON

// converts an object into a JSON string
var jsonString = JSON.stringify({
    make: "McLaren",
    model: "MP4-12C",
    miles: 5023
});

// convert back to javascript
var car = JSON.parse(jsonString);

// set properties of the object
car.model = "p1";