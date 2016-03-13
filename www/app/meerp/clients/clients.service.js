(function () {
  'use strict';

  angular
    .module('app.meerp.clients')
    .service('clientsService', ['$q', clientsService]);

  function clientsService($q) {
    // Revealing module pattern:
    return {
      getClientById: getClientById,
      getClientByLocation: getClientByLocation,
    };

    /**
     * Retrieves a client by provided ID
     * @param clientId: integer
     * @returns {{id: number, type: string, name: string, avatar: string, address: {street: string, number: string, phone: string}}}
     */
    function getClientById(clientId) {
      var deferred = $q.defer();
      /*
       This is a mocked method for prototype usage.
       For real implementations it should use $http
       angular service to call a REST API resource.
       */
      var client = {
        id: 124,
        type: 'Cliente mayorista',
        name: 'Juan Doe',
        avatar: 'avatar',
        address: {
          street: 'Primera Norte',
          number: '123',
          phone: '(99) 99 9999',
        }
      };
      deferred.resolve(client);

      return deferred.promise;
    }

    /**
     * Retrieves a client's profile of the nearest location.
     * @param location: object: {latitude, longitude}
     * @returns {{position: google.maps.LatLng, id: number, name: string}}
     */
    function getClientByLocation(location) {
      var location = {lat: 28.6625200, long: -106.1034899};
      var myLatlng = new google.maps.LatLng(location.lat, location.long);
      var clientLocation = {
        position: myLatlng,
        id: 123,
        name: 'Juan Doe',
      };
      return clientLocation;
    }
  }

})();
