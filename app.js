const express = require('express');
const app = express();

var path = require('path');
var public = __dirname + "/public/";

// Route root request
app.get('/nodeapp', function (req, res) {
    res.send('Hello World!');
})

// Route root request
app.get('/', function (req, res) {
    res.sendFile(path.join(public + "index.html"));
})


// Starts server on port 3000
app.listen(3000, function () {
    console.log('------------------------------');
    console.log('Server Started on Port 3000...');
});