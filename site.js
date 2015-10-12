$(document).ready(function() {

	$('#menu a').click(function(ev) {
		var elem = $(this);
		$('.content').hide();
		$(elem.attr('href')).show();
		$('#menu a').removeClass('selected');
		elem.addClass('selected');
		window.location.hash = elem.attr('href');
		ev.preventDefault();
	});

	$('a.menu').click(function(ev) {
		var elem = $(this);
		$('#menu a[href=' + elem.attr('href') +']').click();
	});

	$('.content').hide();
	$('.content:first').show();
	$('#menu a:first').addClass('selected');

	var hash = window.location.hash;
	if (hash) {
		$('a[href=' + hash +']').click();
	}

});
