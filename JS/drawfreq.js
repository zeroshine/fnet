var chart;
var date = new Date();
var time = (Math.floor(date.getTime()/1000)-8*3600)*1000-30000;


var initialSeries = function(f,t,r){
    console.log(time);
    var data = [],i;
    var result=[];
    $.ajax({                                      
        url: './PHP/getGFreq.php',
        async: false,
        type:"POST",
        data:{ctime : time,range : r, type:t,FDR:f },
        datatype: 'json',
        success: function(j){
            data = $.parseJSON(j);
            for (var k in data){
                for(var key in data[k]){
                    //console.log(parseInt(key)+8*3600*1000);
                    var xnum=parseInt(key)+8*3600*1000;
                    var ynum=parseFloat(data[k][key])
                    result.push({
                        x:xnum,
                        y:ynum
                    });
                }
            }
        },
        error: function (request, status, error) {
            console.log('fail');
        }
    });
    console.log(result);
    return result;
};



$(function () {

    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                marginRight: 150,
                zoomType: 'xy',
                events: {
                    load: function() {
                        // set up the updating of the chart each second                        
                        var timeInterval = 1000;

                        setInterval(function() {
                             // current time
                                var y=[];
                                time = time + timeInterval;
                                //while(y!=0){
                                    $.ajax({
                                        url: 'PHP/getfreq.php',
                                        async: false,
                                        type:"POST",
                                        data:{ctime : time},
                                        datatype: 'json',
                                        success: function(data){
                                            console.log(data);
                                            var d = $.parseJSON(data);
                                            y[0] = parseFloat(d.f_887);
                                            y[1] = parseFloat(d.f_994);
                                            y[2] = parseFloat(d.f_849);
                                            y[3] = parseFloat(d.f_946);
                                            y[4] = parseFloat(d.f_890);
                                        }
                                    });
                                //}
                                for(var i=0;i<chart.series.length;++i){
                                    if(y[i]){
                                        chart.series[i].addPoint([time + 8*3600*timeInterval, y[i]], false, true,false);
                                    }
                                }
                                chart.redraw();

                        }, timeInterval);
                        
                    }
                }
                
            },
            title: {
                text: 'FDR 頻率監測圖'
            },
            rangeSelector: {
                selected: 1
            },
            width: 200,
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
                min: 59.8,
                max: 60.2
            },
            tooltip: {
                crosshairs: true,
                shared:true
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
                name: '台大電機<br>FDR887',
                data: initialSeries('FDR887','freq',200) 
            },{
                name: '清華大學<br>FDR994',
                data: initialSeries('FDR994','freq',200)
            },{
                name: '中正大學<br>FDR849',
                data: initialSeries('FDR849','freq',200)
            },{
                name: '成功大學<br>FDR946',
                data: initialSeries('FDR946','freq',200)
            },{
                name: '義守大學<br>FDR890',
                data: initialSeries('FDR890','freq',200)
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