var express = require('express');
var app = express();

// use html and css static files
app.use(express.static(__dirname + '/public'));


app.listen(3000);

console.log('Server is running on PORT 3000');
