<?php
// $redis = new \Redis(); 
// $redis->connect('127.0.0.1', 6379); 

$password = $_POST['epass'];
$email = $_POST['email'];
$conn = mysqli_connect('localhost', 'root', '', 'guvi');
if ($conn->connect_error) {
    die("Connection failure: "
        . $conn->connect_error);
} else {
    $select = "select * from registration_table where email_id='$email' and password='$password'";
    $result = mysqli_query($conn, $select);
    $count = mysqli_num_rows($result);

    if ($count > 0) {
        // $redis->set("email", $email);
        echo json_encode(array("status" => true,"email" => $email));
    } else {
        echo json_encode(array("status" => false));
    }
}
?>