<?php
  header("Content-type:application/vnd.ms-excel");
  header("Content-Disposition:attachment; filename=".$_GET['begin']."_".$_GET['FDR']."_".$_GET['type'].".csv");
  $con = mysql_connect("140.112.94.58","ntuee","ntuee");
  if(!$con){
    die('Could not connect: ' . mysql_error());
  }else{}
  mysql_select_db("NTUEE",$con);
  mysql_query("SET NAMES 'utf8'"); 
  mysql_query("SET CHARACTER_SET_CLIENT=utf8"); 
  mysql_query("SET CHARACTER_SET_RESULTS=utf8");
  $FDR=array('FDR887','FDR994','FDR849','FDR946','FDR890');
  //for($i=0;i<5;$i++){
  $query = "SELECT * FROM ".$_GET["FDR"]." WHERE (time > (UNIX_TIMESTAMP(\"".$_GET["begin"]."\")-28800)*1000)" ."AND (time <=(UNIX_TIMESTAMP(\"".$_GET["end"]."\")-28800)*1000) ORDER BY time;";
    //echo $query.'\n';
  $result=mysql_query($query);
    //$data= array();
    //echo $query;
  while($fetch = mysql_fetch_array($result)){
      echo $fetch['time'].','.$fetch[$_GET["type"]]."\n";
  }

  //}
?>
