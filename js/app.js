var mrl = angular.module('mrl', ['ngMaterial', 'ngRoute']);

mrl.controller('MainController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    $scope.toggleLeft = function() { $mdSidenav('left').toggle(); };
    $scope.noticias = function() {
        window.location = '/#!/noticias';
        $mdSidenav('left').toggle();
    };
    $scope.telefones = function() {
        window.location = '/#!/telefones';
        $mdSidenav('left').toggle();
    };
    $scope.configuracao = function() {
        window.location = '/#!/configuracao';
        $mdSidenav('left').toggle();
    };

}]);

mrl.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('purple');

    $routeProvider
        .when('/noticias', {
            templateUrl: 'includes/noticias.html',
            controller: 'NoticiasController'
        })
        .when('/telefones', {
            templateUrl: 'includes/telefones.html',
            controller: 'TelefonesController'
        })
        .when('/configuracao', {
            templateUrl: 'includes/configuracao.html',
            controller: 'ConfiguracaoController'
        })
        .otherwise({ redirectTo: '/noticias' });
}]);