/*
    elem.classList.add()
    elem.classList.remove()
    elem.classList.toggle()
*/


// Selektiere Buttons
let btns = document.getElementsByClassName('btn-info');
console.log(btns);

// Buttons brauchen ein Event
for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function (ev) {
        // sibling-text hat eine Klasse und ist damit unsichtbar (display none)
        console.log(ev);
        // klasse muss ihm weg genommen werden
        ev.target.nextElementSibling.classList.toggle('hidden');
                // => Textfeld erscheint
    }
}