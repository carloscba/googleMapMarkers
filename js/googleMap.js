var googleMap = (function () {
    function googleMap(key, map) {
        this.bound = false;
        this.key = key;
        this.map = map;
        this.activeMarkers = [];
    }
    googleMap.prototype.setCenter = function (lat, lng) {
        var point = new google.maps.LatLng(lat, lng);
        this.map.setCenter(point);
    };
    googleMap.prototype.zoom = function (zoom) {
        this.map.setZoom(zoom);
    };
    googleMap.prototype.addMarker = function (lat, lng, data, callback) {
        var point = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            position: point,
            title: (data) ? data.title : "",
            map: this.map,
            data: data
        });
        this.activeMarkers.push(point);
        google.maps.event.addListener(marker, 'click', function (e) {
            if (data) {
                callback(marker);
            }
        });
    };
    googleMap.prototype.addMarkers = function (markers) {
        var _this = this;
        markers.data.forEach(function (marker, index) {
            _this.addMarker(marker.lat, marker.lng, marker, markers.callback);
        });
        if (this.bound) {
            this.setBound();
        }
    };
    googleMap.prototype.setBound = function () {
        var bounds = new google.maps.LatLngBounds();
        this.activeMarkers.forEach(function (point, index) {
            bounds.extend(point);
        });
        this.map.fitBounds(bounds);
    };
    return googleMap;
}());
//# sourceMappingURL=googleMap.js.map