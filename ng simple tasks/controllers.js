var controllers = angular.module('myApp.controllers', []);
controllers.controller('homeController', ['$scope', function($scope){
    $scope.alert = function(){
        alert('hello');
    }
    $scope.input = '';
    $scope.alertThis = function() {
       alert($scope.input)
    }
    $scope.friends = ['john', 'jacob', 'jingle', 'heimer', 'schmidt', 'his', 'name', 'is', 'mine','too']
}])