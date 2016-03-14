(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .service('currentSaleService', [currentSaleService]);

  function currentSaleService() {
    var sale = {
      items: []
    };

    return {
      getClient: getClient,
      setClient: setClient,
      setItem: setItem,
      getItems: getItems,
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

    /**
     * Sets an item into current sale
     * @param product: object
     */
    function setItem(product) {
      sale.items.push(product);
    }

    /**
     * Retrieves all items from current sale
     * @returns {Array[item]}
     */
    function getItems() {
      return sale.items;
    }

  }

})();
