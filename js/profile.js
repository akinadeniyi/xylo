$(document).ready(function(){
    let link = window.location.href
    let email = link.slice(link.indexOf("?") + 1)
    $.ajax({
        url: "http://localhost:3000/leaveApplication?emailAddress="+email, 
        success: function (result) {
    
            console.log(result)
        },
        method: "GET",
    
    });
    
    $.ajax({
        url: "http://localhost:3000/leaveApplication?emailAddress="+email, 
        success: function (result) {
        for (i=0; i<result.length; i++) {
            $( "tbody" ).append(`<tr>
                <th scope="row">1</th>
                <td>${result[i].emailAddress}</td>
                <td>${result[i].leaveType}</td>
                <td>${result[i].startDate}</td>
                <td>${result[i].endDate}</td>
                <td><button id="update">Update</button></td>
                <td><button type="button" data-id=${result[i].id} class="btn btn-danger btn-block btn-delete">Delete</button></td>
            
                </tr>`);
        }
            console.log(result)
            
        },
        method: "GET",
    
    })
    
    $(document).ready(function () {
        $('table').on('click', function(e){
            e.preventDefault();
            //console.log($(e.target).parent().parent());
            $(e.target).parent().parent().remove()
              var id = $(e.target).attr("data-id");
            console.log(id)
            
             $.ajax({
                url: "http://localhost:3000/leaveApplication",
                type: "DELETE",
                //dataType: "JSON",
                data: {"id": id},
                  success: function(response){
                  alert("Deleted")
                   }
             });
        })
        
    });
    
    // $('#delete-btn').click(function () {
    //     let link =window.location.href
    //     let email =link.slice(link.indexOf("?") + 1)
    //             $.ajax({
    //                 url: 'http://localhost:3000/leaveApplication?emailAddress='+ email,
    //                 type: 'GET',
    //                 cache: false,
    //                 async: false,
    //                 success: function (data) {
    //                     console.log(data);
    //                     let id = "",
    //                     emailAddress = ""
    //                     leaveType = ""
    //                     startDate = ""
    //                     endDate = ""
    
    //                     $.ajax({
    //                         url: 'http://localhost:3000/leaveApplication/'+ id,
    //                         type: 'PUT',
    //                         cache: false,
    //                         async: false,
    //                         data: {id, emailAddress, leaveType, startDate, endDate},
    //                         success: function (data) {   
    //                             console.log("success");
    //                             window.location.href = 'profile.html?'+emailAddress
    //                         }
    //                     });
    //                 }
    //             }); 
    //     });
    
    
    
     })