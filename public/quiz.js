function buildQuestion (word, language) {
	var el = $('<div>');
	el.append($('<p class="word">'+ word + '</p>'));
	el.append($('<input type="text" name="answer" placeholder="answer">'));
	el.append($('<input type="submit">'));

	return el;

}

$(document).on('ready', function (){

	$('#chooseLanguage').on('submit',function(e)
	{
		e.preventDefault();
		var languageCode = $(this).find('[name=language]').val();
		console.log(languageCode);
		$.post('/getQuiz', {to: languageCode}, function(responseData){
			console.log(responseData);
			

		
		});
	});

});














// var buildWordElement = function (word, language) {
// 	var el = $("<li>");

// 	var form = $("<form>").attr('method','post').attr('action','/answerSubmit');
// 	form.append($("<input>").attr("name", "word").attr("type", "hidden").val(word));
// 	form.append($("<input>").attr("name", "languageCode").attr("type", "hidden").val(language));
// 	form.append($("<label>").attr("for", "word").html(word));
// 	form.append($("<input>").attr("name", "translation").attr("type", "text").attr("placeholder", "Answer"));
// 	form.append($("<input>").attr("type", "submit"));
// 	// form.on('submit', function(e)
// 	// {

// 	// });
// 	el.append(form);

// 	return el;
// }

// $(function(){

// 	$('#chooseLanguage').on('submit',function(e)
// 	{
// 		e.preventDefault();
// 		var languageCode = $(this).find('[name=language]').val();
// 		$.get('/getQuiz', {}, function(responseData){
// 			console.log(responseData);
// 			responseData.forEach(function (word) {
// 				$("#quiz-questions").append(buildWordElement(word,languageCode));

// 			});
// 		});
// 	});

// })