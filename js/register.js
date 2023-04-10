

$(document).ready(function () {
    
    $("#register").on('click',function() {
        var email = $("#email").val();
        var password = $("#password").val();
        var username = $("#username").val();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        

        
        if(email == "" || password == "" ||username==""||fname == "" || lname == "")
        {
            alert('Please fill everything');
        }
        else
        {
            $.ajax
            (
                {
                    url:'php/register.php',
                    method: 'POST',
                    data: 
                    {
                        login:1,
                        emailPHP: email,
                        passwordPHP: password,
                        usernamePHP: username,
                        fnamePHP: fname,
                        lnamePHP: lname

                        
                    },
                    success: function(response)
                    {
                        console.log(response);
                        alert('registration succesful  ')
                        window.location = 'login.html';
                    },
                    datatype:'text'
                }
            );
        }		
    });
        
}); 