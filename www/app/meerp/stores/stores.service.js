(function () {
  'use strict';

  angular
    .module('app.meerp.stores')
    .service('storesService', storesService);

  function storesService() {
    // Revealing module pattern:
    return {
      getCurrentStore: getCurrentStore,
    };

    function getCurrentStore() {
      var storeId = 1;
      return storeId;
    }

  }

})();
