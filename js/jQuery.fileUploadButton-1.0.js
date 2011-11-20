/*
To-do:
- Apply hover style
- Apply on-click style
- Add debug statements
- Add option to toggle debug statements

*/

(function( $ ) {
	$.fn.fileUploadButton = function(options) {
		var settings = {
			height: '20px',
			width: '40px',
			image: {},
			clickedImage: {},
			hoverImage: {}
		};

		return this.each(function() {
			if (options) { $.extend(settings, options); }
			
			var fileInput = $(this);
			var wrapper = $(document.createElement('div'));
			
			/* Apply required CSS to create the div window */
			wrapper.css('cursor','pointer')
					.css('position','relative')
					.css('overflow','hidden');
			/* Apply user-provided settings to customize the div window */
			wrapper.css('height',settings.height)
					.css('width',settings.width)
					.css('background-image','url('+settings.imageUrl+')')
			/* Apply required CSS to position the file input */
			fileInput.css('height','100%')
					.css('cursor','pointer')
					.css('position','absolute')
					.css('top','0')
					.css('right','0')
					.css('z-index','99')
					.css('opacity','0')
					.css('-moz-opacity','0')
					.css('filter','progid:DXImageTransform.Microsoft.Alpha(opacity=0)');
			/* Apply user-provided settings to customize the file input */
			fileInput.css('font-size',settings.height);
			
			/* Place the fileInput inside the div window */
			fileInput.wrap(wrapper);
		});
	};
})( jQuery );
