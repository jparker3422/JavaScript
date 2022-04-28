// DOMContentLoaded - use when you want to move elements
// to a different location or create new ones before the css
// is fully loaded into the page

var doSomething = function(event) {

};

window.addEventListener('DOMContentLoaded', doSomething);

// or you can do this
$(window).ready(doSomething);


// wait for the page to fully load then do something
window.addEventListener('load', doSomething);

$(window).load(doSomething);