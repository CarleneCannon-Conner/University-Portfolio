<?php
	$to = "contactme@carleneconner.co.uk";
	$subject = ($_POST['senderName']);
	$message = ($_POST['senderMsg']);
	$message .= "\n\n---------------------------\n";
	$message .= "E-mail Sent From: " . $_POST['senderName'] . " " . $_POST['senderEmail'];
	$headers = "From: " . $_POST['senderName'] . " " . $_POST['senderEmail'];
	mail($to, $subject, $message, $headers);
	echo("sent");
?>