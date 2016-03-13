(function () {
  'use strict';

  angular
    .module('app.meerp.services')
    .service('mapsService', [mapsService]);

  function mapsService() {
    return {
      initMap: initMap,
      addMarker: addMarker,
    }

    function initMap(htmlMapElement) {
      var myLatlng = new google.maps.LatLng(28.6625306, -106.1033493);

      var mapOptions = {
        center: myLatlng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(htmlMapElement, mapOptions);

      var currentPosition = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/pal4/icon57.png'
      });

      currentPosition.setMap(map);

      return map;
    }

    function addMarker(map, clientLocation, clickAction) {
      var marker = new google.maps.Marker({
        position: clientLocation.position,
        map: map,
        title: clientLocation.name,
      });

      google.maps.event.addListener(marker, 'click', function () {
        clickAction();
      });

      marker.setMap(map);
    }

  }

})();
