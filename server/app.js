// import files and packages up here


// create your express server below
var express = require('express');
var app = express();

var data = require('./data.json');

// add your routes and middleware below
var morgan = require('morgan');
app.use(morgan('dev'));

app.get('/', function(req, res){
    res.status(200).send('it works!');
});

app.get('/data', (req, res) => {
    res.json(data);
    res.status(200);
});

// app.get('/time', (req, res) => {
//     console.log("Someone asked about time, I should return it");
//     let time = new Date();

//     res.send("Time is " + time);
// });


// finally export the express application
module.exports = app;
