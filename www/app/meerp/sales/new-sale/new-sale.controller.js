(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('NewSaleCtrl', ['$location', NewSaleCtrl])

  function NewSaleCtrl($location) {
    var vm = this;
    vm.locateClient = locateClient;

    function locateClient() {
      $location.path('app/clients/locate');
    }
  }

})();
