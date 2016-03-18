(function () {
  'use strict';

  angular
    .module('app.meerp.services')
    .service('bluetoothSerialService', bluetoothSerialService);

  function bluetoothSerialService($q) {
    return {
      sendData: sendData,
    };

    function sendData(data) {
      var deferred = $q.defer();

      deferred.resolve(true);

      return deferred.promise;
    }

  }

})();
