(function () {
  'use strict';

  angular
    .module('app.meerp.clients')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app.clients:locate', {
          url: '/clients/locate',
          views: {
            'menuContent': {
              templateUrl: '/app/meerp/clients/locate/locate-client.html',
              controller: 'LocateClientCtrl as vm',
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/clients/locate');
    });

})();
