<?php
/* Created by Calene J. Conner */
header('Content-Type: text/xml');
header("Cache-Control: no-cache, must-revalidate");
$dbhost = 'db421888773.db.1and1.com';
$dbuser = 'dbo421888773';
$dbpass = '1234567';
$dbname = 'db421888773';
$dbtable = 'mail';


$id=$_GET["mailID"];


$con = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$con)
 {
 	die('Could not connect: ' . mysql_error());
 }
 
$dbselect = mysql_select_db($dbname,$con);

$sql="DELETE FROM $dbtable WHERE mailID='$id'";

$result = mysql_query($sql);

if ($result) {
     	echo "Deleted";    
} else {  
    echo 'Unable to  delete';  
} 

mysql_close($con);

?>
