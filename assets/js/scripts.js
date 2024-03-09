// Smooth scroll
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    //FLECHA
    $('.arrow-up').on('click', function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });
});
$(document).ready(function () { //READY ASEGURA QUE PAGINA ESTE YA CARGADA
    $('[data-bs-toggle="tooltip"]').tooltip();
});
// 
$(document).ready(function () {
    $("#enviarMensaje").click(function () {
        alert("Tu mensaje fue enviado correctamente...");
    });
});