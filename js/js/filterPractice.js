//Created By Elizabeth on 2018/02/24

angular.module('product',[])
    .service('productData', function(){
        return [
            {
                id: 333,
                name: 'iphone',
                price: 5800
            },
            {
                id: 885,
                name: 'ipad',
                price: 3420
            },
            {
                id: 980,
                name: 'imac',
                price: 15600
            },
            {
                id: 121,
                name: 'ipad air',
                price: 2640
            },
            {
                id: 210,
                name: 'ipad mini',
                price: 2200
            }
        ]
    })
    .controller('productController', function($scope, productData){
        $scope.productData = productData;

        $scope.orderType = 'id';
        $scope.order = '-';

        $scope.changeOrder = function(type){
            $scope.orderType = type;
            if($scope.order === ''){
                $scope.order = '-';
            }else{
                $scope.order = '';
            }
        }

        console.log(productData);
    });
