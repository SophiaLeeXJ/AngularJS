//Created By Elizabeth on 2018/1/1

var myApp = angular.module('ProviderApp',[], function($provide){ //模块的配置
    //自定义服务
    $provide.provider('CustomerService', function(){
        this.$get = function(){
            return {
                message: '欢迎来到共享乐园！'
            }
        }
    });

    //可以创建多个服务
    $provide.provider('CustomerService2', function(){
        this.$get = function(){
            return {
                message: '欢迎来到共享乐园2！'
            }
        }
    });
});

myApp.controller('ProCtrl',function($scope,CustomerService,CustomerService2){
    $scope.name = 'Alexander';
    console.log(CustomerService);
    console.log(CustomerService2);
});