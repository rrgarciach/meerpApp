(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('LocateClientCtrl', [LocateClientCtrl])

  function LocateClientCtrl() {
    var vm = this;

    init();

    function initializeMap() {
      var myLatlng = new google.maps.LatLng(43.07493, -89.381388);

      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });

      vm.map = map;
    }

    function init() {
      initializeMap();
    }
  }

})();
