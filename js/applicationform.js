$(document).ready(function () {

    $('#apply').on('click', function(e){
        e.preventDefault();
        let emailAddress = $('#materialRegisterFormEmail').val();
        let leaveType = $('#materialRegisterFormLeaveType').val();
        let startDate = $('#element1').val();
        let endDate = $('#element2').val()
       

        $.ajax({
            url: "http://localhost:3000/leaveApplication", 
            success: function (result) {
                window.location = "./profile.html?" + emailAddress 
        
                console.log("success")
            },
            method: "POST",
            data: {
                emailAddress,
                leaveType,
                startDate,
                endDate
            }
        });
    })
    
    });