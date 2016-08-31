var mainApp = angular.module("mainApp", ['ngRoute','ngMaterial']);

mainApp.config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
		.when('/home', {
		    templateUrl: 'Views/home.html',
		    controller:'homeController'
		})
        .when('/GlobalIndices', {
            templateUrl: 'Views/GlobalIndices.html',
            controller: 'GlobalIndicesController'
        })
        .when('/Currencies', {
            templateUrl: 'Views/Currencies.html',
            controller: 'CurrenciesController'
        })
        .when('/Commodities', {
            templateUrl: 'Views/Commodities.html',
            controller: 'CommoditiesController'
        })
          .when('/TCMarket', {
              templateUrl: 'Views/TCMarket.html',
              controller: 'TCMarketController'
          })
         .when('/YTDPerformance', {
             templateUrl: 'Views/YTDPerformance.html',
             controller: 'YTDPerformanceController'
         })
        .when('/login', {
            templateUrl: 'Views/login.html',            
        })
		.otherwise({
		    redirectTo: '/login'
		});

    $mdThemingProvider.theme('pink')
    .primaryPalette('orange')
});






