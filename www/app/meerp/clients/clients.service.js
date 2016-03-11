(function () {
  'use strict';

  angular
    .module('app.meerp.clients')
    .service('clientsService', [clientsService]);

  function clientsService() {
    return {
      getClientByLocation: getClientByLocation,
    };

    function getClientByLocation(location) {
      var location = {lat: 28.6618381, long: -106.1038576};
      var myLatlng = new google.maps.LatLng(location.lat, location.long);
      var clientLocation = {
        position: myLatlng,
        name: 'Juan Doe'
      };
      return clientLocation;
    }
  }

})();
