
$(document).ready( function() {
  $(function () {
      Highcharts.chart('graficaA', {
          data: {
              table: 'datatable'
          },
          chart: {
              type: 'column'
          },
          title: {
              text: this.title
          },
          xAxis: {
            type: 'category',
            title: {
                text: this.title
            }
        },
          yAxis: {
             // allowDecimals: false,
              title: {
                  text: 'Total'
              }
          },
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} ' + this.title + '</b><br/>'
          },
          legend: {
            enabled: false
        },
           plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}'
                    }
                }
            },
      });
  });

////////////////////////////////////////////////////////////////////////////////
  $(document).ready(function(){
    Highcharts.chart('graficaB', {
           
        data: {
            table: 'datatable'
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: this.title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'middle',
            x: 40,
            y: 0
        }
    });
  })









});










/*
//$(document).ready( function() {
    angular.module('myApp', [])
  .controller('myCtrl', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.barras = function() {
        Highcharts.chart('container', {
            data: {
                table: 'datatable'
            },
            chart: {
                type: 'column'
            },
            title: {
                text: this.title
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Total'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.point.y + ' ' + this.point.name.toLowerCase();
                }
            }
        });
      
    };

    $scope.pie = function() {
        Highcharts.chart('container', {
           
            data: {
                table: 'datatable'
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: this.title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            legend: {
                align: 'left',
                layout: 'vertical',
                verticalAlign: 'middle',
                x: 40,
                y: 0
            }
        });
      
    };









  }]);
*/







    
   /* function barras() {
        Highcharts.chart('container', {
            data: {
                table: 'datatable'
            },
            chart: {
                type: 'column'
            },
            title: {
                text: this.title
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Total'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.point.y + ' ' + this.point.name.toLowerCase();
                }
            }
        });
    }
    
    */
    
    
    
    
    
    
    
    
   /* function pie() {
        Highcharts.chart('container', {
           
            data: {
                table: 'datatable'
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: this.title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            legend: {
                align: 'left',
                layout: 'vertical',
                verticalAlign: 'middle',
                x: 40,
                y: 0
            }
        });

    }*/

 // });

  
 