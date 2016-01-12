'use strict';

angular.module('todoApp')
  .factory('customSearch', [function () {
    return {
      filter: function (list, searchQuery, keyward) {
          if (searchQuery) {
              var query = searchQuery.replace(/　/g, ' ');
          }

          if (query && list) {
              var queryWordArray = query.split(' ');
              var filteredList = [];

              list.forEach(function (obj) {

                  var isMatch = false;
                  for (var strKey in queryWordArray) {
                      if (~obj[keyward].indexOf(queryWordArray[strKey])) {
                          isMatch = true;
                      } else {
                          isMatch = false;
                          break;
                      }
                  }

                  if (isMatch) {
                      filteredList.push(obj);
                  }
              });
              return filteredList;
          }
          return list;
        },
    };
}]);
