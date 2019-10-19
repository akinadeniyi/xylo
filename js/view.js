$(document).ready(function(){
    console.log(window.location.search);
    var urlParams = new URLSearchParams(window.location.search);
    var email = urlParams.get('email'); 
    var leaveType = urlParams.get('leaveType'); 
    var id = urlParams.get('id'); 
    var status = urlParams.get('status');

    console.log(email)
    console.log(leaveType)
    console.log(id)


    $('#materialRegisterFormEmail').val(email) 
    $('#materialRegisterFormLeaveType').val(leaveType) 
    
    if (status === 'approved') {
        $('#update').attr('disabled',true);
    }

    $('#update').on('click',function(e){

        let email = $('#materialRegisterFormEmail').val(); 
        let leave = $('#materialRegisterFormLeaveType').val();
        let startDate = $('#element1').val();
        let endDate = $('#element2').val();
       
      let data = {
          'emailAddress' : email,
          'leaveType' : leave,
          'startdate' : startDate,
          'enddate'   : endDate
      }

      $.ajax({
          type : 'PATCH',
          url  : 'http://localhost:3000/leaveApplication/'+id,
          data  : data,
          dataType : 'json'
      }).done(function(data){
          console.log(data);
          window.location.href = "./profile.html?email=" + email
      })
       e.preventDefault()
    })
})