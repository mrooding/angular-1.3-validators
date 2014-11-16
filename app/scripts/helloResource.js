'use strict';

angular.module('angularValidators')
  .factory('HelloResource', function ($resource) {
    return $resource(
      '/api/hello/:name',
      {
        name: '@name'
      },
      {}
    );
  });