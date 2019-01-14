// try something

var text = document.getElementById('text');
var ctaButton = document.getElementById('cta');

console.dir(text);
console.dir(ctaButton);

text.onmouseover = function (event) {
    console.log(event);

    console.log("hovered");
    ctaButton.style.display = "none";
};

window.onresize = function (){
    console.log("resized");
};

text.onmouseleave = function () {
    ctaButton.style.display = "inline-block";
};


