(function () {
  'use strict';

  angular
    .module('app.meerp.print')
    .service('thermalPrintService', thermalPrintService);

  function thermalPrintService($q, $ionicPopup, bluetoothSerialService) {
    // Revealing module pattern:
    return {
      printOrder: printOrder,
    };

    /**
     * Retrieves a product by provided SKU
     * @param data: Order
     * @returns promise
     */
    function printOrder(data) {
      var deferred = $q.defer();

      bluetoothSerialService.sendData(data)
        .then(function () {
          showPrintSuccessPopUp(); // Display success popup
          deferred.resolve(true);
        })
        .catch(function (err) {
          deferred.reject(err);
        });


      return deferred.promise;
    }

    /**
     * Shows a print success popup
     * @returns $ionicPopup
     */
    function showPrintSuccessPopUp() {
      var printPopup = $ionicPopup.alert({
        title: 'Impresión Térmica',
        template: 'La solicitud de impresión has sido enviada exitosamente al dispositivo Impresión Térmica.'
      });

      return printPopup;

    }

  }

})();
