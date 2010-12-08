# jquery.icon.js

The intent of this tiny plugin is to easily and flexibly add icons beside your text, links, list items, etc.  It is sort of a micro-framework for icons on your website.

## Requirements

- jquery
- jquery.icon.js
- icon.css (or your custom css)
	
## Super Simple Example

### sample js...

  	<script type="text/javascript" charset="utf-8">
      $(function(){
        $(".example-class").icon();
      });
  	</script>
  	
### ...and sample html

    <a class="example-class" rel="facebook.gif">Link to Facebook</a>
    
## Demo

The repo includes the demo files, but you can also view the demo at [http://baldwindavid.github.com/jquery-icon/demo](http://baldwindavid.github.com/jquery-icon/demo)

## jquery.autoIcons.js

You might also find the [jquery.autoIcons.js](http://github.com/baldwindavid/jquery-autoIcons) plugin helpful to automatically add icons to links based upon common file extensions (doc, xls, etc) or your own custom extensions.