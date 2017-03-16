var app = angular.module("app",['ngRoute']);

  app.config(function ($routeProvider){

    $routeProvider
      .when('/',{ //o trasladar app mas arriba o salir y ubicar bien el path de las viastas
        templateUrl : './views/users.html',
        controller : 'UserController'
      })
      .otherwise({
        redirectTo: './'
      });
});
