//Created By Elizabeth on 2018/03/06

angular.module('myApp', [])
    .controller('firstController', function($scope){
        $scope.defaultStyle = {
            color: 'red',
            'margin-top': '50px',
            background: 'green'
        };

        $scope.status = true;

        $scope.changeStyle = function(){
            $scope.status = !$scope.status;
        };




    })