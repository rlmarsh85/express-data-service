var express = require('express');
var router = express.Router();


var words = [
   {id: 1, german: 'denken', preposition: 'an', english: 'thinking about someone or something'},
   {id: 2, german: 'denken', preposition: 'über', english: 'thinking something over'},
];

router.get('/', function(req, res){
    res.json(words);
 });


//Routes will go here
module.exports = router;