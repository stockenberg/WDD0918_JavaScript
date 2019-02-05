let form = document.querySelector('form.col');
console.dir(form);


form[2].onblur = function (ev) {
    // console.log('blured');   
    console.log(form[2].value);
    if(form[2].value.length === 0){
       form[2].style.border = 'thin solid red';
       console.log('Bitte fülle die E-Mail aus');
    }
}

form[1].onblur = function (ev){
     // console.log('blured');   
     console.log(form[1].value);
     if(form[1].value.length === 0){
        form[1].style.border = 'thin solid red';
        console.log('Bitte gib deinen Namen ein');
     } 
}

form[4].onclick = function (ev) {
    console.log(ev);
    if(ev.target.checked === false){
        console.log('Bitte checke die AGB');
    }
}

/**
 * obj = {firstname: value, lastname: value, email: value};
 * arr = ['Hans', 'wurst', 'hans@wurst.de'];
 */


form.onsubmit = function (ev) {
    ev.preventDefault();
    console.log('test');
    console.log(ev);
    if (
        ev.target[1].value.length >= 2 && 
        ev.target[2].value.length >= 6 && ev.target[4].checked) {
        console.log('formval completed - submit Data');
    }

 
}