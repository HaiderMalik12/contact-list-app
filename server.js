var express = require('express');
var app = express();

// use html and css static files
app.use(express.static(__dirname + '/public'));


// routes
app.get('/contactList', function(req, res) {

    console.log('I received a GET request');

    var person = {
        name: 'Haider',
        email: 'haidermalik504@gmail.com',
        number: '(112)111-111'
    };

    var person2 = {
        name: 'Faham',
        email: 'faham@gmail.com',
        number: '(333)333-333'
    };
    var person3 = {
        name: 'Mohsin',
        email: 'Mohsin@gmail.com',
        number: '3043-2222-211'
    }

    var contactList = [person, person2, person3];
    // send response to Controller with contact List Data
    res.json(contactList);
});

app.listen(3000);

console.log('Server is running on PORT 3000');
