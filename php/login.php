<?php     


    if (isset($_POST['login'])) 
	{
		$connection = new mysqli('localhost', 'root', '', 'login');
		
		$email = $connection->real_escape_string($_POST['emailPHP']); 
		$password = md5($connection->real_escape_string($_POST['passwordPHP'])); 

		$data = $connection->query("select id from users where email='$email' AND password='$password'");
		if($data->num_rows > 0)
		{
			$_SESSION['loggedIN']= '1';
			$_SESSION['email'] = $email;
			echo 'success';
		}
		else
		{
			echo 'failed';
		}
		
	}	                 
?>
