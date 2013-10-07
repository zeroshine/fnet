from twisted.internet.protocol import Factory
from twisted.protocols.basic import LineReceiver
from twisted.internet import reactor
import binascii
import MySQLdb
db = MySQLdb.connect(host="140.112.94.58" , user="ntuee", passwd="ntuee",db="NTUEE")
cursor=db.cursor()
class Chat(LineReceiver):
    delimiter=binascii.a2b_hex('00')#determinate the last recieve data char
    def connectionMade(self):
        print("connect");
    def connectionLost(self, reason):
        print("connection lost")
    def lineReceived(self, line):
        data=line.split()
        table=data[1]
        time="20"+(data[2])[4:6]+"-"+(data[2])[0:2]+"-"+(data[2])[2:4]+" "+data[3][0:2]+"-"+data[3][2:4]+"-"+data[3][4:6]
        freq=data[6]
        voltage=data[7]
        angle=data[8]
        command="INSERT INTO FDR"+table+"(time, freq, voltage , angle) VALUES(UNIX_TIMESTAMP(\""+time+"\")*1000+100*"+data[4]+","+freq+","+voltage+","+angle+")"
        #print command
        cursor.execute(command)
        db.commit()
        if data[3][4:6]=='00':
            if data[4]=='1':
                command="INSERT INTO GPS"+table+"(time, latitude) VALUES(UNIX_TIMESTAMP(\""+time+"\")*1000, "+data[5]+")"
                #print command
                cursor.execute(command)
                db.commit()
            elif data[4]=='2':
                command="UPDATE GPS"+table+" SET longitude = "+data[5]+" WHERE time = UNIX_TIMESTAMP(\" "+time+" \")*1000"
                #print command
                cursor.execute(command)
                db.commit()
            elif data[4]=='3':
                command="UPDATE GPS"+table+" SET satellite = "+data[5]+" WHERE time = UNIX_TIMESTAMP(\" "+time+"\")*1000"
                #print command
                cursor.execute(command)
                db.commit()
        print(line)# line is the received data
class ChatFactory(Factory):
    def buildProtocol(self, addr):
        return Chat()
#set the port you want to listen to
reactor.listenTCP(9349, ChatFactory())
reactor.listenTCP(9387, ChatFactory())
reactor.listenTCP(9446, ChatFactory())
reactor.listenTCP(9367, ChatFactory())
reactor.listenTCP(9384, ChatFactory())
reactor.listenTCP(9390, ChatFactory())
reactor.listenTCP(9901, ChatFactory())
reactor.listenTCP(9902, ChatFactory())
reactor.run()
