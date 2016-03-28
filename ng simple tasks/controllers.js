var controllers = angular.module('myApp.controllers', []);
controllers.controller('homeController', ['$scope', function($scope){
    $scope.alert = function(){
        alert('hello');
    }
}])