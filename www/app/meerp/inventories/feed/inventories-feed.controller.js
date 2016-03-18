(function () {
  'use strict';

  angular
    .module('app.meerp.inventories')
    .controller('InventoryFeedCtrl', InventoryFeedCtrl);

  function InventoryFeedCtrl(errorService,
                             storesService,
                             productsService,
                             inventoriesService,
                             currentInventoryFeedService) {

    // Controller as vm pattern
    var vm = this;
    vm.store = {};
    vm.currentInventory = [];

    // Exposed methods:
    vm.captureProduct = captureProduct;

    init(); // Initialize controller

    /**
     * Captures new product
     * @param productCode
     */
    function captureProduct(productCode) {
      // Check if provided code is SKU or EAN:
      if (productCode > 6) { // If code is EAN
        productsService.getProductByEAN(productCode)
          .then(function (product) {
            addStock(product);
          })
          .catch(function (err) {
            errorService.handleError(err); // Catch error
          });
      } else { // If code is SKU
        productsService.getProductBySKU(productCode)
          .then(function (product) {
            addStock(product);
          })
          .catch(function (err) {
            errorService.handleError(err); // Catch error
          });
      }
      vm.productCode = '';
    }

    /**
     * Adds a new stock to current inventory being captured
     * @param product
     */
    function addStock(product) {
      vm.currentInventory.push(product);
      currentInventoryFeedService.addStock(product.sku);
    }

    /**
     * Finishes de capture process and updates stores' database
     */
    function finishCapture() {
      inventoriesService.updateInventories(vm.store.id);
    }

    /**
     * Initializes controller setups.
     */
    function init() {
      vm.store = storesService.getCurrentStore();
    }

  }

})();
