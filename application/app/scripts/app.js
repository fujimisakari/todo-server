'use strict';

/**
 * @ngdoc overview
 * @name yoProjectApp
 * @description
 * # yoProjectApp
 *
 * Main module of the application.
 */
angular.module('yoProjectApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/todolist/:id', {
        templateUrl: 'app/views/todolist.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
