var express = require('express');
var router = express.Router();


var words = [
   {id: 1, german: 'abhängen', preposition: 'von', english: 'depending on something or someone'},
   {id: 2, german: 'abmelden', preposition: 'bei', english: 'Unregister or cancelling with someone'},
   {id: 3, german: 'abmelden', preposition: 'von', english: 'Unregister or cancelling with something or someplace'},
   {id: 4, german: 'abrechnen', preposition: 'mit', english: 'Sort something out or settle a balance with something or someone'},
   {id: 5, german: 'abschließen', preposition: 'mit', english: 'Close out business with something or someone'},
   {id: 6, german: 'abstimmen', preposition: 'über', english: 'Make a decision about something by voting'},
   {id: 7, german: 'achten', preposition: 'auf', english: 'Take care of watch over something'},
   {id: 8, german: 'sich amüsieren', preposition: 'über', english: 'Amuse yourself with or about something'},
   {id: 9, german: 'anbieten', preposition: 'zu', english: 'Offer someething up'},
   {id: 10, german: 'ändern', preposition: 'an', english: 'Change something'},
   {id: 11, german: 'anfangen', preposition: 'mit', english: 'Start or begin something'},
   {id: 12, german: 'anfangen', preposition: 'mit', english: 'Start or begin something'},
   {id: 13, german: 'sich ängstigen', preposition: 'um', english: 'Stress yourself out about something'},
   {id: 14, german: 'ankommen', preposition: 'auf', english: 'Arrive at a location'},
   {id: 15, german: 'sich anmelden', preposition: 'bei', english: 'Reigster yourself with a person or institution'},
   {id: 16, german: 'sich anmelden', preposition: 'für', english: 'Reigster yourself for something'},
   {id: 17, german: 'anrufen', preposition: 'bei', english: 'Call someone or something on the phone. Prep. only for institutions.'},
   {id: 18, german: 'ansehen', preposition: 'als', english: 'See someone or something as something abstract'},
   {id: 19, german: 'anstellen', preposition: 'als', english: 'Hire someone for a position'},
   {id: 20, german: 'antworten', preposition: 'auf', english: 'Answer something or someone'},
   {id: 21, german: 'appellieren', preposition: 'an', english: 'Appeal to someone from a particular aspect'},
   {id: 22, german: 'arbeiten', preposition: 'bei', english: 'Work at an institution or for someone'},
   {id: 23, german: 'arbeiten', preposition: 'an', english: 'Work on something, e.g. a project'},
   {id: 24, german: 'sich ärgern', preposition: 'über', english: 'Make yourself annoyed or angry about something'},
   {id: 25, german: 'auffordern', preposition: 'zu', english: 'Ask or request something or someone'},
   {id: 26, german: 'aufhören', preposition: 'mit', english: 'Stop something, e.g. an activity'},
   {id: 27, german: 'aufklären', preposition: 'über', english: 'Enlighten someone about a topic'},
   {id: 28, german: 'aufpassen', preposition: 'auf', english: 'Look out for something, or be careful about something or someone'},
   {id: 29, german: 'sich aufregen', preposition: 'über', english: 'Excite yourself about something'},
   {id: 30, german: 'aufwachen', preposition: 'aus', english: 'To wake up (because of something)'},
   {id: 30, german: 'ausfüllen', preposition: 'mit', english: 'To fill something up with something'},

   
];

router.get('/', function(req, res){
    res.json(words);
 });


//Routes will go here
module.exports = router;