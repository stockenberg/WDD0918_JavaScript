
var boxes = document.getElementsByClassName('lightbox');

function generateLightbox(imgURL, imgDescription) {
    var div = document.createElement('div');
    div.id = "lightbox";
    console.log('generated div#lightbox');

    div.appendChild(generatedImg(imgURL, imgDescription));
    console.log('built figure');
    div.appendChild(generatedThumbnails());
    console.log('generated thumbnails');
    // Write HTML to Document Body
    document.body.appendChild(div);
    console.log('attached html to body');
}


function generatedImg(imgURL, imgDescription){

    var figure = document.createElement('figure');
    console.log('created figure');
    var img = document.createElement('img');
    console.log('created img');
    img.src = imgURL;
    img.alt = imgDescription;
    console.log('src and alt was setted');

    var figcaption = document.createElement('figcaption');
    figcaption.innerHTML = imgDescription;
    console.log('added description to figcaption');

    figure.appendChild(img);
    console.log('appended img');
    figure.appendChild(figcaption);
    console.log('appended figcaption');
    console.log('ready to return img with figure and figcaption');
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
    console.log('got img url and description');
    // generate Lightbox here!
    generateLightbox(imgURL, imgDescription);
    console.log("generation successfull");
}

// Lightbox loop
for(var i = 0; i < boxes.length; i++){
    boxes[i].onclick = openLightbox;

}





//document.body.appendChild(html);