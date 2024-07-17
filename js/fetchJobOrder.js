
function getJobOrder(jobId,btn){

$.ajax({
    url: 'fetch_single_data.php', 
    type: 'POST',
    dataType: 'json',
    data: { job_order_id: jobId },
    success: function(response) {
        
        if (response) {
           
            if(btn === 'View'){
                const tech = $('<input type="text" id="technician" />').val(response[0].technician);
                const status = $('<input type="text" id="status" />').val(response[0].status);
                
            
        
            
                $('#addPartsButton').hide();
                $('#technician').replaceWith(tech);
                $('#status').replaceWith(status);
                $('#warranty').val(response[0].warranty);
                $('#site').val(response[0].site);                
                $('input, select, textarea').prop('disabled', true);
 
            }
            else{
                
    
                 const warranty = response[0].warranty === 'Under Warranty'?'under_warranty':'out_warranty';
                 const site = response[0].site === 'In-House'?'in_house':'on_site';
                 $(`#${warranty}`).prop('checked', true);
                 $(`#${site}`).prop('checked', true);

            }
           
            $('#jobOrderModal').modal('show');               
            

            $('#ModalLabel').text(`${btn} Job Order [#${jobId}]`);
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
            $('#start_date').val(response[0].start_date);
            $('#finished_date').val(response[0].finished_date);
            $('#time_in').val(response[0].time_in);
            $('#start_date').val(response[0].start_date);
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



}