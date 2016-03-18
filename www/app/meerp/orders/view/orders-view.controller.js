(function () {
  'use strict';

  angular
    .module('app.meerp.orders')
    .controller('ViewOrderCtrl', ViewOrderCtrl);

  function ViewOrderCtrl($stateParams,
                         errorService,
                         ordersService,
                         thermalPrintService) {
    // Controller as vm pattern
    var vm = this;
    vm.order = {};
    // Exposed methods:
    vm.printOrder = printOrder;

    init(); // Initialize controller

    /**
     * Prints current order
     */
    function loadOrder() {
      // Requests Order by provided ID
      ordersService.getOrderById($stateParams.orderId)
        .then(function (response) {
          vm.order = response; // Binds order to current view
        })
        .catch(function (err) {
          errorService.handleError(err); // Catch error
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
