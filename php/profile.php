<?php
    // $redis = new \Redis(); 
    // $redis->connect('127.0.0.1', 6379); 
    $uid = $_POST['key'];

    // $userid= $_GET['uid'];
    require_once '../vendor/autoload.php';

    $client =new MongoDB\client("mongodb://localhost:27017");
    $db= $client ->guvi_details;
    $collection=$db->registration_form;
    $fetchedDoc= $collection->findOne(
        ['email' => $uid]
    );

    if($fetchedDoc){
        echo json_encode(array(
            'status' =>true,
            'fname'=>$fetchedDoc['fname'],
            'lname'=>$fetchedDoc['lname'],
            'email' => $fetchedDoc['email'] ,
            'gender'=>$fetchedDoc['gender'],
            'dob'=>$fetchedDoc['dob'],
            'phone'=>$fetchedDoc['phone']
        ));
        // echo json_encode($fetchedDoc);
    }
    else{
        echo json_encode(array('status' =>false));
    }



    // $redis->close();



?>