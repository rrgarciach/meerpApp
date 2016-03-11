(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .service('currentSaleService', [currentSaleService]);

  function currentSaleService() {
    var sale = {};

    return {
      hasClient: hasClient
    };

    function hasClient() {
      return sale.client !== undefined;
    }

  }

})();
