<?php
session_start(); // initalises session

//$url = "<API CALL HERE>"; // call the api for the card the user searched for
//$json = file_get_contents($url);
//$inf_array = json_decode($json, true);

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
.card {
  /* Add shadows to create the "card" effect */
  padding: 50px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.header {
  padding: 10px;
  background: #00acee;
  color: white;
  font-size: 30px;
}

</style>
<header>
<div class="header">
    <img src=".\twatter.png" alt="Avatar" style="width: 5%; align: right;">
    
</div>
</header>
<body>
    <div class="card">
    <img src="https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg?quality=75&auto=webp" alt="Avatar" style="width: 300px; height: 300px;">
    <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
    </div>
    </div>
    <div class="card">
    <img src="https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg?quality=75&auto=webp" alt="Avatar" style="width: 300px; height: 300px;">
    <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
    </div>
    </div>
    <div class="card">
    <img src="https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg?quality=75&auto=webp" alt="Avatar" style="width: 300px; height: 300px;">
    <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
    </div>
    </div>
</body>