$(function(){
   // jQuery methods go here...
    $('img').mouseenter(function() {
         $('img').fadeTo('fast',1);
    });
    $('img').mouseleave(function() {
        $('img').fadeTo('fast',0.5);
    });

});