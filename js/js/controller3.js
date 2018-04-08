//Created By Elizabeth on 2017/12/31 22:45

var myApp = angular.module('controllerThird',[]);

myApp.controller('CtrlThird',['$scope',function($scope){
    $scope.double = function(value){
        return value * 2;
    }
}]);