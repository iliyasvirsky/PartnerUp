
angular.module('PU', [
  'ngRoute',
  'PU.signin',
  'PU.main'
  ])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainController'
  })
  .when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'AuthController'
  })
})

// .run();