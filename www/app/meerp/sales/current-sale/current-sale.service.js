(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .service('currentSaleService', [currentSaleService]);

  function currentSaleService() {
    var sale = {
      products: []
    };

    return {
      getClient: getClient,
      setClient: setClient,
      setProduct: setProduct,
      getProducts: getProducts,
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
     * Sets a product into current sale
     * @param product: object
     */
    function setProduct(product) {
      sale.products.push(product);
    }

    /**
     * Retrieves all products from current sale
     * @returns {Array[product]}
     */
    function getProducts() {
      return sale.products;
    }

  }

})();
