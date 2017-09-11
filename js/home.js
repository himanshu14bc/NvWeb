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
	});

})(jQuery);
