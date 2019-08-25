function initMap() {
    // The location of TT
    var uluru = { lat: 25.0135, lng: 131.036 };
    // The map, centered at TT
    var map = new google.maps.Map(
        document.getElementById('googleMap'), { zoom: 4, center: uluru });
    // The marker, positioned at TT
    var marker = new google.maps.Marker({ position: uluru, map: map });
}