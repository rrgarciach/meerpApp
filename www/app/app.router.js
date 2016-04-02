(function () {
  'use strict';

  angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/core/menu.html',
          controller: 'AppCtrl'
        });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/sales/new/1');
    });

})();
