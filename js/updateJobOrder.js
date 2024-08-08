$(document).ready(function(){
   
$('#joborderTable tbody').off('click', '.editBtn').on('click', '.editBtn', function() {
    const jobId = $(this).data('id');
    const btn = 'Edit';
    $('#jobId').val(jobId); 
    
    (async () => {
        try {
            const response = await getJobOrder(jobId);
            const data = response[0];
                 const warranty = data.warranty === 'Under Warranty'?'under_warranty':'out_warranty';
                 const site = data.site === 'In-House'?'in_house':'on_site';
                 $('#ModalLabel').text(`Edit Job Order [#${jobId}]`);
                 $(`#${warranty}`).prop('checked', true);
                 $(`#${site}`).prop('checked', true);
                 $('#technician').val(data.technician);
                 $('#status').val(data.status);
                displayJobOrder(data);
        } catch (error) {
            console.error(error);
        }
    })();

    });
});