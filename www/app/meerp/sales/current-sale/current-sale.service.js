(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .service('currentSaleService', [currentSaleService]);

  function currentSaleService() {
    var sale = {};

    return {
      getClient: getClient
    };

    function getClient() {
      return sale.client !== undefined;
    }

  }

})();
