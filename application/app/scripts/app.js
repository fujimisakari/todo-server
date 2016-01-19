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
        controller: 'ContextController',
        controllerAs: 'context',
        templateUrl: 'app/views/todolist_all.html'
      })
      .when('/todolist/:listId', {
        controller: 'ContextController',
        controllerAs: 'context',
        templateUrl: 'app/views/todolist.html'
      })
      .when('/todoitem/:listId/:itemId', {
        controller: 'ContextController',
        controllerAs: 'context',
        templateUrl: function(params) {
            if (params.listId > 0) {
                return 'app/views/todolist.html';
            } else {
                return 'app/views/todolist_all.html';
            }
        }
      })
      .when('/search/:searchWord', {
        controller: 'SearchController',
        controllerAs: 'search',
        templateUrl: 'app/views/search.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
