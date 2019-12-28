<?php
if($_POST["submit"]) {
    $recipient="blurisere@hotmail.com"; //Enter your mail address
    $subject="Contact from Website"; //Subject 
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["comments"];
    $mailBody="Name: $sender\nEmail Address: $senderEmail\n\nMessage: $message";
    mail($recipient, $subject, $mailBody);
    sleep(1);
    header("Location:/adefe_hq/contact/form"); // Set here redirect page or destination page
}
?>

<!-- <?php
if($_POST["submit"]) {
    mail("blurisere@hotmail.com", "Form to email message", $_POST["Talk about"], "From: an@email.address");
}
?> -->