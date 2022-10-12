<?php
include_once 'config.php';
if (isset($_POST['submit'])) {
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email = $_POST['email'];
	$contact = $_POST['contact'];
	$address = $_POST['address'];
	$radio = $_POST['radio'];
	$sql = "INSERT INTO form (first_name,last_name,email,contact,address,radio)
	 VALUES ('$first_name','$last_name','$email','$contact','$address','$radio')";
	if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
	} else {
		echo "Error: " . $sql . "
" . mysqli_error($conn);
	}
	mysqli_close($conn);
}
