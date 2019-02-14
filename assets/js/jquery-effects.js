/**
 * Effects:
 * $("").hide();
 * $("").show();
 * $("").toggle();
 * $("").fadeIn();
 * $("").fadeOut();
 * $("").fadeToggle();
 * $("").fadeTo();
 * $("").slideDown();
 * $("").slideUp();
 * $("").slideToggle();
 * $("").animate();
 * $("").stop(true, true);
 * http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_stop_params
*/


$(".click").click(function(){


    $("h1").hide(2000, function(){
        //$(this).show(2000);
    });

    $("h1").show(2000, function(){
        //$(this).hide(2000);
    });

    $("h1").toggle(1000, function(){
        console.log("Element wurde getoggled");
    });



    $("h1").fadeOut(1000, function(){
        $(this).fadeIn(1000);
    });



    $("h1").fadeToggle(1000, function(){
        console.log("Element wurde getoggled");
    });


    $("h1").fadeTo(1000, 0.5, function(){
        console.log("Element wurde gefaded");
    });


    $("h1").slideUp(1000, function(){
        console.log("Element wurde geslided");
    });

    $("h1").slideDown(1000, function(){
        console.log("Element wurde geslided");
    });


    $("h1").slideToggle(1000, function(){
        console.log("Element wurde geslided");
    });


    $("h1").animate({
        background: "red",
        height: "200px",
        left: "300px",
        opacity: "toggle"
    }, 1000, "swing", function(){
        console.log("animation completed");
    });

});







