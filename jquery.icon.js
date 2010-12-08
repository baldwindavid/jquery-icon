// Copyright (c) 2010 David Baldwin (github.com/baldwindavid)

(function($) {

  $.fn.icon = function(options) {
  	var opts = $.extend({}, $.fn.icon.defaults, options);
  	$.each(this, function(index, item) {
      $(item).css("background-image", 'url(' + opts.prependPath + $(item).attr(opts.getImageFrom) + ')').addClass(opts.addClass);
    });
  };
  
  $.fn.icon.defaults = {
    getImageFrom: 'rel',
    addClass: 'icon',
		prependPath: ''
	};

})(jQuery);