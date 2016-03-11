(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('NewSaleOnSiteCtrl', ['$location', '$ionicPopup', 'currentSaleService', NewSaleOnSiteCtrl])

  function NewSaleOnSiteCtrl($location, $ionicPopup, currentSaleService) {
    var vm = this;

    init(); // Initialize controller

    function init() {
      // Check if current sale has not a client selected yet
      if (!currentSaleService.hasClient()) {
        // Redirect to locate a client using map
        $location.path('app/clients/locate');
        showAlert();
      }
    }

    function showAlert() {
      $ionicPopup.alert({
        title: 'Nueva Venta in situ',
        template: 'Seleccione el cliente al cual visita.'
      });
    }

  }

})();
