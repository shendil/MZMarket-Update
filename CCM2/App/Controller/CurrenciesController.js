mainApp.controller('CurrenciesController', ['CurrenciesSalesService', '$scope', function (CurrenciesSalesService, $scope) {
    angular.element(document).ready(function () {
    });

    $scope.load = function () {
        CurrenciesSalesService.readAll().then(function (response) {            
            $scope.datacard = response.data;
        });
    }
    $scope.load();
}]);

(function () {
    angular.module('mainApp')
        .service('CurrenciesSalesService', ['$http', CurrenciesSalesService]);
    function CurrenciesSalesService($http) {
        var self = this;
        self.readAll = function () {
            return $http({
                method: 'GET',
                url: '/App/JsonData/CurrenciesData.json',
            })
        };
    }
}());


