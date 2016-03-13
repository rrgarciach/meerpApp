(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('NewSaleCtrl', NewSaleCtrl);

  function NewSaleCtrl($location,
                       $ionicPopup,
                       $stateParams,
                       currentSaleService,
                       productsService) {

    var vm = this;
    vm.captureProduct = captureProduct;

    init(); // Initialize controller

    /**
     * Captures new product
     */
    function captureProduct() {
      productsService.getProductsBySKU(vm.productCode)
        .then(function (product) {
          // Persist products in current sale
          currentSaleService.setProduct(product);
          // Also update controller's sale object
          vm.sale.products = currentSaleService.getProducts();
          // Clear input value to be ready for next capture
          vm.productCode = '';
        })
        .catch(function (err) {
          // Catch error
        });
    }

    /**
     * Displays initial instructions alert.
     */
    function showAlertOnSiteInstructions() {
      $ionicPopup.alert({
        title: 'Nueva Venta in situ',
        template: 'Seleccione el cliente al cual visita.'
      });
    }

    /**
     * Initializes controller setups.
     */
    function init() {
      vm.sale = {}; // Current controller's sale object
      // Retrieve client from current sale service.
      vm.sale.client = currentSaleService.getClient();

      // Check if current sale has not a client selected yet
      if (!vm.sale.client && $stateParams.onsite) {
        // Redirect to locate a client using map
        $location.path('app/clients/locate');
        // Display instructions
        showAlertOnSiteInstructions();
      }

    }

  }

})();
