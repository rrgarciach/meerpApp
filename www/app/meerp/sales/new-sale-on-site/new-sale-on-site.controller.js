(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('NewSaleOnSiteCtrl', [
      '$location',
      '$ionicPopup',
      'currentSaleService',
      'productsService',
      NewSaleOnSiteCtrl
    ]);

  function NewSaleOnSiteCtrl($location,
                             $ionicPopup,
                             currentSaleService,
                             productsService) {
    var vm = this;

    vm.captureProduct = captureProduct;

    init(); // Initialize controller

    function captureProduct() {
      productsService.getProductsBySKU(vm.productCode)
        .then(function (product) {
          currentSaleService.setProduct(product);
          vm.sale.products = currentSaleService.getProducts();
          vm.productCode = '';
        })
        .catch(function (err) {
          // Catch error
        });
    }

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
