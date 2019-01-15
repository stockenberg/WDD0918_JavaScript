
var boxes = document.getElementsByClassName('lightbox');

function generateLightbox(imgURL, imgDescription) {
    var div = document.createElement('div');
    div.id = "lightbox";

    div.appendChild(generatedImg(imgURL, imgDescription));
    div.appendChild(generatedThumbnails());
    // Write HTML to Document Body
    document.body.appendChild(div);
}


function generatedImg(imgURL, imgDescription){

    var figure = document.createElement('figure');
    var img = document.createElement('img');
    img.src = imgURL;
    img.alt = imgDescription;

    var figcaption = document.createElement('figcaption');
    figcaption.innerHTML = imgDescription;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    return figure;
}


function generatedThumbnails() {
    var ul = document.createElement('ul');

    for(var i = 0; i < boxes.length; i++){
        var li = document.createElement('li');
        ul.appendChild(li);
    }
    return ul;
}

function openLightbox(e) {
    var imgURL = e.target.src;
    var imgDescription = e.target.nextElementSibling.innerHTML;
    // generate Lightbox here!
    generateLightbox(imgURL, imgDescription);
}

// Lightbox loop
for(var i = 0; i < boxes.length; i++){
    boxes[i].onclick = openLightbox;

}





//document.body.appendChild(html);