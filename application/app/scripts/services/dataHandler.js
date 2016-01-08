'use strict';

angular.module('TodoApp')
  .factory('$dataHandler', [function () {
    return {
        getDataById: function (dataList, targetId) {
            for (var key in dataList) {
                if (dataList[key]['id'] == targetId) {
                    return dataList[key];
                }
            }
            return {}
        },

        getDataListById: function (dataList, targetName, targetId) {
            var resultList = []
            for (var key in dataList) {
                if (dataList[key][targetName] == targetId) {
                    resultList.push(dataList[key]);
                }
            }
            return resultList
        },

        isExist: function (dataList) {
            return (dataList.length > 0) ? true : false;
        },
    };
}]);

