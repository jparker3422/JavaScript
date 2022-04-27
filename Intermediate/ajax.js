// example of an XML Http Request

// create a new sml http request
var req = new XMLHttpRequest();

// specify a callback function
req.onload = function (event) {

};

// specify how we want to get the data
// first argument is the http method (get, post, put, etc)
// second argument is the url to fetch from
// third argument is a boolean to specify whether the request is synchronous or asunchronous
req.open('get', 'some-file.txt', true);

// request the data
req.send();