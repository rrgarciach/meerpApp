(function () {
  'use strict';

  angular
    .module('app.meerp.orders')
    .controller('ViewOrderCtrl', ViewOrderCtrl);

  function ViewOrderCtrl() {
    // Controller as vm pattern
    var vm = this;
    // Exposed methods:
    vm.captureProduct = captureProduct;

    init(); // Initialize controller

    /**
     * Initializes controller setups.
     */
    function init() {
      vm.store = storesService.getCurrentStore();
    }

  }

})();
