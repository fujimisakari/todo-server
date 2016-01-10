'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:HeaderController
 * @description
 * # HeaderController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('HeaderController', ['$scope', '$location', function ($scope, $location) {

    $scope.moveToSearchController = function() {
        $location.path('search/' + $scope.confirmed);
    }
}]);
