$(document).ready(function () {
    
    $("#login").on('click',function() {
        var email = $("#email").val();
        var password = $("#password").val();
        
        if(email == "" || password == "")
        {
            alert('Please check your inputs');
        }
        else
        {
            $.ajax
            (
                {
                    url:'php/login.php',
                    method: 'POST',
                    data: 
                    {
                        login:1,
                        emailPHP: email,
                        passwordPHP: password
                    },
                    success: function(response)
                    {
                        if(response=='success')
                      {
                        alert('Login successful');
                        window.location = 'profile.html';
                      }
                      else{
                        alert('Login details Incorrect');
                      }  

                    },
                    datatype:'text'
                }
            );
        }		
    });
        
}); 
