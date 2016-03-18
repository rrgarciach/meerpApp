(function () {
  'use strict';

  angular
    .module('app.meerp.inventories')
    .service('inventoriesService', inventoriesService);

  function inventoriesService() {
    // Revealing module pattern:
    return {
      updateInventories: updateInventories,
    };

    /**
     * Updates store's inventories
     * @param storeId: integer
     * @param inventories: [stock]
     * @returns success: boolean
     */
    function updateInventories(storeId, inventories) {
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
