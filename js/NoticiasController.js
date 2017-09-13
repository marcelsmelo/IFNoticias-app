angular.module('mrl')
    .controller('NoticiasController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        $scope.news = [];
        $scope.carregaNoticias = function() {
            $scope.campus = undefined;
            if (typeof(Storage) !== "undefined") {
                $scope.campus = localStorage.getItem("campus");
                console.log("CAMPUS!", $scope.campus);
            } else {
                console.log("LocalStorage não suportado!!!");
            }
            $http({
                    method: 'POST',
                    url: 'http://localhost:3000/news',
                    data: { limit: 100, maxID: 4000 }
                })
                .then(
                    function(response) {
                        console.log(response.data);
                        $scope.news = response.data.data;
                    },
                    function(response) {
                        console.log(response)
                    });
        }

        // $scope.news = [
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Reitoria" },
        //     { titulo: "Título da Notícia que pode ser um pouco grande e querbrar uma linha e usar outra", descricao: "Velit magna ut consequat ad do voluptate non commodo et incididunt. Duis in non cillum cillum ad ullamco consectetur deserunt cupidatat ad nulla. Mollit irure irure ad enim laboris minim pariatur non voluptate mollit commodo cupidatat aute velit. Ad ut ea ut ex sit consequat labore nisi.", campus: "Morrinhos" },
        // ];

    }])
    .config(['$httpProvider', function($httpProvider) {
        //Reset headers to avoid OPTIONS request (aka preflight)
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }]);