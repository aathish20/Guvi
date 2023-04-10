$(document).ready(function () {
    
    $("#register").on('click',function() {
        var gender = $("#gender").val();
        var age = $("#age").val();
        var addr1 = $("#addr1").val();
        var addr2 = $("#addr2").val();
        var phone = $("#phone").val();
        

        
        if(gender == "" || age == "" ||addr1==""||addr2 == "" || phone == "")
        {
            alert('Please fill everything');
        }
        else
        {
            $.ajax
            (
                {
                    url:'php/profile.php',
                    method: 'POST',
                    data: 
                    {
                        login:1,
                        genderPHP: gender,
                        agePHP: age,
                        addr1PHP: addr1,
                        addrPHP: addr2,
                        phonePHP: phone

                        
                    },
                    success: function(response)
                    {
                        
                        alert('profile updation successful')
                        
                    },
                    datatype:'text'
                }
            );
        }		
    });
        
}); 