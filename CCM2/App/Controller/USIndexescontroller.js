mainApp.controller('homeController', ['MarketSalesService', '$scope', function (MarketSalesService, $scope) {
    angular.element(document).ready(function () {
    });

    var myNewChart

    function toDate(dStr, format) {
        var now = new Date();
        if (format == "h:m") {
            now.setHours(dStr.substr(0, dStr.indexOf(":")));
            now.setMinutes(dStr.substr(dStr.indexOf(":") + 1));
            now.setSeconds(0);
            now.set
            return now;
        } else
            return "Invalid Format";
    }


    $scope.foo = function ($event) {

        if ($($event.target).hasClass('fa-caret-down')) {
            $($event.target).parents('.parent-chart').find('.chart-content').addClass('openChartContent').addClass('opened');
            $($event.target).removeClass('fa-caret-down').addClass('fa-caret-up');
        }
        else {
            $($event.target).addClass('fa-caret-down').removeClass('fa-caret-up');
            $($event.target).parents('.parent-chart').find('.chart-content').removeClass('openChartContent')
        }

        /******Index Intraday Chart********/
        if (!$($event.target).hasClass('opened')) {
            var canvasid = $($event.target).parents('.parent-chart').find('.IndexChart canvas').attr('id');
            var numb = canvasid.match(/\d/g);
            var res = $scope.datacard[canvasid];
            var canvas = document.getElementById(canvasid);
            var ctx = canvas.getContext("2d");
            var Price = [];
            var date = [];
            $.each($scope.datacard[numb].IndexIntra, function (key, obj) {
                var b = toDate(obj.Date, "h:m")
                date.push(b);
                Price.push(obj.Price);

            });
            var dat = {
                //labels: ["9:30am", "10.30am", "11:30am", "12:30pm", "1:30pm", "2.30pm", "3:30pm", "4:30pm"],
                labels: date,
                datasets: [
                    {

                        lineTension: 0.1,
                        borderColor: "#1A237E",
                        borderWidth: 1,
                        fill: false,
                        data: Price,
                        pointRadius: 0
                    }
                ]
            };
            var myNewChart = new Chart(ctx, {
                type: "line",
                data: dat,
                options: {
                    scales: {
                        yAxes: [{
                            position: 'right',

                        }],
                        xAxes: [{
                            type: 'time',
                            time: {
                                unit: 'hour',
                                displayFormats: {                                    
                                    'hour': 'h:mm a',
                                }
                            }                          
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Index Intraday',
                        backgroundColor: 'rgba(255, 0, 0, 1)',
                        fontColor: '#1A237E'
                    },
                    legend: {
                        display: false,
                    }
                }
            });
        };
    }


    /*sector Performance Chart*/
    var SectorChartCanvas = document.getElementById('sector-chart');
    var SectorChart = SectorChartCanvas.getContext("2d");
    var SectorChartdata = {
        labels: ["Enery", "Materials", "Finacials", "Industrial", 'Technology', 'Telecom', 'HealthCare', 'Cons.Discr', 'Cons.Staples', 'Utilities'],
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
                data: ['2.5', '1.25', '1.25', '0.9', '0.8', '0.7', '0.6', '0.5', '-0.50', '-1.20'],
            }
        ]
    };

    var mySectorChart = new Chart(SectorChart, {
        type: 'horizontalBar',
        data: SectorChartdata,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                       
                        barPercentage: 0.5,
                        stepSize: 1,
                        callback: function (value, index, values) {
                            return value + '.00%';
                        }
                    }
                }]
            },
            title: {
                display: true,
                text: 'Sector Performance',
                backgroundColor: 'rgba(255, 0, 0, 1)',
                fontColor: '#1A237E'
            },
            legend: {
                display: false,
            },
            barPercentage: 0.5

        }
    });


    /*YTD Performance Chart***/


    var YTDChartCanvas = document.getElementById('YtdChart');
    var YTDChart = YTDChartCanvas.getContext("2d");
    var YTDChartdata = {
        labels: ["DJIA", "S&P 500", "NASDAQ", "RUS 2000"],
        datasets: [
            {
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
                        min: 0,
                        barPercentage: 0.5,
                        stepSize: 1,
                        callback: function (value, index, values) {
                            return value + '%';
                        }
                    }
                }]
            },
            title: {
                display: true,
                text: 'Domestic YTD',
                backgroundColor: 'rgba(255, 0, 0, 1)',
                fontColor: '#1A237E'
            },
            legend: {
                display: false,
            },
            barPercentage: 0.5
        }
    });





    var YTDChartCanvas2 = document.getElementById('GlobalYtdChart');
    var YTDChart2 = YTDChartCanvas2.getContext("2d");
    var YTDChartdata2 = {
        labels: ["US", "Japan", "China", "Hong Kong", 'Germany', 'France', 'Uk,Brazil'],
        datasets: [
            {
                backgroundColor: [
           'rgba(0, 176, 80, 1)',
            'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 0, 1)',
           'rgba(255, 0, 0, 1)',
           'rgba(0, 176, 80, 1)',
           'rgba(0, 176, 80, 1)',
                ],
                borderWidth: 1,
                data: ['4', '-15', '-5', '-8', '-8', '6', '24'],
                barWidth: 10,

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
                        barPercentage: 0.5,
                        stepSize: 1,
                        callback: function (value, index, values) {
                            return value + '%';
                        }
                    }
                }]
            },
            title: {
                display: true,
                text: 'Global YTD',
                backgroundColor: 'rgba(255, 0, 0, 1)',
                fontColor: '#1A237E'
            },
            legend: {
                display: false,
            }

        }
    });

    /**Intraday Chart**/

    function startDateString() {
        var date = moment("0930", "hmm").format('hh:mm');
        return date;
    }

    function endDateString(hours) {
        var date = moment().add(hours, 'h').format(timeFormat);
        return date;
    }


    function indexIntraChart(canvasName, index) {
        
        
   
        var canvas = document.getElementById(canvasName);
        var ctx = canvas.getContext("2d");
        var Price = [];
        var date = [];
        $.each($scope.Intradaydata[index].IndexIntra, function (key, obj) {
            var b = toDate(obj.Date, "h:m")
            date.push(b);
            Price.push(obj.Price);
        });
        var dat = {
            //labels: ["9:30am", "10.30am", "11:30am", "12:30pm", "1:30pm", "2.30pm", "3:30pm", "4:30pm"],
            labels: date,
            datasets: [
                {

                    lineTension: 0.1,
                    borderColor: "#1A237E",
                    borderWidth: 1,
                    fill: false,
                    data: Price,
                    pointRadius: 0
                }
            ]
        };
         myNewChart = new Chart(ctx, {
            type: "line",
            data: dat,
            options: {
                maxLabels: 5,
                scaleStartValue: 0,
                scales: {
                    yAxes: [{
                        position: 'right',
                    }],
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'minute',
                            unitStepSize:130,
                            displayFormats: {
                                'minute': 'h:mm a'
                            },
                            round: 'minute'
                           
                            
                        }
                    }]
                },
                title: {
                    display: true,
                    text: $scope.Intradaydata[index].Name,
                    backgroundColor: 'rgba(255, 0, 0, 1)',
                    fontColor: '#1A237E'
                },
                legend: {
                    display: false,
                },
                responsive: true,
               
            }
        });

    }
    
   

    $scope.load = function () {

        
        MarketSalesService.readAll('USIndexes').then(function (response) {
            $scope.datacard = response.data;
           
        });

        //MarketSalesService.readAll('IntradayData').then(function (response) {
        //    $scope.Intradaydata = response.data;
        //    indexIntraChart('DowjonesChart', 0);
        //    indexIntraChart('Spchart', 1);
        //    indexIntraChart('Nasdaqchart', 2);
        //});

        MarketSalesService.readAll('DowData').then(function (response) {
            $scope.Intradaydata = response.data;
            indexIntraChart('DowjonesChart', 0);            
        });

        MarketSalesService.readAll('SPData').then(function (response) {
            $scope.Intradaydata = response.data;           
            indexIntraChart('Spchart', 0);
           
        });
        MarketSalesService.readAll('NasdaqData').then(function (response) {
            $scope.Intradaydata = response.data;            
            indexIntraChart('Nasdaqchart', 0);
        });




        MarketSalesService.readAll('GlobalIndices').then(function (response) {
            $scope.Globaldata = response.data;
        });

        MarketSalesService.readAll('CurrenciesData').then(function (response) {
            $scope.CurrenciesData = response.data;
        });

        MarketSalesService.readAll('CommoditiesData').then(function (response) {
            $scope.CommoditiesData = response.data;
        });

        MarketSalesService.readAll('TCMarket').then(function (response) {
            $scope.TCMarketdata = response.data;
        });

    }
    $scope.load();


}]);



(function () {
    angular.module('mainApp')
        .service('MarketSalesService', ['$http', MarketSalesService]);

    function MarketSalesService($http) {
        var self = this;
        self.readAll = function (urljson) {

            return $http({
                method: 'GET',
                url: '/App/JsonData/' + urljson + '.json',
            })
        };
    }
}());
















