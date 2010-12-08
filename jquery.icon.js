// Copyright (c) 2010 David Baldwin (github.com/baldwindavid)

(function($) {

  $.fn.icon = function(options) {
    var opts = $.extend({}, $.fn.icon.defaults, options);
    $.each(this, function(index, item) {
      $(item).css("background-image", 'url(' + opts.prependPath + $(item).data(options.imageFilenameAttribute) + ')').addClass(opts.iconClass);
    });
  };

  $.fn.icon.defaults = {
    imageFilenameAttribute: 'icon',
    iconClass: 'icon',
    prependPath: '/images/'
  };

})(jQuery);
