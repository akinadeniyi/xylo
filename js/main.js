$(document).ready(function () {

    $('form').on('submit', function(e){
        e.preventDefault();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let department = $('#department').val();
        let emailAddress = $('#emailAddress').val();
        let password = $('#password').val();
        let admin = false
       

        $.ajax({
            url: "http://localhost:3000/users", 
            success: function (result) {
                // $("#div1").html(result);
                console.log("success")
            },
            method: "POST",
            data: {
                firstName,
                lastName,
                department,
                emailAddress,
                password,
                admin
            }
        });
    })
    
    });