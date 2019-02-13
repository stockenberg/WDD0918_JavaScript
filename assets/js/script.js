

let tabs = document.querySelectorAll('.nav li');
console.log(tabs);

for(let i = 0; i < tabs.length; i++){
    tabs[i].onclick = function (ev) {
        ev.preventDefault();
        // remove active class
        document.getElementsByClassName('active')[0]
                    .classList.remove('active');

        /* Activate clicked tab */
        ev.target.parentElement.classList.add('active');


        /* Converts an HTML Collection to an regular Array */
        let arr = [].slice.call(ev.target.parentElement.parentElement.children);
        
        /* GET index from li element */
        let index = arr.indexOf(ev.target.parentElement);

        document.getElementsByClassName('show')[0]
                    .classList.remove('show');
                    
        document.getElementsByClassName('tabs')[0].children[index]
                    .classList.add('show');

    }

}