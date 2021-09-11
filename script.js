
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


// Google Maps

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
//   