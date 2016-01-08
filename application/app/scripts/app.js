'use strict';

/**
 * @ngdoc overview
 * @name TodoApp
 * @description
 * # TodoApp
 *
 * Main module of the application.
 */
angular.module('TodoApp', [
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
        controller: 'ContextCtrl',
        controllerAs: 'context'
      })
      .when('/todolist/:id', {
        templateUrl: 'app/views/todolist.html',
        controller: 'ContextCtrl',
        controllerAs: 'context'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
