var BeGlobal = require('node-beglobal');

var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'XNb3tDgMdJzQXZHiQjw1ww%3D%3D'
});

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	translate: function(req, res) {
		res.render('translate');
	},
	translator: function(req, res) {
		// console.log(req.body);
		var translateThis = req.body;
		beglobal.translations.translate(translateThis,function(err, results) 
		{
    		if (err) {
      			return console.log(err);
    		}

    		console.log(results);
    		res.send(results);
  		});
	},
	quiz: function (req, res) {
		res.render("quiz");
	}
};

module.exports = indexController;