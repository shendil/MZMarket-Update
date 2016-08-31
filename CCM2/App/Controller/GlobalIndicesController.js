mainApp.controller('GlobalIndicesController', ['GlobalIndicesService', '$scope', function (GlobalIndicesService, $scope) {
    angular.element(document).ready(function () {
    });

    $scope.foo = function ($event) {

        if ($($event.target).hasClass('fa-caret-down')) {
            $($event.target).parents('.parent-chart').find('.chart-content').addClass('openChartContent')
            $($event.target).removeClass('fa-caret-down').addClass('fa-caret-up');
        }
        else {
            $($event.target).addClass('fa-caret-down').removeClass('fa-caret-up');
            $($event.target).parents('.parent-chart').find('.chart-content').removeClass('openChartContent')
        }

        /******Index Intraday Chart********/
        var canvasid = $($event.target).parents('.parent-chart').find('.IndexChart canvas').attr('id');
        var canvas = document.getElementById(canvasid);
        var ctx = canvas.getContext("2d");
        var dat = {
            labels: ["9:30am", "10.30AM", "11:30Am", "12:30pm", "13:30pm", "14.30pm", "15:30pm", "16:30"],
            datasets: [
                {
                    label: "Index Intraday",
                    lineTension: 0.1,
                    borderColor: "#1A237E",
                    borderWidth: 1,
                    fill: false,
                    data: [2155, 2150, 2220, 2140, 2248, 2189, 2211, 2182],
                    pointRadius: 0
                }
            ]
        };

        var myNewChart = new Chart(ctx, {
            type: "line",
            data: dat,
        });


        /******YTD Perfomance Chart********/

        //var YTDChartID = $($event.target).parents('.parent-chart').find('.YTDChart canvas').attr('id');
        //var YTDChartCanvas = document.getElementById(YTDChartID);
        //var YTDChart = YTDChartCanvas.getContext("2d");
        //var YTDChartdata = {
        //    labels: ["DJIA", "S&P 500", "NASDAQ", "RUS 2000"],
        //    datasets: [
        //        {
        //            label: "YTD Chart",
        //            backgroundColor: 'rgba(0, 176, 80, 1)',
        //            borderWidth: 1,
        //            data: ['5', '6', '2', '8'],
        //        }
        //    ]
        //};

        //var myYTDChart = new Chart(YTDChart, {
        //    type: 'bar',
        //    data: YTDChartdata,
        //    options: {
        //        scales: {
        //            yAxes: [{
        //                ticks: {
        //                    max: 10,
        //                    min: 0,
        //                    stepSize: 1
        //                }
        //            }]
        //        }
        //    }
        //});


        /******Sector Perfomance Chart********/

        var SectorChartID = $($event.target).parents('.parent-chart').find('.SectorChart canvas').attr('id');
        var SectorChartCanvas = document.getElementById(SectorChartID);
        var SectorChart = SectorChartCanvas.getContext("2d");
        var SectorChartdata = {
            labels: ["Enery", "Materials", "Finacials", "Industrial", 'Technology', 'Telecom', 'HealthCare', 'Cons.Discr', 'Cons.Staples', 'Staples'],
            datasets: [
                {
                    label: "Sector Performance",
                    backgroundColor: 'rgba(0, 176, 80, 1)',
                    backgroundColor: [
               'rgba(0, 176, 80, 1)',
               'rgba(0, 176, 80, 1)',
               'rgba(0, 176, 80, 1)',
               'rgba(0, 176, 80, 1)',
               'rgba(0, 176, 80, 1)',
               'rgba(0, 176, 80, 1)',
               'rgba(0, 176, 80, 1)',
               'rgba(0, 176, 80, 1)',
                 'rgba(255, 0, 0, 1)',
               'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 1,
                    data: ['5', '6', '2', '8', '2', '4', '7', '2', '-1', '-2'],
                }
            ]
        };

        var mySectorChart = new Chart(SectorChart, {
            type: 'horizontalBar',
            data: SectorChartdata,
            scales: {
                yAxes: [{
                    ticks: {
                        max: 10,
                        stepSize: 1
                    }
                }]
            }
        });


    };

    $scope.load = function () {
        GlobalIndicesService.readAll().then(function (response) {
            $scope.datacard = response.data;
        });
    }
    $scope.load();
}]);



(function () {
    angular.module('mainApp')
        .service('GlobalIndicesService', ['$http', GlobalIndicesService]);

    function GlobalIndicesService($http) {
        var self = this;
        self.readAll = function () {
            return $http({
                method: 'GET',
                url: '/App/JsonData/GlobalIndices.json',
            })
        };
    }
}());