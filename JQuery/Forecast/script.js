var main = function() {
  $('.day').click(function(){
  	$(this).next().toggle('slow');
    $(this).find('.weekday span').toggleClass('glyphicon-minus'); 
  });
};

$(document).ready(main);



