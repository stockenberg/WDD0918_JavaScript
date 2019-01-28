/** Variables **/
let boxes = document.querySelectorAll('.lightbox');
let lightBox = document.querySelector('#lightbox');
let controlBtns = document.querySelector('.controls').children;
let leftButton = controlBtns[0];
let rightButton = controlBtns[1];

/**  INIT  */
generateThumbnails();


/**
 * #### EVENTS #####
 * */

for (let index = 0; index < boxes.length; index++) {
    boxes[index].onclick = openLightBox;
}

/** Close Lightbox **/
lightBox.onclick = closeLightbox;

/** Navigate through Images in Lightbox */
leftButton.onclick = function () {
    /* Generate Index */
    let prevImgIndex = getIndexFromLightbox() - 1;
    changeImgByIndex(prevImgIndex, boxes.length - 1);
};

rightButton.onclick = function () {
    /* Generate Index */
    let nextImgIndex = getIndexFromLightbox() + 1;
    changeImgByIndex(nextImgIndex, 0);
};

/**
 * #### FUNCTIONS ####
 * **/

/**
 * Click on a Thumbnail changes the Img in Lightbox
 * @param e
 * @returns {changeImgViaThumbnail}
 */
function changeImgViaThumbnail(e) {
    console.log(e);
    let src = e.target.src;
    let img = getImgFromLightbox();
    img.src = src;

    img.nextElementSibling.innerText = e.target.alt;
    return this;
}

/**
 * CLose Lightbox on click except for these ELements
 * IMG, LI, FIGCAPTION, UL, I
 * @param e
 */
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

/**
 * Next and Previous Handler
 * @param index
 * @param loopIndex
 */
function changeImgByIndex(index, loopIndex) {
    if(typeof boxes[index] === "undefined"){
        index = loopIndex;
    }

    /* get Previous Img */
    let prevImg = boxes[index].src;
    let prevImgDesc = boxes[index].nextElementSibling.innerText;
    // index missing

    /* Change current Img in Lightbox to Previous img*/
    let img = getImgFromLightbox();
    img.src = prevImg;
    img.dataset.index = index;
    img.nextElementSibling.innerText = prevImgDesc;
}

/**
 * Get Index From Lightbox
 * @returns {number}
 */
function getIndexFromLightbox() {
    let img = lightBox.children[0].children[0].children[0];
    let index = img.dataset.index;
    return Number(index)
}

/**
 * Generates Thumbnails on OpenLightbox Event
 */
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

/**
 * Get Image from Lightbox
 * @returns {Element}
 */
function getImgFromLightbox() {
    return lightBox.children[0].children[0].children[0];
}

/**
 * Opens the Lightbox
 * @param evt
 */
function openLightBox(evt) {
    let imgSrc = evt.target.src;
    let imgDesc = evt.target.nextElementSibling.innerText;
    lightBox.style.display = 'block';
    let img = getImgFromLightbox();
    img.src = imgSrc;
    img.dataset.index = evt.target.dataset.index;
    img.nextElementSibling.innerText = imgDesc;
}



