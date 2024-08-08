$(document).ready(function(){
   
$('#joborderTable tbody').off('click', '.editBtn').on('click', '.editBtn', function() {
    const jobId = $(this).data('id');
    const btn = 'Edit';
    $('#jobId').val(jobId); 
    
      console.log("edit");
    (async () => {
        try {
            const response = await getJobOrder(jobId);
            

                 const warranty = response[0].warranty === 'Under Warranty'?'under_warranty':'out_warranty';
                 const site = response[0].site === 'In-House'?'in_house':'on_site';
                 $('#ModalLabel').text(`Edit Job Order [#${jobId}]`);
                 $(`#${warranty}`).prop('checked', true);
                 $(`#${site}`).prop('checked', true);
                 $('#technician').val(response[0].technician);
                 $('#status').val(response[0].status);
                displayJobOrder(response);
        } catch (error) {
            console.error(error);
        }
    })();

    });
});