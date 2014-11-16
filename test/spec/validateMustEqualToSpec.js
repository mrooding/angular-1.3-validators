'use strict';

describe('Directive: Validate Must Equal To', function () {
  var $scope, compile, form, element;

  beforeEach(function () {
    module('angularValidators');

    inject(function ($rootScope, $compile) {
      $scope = $rootScope.$new();
      compile = $compile;

      element = angular.element(
        '<form name="form">' +
        '<input name="password" id="password" ng-model="password" validate-must-equal-to="password2" form-name="form" />' +
        '<input name="password2" id="password2" ng-model="password2" />' +
        '</form>'
      );

      $scope.password = '';
      $scope.password2 = '';

      $compile(element)($scope);
      form = $scope.form;
    });
  });

  it('should validate when the other field is untouched', function () {
    form.password.$setViewValue('12345678');

    expect($scope.password).toBe('12345678');
    expect(form.password.$valid).toBeTruthy();
  });

  it('should validate when the other field\'s value is empty', function () {
    form.password.$setViewValue('12345678');
    form.password2.$untouched = false;
    form.password2.$setViewValue('');

    expect($scope.password).toBe('12345678');
    expect(form.password.$valid).toBeTruthy();
  });

  describe('both values do not equal', function () {
    beforeEach(function () {
      form.password2.$untouched = false;

      $scope.$apply(function () {
        $scope.password2 = '87654321';
      });
    });

    it('should invalidate field when its value is not equal to the other field', function () {
      form.password.$setViewValue('12345678');

      expect($scope.password).toBe(undefined);
      expect(form.password.$invalid).toBeTruthy();
    });

    it('should invalidate the other field when the value is not equal', function () {
      form.password.$setViewValue('12345678');

      expect(form.password2.$invalid).toBeTruthy();
    });
  });

  describe('both values are equal', function () {
    beforeEach(function () {
      form.password2.$untouched = false;

      $scope.$apply(function () {
        $scope.password2 = '12345678';
      });
    });

    it('should validate field when its value is equal to the other field', function () {
      form.password.$setViewValue('12345678');

      expect($scope.password).toBe('12345678');
      expect(form.password.$valid).toBeTruthy();
    });

    it('should invalidate the other field when the value is not equal', function () {
      form.password.$setViewValue('12345678');

      expect(form.password2.$valid).toBeTruthy();
    });
  });
});