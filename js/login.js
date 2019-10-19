$(document).ready(function () {
            
    $('#login').on('click', function(e){
        e.preventDefault();
        let emailAddress = $('#materialRegisterFormEmail').val();
        let password = $('#materialRegisterFormPassword').val();

    //     $.ajax({
    //         url: "http://localhost:3000/users?emailAddress=" + emailAddress + "&password=" + password, 
    //         success: function (result) {
    //              if(result.length === 1 && !result[0]["admin"] ){
    //             //     sessionStorage.setItem('user_email', result[i].emailAddress)
    //                 window.location = './profile.html'
    //             }else if(result.length === 1 && !result[0]["admin"]){
    //                 // sessionStorage.setItem('user_email', result[i].emailAddress)
    //                 window.location = './adminprofile.html'
    //             }else {
    //                 $('#notice').text("Invalid Emailaddress/Password")
    //             }
    //             console.log(result)
    //         },
    //         method: "GET",
            
    //     });

    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/users", 
        //data : info,
        dataType : 'json',
        encode   : true,
        success  : function(res){
           
            let userExist;
            let adminExists;
            console.log(res);

            res.forEach(element => {

                if (element.emailaddress === emailAddress && element.password === password && element.admin != true) {
                    
                    
                    userExist = true;
                  
                    
                }else if (element.emailaddress === emailAddress && element.password === password && element.admin == true) {
                    
                    adminExists = true;

                }
                
            });

            console.log(adminExists);
            console.log(userExist);
            if (userExist === true) {
                window.location.href ="profile.html?email="+emailAddress ;
            }else if (adminExists === true) {
                window.location.href ="adminprofile.html?email="+emailAddress;
            }



        }

    })
    
    });

});