var chart;
var date3 = new Date("7/13/2013 2:55:00");
var time3 = (Math.floor(date3.getTime()/1000)-8*3600)*1000;
var ran=400;

var initialSeries3 = function(f,t,r){
    var data = [],i;
/*
    for (i = -199; i <= 0; i++) {
        var x_num = time + i * 1000;
        var y_num = 60;
        data.push({
            x: x_num+8*3600*1000,
            y: y_num 
        });
    }*/
    $.ajax({                                        
        url: 'getGFreq.php',
        async: false,
        type:"POST",
        data:{ctime : time3,range : r, type:t,FDR:f },
        datatype: 'json',
        success: function(j){
            var d = $.parseJSON(j);
            for (i = -r+1; i <= 0; i++) {
                var x_num = time3 + i * 1000;
                var y_num = 60;
                data.push({
                    x: x_num+8*3600*1000,
                    y: parseFloat(d[i+r-1]) 
                });
            }
            console.log('%s %s\n',f,d.length);
        },
        error: function (request, status, error) {
            console.log('fail');
        }
    });
    return data;
};


$(function () {

    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
    
        $("#container3").highcharts("StockChart", {
        //chart = new Highcharts.Chart({
            chart: {
                type: 'line',

                //animation: Highcharts.svg, // don't animate in old IE
                marginRight: 150,

            },
            title: {
                text: 'FDR 頻率監測圖'
            },
            navigator: {
                enabled: false
            },
            scrollbar:{
                enabled: false
            },
            xAxis: {
                title: {
                    text: '時間(h:m:s)'
                },
                type: 'datetime',
                gridLineWidth: 1,
                minRange: 2,
                tickPixelInterval: 100
            },
            yAxis: {
                title: {
                    text: '頻率(Hz)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#000000'
                }],
                
            },
            tooltip: {
                formatter: function() {                                              
                        return '<b>'+ this.series.name +'</b><br/>'
                        + '日期：' + Highcharts.dateFormat('%Y/%m/%d', this.x) + '<br/>'
                        + '時間：' + Highcharts.dateFormat('%H:%M:%S', this.x) +'<br/>'
                        + '頻率：' + Highcharts.numberFormat(this.y, 4);
                }
            },
            plotOptions: {
                line: {
                    animation: false
                }
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                x: -20,
                y: -100

            },
            exporting: {
                enabled: false
            },
            series: [{
                name: '台大生機<br>FDR867',
                visible: false,
                data: initialSeries3('FDR867','freq',ran)
            },{
                name: '台大電機<br>FDR887',
                data: initialSeries3('FDR887','freq',ran)
               
            },{
                name: '清華大學(一)<br>FDR991',
                visible: false,
                data: initialSeries3('FDR991','freq',ran)
            },{
                name: '清華大學(二)<br>FDR994',
                visible: false,
                data: initialSeries3('FDR994','freq',ran)
            },{
                name: '中正大學<br>FDR849',
                visible: false,
                data: initialSeries3('FDR849','freq',ran)
            },{
                name: '成功大學<br>FDR946',
                visible:false,
                data: initialSeries3('FDR946','freq',ran)
            },{
                name: '義守大學<br>FDR890',
                visible:false,
                data: initialSeries3('FDR890','freq',ran)
            }]
        });
    });    
});

function hideall(){
    chart.series[0].hide();
    chart.series[1].hide();
    chart.series[2].hide();
    chart.series[3].hide();
    chart.series[4].hide();
    chart.series[5].hide();
    chart.series[6].hide();
}