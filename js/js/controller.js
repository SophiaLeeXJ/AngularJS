//Created By Elizabeth on 2017/12/30


// var firstController = function($scope){ //参数必须为$scope,因为这是AngularJS依赖注入的功能
//
//     // $scope是管理firstController的一个作用域
//     //申明一个model
//
//     $scope.name = 'Anastasia';
//     $scope.age = 20;
// };


/*
function firstController($scope){//参数必须为$scope,因为这是AngularJS依赖注入的功能
    // $scope是管理firstController的一个作用域
    //申明一个model

    $scope.name = 'Anastasia';
    $scope.age = 20;
}*/

var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyCtrl', ['$scope', function($scope){
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);