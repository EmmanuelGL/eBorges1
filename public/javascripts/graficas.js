
$(document).ready( function() {
       if(this.title!='DeptoGrados' && this.title !='EspecialidadDeptos'){
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
                    //enabled: true
                    shadow: true
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
                y: 0,
                shadow: true
            }
        });
      })
    
    }
//////////////////////

if(this.title=='DeptoGrados' || this.title =='EspecialidadDeptos'){ 
        
            $(document).ready(function(){

                
                Highcharts.chart('graficaA1', {
                    /*data: {
                        table: 'datatable2'
                    },*/
                    chart: {
                        type: 'column',  // tipo de gráfica
                        borderWidth: 0 // ancho del borde de la gráfica
                    },
                    title: {
                        text: this.title, // título
                        //x: -20 
                    },
                    xAxis: {
                        type: 'category',
                    title: {
                        text: this.title
                    }
                    },
                    yAxis: {
                        title: {
                            text: 'Total' // nombre del eje de Y
                        },
                       /* plotLines: [{
                            color: '#808080'
                        }]*/
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                        shared: true
                    },
                    legend: { // configuración de la leyenda
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        borderWidth: 1
                    },
                    series: [
                        
                       
                        {"data": [{"name": "Bioquímica","y": 5},{"name": "CIENCIAS BIOLOGIA CELULAR","y": 9},{"name": "Matemática Educativa","y": 5}],"name": "maestria"},
                        {"data": [{"name": "Bioquímica","y": 1},{"name": "CIENCIAS BIOLOGIA CELULAR","y": 1}],"name": "doctorado"}]
                       
                
    
        })
    
    })
    
    
    }
//////////////////////////////////////////////
});


