var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["", "", "",
                    "","",""];
});


var app = angular.module("app", []);
  
app.controller("PruebaController", function($scope) {
  $scope.provincias=[
    {
      idProvincia:1,
      nombre:"Departamento"
    },
    {
      idProvincia:2,
      nombre:"Grados"
    },
    {
      idProvincia:3,
      nombre:"Genero"
    },
    {
      idProvincia:4,
      nombre:"Deptogrados"
    },  
    {
      idProvincia:5,
      nombre:"Especialidaddeptos"
    }
  ];
     
  $scope.miProvinciaSeleccionada={
      idProvincia:1,
      nombre:"Departamento"
    }
 
});