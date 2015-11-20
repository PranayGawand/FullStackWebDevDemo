var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');
    $('.nav li').removeClass('active');
    $(this).addClass('active');
    console.log(category);

    
    
    
  });
};
 
$(document).ready(main);