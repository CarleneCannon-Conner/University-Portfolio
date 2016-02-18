<?php

$dbhost = 'db421888773.db.1and1.com';
$dbuser = 'dbo421888773';
$dbpass = '1234567';
$dbname = 'db421888773';
$dbtable = 'mail';

// connect to the database
$db = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql database '. mysql_error());
 
 $to=$_GET["id"];
 $from=$_GET["sender"];
 $subject=$_GET["subject"];
 $message=$_GET["message"];
 $dat=$_GET["date"];
$headers = "From:" . $from . "@kapow.co.uk"; 

$mailid= uniqid($id).date("ymd").time();
$d=date("D M j Y G:i:s ");                
$t=time();
$s="unread";


if (!$db) {
    die('Not connected : ' . mysql_error());
} else {
 
}
 
// select the table
$dbselect = mysql_select_db($dbname);
 

if (!$dbselect) {
    die ('Can\'t use $dbname : ' . mysql_error());
} else {
}
 
if ($id=='') {
 	$id="empty";
}
if ($sub=='') {
 	$sub="empty";
}
if ($msg=='') {
 	$msg="empty";
}

if ($send=='') {
 	$send="empty";
}
mail($to,$subject,$message,$headers);


if ($result) {
   	echo "inserted"; 
    $data = '';
 
    
} else {  
    echo 'Error: Could not get any data.\n';  
} 
 
echo $data; 
 

mysql_close($db);


?>