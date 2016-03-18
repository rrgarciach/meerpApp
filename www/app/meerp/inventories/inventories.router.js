(function () {
  'use strict';

  angular
    .module('app.meerp.inventories')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app.inventories', {
          url: '/inventories/feed',
          views: {
            'menuContent': {
              templateUrl: '/app/meerp/inventories/feed/feed.html',
              controller: 'InventoryFeedCtrl as vm',
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/inventories/feed');
    });

})();
