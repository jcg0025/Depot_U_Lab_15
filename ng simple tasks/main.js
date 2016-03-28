var app = angular.module('myApp', ['myApp.controllers', 'ngRoute', 'ngResource']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    });
}]);