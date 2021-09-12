
/* Função Botão Top */
$(document).ready(function () {
    $("#topBtn").hide()
    window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 200) {
            $("#topBtn").fadeIn("slow");
        } else {
            $("#topBtn").fadeOut("slow");
        }
    });
})
/* FIM Função Botão Top */


// Google Maps

function initMap() {
 
    
    var locations = [
        ['Boituva', -23.25439, -47.67175, 4],
        ['Rondonópolis', -16.50432, -54.65182, 5],
        ['Alagoinhas', -12.16797, -38.44848, 3],
        ['Teresópolis', -21.21950,-42.76265, 2],
        ['Petrópolis', -22.33324, -43.13501, 1],
        ['Itapissuma', -7.79055, -34.92782, 6],
        ['Bragança Paulista', -22.970576,-46.650323, 7],
        ['Uberaba', -20.03530,-47.78070, 8],
      ];
    
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: new google.maps.LatLng(-14.2350,-51.9253),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
      var infowindow = new google.maps.InfoWindow();
    
      var marker, i;
    
      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });
    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }}