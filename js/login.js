$(document).ready(function () {
            
    $('#login').on('click', function(e){
        e.preventDefault();
        let emailAddress = $('#materialRegisterFormEmail').val();
        let password = $('#materialRegisterFormPassword').val();

        $.ajax({
            url: "http://localhost:3000/users?emailAddress=" + emailAddress + "&password=" + password, 
            success: function (result) {
                 if(result.length ===1 && !result[0]["admin"] ){
                //     sessionStorage.setItem('user_email', result[i].emailAddress)
                    window.location = './profile.html'
                }else if(result.length ===1 && !result[0]["admin"]){
                    // sessionStorage.setItem('user_email', result[i].emailAddress)
                    window.location = './admin.html'
                }else {
                    $('#notice').text("Invalid Emailaddress/Password")
                }
                console.log(result)
            },
            method: "GET",
            
        });
    })
    
    });
