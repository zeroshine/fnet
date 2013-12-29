<?php
  $con = mysql_connect("140.112.94.58","ntuee","ntuee");
  if (!$con){
      die('Could not connect: ' . mysql_error());
    }else{

    }
    mysql_select_db("NTUEE",$con);
    mysql_query("SET NAMES 'utf8'"); 
    mysql_query("SET CHARACTER_SET_CLIENT=utf8"); 
    mysql_query("SET CHARACTER_SET_RESULTS=utf8");
    $query1 = "SELECT * FROM FDR887 WHERE (time > UNIX_TIMESTAMP(\"".$_POST["begin"]."\") *1000-8*3600*1000) " ."AND (time <= UNIX_TIMESTAMP(\"".$_POST["end"]."\")*1000-8*3600*1000) ORDER BY time;";
    $query2 = "SELECT * FROM FDR994 WHERE (time > UNIX_TIMESTAMP(\"".$_POST["begin"]."\") *1000-8*3600*1000) " ."AND (time <= UNIX_TIMESTAMP(\"".$_POST["end"]."\")*1000-8*3600*1000) ORDER BY time;";
    $query3 = "SELECT * FROM FDR849 WHERE (time > UNIX_TIMESTAMP(\"".$_POST["begin"]."\") *1000-8*3600*1000) " ."AND (time <= UNIX_TIMESTAMP(\"".$_POST["end"]."\")*1000-8*3600*1000) ORDER BY time;";
    $query4 = "SELECT * FROM FDR946 WHERE (time > UNIX_TIMESTAMP(\"".$_POST["begin"]."\") *1000-8*3600*1000) " ."AND (time <= UNIX_TIMESTAMP(\"".$_POST["end"]."\")*1000-8*3600*1000) ORDER BY time;";
    $query5 = "SELECT * FROM FDR890 WHERE (time > UNIX_TIMESTAMP(\"".$_POST["begin"]."\") *1000-8*3600*1000) " ."AND (time <= UNIX_TIMESTAMP(\"".$_POST["end"]."\")*1000-8*3600*1000) ORDER BY time;";
    $result1=mysql_query($query1);
    $result2=mysql_query($query2);
    $result3=mysql_query($query3);
    $result4=mysql_query($query4);
    $result5=mysql_query($query5);
    $data= array();
    echo mysql_num_rows($result1)."\n";
    echo mysql_num_rows($result2)."\n";
    echo mysql_num_rows($result3)."\n";
    echo mysql_num_rows($result4)."\n";
    echo mysql_num_rows($result5)."\n";
    //echo "\n";
    //echo "range";
/*
    $range=(strtotime($_POST["end"])-strtotime($_POST["begin"]))*10;
    //header("Content-type:application/vnd.ms-excel");
    //header("Content-Disposition:filename=myfile.csv");
    for($i=0;$i<$range;$i++){
      $fetch1 = mysql_fetch_array($result1);
      $fetch2 = mysql_fetch_array($result2);
      $fetch3 = mysql_fetch_array($result3);
      $fetch4 = mysql_fetch_array($result4);
      $fetch5 = mysql_fetch_array($result5); 
      if($fetch1['time']!=$fetch2['time']|| 
         $fetch2['time']!=$fetch3['time']|| 
         $fetch3['time']!=$fetch4['time']|| 
         $fetch4['time']!=$fetch5['time']|| 
         $fetch5['time']!=$fetch1['time']|| 
         $fetch1['time']!=$fetch2['time']  ){
      //  echo "not match";
        ///continue;
      }     
      $f1=floatval($fetch1['freq']);  
      $f2=floatval($fetch2['freq']);  
      $f3=floatval($fetch3['freq']);  
      $f4=floatval($fetch4['freq']);  
      $f5=floatval($fetch5['freq']);
      $fdd1=(pow(($f1-$f2),2)+pow(($f1-$f3),2)+pow(($f1-$f4),2)+pow(($f1-$f5),2))/4; 
      $fdd2=(pow(($f2-$f1),2)+pow(($f2-$f3),2)+pow(($f2-$f4),2)+pow(($f2-$f5),2))/4; 
      $fdd3=(pow(($f3-$f1),2)+pow(($f3-$f2),2)+pow(($f3-$f4),2)+pow(($f3-$f5),2))/4; 
      $fdd4=(pow(($f4-$f1),2)+pow(($f4-$f2),2)+pow(($f4-$f3),2)+pow(($f4-$f5),2))/4; 
      $fdd5=(pow(($f5-$f1),2)+pow(($f5-$f2),2)+pow(($f5-$f3),2)+pow(($f5-$f4),2))/4;
      $fdds=($fdd1+$fdd2+$fdd3+$fdd4+$fdd5)/5;
      echo (strtotime($_POST["begin"])+100+$i*100).",";
      echo $f1.",".$f2.",".$f3.",".$f4.",".$f5.",";
      echo $fdd1.",".$fdd2.",".$fdd3.",".$fdd4.",".$fdd5 ;
      echo ",".(string)$fdds;
      echo "\n";  
    }
    //echo json_encode($data);
  */
?>