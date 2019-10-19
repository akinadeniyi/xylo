$(document).ready(function(){
    let link = window.location.href
    // let email = link.slice(link.indexOf("?") + 1)

    console.log(window.location.search);
    var urlParams = new URLSearchParams(window.location.search);
    var email = urlParams.get('email'); 
    console.log(email);
    $.ajax({
        url: "http://localhost:3000/users?emailaddress="+email, 
        success: function (result) {
             console.log(result);
            $('#applyBtn').append(`<a href="applicationform.html?id=${result[0].id}">Apply</a>`)
            
        },
        method: "GET",
    
    });
    
    $.ajax({
        url: "http://localhost:3000/leaveApplication?emailAddress="+email, 
        success: function (result) {
        for (i=0; i<result.length; i++) {
            $( "tbody" ).append(`<tr>
                <th scope="row">${result[i].id}</th>
                <td>${result[i].leaveType}</td>
                <td>${result[i].startDate}</td>
                <td>${result[i].endDate}</td>
                <td><button type="button" class="btn btn-success btn-block btn-update" id="update"><a href="view.html?email=${result[i].emailAddress}&leaveType=${result[i].leaveType}&id=${result[i].id}&status=${result[i].status}">View</a></button></td>
                <td><button type="button" id="delete" data-id=${result[i].id} class="btn btn-danger btn-block btn-delete">Delete</button></td>
                <td>${result[i].status}</td>
            
                </tr>`);
        }
            console.log(result)

           
            
        },
        method: "GET",
    
    })
    
    $(document).ready(function () {
        $('table').on('click', function(e){
           
            //console.log($(e.target).parent().parent());
            $(e.target).parent().parent().remove()
              var id = $(e.target).attr("data-id");
              var buttonCheck = $(e.target).attr("id");
            // var id = $('#delete').val()
            console.log(id)
            console.log(buttonCheck)
            if (buttonCheck === 'delete') {
                $.ajax({
                    type: "DELETE",
                    url: "http://localhost:3000/leaveApplication/"+id,
                   
                    dataType: "JSON",
                    // data: {"id": id},
                    success: function(response){
                      alert("Deleted")
                       }
                 });
        }else{
             window.location.href = `view.html?email=${result[i].emailAddress}&leaveType=${result[i].leaveType}&id=${result[i].id}`
        }
            
             e.preventDefault();
        })
        
    });
    
    if (email === 'admin') {
          
        $.ajax({
            url: "http://localhost:3000/leaveApplication", 
            success: function (result) {
        
                console.log(result)

                for (i=0; i<result.length; i++) {
                    $( "tbody" ).append(`<tr>
                        <th scope="row">${result[i].id}</th>
                        <td>${result[i].leaveType}</td>
                        <td>${result[i].startDate}</td>
                        <td>${result[i].endDate}</td>
                        <td><button type="button" class="btn btn-success btn-block btn-update" id="approve"><a href="view.html?email=${result[i].emailAddress}&leaveType=${result[i].leaveType}">Approved</a></button></td>
                        <td><button type="button" id="decline" data-id=${result[i].id} class="btn btn-danger btn-block btn-delete">Decline</button></td>
                        <td>${result[i].status}</td> 
                        </tr>`);
                }
            },
            method: "GET",
        
        });
    }
    

    
     })