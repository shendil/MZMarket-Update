mainApp.controller('YTDPerformanceController', ['$scope', function ($scope) {

    $scope.load = function () {
        var YTDChartCanvas = document.getElementById('YtdChart');
        var YTDChart = YTDChartCanvas.getContext("2d");
        var YTDChartdata = {
            labels: ["DJIA", "S&P 500", "NASDAQ", "RUS 2000"],
            datasets: [
                {
                    label: "Domestic Ytd",
                    backgroundColor: 'rgba(0, 176, 80, 1)',
                    borderWidth: 1,
                    data: ['5', '6', '2', '8'],
                }
            ]
        };

        var myYTDChart = new Chart(YTDChart, {
            type: 'bar',
            data: YTDChartdata,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 10,
                            min: 0,
                            stepSize: 1,
                            callback: function (value, index, values) {
                                return value + '%';
                            }
                        }
                    }]
                },
                barPercentage: 0.9,
             
            }
        });


        var YTDChartCanvas2 = document.getElementById('GlobalYtdChart');
        var YTDChart2 = YTDChartCanvas2.getContext("2d");
        var YTDChartdata2 = {
            labels: ["US", "Japan", "China", "Hong Kong", 'Germany', 'France', 'Uk,Brazil'],
            datasets: [
                {
                    label: "Global YTD",
                    backgroundColor: 'rgba(0, 176, 80, 1)',
                    borderWidth: 1,
                    data: ['4', '-15', '-5', '-8', '-8', '6', '24'],
                }
            ]
        };

        var myYTDChart2 = new Chart(YTDChart2, {
            type: 'bar',
            data: YTDChartdata2,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 10,
                            stepSize: 1,
                            callback: function (value, index, values) {
                                return value + '%';
                            }
                        }
                    }]
                },
                barPercentage: 0.9,
               
            }
        });




    }
    $scope.load();
}]);

