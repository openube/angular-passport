'use strict';

angular.module('angularPassportApp')
  .controller('GuideCtrl', function ($scope, Blogs, $location, $routeParams, $rootScope) {
    console.log('hello from guide controller');
    $scope.message = "the message";
    
  } );
