// try something

console.dir(document);

var ctaButton = document.getElementById('cta');

console.dir(ctaButton.parentElement.parentElement);

ctaButton
    .parentElement
    .parentElement
    .children[0]
    .innerHTML = "<button>Test</button>";