$(document).ready(function() {

	$('#menu a').click(function(ev) {
		var elem = $(this);
		$('.translation').hide();
		$(elem.attr('href').replace('#', '.')).show();
		$('#menu a').removeClass('selected');
		elem.addClass('selected');
		window.location.hash = elem.attr('href');
		ev.preventDefault();
	});

	$('.translation').hide();
	$('.translation.initial').show();
	$('#menu a:first').addClass('selected');

	var hash = window.location.hash;
	if (hash) {
		$('a[href=' + hash +']').click();
	}

});
