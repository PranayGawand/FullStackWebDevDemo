var $main = function() {
    $("#choujiang1").toggleClass("choujiang");
    $("#choujiang2").toggleClass("choujiang");
    $("#choujiang3").toggleClass("choujiang");
    $("#choujiang4").toggleClass("choujiang");
    $("#choujiang5").toggleClass("choujiang");
    
    $("#go").click(function(){
        $("#choujiang1").toggleClass("choujiang");
        $("#choujiang2").toggleClass("choujiang");
        $("#choujiang3").toggleClass("choujiang");
        $("#choujiang4").toggleClass("choujiang");
        $("#choujiang5").toggleClass("choujiang");
        console.log("GO")
        var count = 0;
        while (count < 10){
            setValue();
            sleep(100);
            count++;
        }
    });
    $("#choujiang1").click(function(){
        $(this).removeClass("choujiang");
    })
    $("#choujiang2").click(function(){
        $(this).removeClass("choujiang");
    })
    $("#choujiang3").click(function(){
        $(this).removeClass("choujiang");
    })
    $("#choujiang4").click(function(){
        $(this).removeClass("choujiang");
    })
    $("#choujiang5").click(function(){
        $(this).removeClass("choujiang");
    })
                    
    
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

$(document).ready($main);
function setValue(){
    var arr = [0,0,0,0,0];
    var i = 0;
    while (i < 5){
        arr[i] = Math.floor(Math.random()*400);
        i++;
    }
    $("#re1").text(arr[0]);
    $("#re2").text(arr[1]);
    $("#re3").text(arr[2]);
    $("#re4").text(arr[3]);
    $("#re5").text(arr[4]);
    
}