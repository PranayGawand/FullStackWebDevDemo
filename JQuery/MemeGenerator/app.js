var $main = function() {
    
    
   $("#top-text").keyup(function() {
       var $result = $(this).val()
       console.log($result);
    $('.top-caption').text($result);
    });
    
    
    $("#bottom-text").keyup(function() {
       var $result = $(this).val()
       console.log($result);
    $('.bottom-caption').text($result);
    });
    
    
    $("#image-url").keyup(function() {
       var $result = $(this).val()
       console.log($result);
    $('#memeImg').attr("src",$result);;
    });
    
    
    $('#avatar').change(function(event) {
    console.log(URL.createObjectURL(event.target.files[0]));
    $("#memeImg").attr('src', URL.createObjectURL(event.target.files[0]));
    });
    
    
};


$(document).ready($main);
