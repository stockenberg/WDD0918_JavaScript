let form = document.querySelector('form.col');

/**
 * TODO:
 * - Reset Red Color
 * - Print error message in HTML
 * - remove redundancies
 */

let errorMessages = {
    lastname: 'Bitte gib deinen Namen ein',
    email: {
        empty: 'Bitte fülle die E-Mail aus',
        nomatch: 'Deine E-Mail-Adresse ist nicht korrekt'
    }
};

/**
 * gets and HTML element and an error message
 * changes border on HTML-element and prints message in console
 * @param {*} elem 
 * @param {*} error 
 */
function setError(elem, error) {
    elem.style.border = 'thin solid #ffafb4';
    iziToast.show({
        title: 'Error!',
        message: error,
        color: 'red',
        position: 'topCenter'
    });
   
}

/**
 * Iteration over lastname and email field, validation
 */
for (let i = 1; i < 3; i++) {
    form[i].onblur = function (ev) {
        
        /** checks the given input:type */
        switch (ev.target.type) {
            /* If Input type is email - then validate email field */
            case 'email':
                let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (ev.target.value.length === 0) {
                    setError(ev.target, errorMessages[ev.target.id].empty);
                }else{
                    if(ev.target.value.match(regexp)){
                        ev.target.style.border = null;
                    }else{
                        setError(ev.target, errorMessages[ev.target.id].nomatch);
                    }
                }

                break;
            /** if the input type is anything else - validate empty */
            default:
                if (ev.target.value.length === 0) {            
                    setError(ev.target, errorMessages[ev.target.id]);
                }else{
                    ev.target.style.border = null;
                }
                break;
        }
    }
}


/**
 * Checks content from firstname and lastname.
 * Checks checkbox if is enabled
 */
form.onsubmit = function (ev) {
    ev.preventDefault();
   
    if (
        ev.target[1].value.length >= 2 &&
        ev.target[2].value.length >= 6 && ev.target[4].checked) {
            iziToast.show({
                title: 'Success!',
                message: 'Formular erfolgreich abgeschickt',
                color: 'green',
                position: 'topCenter'
            });
    }


}