(function () {
  'use strict';

  angular
    .module('app.meerp.clients')
    .controller('LocateClientCtrl',
      [
        '$scope',
        '$ionicPopup',
        'mapsService',
        'clientsService',
        LocateClientCtrl
      ]);

  function LocateClientCtrl($scope, $ionicPopup, mapsService, clientsService) {
    var vm = this;

    init();

    function initMap() {
      var map = mapsService.initMap( document.getElementById('map') );
      var clientLocation = clientsService.getClientByLocation();
      mapsService.addMarker(map, clientLocation, showPopup);
    }

    function showPopup() {
      vm.data = {};

      // An elaborate, custom popup
      $ionicPopup.show({
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
                e.preventDefault();
                return $scope;
              }
            }
          ]
        })
        .then(function (res) {
          console.log('Tapped!', res);
        });

      //$timeout(function () {
      //  myPopup.close(); //close the popup after 3 seconds for some reason
      //}, 3000);
    }

    function init() {
      initMap();

    }
  }

})();
