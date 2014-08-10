'use strict';

/**
 * @ngdoc function
 * @name lomosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lomosApp
 */ 
angular.module('lomosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
