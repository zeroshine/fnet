$(document).ready(function() {
    var opt={dateFormat: 'yy-mm-dd',
               showSecond: true,
               timeFormat: 'HH:mm:ss'
               };
    $('#datepicker1').datetimepicker(opt);
    $('#datepicker2').datetimepicker(opt);
    $( "#button1" )
      .button()
      .click(function( event ) {
        event.preventDefault();
        setChart();
      });
  });

var initialSeries = function(FDR_type,data_type,begin_time,end_time){
    var data = [],i;
    var result=[];
    $.ajax({                                      
        url: './PHP/getFTFreq.php',
        async: false,
        type:"POST",
        data:{FDR:FDR_type,type:data_type,begin:begin_time,end:end_time},
        datatype: 'json',
        success: function(j){
            console.log(FDR_type);  
            data = $.parseJSON(j);
            for (var k in data){
                for(var key in data[k]){
                    console.log(parseInt(key)+8*3600*1000);
                    var xnum=parseInt(key)+2*8*3600*1000;
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
    return result;
};

function setChart() {
        var begin=document.getElementById("datepicker1").value;
        var end=document.getElementById("datepicker2").value;
        $('#container').highcharts({
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
            },
            tooltip: {
                crosshairs: true,
                shared:true
                /*
                formatter: function() {                                              
                        return '<b>'+ this.series.name +'</b><br/>'
                        + '日期：' + Highcharts.dateFormat('%Y/%m/%d', this.x) + '<br/>'
                        + '時間：' + Highcharts.dateFormat('%H:%M:%S', this.x) +'<br/>'
                        + '頻率：' + Highcharts.numberFormat(this.y, 4);
                }*/
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
                data: initialSeries('FDR887','freq',begin,end)
            },{
                name: '清華大學(二)<br>FDR994',
                data: initialSeries('FDR994','freq',begin,end)
            },{
                name: '中正大學<br>FDR849',
                data: initialSeries('FDR849','freq',begin,end)
            },{
                name: '成功大學<br>FDR946',
                data: initialSeries('FDR946','freq',begin,end)
            },{
                name: '義守大學<br>FDR890',
                data: initialSeries('FDR890','freq',begin,end)
            }]
        });
    };