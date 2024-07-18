          
$(document).on('submit', '#jobOrderForm', function(e){

    e.preventDefault();   
    const jobOrderID = $('#jobId').val();                      

    let parts = getParts();
    let site = $('input[name="site"]:checked').val();
    let warranty = $('input[name="warranty"]:checked').val();
    let technician = $("#technician").val();
    let status = $("#status").val();

    let dateTime = new Date();
    let startDate = `${dateTime.getFullYear()}-${dateTime.getMonth()}-${dateTime.getDate()}`;
    let timeIn = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
   
    let formData = new FormData(this);
    
    const url = jobOrderID?'update_joborder.php':'add_joborder.php'

    formData.append("jobId",jobOrderID);
    formData.append("site",site);
    formData.append("warranty",warranty);
    formData.append("technician",technician);
    formData.append("status",status);
    formData.append("start_date",startDate);
    formData.append("time_in",timeIn);
    formData.append("parts",JSON.stringify(parts));

    console.log(url);

    $.ajax({
            url: url,
            type: 'POST',
            data:formData,
            contentType:false,
            processData:false,      
            dataType: 'json',
            success:function(response)
            {

                if(response.success){

                    alertify.success("Job Order saved!");                       
                    $('#joborderTable').DataTable().ajax.reload();
                    $('#jobOrderModal').modal('hide');
                    //printPDF(response);

                }
                else{
                    alertify.error("Job Order not saved!");                       
                    $('#jobOrderModal').modal('hide');
                }
                
            },
            error: function(xhr, status, error){
                console.error(`'Error:  ${error}`);
            }
            


            
        });
    
});



