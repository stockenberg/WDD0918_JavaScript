/**
 * Created by workstation on 31.01.17.
 */

/**
* $("").click();
* $("").dblclick();
* $("").mouseenter();
* $("").mouseleave();
* $("").mousedown();
* $("").mouseup();
* $("").hover();
* $("").focus();
* $("").blur();
* $("").on();
 *
 * $("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    },
    click: function(){
        $(this).css("background-color", "yellow");
    }
});
 */

$(".scrollTop").click(function(e){
    console.log("Click event gestartet");
    console.log(e);
});

$(".scrollTop").dblclick(function(e){
    console.log("dblclick event gestartet");
    console.log(e);
});

$(".scrollTop").mouseenter(function (e) {
   console.log("Mouse ist über dem Button");
});


$(".scrollTop").mouseleave(function (e) {
    console.log("Mouse ist wieder weg vom button");
});


$(".scrollTop").mousedown(function (e) {
    console.log("Mouse wurde nach unten geklickt");
});


$(".scrollTop").mouseup(function (e) {
    console.log("Mouse wurde wieder losgelassen");
});


$(".scrollTop").hover(
    function(){
        console.log("Mouse ist über dem Button");
    },
    function(){
        console.log("Mouse ist wieder weg vom button");
    }
);


$(".scrollTop").hover(function(){
    console.log("Ich werde immer ausgeführt");
});

$("input").focus(function(){
    console.log(this + "wurde gefocused");
});

$("input").blur(function(){
    console.log(this + "wurde verlassen");
});


$("body").on("click", ".element", function(){
    // Wurd genutzt um auf elemente zuzugreifen die dynamisch in den DOM werden
});

$("body").on("click", function(){
    // Wurd genutzt um auf elemente zuzugreifen die dynamisch in den DOM werden
});

$("body").on("click mouseenter", function(){
    // Wurd genutzt um auf elemente zuzugreifen die dynamisch in den DOM werden
});

$("body").on("click mouseenter", ".class", function(){
    // Wurd genutzt um auf elemente zuzugreifen die dynamisch in den DOM werden
});

// Sammlung an Events des gleichen Elementes
$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    },
    click: function(){
        $(this).css("background-color", "yellow");
    }
});


/* IMPORTANT when handling async events.. */
$('body').on('click', 'elem', function () {

})