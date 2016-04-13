$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 600) {
        
    	$("header").css("background-color", "rgba(0,0,0,0.6)");
    } else if (scroll <= 600) {
       $("header").css("background-color", "transparent");
    }

});

