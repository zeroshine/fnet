<!DOCTYPE html>

<html>
    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 

        <link rel="stylesheet" type="text/css" href="CSS/style.css"></style>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <!-- Optional theme -->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
        <!-- Latest compiled and minified JavaScript -->
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <!-- <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/> -->
        <!-- <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
        <link href="JS/jquery-ui-timepicker-addon.css" rel="stylesheet"></link> 
        <script src="JS/jquery-ui-timepicker-addon.js" type="text/javascript"></script> -->
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/modules/exporting.js"></script>
        <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC20c9AZ7lNe4zjn27YhByCL4eeRHIDBfI&sensor=true"></script>
        <title>Fnet 監視系統</title>
    </head>
    <body>
        <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" > Wide Area Measurement System Platform</a>
                </div>
                <div class="navbar-collapse collapse">
                    <form class="navbar-form navbar-right" role="form" method="post" >
                        <div class="form-group">
                            <input type="text" name="first" id="datepicker1" placeholder="begin" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="text" name="ratio" id="datepicker2" placeholder="end" class="form-control">
                        </div>
                        <button type="submit" id="navbtm" class="btn btn-success">Search</button>
                        <button type="submit" id="reset" class="btn btn-success">Monitor</button>
                    </form>
                </div><!--/.navbar-collapse -->
            </div>
        </div>
        <div class="btn-group" id="navtab">
            <button type="button" class="btn btn-default" id="fview">Frequency</button>
            <button type="button" class="btn btn-default" id="vview">Voltage</button>
            <button type="button" class="btn btn-default" id="aview">Angle</button>
        </div>
        <button type="button" class="btn btn-default" id="download">Download</button>
        <div id="map_canvas"></div>
        <div id="container" ></div>         
        <script type="text/javascript" src="JS/drawfreq.js"></script>
        <script type="text/javascript" src="JS/theme.js"></script>
        <script type="text/javascript" src = "JS/drawmap.js"></script>
        <script src="JS/buttonajax.js"></script>
    </body>
    <div id="footer">
        <p align="center">Copyright for Guan-lin Chen NTUEE Power System Lab Email : as790726@gmail.com</p>
    </div>
</html>