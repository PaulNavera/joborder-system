$('#joborderTable tbody').on('click', '.deleteBtn', function() {
    var jobId = $(this).data('id');
    $('#deleteJobOrderModal').data('jobOrderId', jobId).modal('show');
    $("#modalBody").text(`Are you sure you want to delete Job Order[#${jobId}]"?`);
});

// Confirm delete button click event
$('#confirmDeleteBtn').on('click', function() {
    var jobId = $('#deleteJobOrderModal').data('jobOrderId');
    $.ajax({
        type: 'POST',
        url: 'delete_joborder.php', 
        data: { jobId: jobId },
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                alert(response.message);
                $('#deleteJobOrderModal').modal('hide');
                $('#joborderTable').DataTable().ajax.reload();
            } else {
                alert(response.message);
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            alert("An error occurred while deleting the item. Please try again.");
        }
    });
});