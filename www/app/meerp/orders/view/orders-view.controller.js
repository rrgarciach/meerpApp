(function () {
  'use strict';

  angular
    .module('app.meerp.orders')
    .controller('ViewOrderCtrl', ViewOrderCtrl);

  function ViewOrderCtrl($stateParams,
                         errorService,
                         ordersService,
                         productsService,
                         thermalPrintService) {
    // Controller as vm pattern
    var vm = this;
    vm.order = {};
    // Exposed methods:
    vm.printOrder = printOrder;

    init(); // Initialize controller

    /**
     * Load current order
     */
    function loadOrder() {
      // Requests Order by provided ID
      ordersService.getOrderById($stateParams.orderId)
        .then(function (order) {
          vm.order = order; // Binds order to current view
          loadProducts(); // Load current order's items
        })
        .catch(function (err) {
          errorService.handleError(err); // Catch error
        });
    }

    /**
     * Load current order's items
     */
    function loadProducts() {
      vm.order.items.forEach(function (item) {
        productsService.getProductBySKU(item.sku)
          .then(function (product) {
            item.description = product.description; // Adds description to item
          })
          .catch(function (err) {
            errorService.handleError(err); // Catch error
          });
      });
    }

    /**
     * Prints current order
     */
    function printOrder() {
      thermalPrintService.printOrder(vm.order)
        .catch(function (err) {
          errorService.handleError(err); // Catch error
        });
    }

    /**
     * Initializes controller setups.
     */
    function init() {
      loadOrder();
    }

  }

})();
