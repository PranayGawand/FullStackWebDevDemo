/* Changing Your Style */
$(document).ready(function() {
    $("div").height("200px");
    $("div").width("200px");
    $("div").css("border-radius","10px");
});

/* Inserting Elements */
$(document).ready(function () {
    $("body").append("<p>I'm a paragraph!</p>");
});

/* Before and After */
var $paragraph = $('<p>Yes!</p>');
$(document).ready(function() {
    $('#one').after($paragraph);
});

/* Moving Elements Around */
var $paragraph = $('<p>Yes!</p>');
$(document).ready(function() {
    $('#one').after($paragraph);
    var $p = $('p');
    var $two = $('#two');
    $two.after($p);
});

/* Removing Elements 
 * .empty() deletes an element's content and all its descendants.
 * .remove(), not only deletes an element's content, but deletes the element itself.
 */
var $paragraph = $('<p>Yes!</p>');
$(document).ready(function() {
    $('#one').after($paragraph);
    var $p = $('p');
    var $two = $('#two');
    $two.after($p);
    $('p').remove();
});

/* Adding and Removing Classes
 * .addClass() and .removeClass(), that can be used to add or remove a class from an element
 */
$(document).ready(function() {
    $('#text').click(function() {
        $(this).addClass('highlighted');
    });
});

/* Toggling Classes */
$(document).ready(function() {
    $('#text').click(function() {
        $(this).toggleClass('highlighted');
    });
});

/* Changing Styles */
$(document).ready(function() {
    $("div").height("200px");
    $("div").width("200px");
    $("div").css("border-radius","10px");
});

/* Hover */
$(document).ready(function(){
  $('div').hover(
    function(){
        $(this).addClass("active");
    },
    function(){
        $(this).removeClass("active");
    }
  );
});

/* Focus */
$(document).ready(function() {
    $('input').focus(function() {
        $(this).css('outline-color','#FF0000');
    });
});

/* Simple animation */
$(document).ready(function() {
   $(document).keydown(function() {
       $('div').animate({left:'+=10px'},500);
       });
});

$(document).ready(function() {
    $('div').click(function() {
        $(this).effect("explode");
        });
    });

$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('bounce', {times:3}, 500);
        });
    });

/* draggable */
$(document).ready(function() {
    $('#car').draggable();
});

$(document).ready(function() {
    $('div').resizable();
});t 