// jquery is added to a page by including it as a file in a script
// <script
    // src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js">
//</script>

// select all elements with note class
// set the background and height
$('.note').css('background', 'red').height(100);

// getter
var currentHeight = $('.note').height();
var currentColor = $('.note').css('color');

//setter
currentHeight = $('.note').height(100);

// context - limit the area that the element will be selected from
var $header = $('header');
var $headerBoxes = $('.note', $header);