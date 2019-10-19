$(document).ready(function () {


    console.log(window.location.search);
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id'); 
    console.log(id);

    $('#apply').on('click', function(e){
        e.preventDefault();
        let emailAddress = $('#materialRegisterFormEmail').val();
        let leaveType = $('#materialRegisterFormLeaveType').val();
        let startDate = $('#element1').val();
        let endDate = $('#element2').val();
        let status = 'pending';
        let usersId = id;
       

        $.ajax({
            url: "http://localhost:3000/leaveApplication", 
            success: function (result) {
                window.location = "./profile.html?email=" + emailAddress 
        
                console.log("success")
            },
            method: "POST",
            data: {
                emailAddress,
                leaveType,
                startDate,
                endDate,
                status,
                usersId
            }
        });
    })
    
    });