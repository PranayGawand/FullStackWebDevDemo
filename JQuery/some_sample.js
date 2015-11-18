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

/* Modifying Content */