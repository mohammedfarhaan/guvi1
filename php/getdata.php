<?php
    if(isset($_POST['fname'])){
        $fname=$_POST['fname'];
        $lname=$_POST['lname'];
        $gender=$_POST['gender'];
        $email=$_POST['email'];
        $dob=$_POST['dob'];
        $phone=$_POST['phoneno'];
        $password=$_POST['password'];

        $con=mysqli_connect("localhost","root","","guvi");
        $sql="INSERT INTO `registration_table`(`id`, `email_id`, `password`) VALUES ('','$email','$password');";
        $result=mysqli_query($con,$sql);
            
    require_once '../vendor/autoload.php';
    // $m = new MongoDB\Driver\Manager('mongodb://localhost:27017');
    // echo "Connection to database successfully";
    $client = new MongoDB\client("mongodb://localhost:27017");
    $insertdata = $client->guvi_details;
    $table = $insertdata->registration_form;
    $table->insertOne(
        [
        'fname'=> $fname,
        'lname'=> $lname,
        'gender'=> $gender,
        'email' => $email,
        'dob'=> $dob,
        'phone' => $phone,
        'password' =>$password
    ]);
    echo json_encode("Account Registered");
}else{   
    echo extension_loaded("mongo") ? "loaded\n" : "not loaded\n";
}

?>