(function () {
  'use strict';

  angular
    .module('app.meerp.print')
    .service('thermalPrintService', thermalPrintService);

  function thermalPrintService() {
    // Revealing module pattern:
    return {
      print: print,
    };

    /**
     * Retrieves a product by provided SKU
     * @param data: Object
     */
    function print(data) {
      var deferred = $q.defer();
      /*
       This is a mocked method for prototype usage.
       For real implementations it should use $http
       angular service to call a REST API resource.
       */
      deferred.resolve(true);

      return deferred.promise;
    }

  }

})();
