(function () {
  'use strict';

  angular
    .module('app.meerp.orders')
    .service('ordersService', ordersService);

  function ordersService() {
    // Revealing module pattern:
    return {
      getOrderById: getOrderById,
    };

    /**
     * Retrieves a product by provided SKU
     * @param sku: integer
     * @returns {product}
     */
    function getOrderById(id) {
      var deferred = $q.defer();
      /*
       This is a mocked method for prototype usage.
       For real implementations it should use $http
       angular service to call a REST API resource.
       */
      var order = {
        clientId: 123,
        date: '12-12-2015',
        status: 1,
        items: [
          {
            sku: 12597,
            quantity: 12,
            description: 'Cinta para señalización',
            price: 35.00,
            brand: 'Truper',
          },
          {
            sku: 22606,
            quantity: 24,
            description: 'Pinza para electricista',
            price: 23.00,
            brand: 'Pretul',
          },
        ],
      };
      deferred.resolve(product);

      return deferred.promise;
    }

  }

})();
