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
    $query = "SELECT * FROM ".$_POST['FDR']." WHERE (time > ".$_POST["ctime"]."-".$_POST['range']."*1000) " ."AND (time <=".$_POST["ctime"].") AND (MOD(time,1000)=0) ORDER BY time;";
    $result=mysql_query($query);
    $data= array();
    //echo mysql_num_rows($result)."\n";
    //echo "\n";
    for($i=0;$i<$_POST['range'];$i++){
      $fetch = mysql_fetch_array($result);
      array_push($data, $fetch[$_POST['type']]);  
    }
    echo json_encode($data);