'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular.module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'SwampDragonServices',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/todolist_all.html',
        controller: 'ContextController',
        controllerAs: 'context'
      })
      .when('/todolist/:id', {
        templateUrl: 'app/views/todolist.html',
        controller: 'ContextController',
        controllerAs: 'context'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
