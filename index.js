var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cookieParser = require('cookie-parser');
var app = express();
var cors = require('cors')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

app.use(cors({
    origin: '*'
}));


//Require the Router we defined in movies.js
var movies = require('./movies.js');
var words = require('./words.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);
app.use('/words', words);



app.listen(3000);