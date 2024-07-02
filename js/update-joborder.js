$(document).ready(function(){
    $('#jobOrderModal').on('hidden.bs.modal', function () {
        $('#jobOrderForm')[0].reset();
    });
});

$('#joborderTable tbody').on('click', '.editBtn', function() {
    const jobId = $(this).data('id');
    const editBtnclicked = true; 


    $.ajax({
        url: 'fetch_single_data.php', 
        type: 'POST',
        dataType: 'json',
        data: { job_order_id: jobId },
        success: function(response) {
           
            
            if (response && editBtnclicked) {

                const warranty = response[0].warranty === 'Under Warranty'?'under_warranty':'out_warranty';
                const site = response[0].warranty === 'in_house'?'in_house':'on_site';

                $('#jobOrderModal').modal('show');

                $('#ModalLabel').text("Edit Job Order [#"+response[0].job_order_id+']');
                $('#company').val(response[0].company);
                $('#name').val(response[0].name);
                $('#address').val(response[0].address);
                $('#contact').val(response[0].contact);
                $('#email').val(response[0].email);
                $('#messenger').val(response[0].messenger);
                $('#unit').val(response[0].unit);
                $('#brand').val(response[0].brand);
                $('#model').val(response[0].model);
                $('#serial').val(response[0].serial);
                $('#reportsInstructions').val(response[0].reports_instructions);
                $('#technician').val(response[0].technician);
                $('#status').val(response[0].status);
                $('#start_date').val(response[0].start_date);
                $('#finished_date').val(response[0].finished_date);
                $('#time_in').val(response[0].time_in);
                $('#start_date').val(response[0].start_date);
                $(`#${warranty}`).prop('checked', true);
                $(`#${site}`).prop('checked', true);
                $('#serviceCharge').val(response[0].service_charge);
                $('#transportationCharge').val(response[0].transportation_charge);
                $('#lodgingAllowance').val(response[0].allowance);
                $('#otherCharges').val(response[0].other_charges);
                $('#totalAmount').val();

            } else {
                alert('Failed to fetch item details.');
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr);
            alert('AJAX Error: ' + status + ' - ' + error);
        }
    });
});
