/*
    elem.classList.add()
    elem.classList.remove()
    elem.classList.toggle()
*/

// Variables to store Elements, to check if the Elements are equal
let currentElement;
let previousElement;

// Selektiere Buttons
let btns = document.getElementsByClassName('btn-info');
console.log(btns);

// Buttons brauchen ein Event
for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function (ev) {

        // Store current Element
        currentElement = ev.target;

        // If first element matches last element
        if(currentElement === previousElement){
            console.log('elemente sind gleich');
            // Toggle Accordion
            ev.target.nextElementSibling.classList.toggle('visible');
        }
        // IF first element not equal last element
        else{
            console.log('elemente sind ungleich');
            // Get all elements with visible class
            let visible = document.getElementsByClassName('visible')[0];

            if (typeof visible !== 'undefined'){
                // remove visible class (accordion is closed)
                visible.classList.remove('visible');
                console.log('removed');
            }
            // open clicked accordion entry
            ev.target.nextElementSibling.classList.add('visible');

        }
        // Store last element (in 2nd iteration)
        previousElement = ev.target;
    }
}