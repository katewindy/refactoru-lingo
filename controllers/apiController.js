var BeGlobal = require('node-beglobal');

var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'XNb3tDgMdJzQXZHiQjw1ww%3D%3D'
});


var apiController = {
	getQuiz: function (req, res) {
		res.send(["school", "orange", "pants", "cat", "table", "door", "purple", "spoon", "food", "translate"]);
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