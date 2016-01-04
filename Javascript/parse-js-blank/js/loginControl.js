var $main = function() {
    $("#reg").hide();
    $("#loginbtn").click(function() {
        $("#login").toggle("slow");
        $("#reg").toggle("slow");
    });
};

 
$(document).ready($main);


console.log("Still work!");
