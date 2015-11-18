$(document).ready(function() {
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();   
        $(".mylist").append('<li class="listitem"><a href="#">'+ toAdd+'</a></li>');
        });
    });
    
$(document).on('click', '.listitem', function() {
    $(this).remove();
});