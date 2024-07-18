$(document).ready(function(){
    $('#jobOrderModal').on('hidden.bs.modal', function () {
        $('#jobOrderForm')[0].reset();
    });
});

$('#joborderTable tbody').on('click', '.editBtn', function() {
    const jobId = $(this).data('id');
    const btn = 'Edit';
    $('#jobId').val(jobId); 
    getJobOrder(jobId,btn);            

    });
