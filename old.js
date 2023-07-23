var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views','./views');

//Simple request time logger
app.use('/things', function(req, res, next){
    console.log("A new request received at " + Date.now());
    
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
    //function route handler.
    next();
 });

 // Route handler that sends the response
app.get('/things', function(req, res){
    res.send('Things');
 });
 

app.get('/hello', function(req, res){
   res.send("Hello world!");
});

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });

 app.get('/ding/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });

 var things = require('./things.js');


 app.get('/first_template', function(req, res){
    res.render('first_view');
 });

//both index.js and things.js should be in same directory
app.use('/things', things);


app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
       name: "TutorialsPoint", 
       url:"http://www.tutorialspoint.com"
    });
 });

 app.get('/static_file_test', function(req, res){
    res.render('static_file_test', {
    });
 });

app.listen(3000);