(function () {
  'use strict';

  angular
    .module('app.meerp.inventories')
    .service('currentInventoryFeedService', currentInventoryFeedService);

  function currentInventoryFeedService(errorService, inventoriesService) {
    // Revealing module pattern:
    return {
      addStock: addStock,
      saveInventory: saveInventory,
    };

    function addStock(sku) {
      // Adds sku to current inventory being captured.
    }

    function saveInventory(storeId) {
      var deferred = $q.defer();

      inventoriesService.updateInventories(storeId, inventories)
        .then(function (response) {
          deferred.resolve(response);
        })
        .catch(function (err) {
          deferred.reject(err);
        });
      return deferred.promise;
    }

  }

})();
