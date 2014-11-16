'use strict';

describe('Directive: Validate With Callback', function () {
  var $scope, $compile, form, element, HelloResource, queryDeferred;

  beforeEach(function () {
    module('angularValidators', function ($provide) {
      HelloResource = {};
      $provide.value('HelloResource', HelloResource);
    });

    inject(function ($rootScope, _$compile_, _$httpBackend_, _$q_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;

      HelloResource.get = function () {
        queryDeferred = _$q_.defer();

        return {
          $promise: queryDeferred.promise
        };
      };

      spyOn(HelloResource, 'get').and.callThrough();

      element = angular.element(
        '<form name="form">' +
        '<input ng-model="name.value" name="name" validator-with-callback="name" />' +
        '</form>'
      );

      $scope.name = {
        value: undefined,
        detail: ''
      };

      $compile(element)($scope);
      form = $scope.form;
    });
  });

  it('should call hell resource', function () {
    form.name.$setViewValue('Marc');

    $scope.$digest();
    queryDeferred.resolve();

    expect(HelloResource.get).toHaveBeenCalled();
  });

  it('should clear the detail property before validating', function () {
    $scope.name.detail = 'Hello Marc';
    form.name.$setViewValue('Peter');

    queryDeferred.reject();
    $scope.$digest();

    expect($scope.name.detail).toBe('');
    expect(form.name.$valid).toBe(false);
  });

  it('should set the detail property when resolved', function () {
    form.name.$setViewValue('Marc');

    queryDeferred.resolve({
      msg: 'Hello Marc'
    });
    $scope.$digest();

    expect($scope.name.detail).toBe('Hello Marc');
    expect(form.name.$valid).toBe(true);
  });

  it('should set the detail property when resolved', function () {
    form.name.$setViewValue('');

    queryDeferred.reject();
    $scope.$digest();

    expect($scope.name.detail).toBe('');
    expect(form.name.$valid).toBe(false);
  });
});