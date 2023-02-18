<?php
session_start(); // initalises session

$url = "<API CALL HERE>"; // call the api for the card the user searched for
$json = file_get_contents($url);
$inf_array = json_decode($json, true);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>twatter</title>
    <!-- <link rel="stylesheet" href="css/Universal.css" type="text/css" />
    <script src="js/jquery-3.5.1.min.js"></script> -->
</head>
<style>

</style>
<header>
    
</header>
<body>
    
</body>