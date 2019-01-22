/** Variables **/
let boxes = document.querySelectorAll('.lightbox');
let lightBox = document.querySelector('#lightbox');

/** EVENTS */

for (let index = 0; index < boxes.length; index++) {
    boxes[index].onclick = openLightBox;
}

lightBox.onclick = closeLightbox;

generateThumbnails();

/** FUNCTIONS **/

function openLightBox(evt) {
    let imgSrc = evt.target.src;
    let imgDesc = evt.target.nextElementSibling.innerText;
    lightBox.style.display = 'block';
    let img = lightBox.children[0].children[0];
    img.src = imgSrc;
    img.nextElementSibling.innerText = imgDesc;
}

function generateThumbnails() {
    let imgSrcs = [];
    /** get all img srcs */
    for(let i = 0; i < boxes.length; i++){
        imgSrcs.push(boxes[i].src);
    }
    console.log(imgSrcs);

    /** Build thumbnails */
    for(let i = 0; i < imgSrcs.length; i++){
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = imgSrcs[i];
        img.height = "50";

        // delete me if you dont want thumbnail actions
        img.onclick = changeImgViaThumbnail;

        li.appendChild(img);
        let ul = document.querySelector('#thumbnails');
        ul.appendChild(li);
    }
}

function changeImgViaThumbnail(e){
    console.log(e);
    let src = e.target.src;
    let img = lightBox.children[0].children[0];
    img.src = src;
}

function closeLightbox(e) {
    if (e.target.tagName !== 'IMG'
        && e.target.tagName !== 'LI'
        && e.target.tagName !== 'FIGCAPTION'
        && e.target.tagName !== 'UL'
    ) {
        lightBox.style.display = 'none';
    }

}

