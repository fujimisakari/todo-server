'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:HeaderController
 * @description
 * # HeaderController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('HeaderController', ['$scope', '$dataHandler', '$location', function ($scope, $dataHandler, $location) {

    $scope.username = function() {
        return $dataHandler.user['username'];
    }

    $scope.moveToSearchController = function() {
        $location.path('search/' + $scope.confirmed);
    }
}]);
