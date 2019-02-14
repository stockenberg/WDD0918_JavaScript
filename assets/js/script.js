


$('#gallery figure img').click(function (ev) {
    $('#lightbox')
        .fadeIn(500)
        .find('img')
        .attr('src', ev.target.src);

    $('#lightbox img').click(function () {
        $('#lightbox')
            .fadeOut(500);
    })
})

