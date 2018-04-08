//Created By Elizabeth on 2018/03/06

angular.module('myApp', [], function(){

})
.factory('customerService',['$window', function($window){
    console.log($window);
}])

    //隐示依赖注入
.controller('firstCtrl', function($scope, customerService){
    console.log(customerService);
})
    //显示依赖注入
.controller('secondCtrl', ['$scope', '$filter', function(a, b){ //a为形参
    console.log(a);
    console.log(b('json')([1,2,3,4,5,6]));
}]);

function otherController(a){
    console.log(a);
}

otherController.$inject = ['$scope'];