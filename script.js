
/* Função Botão Top */
$(document).ready(function () {
    $("#topBtn").hide()
    window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 300) {
            $("#topBtn").fadeIn("slow");
        } else {
            $("#topBtn").fadeOut("slow");
        }
    });
})
/* FIM Função Botão Top */