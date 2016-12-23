google.maps.event.addDomListener(window, 'load', function () {
    var canvas = new google.maps.Map(document.getElementById('map-canvas'));
    var map = new googleMap("AIzaSyBhDzIGE3_VRBh00_fVYzL7nCmm9mIK2Dw", canvas);
    map.bound = true;
    map.setCenter(-31.1903, -63.4508);
    map.zoom(5);
    var markers = {
        data: [{
                "lat": -31.8729,
                "lng": -65.3513,
                "title": "San Javier"
            },
            {
                "lat": -31.6507,
                "lng": -63.3158,
                "title": "San Javier"
            },
            {
                "lat": -32.9022,
                "lng": -64.5608,
                "title": "La Aguada"
            }],
        callback: function (m) {
            console.log(m);
        }
    };
    map.addMarkers(markers);
});
//# sourceMappingURL=script.js.map