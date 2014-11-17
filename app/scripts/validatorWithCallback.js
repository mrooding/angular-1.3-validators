'use strict';

angular.module('angularValidators')
  .directive('validatorWithCallback', function (HelloResource) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var target = scope.$eval(attrs.validatorWithCallback);

        function callback(response) {
          if (_.isUndefined(target)) {
            return;
          }

          target.detail = response;
        }

        ngModel.$asyncValidators.validateWithCallback = function (modelValue, viewValue) {
          callback('');

          var value = modelValue || viewValue;

          return HelloResource.get({name: value}).$promise.then(function (response) {
            callback(response.msg);
          });
        };
      }
    };
  });