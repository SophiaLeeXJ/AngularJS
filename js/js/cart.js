//Created By Elizabeth on 2018/1/1

var myApp = angular.module('controllerCart',[]);

myApp.controller('CartController',function($scope){
    $scope.cart = [
        {
            id: 100,
            name: 'iphone5s',
            quantity: 2,
            price: 4300,
            operate: 'delete'
        },
        {
            id: 110,
            name: 'iphone6',
            quantity: 1,
            price: 5000,
            operate: 'delete'
        },
        {
            id: 162,
            name: 'OPPO R11',
            quantity: 3,
            price: 3800,
            operate: 'delete'
        },
        {
            id: 170,
            name: '长虹',
            quantity: 4,
            price: 1200,
            operate: 'delete'
        },
        {
            id: 520,
            name: '华为520',
            quantity: 2,
            price: 3000,
            operate: 'delete'
        },
        {
            id: 195,
            name: 'vivo',
            quantity: 2,
            price: 3200,
            operate: 'delete'
        }
    ];

    //计算总价
    $scope.totalPrice = function(){
        var total = 0;

        angular.forEach($scope.cart,function(item){
            total += item.quantity * item.price;
        });
        return total;
    };

    //计算总购买产品数量
    $scope.totalQuantity = function(){
        var totalQuantity = 0;
        angular.forEach($scope.cart, function(item){
            totalQuantity += parseInt(item.quantity);
        });
        return totalQuantity;
    };

    //找一个元素的索引
    function findIndex(id){
        var index = -1;
        angular.forEach($scope.cart, function(item,key){
            if(item.id === id){
                index = key;
                return;
            }
        });
        return index;
    }

    //移除一项
    $scope.remove = function(id){
        var index = findIndex(id);

        if(index !== -1){
            $scope.cart.splice(index,1);
        }
    };

    //清空购物车 此处写在html标签中
    /*$scope.removeAll = function(){
        $scope.cart = {};
    };*/

    //数量减
    $scope.reduce = function(id){
        var index = findIndex(id);
        if(index !== -1){
            var item = $scope.cart[index];
            if(item.quantity > 1){
                item.quantity --;
            }else{
                var returnKey = confirm('是否要从购物车中删除该产品？');
                if(returnKey){
                    $scope.remove(id);
                }
            }
        }
    };

    //数量加
    $scope.add = function(id){
        var index = findIndex(id);
        $scope.cart[index].quantity ++;
    };

    //监听产品数量输入框中输入的数字，若为负数，提示错误信息
    $scope.$watch('cart', function(newValue,oldValue){
        angular.forEach(newValue, function(item,key){
            if(item.quantity < 1){
                var reWarning = confirm('您确定要删除购物车中的该产品吗？');
                if(reWarning){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                    return false;
                }
            }
        });
    },true);

});