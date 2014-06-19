
<?php

//require_once("phpMailer/class.phpmailer.php");
require_once("../phpMailer/PHPMailerAutoload.php");


//Create a new PHPMailer instance
$mail = new PHPMailer();
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//$mail->CharSet='UTF-8';
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
//$mail->Host = "mx01.anaxanet.com";
$mail->Host = "ml01.anaxanet.com";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 25;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "admin.camilu@grupocamilu.com";
//Password to use for SMTP authentication
$mail->Password = "@dm1nC@m1lu";
//Set who the message is to be sent from
$mail->setFrom('ventas@grupocamilu.com', 'Luis Oyola');
//Set who the message is to be sent to
$mail->addAddress('ventas@grupocamilu.com', 'Luis Oyola - newsletter');
//Set the subject line
$mail->Subject = 'Necesito mas informacion';
//Replace the plain text body with one created manually
$mail->IsHTML(true);
$mail->Body  = 'Mas informacion al correo <b> ' . $_POST["e-mail"] . '</b> ';
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "OK";
}

?> 