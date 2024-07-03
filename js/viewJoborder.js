$(document).ready(function(){
    $('#jobOrderModal').on('hidden.bs.modal', function () {

    
        const selectOptions =`<div class="mb-2" id="selectOptions"> 
                                    <div>
                                        <label for="technician">Technician:</label>
                                        <select name="technician" id="technician" required>
                                            <option value="" disabled selected>Select</option>
                                            <option value="Paul Aldrin">Paul Aldrin Navera</option>
                                            <option value="Reginald">Reginald Jesse De Guzman</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="status">Status:</label>
                                        <select name="status" id="status">
                                            <option value="Under Repair">Under Repair</option>
                                            <option value="Claimable">Claimable</option>
                                            <option value="Claimed">Claimed</option>
                                        </select>
                                    </div>
                                   
                            </div>`;
                             
        const radioBtn =` <div class="radio-btn" id="radioBtn">
                            <div id="warrantyWrapper">
                                <div >
                                    <input type="radio" id="under_warranty" name="warranty" value="Under Warranty">
                                    <label for="under-warranty">Under Warranty</label>
                                </div>
                                <div>
                                    <input type="radio" id="out_warranty" name="warranty" value="Out of Warranty" checked>
                                    <label for="out-warranty">Out of warranty</label>
                                </div>
                            </div>
                            <div id="siteWrapper">
                                <div>
                                    <input type="radio" id="on_site" name="site" value="On-Site" >
                                    <label for="on_site">On-Site</label>
                                </div>
                                <div>
                                    <input type="radio" id="in_house" name="site" value="In-House" checked>
                                    <label for="in_house">In-House</label>
                                </div>
                            </div>
                        </div>`;


                        
                        
        $('#jobOrderForm')[0].reset();
        $('input, select, textarea').prop('disabled', false);
        $('#selectOptions').replaceWith(selectOptions);
        $('#radioBtn').replaceWith(radioBtn);
        $('#addPartsButton').show();

    });
});


$('#joborderTable tbody').on('click', '.viewBtn', function() {
    const jobId = $(this).data('id');
    
    
    let viewBtnclicked = true; 
    const radioBtn = ` <div class="radio-btn" id="radioBtn">
                                    <div id="warrantyWrapper">
                                        <label for="warranty">Warranty:</label>
                                        <input type="text" id="warranty" name="warranty">
                                    </div>
                                    <div id="siteWrapper">
                                        <label for="warranty">Site:</label>
                                        <input type="text" id="site" name="site">
                                    </div>
                        </div>`;
    
    $('#radioBtn').remove();

    $('#time').after(radioBtn);


    $.ajax({
        url: 'fetch_single_data.php', 
        type: 'POST',
        dataType: 'json',
        data: { job_order_id: jobId },
        success: function(response) {
            
            if (response && viewBtnclicked) {
               
                
                const tech = $('<input type="text" id="technician" />').val(response[0].technician);
                const status = $('<input type="text" id="status" />').val(response[0].status);
                

                $('#jobOrderModal').modal('show');                
                

                $('#addPartsButton').hide();

                $('#ModalLabel').text("View Job Order [#"+response[0].job_order_id+']');
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
                $('#technician').replaceWith(tech);
                $('#status').replaceWith(status);
                $('#start_date').val(response[0].start_date);
                $('#finished_date').val(response[0].finished_date);
                $('#time_in').val(response[0].time_in);
                $('#start_date').val(response[0].start_date);
                $('#warranty').val(response[0].warranty);
                $('#site').val(response[0].site);
                $('#serviceCharge').val(response[0].service_charge);
                $('#transportationCharge').val(response[0].transportation_charge);
                $('#lodgingAllowance').val(response[0].allowance);
                $('#otherCharges').val(response[0].other_charges);
                $('#totalAmount').val();
                $('input, select, textarea').prop('disabled', true);
                
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

