# jquery.icon.js

The intent of this tiny plugin is to easily and flexibly add icons beside your text, links, list items, etc.  It is sort of a micro-framework for icons on your website.

## Requirements

- jquery (>1.4x)
- jquery.icon.js
- jquery.icon.css (or your custom css)
	
## Super Simple Example

### sample js...

  	<script type="text/javascript" charset="utf-8">
      $(function(){
        $(".example-class").icon();
      });
  	</script>
  	
### ...and sample html

    <a class="example-class" data-icon="facebook.gif">Link to Facebook</a>
    
## Demo

The repo includes the demo files, but you can also view the demo at [http://baldwindavid.github.com/jquery-icon/demo](http://baldwindavid.github.com/jquery-icon/demo)

## Icon Sets
- [http://www.famfamfam.com/lab/icons/silk/](http://www.famfamfam.com/lab/icons/silk/)
- [http://www.famfamfam.com/lab/icons/mini/](http://www.famfamfam.com/lab/icons/mini/)
- [http://www.brandspankingnew.net/archive/2006/06/doctype_icons_2.html](http://www.brandspankingnew.net/archive/2006/06/doctype_icons_2.html)
- [http://p.yusukekamiyamane.com/](http://p.yusukekamiyamane.com/)
- [http://prothemedesign.com/circular-icons/](http://prothemedesign.com/circular-icons/)

## Thanks

[Joel Meador](https://github.com/janxious) helped to cleanup up the API and set more appropriate defaults.

## jquery.autoIcons.js

You might also find the [jquery.autoIcons.js](http://github.com/baldwindavid/jquery-autoIcons) plugin helpful to automatically add icons to links based upon common file extensions (doc, xls, etc) or your own custom extensions.
