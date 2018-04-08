//Created By Elizabeth on 2018/02/22
angular.module('myApp',[])
    .factory('Data',function(){
        //this.$get = function(){}
        return {
            message: '多个控制器内共享数据'
        }
    })
    .controller('shareDataFirstContrl', function($scope, Data){
        $scope.data = {
            name: 'Elizabeth'
        };

        $scope.Data = Data;
        console.log($scope);
    })
    .controller('shareDataSecContrl', function($scope, Data){
        console.log($scope);
        $scope.data = $scope.$$prevSibling.data;

        $scope.Data = Data;
    });