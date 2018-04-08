//Created By Elizabeth on 2018/03/06

angular.module('myApp', [])
.controller('firstController', function($scope){
    $scope.status = true;
    $scope.changeStatus = function(event){

        // if($scope.status === true){
        //     $scope.status = false;
        // }else{
        //     $scope.status = true;
        // }

        console.log(event.target);

        $scope.status = !$scope.status;

        //angular 通过element转换成jQuery对象
        angular.element(event.target).html('切换状态' + !$scope.status);

    }
})