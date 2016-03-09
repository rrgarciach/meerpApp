angular
  .module('app.meerp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('sales', {
      url: '/sales/new',
      // abstract: true,
      templateUrl: './new-sale.html',
      controller: 'NewSaleCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/sales/new');
  });
  