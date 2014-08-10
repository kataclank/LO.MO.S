'use strict';

angular.module('lomosApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var tareasAlmacenadas = localStorageService.get('tareas');
    $scope.tareas = tareasAlmacenadas || [];

    $scope.$watch('tareas', function () {
      localStorageService.add('tareas', $scope.tareas);
    }, true);

    $scope.addTarea = function () {
      var id = -1;
      angular.forEach($scope.tareas, function(tareaExistente) {
        if (tareaExistente.id > id) {
          id = tareaExistente.id;
        }
      });
      $scope.tarea.id = id + 1;

      $scope.tareas.push($scope.tarea);
      $scope.tarea = null;
    };

    $scope.removeTarea = function (index) {
      $scope.tareas.splice(index, 1);
    };
});
