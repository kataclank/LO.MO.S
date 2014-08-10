'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('lomosApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('La lista de tareas debe ser vacía', function () {
    expect(scope.tareas.length).toBe(0);
  });

  it('Se pueden insertar tareas', function () {
    scope.tarea = {id: 1, descripcion: 'Test 1'};
    scope.addTarea();
    expect(scope.tareas.length).toBe(1);
  });

  it('Se pueden borrar tareas', function () {
    scope.tarea = {id: 1, descripcion: 'Test 1'};
    scope.addTarea();
    scope.removeTarea(0);
    expect(scope.tareas.length).toBe(0);
  });
});
