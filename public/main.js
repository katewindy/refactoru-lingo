// CLIENT SIDE


$(function(){
	$('#translation-form').on('submit', function(e){
		e.preventDefault();
		var originalLang = $(this).find('[name=originalLang]').val();
		var newLang = $(this).find('[name=newLang]').val();
		var word = $(this).find('[name=word]').val();
		var translateThis = {
			text: word,
			from: originalLang,
			to: newLang
		};
		console.log(translateThis);
		$.post('/translator', translateThis, function(responseData){
			var translation = responseData.translation;
			if (translation.toUpperCase() === translateThis.text.toUpperCase()){
				$('#translationBox').empty();
				$('#translationBox').append('<p>No Translation Available</p>');
			}
			else {
				$('#translationBox').empty();
				$('#translationBox').append('<p>' + translation + '</p>');
			}
		});
	});
});