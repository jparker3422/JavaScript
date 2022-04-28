// main method - $.ajax
// cofiguaration object is used to tell jQuery how to get the data
// url to show where to get the data from
// method to do something on the data
// function to be called once the data is retrieved
$.ajax ({
    url: '/data.json',
    method: 'GET',
    success: function (data) {
        console.log(data);
    }
});

// helper function to get some data
// can add an error callback to let you know if it doesnt work
$.get('/data.json', function (data) {
    console.log(data);
}).fail(function() {
    console.log("Something went wrong");
});

// helper function to send some data to a server
$.post('/save', { username: 'tom' }, function (data) {
    console.log(data);
}).fail(function() {
    console.log("Something went wrong");
});

// if you want more control over the data use the ajax request
$.ajax ({
    url: '/save',
    method: 'POST',
    data: { username: 'tom' },
    success: function (data) {
        console.log(data);
    },
    error: function() {
        console.log("Something went wrong");
    }
});