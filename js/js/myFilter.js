//Created By Elizabeth on 2018/03/06

angular.module('myApp', [], function($filterProvider, $provide, $controllerProvider){
    $provide.service('Data', function(){
        return [
            {
                name: 'Elizabeth',
                age: 22,
                city: '北京'
            },
            {
                name: 'Alex',
                age: 21,
                city: '深圳'
            },
            {
                name: 'Anastasia',
                age: 25,
                city: '成都'
            },
            {
                name: 'Ella',
                age: 32,
                city: '杭州'
            },
            {
                name: '王子悦',
                age: 46,
                city: '西安'
            }
        ]
    });

    $filterProvider.register('filterAge', function(){
        return function(obj){
            var newObj = [];

            angular.forEach(obj, function(o){
                if(o.age > 22){
                    newObj.push(o);
                }
            });

            return newObj;
        }
    });

    $controllerProvider.register('firstCtrl', function($scope, Data){
        $scope.userData = Data;
        console.log(Data);
    })
})
//module.filter  模块的快捷方法
.filter('filterCity', function(){
    return function(obj){
        var newObj = [];

        angular.forEach(obj, function(o){
            if(o.city === '成都'){
                newObj.push(o);
            }
        })

        return newObj;
    }
});

