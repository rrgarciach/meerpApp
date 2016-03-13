(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .service('currentSaleService', [currentSaleService]);

  function currentSaleService() {
    var sale = {};

    return {
      getClient: getClient,
      setClient: setClient,
    };

    /**
     * Sets current sale's client
     * @param client: object
     */
    function setClient(client) {
      sale.client = client;
    }

    /**
     * Gets current sale's client
     * @returns {client: object}
     */
    function getClient() {
      return sale.client;
    }

  }

})();
