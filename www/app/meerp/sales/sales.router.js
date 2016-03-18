(function () {
  'use strict';

  angular
    .module('app.meerp.sales')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app.sales:new', {
          url: '/sales/new',
          views: {
            'menuContent': {
              templateUrl: '/app/meerp/sales/new/new-sale.html',
              controller: 'NewSaleCtrl as vm',
            }
          }
        })
        .state('app.sales:new:onsite', {
          url: '/sales/new/:onsite',
          views: {
            'menuContent': {
              templateUrl: '/app/meerp/sales/new/new-sale.html',
              controller: 'NewSaleCtrl as vm',
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/sales/new');
    });

})();
