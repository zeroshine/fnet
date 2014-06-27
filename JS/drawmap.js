var mapOptions = {
          center: new google.maps.LatLng(23.7, 121),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);

// var marker867 = new google.maps.Marker({
//             position:  new google.maps.LatLng(25.0185,121.543),
//             map: map,
//             title: 'FDR867'
//         });

// var infowindow1 = new google.maps.InfoWindow({
//     content: "台大生機系"
// });

// var infowindow2 = new google.maps.InfoWindow({
//     content: "台大電機系"
// });

// google.maps.event.addListener(marker867, 'click', function() {
//             //map.setZoom(12);
//             map.setCenter(marker867.getPosition());
//             hideall();
//             chart.series[0].show();

//             infowindow1.open(map, marker867);
//         });

var marker887 = new google.maps.Marker({
            position:  new google.maps.LatLng(25.0192,121.542),
            map: map,
            title: 'FDR887'
        });
google.maps.event.addListener(marker887, 'click', function() {
            //map.setZoom(12);
            //map.setCenter(marker887.getPosition());
            hideall();
            chart.series[0].show();

            //infowindow2.open(map, marker887);
        });

var marker890 = new google.maps.Marker({
            position:  new google.maps.LatLng(22.726171,120.408034),
            map: map,
            title: 'FDR890'
        });
google.maps.event.addListener(marker890, 'click', function() {
            //map.setZoom(12);
            //map.setCenter(marker890.getPosition());
            hideall();
            chart.series[5].show();
        });
var marker946 = new google.maps.Marker({
            position:  new google.maps.LatLng(22.998951,120.219279),
            map: map,
            title: 'FDR946'
        });
google.maps.event.addListener(marker946, 'click', function() {
            // map.setZoom(12);
            // map.setCenter(marker946.getPosition());
            hideall();
            chart.series[4].show();
        });
// var marker991 = new google.maps.Marker({
//             position:  new google.maps.LatLng(24.6862,120.883),
//             map: map,
//             title: 'FDR991'
//         });
// google.maps.event.addListener(marker991, 'click', function() {
//             // map.setZoom(12);
//             // map.setCenter(marker.getPosition());
//             chart.series[2].show();
//         });
var marker994 = new google.maps.Marker({
            position:  new google.maps.LatLng(24.794725,120.993232),
            map: map,
            title: 'FDR994'
        });
google.maps.event.addListener(marker994, 'click', function() {
            // map.setZoom(12);
            // map.setCenter(marker994.getPosition());
            hideall();
            chart.series[1].show();
        });
var marker849 = new google.maps.Marker({
            position:  new google.maps.LatLng(23.4876195,120.5092239),
            map: map,
            title: 'FDR849'
        });
google.maps.event.addListener(marker849, 'click', function() {
            // map.setZoom(12);
            // map.setCenter(marker849.getPosition());
            hideall();
            chart.series[2].show();
        });
var image = {
    url: 'Fig/x.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(40, 40),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20)
  };
var marker884 = new google.maps.Marker({
            position:  new google.maps.LatLng(24.746134,121.748887),
            //icon:image,
            map: map,
            title: 'fault'
        });
google.maps.event.addListener(marker884, 'click', function() {
            // map.setZoom(12);
            // map.setCenter(marker849.getPosition());
            hideall();
            chart.series[5].show();
        });