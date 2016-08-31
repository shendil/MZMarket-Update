mainApp.controller('TCMarketController', ['TCMarketService', '$scope', function (TCMarketService, $scope) {

    $scope.load = function () {
        TCMarketService.readAll().then(function (response) {
            debugger;
            $scope.datacard = response.data;
        });
    }
    $scope.load();
}]);

(function () {
    angular.module('mainApp')
        .service('TCMarketService', ['$http', TCMarketService]);
    function TCMarketService($http) {
        var self = this;
        self.readAll = function () {
            return $http({
                method: 'GET',
                url: '/App/JsonData/TCMarket.json',
            })
        };
    }
}());





