// Copyright (c) 2010 David Baldwin (github.com/baldwindavid)

(function($) {

  $.fn.icon = function(options) {
    var opts = $.extend({}, $.fn.icon.defaults, options);
    $.each(this, function(index, item) {
      $(item).css("background-image", 'url(' + opts.iconPath + $(item).attr(opts.iconAttribute) +  opts.iconExtension + ')').addClass(opts.iconClass);
    });
  };

  $.fn.icon.defaults = {
    iconAttribute: 'data-icon',
    iconClass: 'jquery-icon',
    iconExtension: '',
    iconPath: 'icons/'
  };

})(jQuery);
