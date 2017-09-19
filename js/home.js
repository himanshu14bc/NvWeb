/*
    Author : DigiSquire Team
    Website : www.digisquite.co
    Support : www.digisquite.co
*/
/*
   Table Of Content
   1. Mobile Navigation Hide or Collapse on Click
   2. Statistics Counter
*/
(function ($) {
	'use strict';

	jQuery(document).ready(function () {
		/* Mobile Navigation Hide or Collapse on Click */
		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});
		$('body').scrollspy({
			target: '.navbar-collapse',
			offset: 195

		});
		/* Statistics Counter */
		$('.statistics').appear(function() {
		   var counter = $(this).find('.statistics-count');
		   var toCount = counter.data('count');

		   $(counter).countTo({
		   from: 0,
		   to: toCount,
		   speed: 5000,
		   refreshInterval: 50
		   })
		   });
			 /* Smooth Scroll */
		$('a.smoth-scroll').on("click", function (e) {
		    var anchor = $(this);
		    $('html, body').stop().animate({
		        scrollTop: $(anchor.attr('href')).offset().top - 50
		    }, 3000);
		    e.preventDefault();
		});
		// Script to control capabilities carousel
		$("#clients-logo").owlCarousel({
			autoPlay: false,
			items: 3,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 3],
		});
		$("#clients-slider").owlCarousel({
    autoPlay: 3000,
    pagination: true,
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [991, 2]
});
		/* Scroll To Top */
				$(window).scroll(function () {
					if ($(this).scrollTop() >= 500) {
						$('.scroll-to-top').fadeIn();
					} else {
						$('.scroll-to-top').fadeOut();
					}
				});
				$('.scroll-to-top').click(function () {
					$('html, body').animate({
						scrollTop: 0
					}, 800);
					return false;
				});

	});

})(jQuery);
