<?<?php

include "login.php";

$m = new MongoDBClient();
	

 $db = $m->profileinfo;

$genderPHP = $_POST['#gender'];
$agePHP = $_POST['#age'];
$addr1PHP = $_POST['profile-contact'];
$addr2PHP = $_POST['addr2'];
$phonePHP = $_POST['phone'];


require_once _DIR_ . '/vendor/autoload.php';
$conn = new \MongoDB\Client(
   'mongodb+srv://200801004:aathish202@cluster0.nrvmpxw.mongodb.net/test');


$db = $conn->profilinfo;
$table = $db->users;
$table->insertOne(["gender" => $genderPHP,
                       "age" => $genderPHP,
                       "addr1" => $addr1PHP,
                       "addr2" => $addr2PHP,
                       "phone" => $phonePHP,
                       ]);
    echo("Updated Successfully");


?>