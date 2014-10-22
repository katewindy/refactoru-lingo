var express = require('express');
var bodyParser = require('body-parser');


var indexController = require('./controllers/index.js');
var apiController = require("./controllers/apiController.js");



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/translate', indexController.translate);
app.get("/quiz", indexController.quiz);

app.post('/translator', indexController.translator);
app.get("/getQuiz", apiController.getQuiz);
app.post("/answerSubmit",apiController.answerSubmit);

var server = app.listen(3459, function() {
	console.log('Express server listening on port ' + server.address().port);
});
