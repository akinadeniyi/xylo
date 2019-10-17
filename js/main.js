$(document).ready(function () {

    $('form').on('submit', function(e){
        e.preventDefault();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let department = $('#department').val();
        let emailAddress = $('#emailAddress').val();
        let password = $('#password').val();
        let admin = false

        console.log($('#password').val())


        let info = {
            'firstname' : firstName,
            'lastname'  : lastName,
            'department' : department,
            'emailaddress' : emailAddress,
            'password'   : password,
            'admin'       : admin
        }
       

        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/users", 
            data : info,
            dataType : 'json',
            encode   : true
            
        });
    })
    
    });