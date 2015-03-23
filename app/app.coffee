angular
.module 'meow', ['ngCookies', 'ngRoute', 'ngMaterial', 'angulartics', 'angulartics.google.analytics']
.config ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: '/register.html'
      controller:  'RegisterController'
      controllerAs: 'controller'
    .when '/login',
      templateUrl: '/login.html'
      controller:  'LoginController'
      controllerAs: 'controller'
    .when '/:username',
      templateUrl: '/home.html'
      controller:  'HomeController'
      controllerAs: 'controller'
    .otherwise redirectTo: '/'
.run ($rootScope, $location) ->
