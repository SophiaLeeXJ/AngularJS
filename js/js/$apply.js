//Created By Elizabeth on 2017/12/31

var myApp = angular.module('controllerDate',[]);

myApp.controller('CtrlDate',['$scope', function($scope){
    $scope.date = new Date();

    setInterval(function(){
        $scope.$apply(function(){
            $scope.date = new Date();
        });
    },1000);
}]);