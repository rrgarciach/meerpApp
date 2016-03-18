(function () {
  'use strict';

  angular
    .module('app.meerp.orders')
    .controller('ViewOrderCtrl', ViewOrderCtrl);

  function ViewOrderCtrl($stateParams, errorService, ordersService) {
    // Controller as vm pattern
    var vm = this;
    vm.order = {};
    // Exposed methods:
    vm.printOrder = printOrder;

    init(); // Initialize controller

    /**
     * Prints current order
     */
    function printOrder() {}

    /**
     * Initializes controller setups.
     */
    function init() {
      ordersService.getOrderById($stateParams.orderId)
        .then(function (response) {
          vm.order = response;
        })
        .catch(function (err) {
          errorService.handleError(err); // Catch error
        });
    }

  }

})();
