/** Variables **/
let boxes = document.querySelectorAll('.lightbox');
let lightBox = document.querySelector('#lightbox');
let controlBtns = document.querySelector('.controls').children;
let leftButton = controlBtns[0];
let rightButton = controlBtns[1];


/** EVENTS */
for (let index = 0; index < boxes.length; index++) {
    boxes[index].onclick = openLightBox;
}

lightBox.onclick = closeLightbox;

leftButton.onclick = function () {

    /* Generate Index */
    let index = getIndexFromLightbox();
    let prevImgIndex = index - 1;

    if(typeof boxes[prevImgIndex] === "undefined"){
        prevImgIndex = boxes.length - 1;
    }
    /* get Previous Img */
    prevImg = boxes[prevImgIndex].src;
    prevImgDesc = boxes[prevImgIndex].nextElementSibling.innerText;
    // index missing

    /* Change current Img in Lightbox to Previous img*/
    let img = lightBox.children[0].children[0].children[0];
    img.src = prevImg;
    img.dataset.index = prevImgIndex;
    img.nextElementSibling.innerText = prevImgDesc;
};

function getIndexFromLightbox() {
    let img = lightBox.children[0].children[0].children[0];
    let index = img.dataset.index;
    console.log(typeof index);
    return Number(index)
}

rightButton.onclick = function () {
    /* Generate Index */
    let index = getIndexFromLightbox();
    let prevImgIndex = index + 1;
    console.log(prevImgIndex);
    if(typeof boxes[prevImgIndex] === "undefined"){
        prevImgIndex = 0;
    }
    /* get Previous Img */
    prevImg = boxes[prevImgIndex].src;
    prevImgDesc = boxes[prevImgIndex].nextElementSibling.innerText;
    // index missing

    /* Change current Img in Lightbox to Previous img*/
    let img = lightBox.children[0].children[0].children[0];
    img.src = prevImg;
    img.dataset.index = prevImgIndex;
    img.nextElementSibling.innerText = prevImgDesc;
};

generateThumbnails();

/** FUNCTIONS **/

function openLightBox(evt) {
    let imgSrc = evt.target.src;
    let imgDesc = evt.target.nextElementSibling.innerText;
    lightBox.style.display = 'block';
    let img = lightBox.children[0].children[0].children[0];
    img.src = imgSrc;
    img.dataset.index = evt.target.dataset.index;
    img.nextElementSibling.innerText = imgDesc;
}

function generateThumbnails() {
    let imgSrcs = [];

    /** get all img srcs */
    for (let i = 0; i < boxes.length; i++) {
        //imgSrcs.push(boxes[i].src);
        imgSrcs.push({
            src: boxes[i].src,
            desc: boxes[i].nextElementSibling.innerText
        });
    }
    console.log(imgSrcs);

    /** Build thumbnails */
    for (let i = 0; i < imgSrcs.length; i++) {
        let li = document.createElement('li');
        let img = document.createElement('img');

        img.src = imgSrcs[i].src;
        img.height = "50";
        img.alt = imgSrcs[i].desc;
        // delete me if you dont want thumbnail actions
        img.onclick = changeImgViaThumbnail;

        li.appendChild(img);
        let ul = document.querySelector('#thumbnails');
        ul.appendChild(li);
    }
}

function changeImgViaThumbnail(e) {
    console.log(e);
    let src = e.target.src;
    let img = lightBox.children[0].children[0].children[0];
    img.src = src;

    img.nextElementSibling.innerText = e.target.alt;
    return this;
}

function closeLightbox(e) {
    if (e.target.tagName !== 'IMG'
        && e.target.tagName !== 'LI'
        && e.target.tagName !== 'FIGCAPTION'
        && e.target.tagName !== 'UL'
        && e.target.tagName !== 'I'
    ) {
        lightBox.style.display = 'none';
    }

}

