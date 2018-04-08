//Created By Elizabeth on 2018/02/22

angular.module('myApp', [])
    .factory('Data', function(){
        return {
            message: '过滤器'
        }
    })
    .controller('filterContrl', function($scope, Data){

        $scope.today = new Date();

        console.log(Data.message);
    });