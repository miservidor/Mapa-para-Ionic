/* angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

$stateProvider.state('home', {
  url: '/',
  templateUrl: 'templates/mapa.html'
})
})
 */

angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            })
            .state('mapa', {
                url: '/mapa',
                templateUrl: 'templates/mapa.html',
                controller: 'MapCtrl'
            })
			.state('settings', {
                url: '/settings',
                templateUrl: 'templates/settings.html',
                controller: 'MapCtrl'
            })
			.state('latapp', {
                url: '/latapp',
                templateUrl: 'templates/latapp.html',
                controller: 'MapCtrl'
            });
        $urlRouterProvider.otherwise('/settings');
    });