//Created By Elizabeth on 2018/1/1

var myApp = angular.module('myApp',[], function($provide){

    //自定义服务
    $provide.provider('CustomerProvider', function(){
        this.$get = function(){
            return {
                message: '$provide里的factory和service方法'
            }
        }
    });

    //自定义工厂
    $provide.factory('CustomerFactory', function(){
        this.$get = function(){
            return [1,2,3]
        }
    });

    $provide.service('CustomerService', function(){
        this.$get = function(){
            return ['上海','北京','广州'];
        }
    })
});

myApp.controller('FactoryCtrl', function($scope, CustomerFactory, CustomerService){
    $scope.name = 'Elizabeth';
    console.log(CustomerFactory);
    console.log(CustomerService);
});