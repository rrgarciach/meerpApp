(function () {
  'use strict';

  angular
    .module('app.meerp.services')
    .service('errorService', errorService);

  function errorService() {
    return {
      handleError: handleError,
    };

    function handleError(error) {
    }

  }

})();
