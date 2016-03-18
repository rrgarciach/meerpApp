(function () {
  'use strict';

  angular
    .module('app.meerp.orders')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app.orders:view', {
          url: '/orders/view',
          views: {
            'menuContent': {
              templateUrl: '/app/meerp/orders/view/view.html',
              controller: 'ViewOrderCtrl as vm',
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/orders/view');
    });

})();
