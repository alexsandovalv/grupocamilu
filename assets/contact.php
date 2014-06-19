
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
$mail->addAddress('ventas@grupocamilu.com', 'Luis Oyola');
$mail->AddBCC('alexs_san@hotmail.com');
//Set the subject line
$mail->Subject = 'Contactenos';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
//Replace the plain text body with one created manually

$nombre = 'Nombre: '. $_POST["name"];
$email = 'Email: '. $_POST["email"];
$message = 'Mensaje: '. $_POST["message"];

$body = $nombre . '<br/>' . $email . '<br/>' . $message;
$mail->IsHTML(true);
$mail->Body =$body;
//$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors


if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "OK";
}


?> 