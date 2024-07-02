export  function printPDF(data){

    $.ajax({
        url:"generate_pdf.php",
        type: 'POST',
        data: data,
    
        success:function(response)
        {
            console.log(response);

            if(response.success){

                alert("Job Order saved!");                       
                $('#addJobOrderModal').modal('hide');
                $('#joborderTable').DataTable().ajax.reload();


            }
            else{
                alert("Job Order not saved!");                        
                $('#addJobOrderModal').modal('hide');
            }
            
        },
        error: function(xhr, status, error){
            console.error(`'Error:  ${error}`);
        }
        


        
    });


}