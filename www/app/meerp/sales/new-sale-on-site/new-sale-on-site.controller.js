(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .controller('NewSaleOnSiteCtrl', ['$scope', '$ionicModal', NewSaleOnSiteCtrl])

  function NewSaleOnSiteCtrl($scope, $ionicModal) {
    var vm = this;
    vm.openModal = openModal;
    vm.closeModal = closeModal;

    init(); // Initialize controller

    // Open modal
    function openModal() {
      vm.modal.show();
    }
    // Close modal
    function closeModal() {
      vm.modal.hide();
    }
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      vm.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });

    function init() {
      // Setup modal with map to locate client
      $ionicModal.fromTemplateUrl('app/meerp/clients/locate-client/locate-client-modal.html', {
          scope: $scope,
          animation: 'slide-in-up',
        })
        .then(function (modal) {
          vm.modal = modal;
          vm.modal.show();
        });
    }

  }

})();
