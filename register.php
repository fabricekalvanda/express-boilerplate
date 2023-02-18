<?php
session_start(); // initalises session

/* $url = "<API CALL HERE>"; // call the api for the card the user searched for */
/* $json = file_get_contents($url); */
/* $inf_array = json_decode($json, true); */
/*  */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <!-- <link rel="stylesheet" href="css/Universal.css" type="text/css" />
    <script src="js/jquery-3.5.1.min.js"></script> -->

    <style type="text/css">
	*{
		margin-top: 25px;
	}
	#text{
		height: 25px;
		/* border-radius: 5px; */
		padding: 4px;
		/* border: solid thin #aaa; */
		width: 100%;
	}
	
	#button{
		padding: 10px;
		width: 100px;
		color: white;
		background-color: black;
		border: none;
	}
	
	#box{
		background-color: grey;
        margin: auto;
		margin-top: 30px;
		width: 300px;
		padding: 20px;
	}

    .header {
  padding: 10px;
  background: #00acee;
  color: white;
  font-size: 30px;
}
</style>

</head>
<style>

</style>
<header>
<div class="header">
    <img src=".\twatter.png" alt="Avatar" style="width: 5%; align: right;">
    <div></div>
</div>
</header>
<body>

<div id="box">
	<form method="post" action="authenticate.php" autocomplete="off">
		<div style="font-size: 20px; margin: 10px; color: aqua;">Register</div>
		<input style="margin-bottom: 10px;" id="text" type="text" name="username" placeholder="Username">
		
		<input style="margin-bottom: 10px;"  id="text" type="password" name="password" placeholder="Password">
			
		<input id="button" type="submit" value="Submit"><br><br>
		
		<a style="color: yellow;" href="login.php">Have an account? Login here</a><br><br>
	</form>
</div>
    
</body>