var search_flag=false;
$(document).ready(function() {
    var opt={dateFormat: 'yy-mm-dd',
               showSecond: true,
               timeFormat: 'HH:mm:ss'
               };
    // $('#datepicker1').datetimepicker(opt);
    // $('#datepicker2').datetimepicker(opt);
    $( "#navbtm" )
      .button()
      .click(function( event ) {
        event.preventDefault();
        clearInterval(setid);
        setChart('freq');
        search_flag=true;
        $('#download').css('display','inline');
      });
    $( "#reset" )
      .button()
      .click(function( event ) {
        clearInterval(setid);
        event.preventDefault();
        initChart('freq');
        search_flag=false;
      });
    $( "#fview" )
      .button()
      .click(function( event ) {
        clearInterval(setid);
        event.preventDefault();
        if(search_flag){
            setChart('freq')
        }else{
            initChart('freq');
        }
      });
    $( "#vview" )
      .button()
      .click(function( event ) {
        clearInterval(setid);
        event.preventDefault();
        if(search_flag){
            setChart('voltage')
        }else{
            initChart('voltage');
        }
      });
    $( "#aview" )
      .button()
      .click(function( event ) {
        clearInterval(setid);
        event.preventDefault();
        if(search_flag){
            setChart('angle')
        }else{
            initChart('angle');
        }
      });
    $( "#download" )
      .button()
      .click(function( event ) {
        event.preventDefault();
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR887"+"&type=freq");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR994"+"&type=freq");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR849"+"&type=freq");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR946"+"&type=freq");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR890"+"&type=freq");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR884"+"&type=freq");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR887"+"&type=voltage");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR994"+"&type=voltage");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR849"+"&type=voltage");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR946"+"&type=voltage");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR890"+"&type=voltage");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR884"+"&type=voltage");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR887"+"&type=angle");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR994"+"&type=angle");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR849"+"&type=angle");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR946"+"&type=angle");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR890"+"&type=angle");
        downloadURL('PHP/downloadCSV.php?begin='+$('#datepicker1').val()+"&end="+$('#datepicker2').val()+"&FDR=FDR884"+"&type=angle");
      });
  });

var count=0;
var downloadURL = function downloadURL(url){
  var hiddenIFrameID = 'hiddenDownloader' + count++;
  var iframe = document.createElement('iframe');
  iframe.id = hiddenIFrameID;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  iframe.src = url;
}



var searchSeries = function(FDR_type,data_type,begin_time,end_time){
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

function setChart(type) {
        var begin=document.getElementById("datepicker1").value;
        var end=document.getElementById("datepicker2").value;
        $('#container').highcharts({
            title: {
                text: 'Wide Area Measurement Syste'
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
                    //text: '頻率(Hz)'
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
                data: searchSeries('FDR887',type,begin,end)
            },{
                name: '清華大學(二)<br>FDR994',
                data: searchSeries('FDR994',type,begin,end)
            },{
                name: '中正大學<br>FDR849',
                data: searchSeries('FDR849',type,begin,end)
            },{
                name: '成功大學<br>FDR946',
                data: searchSeries('FDR946',type,begin,end)
            },{
                name: '義守大學<br>FDR890',
                data: searchSeries('FDR890',type,begin,end)
            },{
                name: '宜蘭大學<br>FDR884',
                data: searchSeries('FDR884',type,begin,end)
            }

            ]
        });
    };