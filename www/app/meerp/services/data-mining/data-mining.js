(function () {
  'use strict';

  angular
    .module('app.meerp.services')
    .service('dataMiningService', dataMiningService);

  function dataMiningService($q) {
    return {
      getClientReStock: getClientReStock,
    };

    function getClientReStock(clientId) {
      var deferred = $q.defer();

      var products = [
        {
          sku: 12597,
          description: 'Cinta para señalización',
          price: 35.00,
          brand: 'Truper',
        },
        {
          sku: 22606,
          description: 'Pinza para electricista',
          price: 19.00,
          brand: 'Truper',
        },
        {
          sku: 10940,
          description: 'Sellador de llantas',
          price: 58.00,
          brand: 'Truper',
        },
      ];

      deferred.resolve(products);

      return deferred.promise;
    }

  }

})();
