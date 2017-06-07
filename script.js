jQuery(document).ready(function($){
/***********************************************
				T I M E L I N E
***********************************************/
timeline();
function timeline(){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) 
			&& $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden') && $(this).find('.cd-timeline-img').addClass('bounce-img-in') 
			&& $(this).find('.cd-timeline-content').addClass('bounce-content-in');
		});
	}
}
/***********************************************
				P E R S O
***********************************************/
replaceFormObject();
function replaceFormObject(){
	$('#objet').keyup(function(){
		$('#subject').val("[Portfolio] " + $('#objet').val());
		console.log("[Portfolio] " + $('#objet').val());
	});
}

smoothscroll();
function smoothscroll(){
	$('.scrollTo').each(function(){
		$(this).click(function() { // Au clic sur un element
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Duree de l'animation (en ms)
			$navHeight = $('nav').height();
			$('html, body').animate({
				scrollTop: $(page).offset().top - 2.5*$navHeight
			}, speed);
		});
	});
}
});