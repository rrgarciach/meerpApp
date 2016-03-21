(function () {
  'use strict';

  angular
    .module('app.meerp.services')
    .service('mapsService', mapsService);

  function mapsService($q) {
    return {
      initMap: initMap,
      getCurrentLocation: getCurrentLocation,
      addMarker: addMarker,
    };

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

    function getCurrentLocation() {
      var deferred = $q.defer();

      var pos = {lat: 28.6625200, lng: -106.1034899};

      deferred.resolve(pos);

      return deferred.promise;
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
