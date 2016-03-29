var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);

// use html and css static files
app.use(express.static(__dirname + '/public'));


// routes
app.get('/contactList', function(req, res) {

    console.log('I received a GET request');

    db.contactList.find(function(err, docs) {
        console.log(docs);
        // send response to Controller with contact List Data
        res.json(docs);
    });


});

app.listen(3000);

console.log('Server is running on PORT 3000');
