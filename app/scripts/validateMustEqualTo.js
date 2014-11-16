'use strict';

angular.module('angularValidators')
  .directive('validateMustEqualTo', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        if (_.isUndefined(attrs.formName)) {
          throw 'For this directive to function correctly you need to supply the form-name attribute';
        }

        function isEqualToOther(value) {
          var otherInput = scope[attrs.formName][attrs.validateMustEqualTo];
          if (_.isUndefined(otherInput)) {
            throw 'Cannot retrieve the second field to compare with from the scope';
          }

          var otherValue = otherInput.$modelValue || otherInput.$viewValue;
          if (otherInput.$untouched || _.isEmpty(otherValue)) {
            return true;
          }

          var isEqual = (value === otherValue);

          otherInput.$setValidity('notEqualTo', isEqual);

          return isEqual;
        }

        ngModel.$validators.notEqualTo = function (modelValue, viewValue) {
          var value = modelValue || viewValue;

          return isEqualToOther(value);
        };
      }
    };
  });