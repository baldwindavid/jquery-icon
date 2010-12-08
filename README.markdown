# jquery.icon.js

The intent of this tiny plugin is to easily and flexibly add icons beside your text, links, list items, etc.  It is sort of a micro-framework for icons on your website.  Download the repo and view the demo to see examples with various options.

## Requirements

- jquery
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

    <a class="example-class" rel="facebook.gif">Link to Facebook</a>