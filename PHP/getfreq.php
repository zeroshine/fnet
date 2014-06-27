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
  	$result_867 = mysql_query("SELECT * FROM FDR867 WHERE time = ".$_POST["ctime"]);
    $array_867 = mysql_fetch_array($result_867);
    $result_887 = mysql_query("SELECT * FROM FDR887 WHERE time = ".$_POST["ctime"]);
    $array_887 = mysql_fetch_array($result_887);
    $result_991 = mysql_query("SELECT * FROM FDR991 WHERE time = ".$_POST["ctime"]);
    $array_991 = mysql_fetch_array($result_991);
    $result_994 = mysql_query("SELECT * FROM FDR994 WHERE time = ".$_POST["ctime"]);
    $array_994 = mysql_fetch_array($result_994);
    $result_849 = mysql_query("SELECT * FROM FDR849 WHERE time = ".$_POST["ctime"]);
    $array_849 = mysql_fetch_array($result_849);
    $result_946 = mysql_query("SELECT * FROM FDR946 WHERE time = ".$_POST["ctime"]);
    $array_946 = mysql_fetch_array($result_946);
    $result_890 = mysql_query("SELECT * FROM FDR890 WHERE time = ".$_POST["ctime"]);
    $array_890 = mysql_fetch_array($result_890);
    $result_884 = mysql_query("SELECT * FROM FDR884 WHERE time = ".$_POST["ctime"]);
    $array_884 = mysql_fetch_array($result_884);
    $total= array(
                  'f_867' => $array_867['freq'], 
                  'v_867' => $array_867['voltage'],
                  'a_867' => $array_867['angle'],

                  'f_887' => $array_887['freq'], 
                  'v_887' => $array_887['voltage'],
                  'a_887' => $array_887['angle'],

                  'f_991' => $array_991['freq'], 
                  'v_991' => $array_991['voltage'],
                  'a_991' => $array_991['angle'],

                  'f_994' => $array_994['freq'], 
                  'v_994' => $array_994['voltage'],
                  'a_994' => $array_994['angle'],

                  'f_849' => $array_849['freq'], 
                  'v_849' => $array_849['voltage'],
                  'a_849' => $array_849['angle'],

                  'f_946' => $array_946['freq'], 
                  'v_946' => $array_946['voltage'],
                  'a_946' => $array_946['angle'],

                  'f_890' => $array_890['freq'], 
                  'v_890' => $array_890['voltage'],
                  'a_890' => $array_890['angle'],
                  
                  'f_884' => $array_884['freq'], 
                  'v_884' => $array_884['voltage'],
                  'a_884' => $array_884['angle'],
    );
    echo json_encode($total);


?>