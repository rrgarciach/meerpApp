(function () {
  'use strict';

  angular
    .module('app.meerp.clients')
    .controller('LocateClientCtrl', ['$scope', '$ionicPopup', 'clientsService', LocateClientCtrl]);

  function LocateClientCtrl($scope, $ionicPopup, clientsService) {
    var vm = this;

    init();

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

      vm.map = map;
    }

    function showPopup() {
      vm.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: '/meerp/clients/locate-client/locate-clientr-popup.html',
        title: 'Juan Doe',
        subTitle: 'Cliente mayorista',
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
      });

      myPopup.then(function (res) {
        console.log('Tapped!', res);
      });

      //$timeout(function () {
      //  myPopup.close(); //close the popup after 3 seconds for some reason
      //}, 3000);
    };

    function init() {
      initMap();


    }
  }

})();
