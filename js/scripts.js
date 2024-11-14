(function($) {
	$(".vid_wrap a").click(function( event ) {
		event.preventDefault();

		video_iframe($(this), 'open');
	});


	$(".fox-block-faq .q").click(function( event ) {
		event.preventDefault();
		$(this).closest(".fox-block-faq").toggleClass("collapsed");
	});

	$(".fox-block-faq").addClass("collapsed");

	$( ".menu-item-has-children" ).click(function() {
		$(this).toggleClass( "active" );
	});
	
	
	$( ".top_nav_burger" ).click(function() {
		$(this).toggleClass( "active" );
	});
})( jQuery );

function video_iframe(thisObj, action) {
	var img = thisObj.children('img');
	var iframe = thisObj.siblings('iframe');
	var img_height = img.height();
	var img_width = img.width();


	if(action == 'open') {
		/* Open iframe */

		var href = thisObj.attr('href');
		var vid_src = href + "?modestbranding=1&showinfo=0&playsinline=1&rel=0&autoplay=1";

		iframe.height(img_height);
		iframe.width(img_width);
		iframe.attr('src', vid_src);
		img.hide();
		iframe.addClass('active');
	}
}