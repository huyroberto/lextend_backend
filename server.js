// BASE SETUP
// =============================================================================
// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var cors = require('cors');

// use it before all route definitions
app.use(cors({ origin: '*' }));
var port = process.env.PORT || 88;        // set our port



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/auth', require('./lib/routes/auth.js'));

app.use('/api/profile', require('./lib/routes/profile.js'));

app.use('/api/learn', require('./lib/routes/learn.js'));

app.use('/api/dictionary', require('./lib/routes/dictionary.js'));

app.use('/api/word', require('./lib/routes/word.js'));

app.use('/api/material', require('./lib/routes/material.js'));
// START THE SERVER
// =============================================================================
app.listen(port);

console.log('Magic happens on port ' + port);