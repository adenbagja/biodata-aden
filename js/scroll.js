$(document).ready(function() {
		$('.scrollTo').click( function() { // Au clic sur un �l�ment
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Dur�e de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});