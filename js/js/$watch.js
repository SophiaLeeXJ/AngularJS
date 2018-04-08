//Created By Elizabeth on 2018/1/1

var myApp = angular.module('controllerFifth',[]);

myApp.controller('CtrlFifth',['$scope', function($scope){
    $scope.name = 'Elizabeth';
    $scope.count = 0;

    //监听一个model，当一个model改变时，都会触发两个函数
    $scope.$watch('name',function(newValue,oldValue){
        // console.log(newValue,oldValue);
        ++$scope.count;

        if($scope.count > 10){
            $scope.name = '已经大于10了！';
            $scope.count = 10;
            console.log('不能再加了！');
        }
    });

    //想要监听所有对象
    /*$scope.data = {
        name: 'Anastasia',
        count: 0
    };

    $scope.$wathch('data',function(){

    },true);*/


}]);