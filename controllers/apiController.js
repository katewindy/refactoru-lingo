var BeGlobal = require('node-beglobal');

var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'XNb3tDgMdJzQXZHiQjw1ww%3D%3D'
});

var translator = function(lang, question, cb) {
	console.log("lang", lang);
	console.log('question', question);
	beglobal.translations.translate({from: 'eng', to: lang, text: question.question}, function (err, results, i){
				if (err) {
      				return console.log(err);
    			}
    			else {
    				console.log("results:", results);
    				cb(results.translation);
    				
    			}
		});
};


var apiController = {
	getQuiz: function (req, res) {
		var quiz = [{question: "school"}, {question: "orange"}, {question: "pants"}, {question: "cat"}, {question: "table"}, {question: "door"}, {question: "purple"}, {question: "spoon"}, {question: "food"}, {question: "translate"}];
		
		var checkComplete = function() {
			var remaining = quiz.filter(function(item) {
				return item.answer === undefined;
			});
			if (remaining.length === 0) {
				console.log("quiz:", quiz);
			}
		};
		
		for (var i = 0; i < quiz.length; i++) {
			(function(i) {
				console.log('i: ', i);
				// quiz[i]['answer']  = translator(req.body.to, quiz[i]);
				// checkComplete();
				translator(req.body.to, quiz[i], function(results){
					quiz[i].answer = results;
					checkComplete();
				});

			})(i);
		
			


			/*beglobal.translations.translate({from: 'eng', to: req.body.to, text: quiz[i].question}, function (err, results, i){
					if (err) {
	      				return console.log(err);
	    			}
	    			else {
	    				console.log('results.translation:', results.translation)
	    				
	    			}
			});*/

		}

		// console.log('quiz: ', quiz);
	},
	answerSubmit: function(req,res)
	{
		var submission = req.body;
		var translateThis = {from: 'eng',to: submission.languageCode, text: submission.word};
		beglobal.translations.translate(translateThis,function(err, results)
		{
    		if (err) {
      			return console.log(err);
    		}
    		console.log('results:',results);
    		var isCorrect = results.translation.toUpperCase() === submission.translation.toUpperCase();
    		res.send(isCorrect);
    		
  		});
	}
};


module.exports = apiController;