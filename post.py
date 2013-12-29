import urllib, urllib2
params=urllib.urlencode([("FDR","FDR994"),("type","freq"),("ctime","1387870743000"),("range","200")])
path="http://140.112.20.122:9999/lab228/fnet/PHP/getGFreq.php"
req=urllib2.Request(path,params)
req.add_header("Content-type", "application/x-www-form-urlencoded")
page=urllib2.urlopen(req).read()
print page