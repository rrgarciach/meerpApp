(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('NewSaleOnSiteCtrl', ['$location', '$ionicPopup', 'currentSaleService', NewSaleOnSiteCtrl])

  function NewSaleOnSiteCtrl($location, $ionicPopup, currentSaleService) {
    var vm = this;

    init(); // Initialize controller

    /**
     * Displays initial instructions alert.
     */
    function showAlert() {
      $ionicPopup.alert({
        title: 'Nueva Venta in situ',
        template: 'Seleccione el cliente al cual visita.'
      });
    }

    /**
     * Initializes controller setups.
     */
    function init() {
      vm.sale = {};
      vm.sale.client = currentSaleService.getClient();
      // Check if current sale has not a client selected yet
      if (!vm.sale.client) {
        // Redirect to locate a client using map
        $location.path('app/clients/locate');
        showAlert();
      }
    }

  }

})();
