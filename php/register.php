<?php 


  $email=$_POST["emailPHP"];
  $username=$_POST["usernamePHP"];
  $password=$_POST["passwordPHP"];
  $fname = $_POST["fnamePHP"];
  $lname = $_POST["lnamePHP"];

  $conn = new mysqli('localhost', 'root', '', 'login');
  if (!empty($email)&&!empty($password)) {
    try
    {
        
        $sql="INSERT INTO `Users`(`LastName`, `username`, `FirstName`, `email`, `password`) VALUES ('$lname','$username','$fname','$email','$password')";       
        $result=mysqli_query($conn,$sql);
        echo "$result";
    } catch (mysqli_sql_exception) {
      echo "user name already exists";
    }
  }
  else{
    echo '*Please enter all details';
  }
  mysqli_close($conn);
?>   
