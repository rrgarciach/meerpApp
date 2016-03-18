(function () {
  'use strict';

  angular
    .module('app.meerp.orders')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app.orders:viewr', {
          url: '/orders/view/:orderId',
          views: {
            'menuContent': {
              templateUrl: '/app/meerp/orders/view/orders-view.html',
              controller: 'ViewOrderCtrl as vm',
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/orders/view');
    });

})();
