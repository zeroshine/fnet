//updatefreq();
var time = (Math.floor((new Date()).getTime()/1000)-8*3600)*1000-10000;
var fdrNumber = $('#FDR').val();

    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

$(function () {
    
		var chart;
		
		
		$('#FDR').change(function(){
			fdrNumber = $('#FDR').val();
			$('#container').highcharts.chart.destory();
			console.log(fdrNumber);
		});
		
        $('#container').highcharts({
			
            chart: {
                type: 'spline',
                //animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                zoomType: 'xy',
                
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second                        
                        var series = this.series[0];
                        setInterval(function() {
                             // current time
                                var y = Math.random();
                                time = time +1000;
                                $.ajax({
                                    url: 'getfreq2.php',
                                    async: false,
                                    type:"POST",
                                    data:{ctime : time, FDR : fdrNumber},
                                    datatype: 'json',
                                    success: function(data){
                                            var d = $.parseJSON(data);
                                            y = parseFloat(d.freq);
                                            console.log(d.freq);
                                    }
                                });
                                if(isNaN(y)){
                                    y=0;
                                }
                                series.addPoint([time+8*3600*1000, y], true, true);
                        }, 2000);
                    }
                }
                
            },
            title: {
                text: 'Frequency from ' + fdrNumber
            },
            rangeSelector: {
                selected: 1
            },
            xAxis: {
                type: 'datetime',
                gridLineWidth: 1,
                minRange: 2,
                tickPixelInterval: 100
            },
            yAxis: {
                title: {
                    text: 'freq(Hz)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#000000'
                }],
                min: 59.75,
                max: 60.25
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S:', this.x)+ (this.x)%1000 +'<br/>'+
                        Highcharts.numberFormat(this.y, 4);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'data',
                data: (function() {
                    // generate an array of random data
                    var data = [],i;
 
                    for (i = -100; i <= 0; i++) {
                        var x_num = time + i * 1000;
                        var y_num ;
						/*
                        $.ajax({
                                    url: 'getfreq2.php',
                                    async: false,
                                    type:"POST",
                                    data:{ctime : x_num, FDR : fdrNumber},
                                    datatype: 'json',
                                    success: function(data){
                                            var d = $.parseJSON(data);
                                            y_num = parseFloat(d.freq);
											console.log(d.freq);
                                    }
                                });
						*/
                        data.push({
                            x: x_num+8*3600*1000,
                            y: y_num
                        });
                    }
                    
                    return data;
                })()
            }]
        });
    });
    
});