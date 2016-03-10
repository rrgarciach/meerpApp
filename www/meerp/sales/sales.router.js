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
              templateUrl: '/meerp/sales/new-sale.html',
              controller: 'NewSaleCtrl as vm',
            }
          }
        })
        .state('app.sales:new:locate', {
          url: '/sales/new/locate',
          views: {
            'menuContent': {
              templateUrl: '/meerp/sales/locate-client.html',
              controller: 'LocateClientCtrl as vm',
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/sales/new');
    });

})();
