(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('NewSaleCtrl', NewSaleCtrl);

  function NewSaleCtrl($scope,
                       $location,
                       $ionicPopup,
                       $stateParams,
                       currentSaleService,
                       productsService,
                       dataMiningService) {

    // Controller as vm pattern
    var vm = this;
    vm.captureProduct = captureProduct;

    init(); // Initialize controller

    /**
     * Captures new product
     */
    function captureProduct(productCode) {
      // Check if provided code is SKU or EAN:

      if (productCode > 6) { // If code is EAN
        productsService.getProductByEAN(productCode)
          .then(function (product) {
            addItem(product);
          })
          .catch(function (err) {
            // Catch error
          });
      } else { // If code is SKU
        productsService.getProductBySKU(productCode)
          .then(function (product) {
            addItem(product);
          })
          .catch(function (err) {
            // Catch error
          });
      }
    }

    function addItem(product) {
      showProductQuantityPopUp()
        .then(function (qty) {
          product.quantity = qty;

          if (product.quantity > 0) {
            // Persist products in current sale
            currentSaleService.setItem(product);
            // Also update controller's sale object
            vm.sale.items = currentSaleService.getItems();
            // Clear input value to be ready for next capture
            vm.productCode = '';
          }
        });
    }

    /**
     * Displays initial instructions alert.
     */
    function showAlertOnSiteInstructions() {
      $ionicPopup.alert({
        title: 'Nueva Venta in situ',
        template: 'Seleccione el cliente al cual visita.'
      });
    }

    function showProductQuantityPopUp() {
      $scope.data = {qty: 0};

      var qtyPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.qty">',
        title: 'Cantidad',
        //subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          {
            text: 'Cancel',
            onTap: function() {
              return 0;
            }
          },
          {
            text: '<b>Aceptar</b>',
            type: 'button-positive',
            onTap: function(e) {
              if ($scope.data.qty > 0) {
                return $scope.data.qty;
              }
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            }
          }
        ]
      });

      return qtyPopup;

    }

    /**
     * Initializes controller setups.
     */
    function init() {
      vm.sale = {}; // Current controller's sale object
      // Retrieve client from current sale service.
      vm.sale.client = currentSaleService.getClient();

      // Check if current sale has not a client selected yet
      if (!vm.sale.client && $stateParams.onsite) {
        // Redirect to locate a client using map
        //$location.path('app/clients/locate');
        // Display instructions
        //showAlertOnSiteInstructions();

      } else if (vm.sale.client) { // If a client has already been selected
        // Get client required stock suggests from data mining service
        dataMiningService.getClientReStock(vm.sale.client)
          .then(function (products) {
            // If suggested re-stock found, add them to current new sale
            if (products.length > 0) {
              products.forEach(function (item) {
                captureProduct.setItem(item);
              });
            }
          })
          .then(function (err) {
            // Catch error
          })

      }

    }

  }

})();
