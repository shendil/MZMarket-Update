mainApp.controller('CommoditiesController', ['CommoditiesSalesService', '$scope', function (CommoditiesSalesService, $scope) {
    debugger;
    $scope.load = function () {
        CommoditiesSalesService.readAll().then(function (response) {
            debugger;
            $scope.datacard = response.data;

        });
    }
    $scope.load();
}]);



(function () {
    angular.module('mainApp')
        .service('CommoditiesSalesService', ['$http', CommoditiesSalesService]);

    function CommoditiesSalesService($http) {
        var self = this;
        self.readAll = function () {
            return $http({
                method: 'GET',
                url: '/App/JsonData/CommoditiesData.json',
            })
        };
    }
}());