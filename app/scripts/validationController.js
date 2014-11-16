'use strict';

angular.module('angularValidators')
  .controller('ValidationController', function ($scope) {
    $scope.name = {
      value: undefined,
      detail: ''
    };
  });