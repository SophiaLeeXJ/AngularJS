//Created By Elizabeth on 2017/12/31

var myApp = angular.module('controllerForth',[]);
myApp.controller('CtrlForth',['$scope',function($scope){
    $scope.firstName = 'Elizabeth';
    $scope.lastName = 'Smith';
    $scope.fullName = function(){
        return $scope.firstName + '  ' + $scope.lastName;
    }
}]);