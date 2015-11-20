var main = function() {
  $('form').submit(function() {
    comment = $('#comment').val();
    if(comment !== "") {
      var html = $('<li>').text(comment);
      html.prependTo($('ul'));
    }
    $('input').val('');
    console.log(comment);
    
    return false;
  });
};

$(document).ready(main);