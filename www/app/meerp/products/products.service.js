(function () {
  'use strict';

  angular
    .module('app.meerp.products')
    .service('productsService', ['$q', productsService]);

  function productsService($q) {
    // Revealing module pattern:
    return {
      getProductsBySKU: getProductsBySKU,
      getProductsByEAN: getProductsByEAN,
    };

    /**
     * Retrieves a product by provided SKU
     * @param sku: integer
     * @returns {product}
     */
    function getProductsBySKU(sku) {
      var deferred = $q.defer();
      /*
       This is a mocked method for prototype usage.
       For real implementations it should use $http
       angular service to call a REST API resource.
       */
      var product = {
        sku: 12597,
        description: 'Cinta para señalización',
        price: 35.00,
        brand: 'truper',
      };
      deferred.resolve(product);

      return deferred.promise;
    }

    /**
     * Retrieves a product by provided EAN code
     * @param ean: integer
     * @returns {product}
     */
    function getProductsByEAN(ean) {
      var deferred = $q.defer();
      /*
       This is a mocked method for prototype usage.
       For real implementations it should use $http
       angular service to call a REST API resource.
       */
      var product = {
        sku: 12597,
        description: 'Cinta para señalización',
        price: 35.00,
        brand: 'truper',
      };
      deferred.resolve(product);

      return deferred.promise;
    }
  }

})();
