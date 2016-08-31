
mainApp.controller('CommonController', function ($scope) {
    $scope.redirection = function (redirectionlink) {             
        window.location = "#/" + redirectionlink + "";
    }
});