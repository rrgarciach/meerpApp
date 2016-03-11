(function () {
  'use strict';

  angular
    .module('app.meerp.services')
    .service('mapsService', [mapsService]);

  function mapsService() {
    return {
      initMap: initMap
  }

    function initMap() {
      var myLatlng = new google.maps.LatLng(28.6625306, -106.1033493);

      var mapOptions = {
        center: myLatlng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      var client = clientsService.getClientByLocation();
      var marker = new google.maps.Marker({
        position: client.position,
        map: map,
        title: client.name,
      });

      google.maps.event.addListener(marker, 'click', function () {
        showPopup();
      });

      var currentPosition = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        icon: 'http://maps.google.com/mapfiles/kml/pal4/icon57.png'
      });

      currentPosition.setMap(map);
      marker.setMap(map);

      return map;
    }

  }

})();
