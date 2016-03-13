(function () {
  'use strict';

  angular
    .module('app.meerp.clients')
    .controller('LocateClientCtrl',
      [
        '$scope',
        '$ionicPopup',
        '$ionicHistory',
        'mapsService',
        'clientsService',
        'currentSaleService',
        LocateClientCtrl
      ]);

  function LocateClientCtrl($scope,
                            $ionicPopup,
                            $ionicHistory,
                            mapsService,
                            clientsService,
                            currentSaleService) {
    var vm = this;

    init(); // Initialize controller

    /**
     * Initialize google maps view.
     */
    function initMap() {
      var map = mapsService.initMap( document.getElementById('map') );
      var clientLocation = clientsService.getClientByLocation();
      mapsService.addMarker(map, clientLocation, retrieveClient);
    }

    /**
     * Displays client profile's popup with provided client data.
     * @param clientData: object
     */
    function showClientPopup(clientData) {
      $scope.client = clientData;

      // An elaborate, custom popup
      vm.clientPopup = $ionicPopup.show({
          templateUrl: '/app/meerp/clients/locate-client/client-profile-popup.html',
          title: 'Cliente',
          //subTitle: 'Cliente mayorista',
          scope: $scope,
          buttons: [
            {text: 'Cancelar'},
            {
              text: '<b>Aceptar</b>',
              type: 'button-positive',
              onTap: function (e) {
                // e.preventDefault() will stop the popup from closing when tapped.
                currentSaleService.setClient($scope.client);
                $ionicHistory.goBack();
              }
            }
          ]
        });
    }

    /**
     * Retrieves client data by given ID.
     * @param id: integer
     */
    function retrieveClient(id) {
      clientsService.getClientById(id)
        .then(function (client) {
          showClientPopup(client);
        })
        .catch(function (err) {
          // Catch error
        });
    }

    /**
     * Initializes controller setups.
     */
    function init() {
      initMap();
    }
  }

})();
