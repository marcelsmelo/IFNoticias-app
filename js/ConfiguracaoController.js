angular.module('mrl')
    .controller('ConfiguracaoController', ['$scope', '$http', function($scope, $http) {


        $scope.campus = {
            'reitoria': true,
            'camposBelos': true,
            'catalao': true,
            'ceres': true,
            'cristalina': true,
            'hidrolandia': true,
            'ipameri': true,
            'ipora': true,
            'morrinhos': true,
            'posse': true,
            'rioVerde': true,
            'trindade': true,
            'urutai': true
        };

        $scope.onChange = function() {
            console.log('CAMPUS', $scope.campus);
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("campus", $scope.campus);
                console.log("Salvando no LocalStorage!!!", $scope.campus);
            } else {
                console.log("LocalStorage não suportado!!!");
            }
        };
    }]);

{

}