(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('NewSaleOnSiteCtrl', ['$location', NewSaleOnSiteCtrl])

  function NewSaleOnSiteCtrl($location) {
    var vm = this;
    vm.locateClient = locateClient;

    function locateClient() {
      $location.path('app/clients/locate');
    }
  }

})();
