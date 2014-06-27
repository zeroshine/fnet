import urllib, urllib2
params=urllib.urlencode([("begin","2013-05-22 21:52:30"),("end","2013-05-22 21:53:30")])
path="http://140.112.20.122:9999/lab228/fnet/PHP/downloadCSV.php"
req=urllib2.Request(path,params)
req.add_header("Content-type", "application/x-www-form-urlencoded")
page=urllib2.urlopen(req).read()
print page