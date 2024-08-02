$(document).ready(function(){

    $('#joborderTable tbody').on('click', '.deleteBtn', function() {
        const jobId = $(this).data('id');
        $('#deleteJobOrderModal').data('jobOrderId', jobId).modal('show');
        $("#modalBody").text(`Are you sure you want to delete Job Order[#${jobId}]?`);

    });

    $('#confirmDelBtn').off('click').on('click',function() {

        const jobId = $('#deleteJobOrderModal').data('jobOrderId');
        $.ajax(
            {
            url: 'delete_joborder.php', 
            type: 'POST',
            data: { jobId: jobId },
            dataType: 'json',
            success: function(response) {
                
                if (response.success) {

                    alertify.success(response.message);
                    $('#joborderTable').DataTable().ajax.reload();
                    $('#deleteJobOrderModal').modal('hide');
                } else {
                    alertify.error(response.message);
                }
            },
            error: function(xhr, status, error) {
                 alertify.error("An error occurred while deleting the item. Please try again.");
            }
        });
    });
    
});

  
  