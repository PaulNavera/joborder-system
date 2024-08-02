$(document).ready(function(){
    $('#jobOrderModal').on('hidden.bs.modal', function () {

    
        const selectOptions =`<div class="mb-2" id="selectOptions"> 
                                    <div>
                                        <label for="technician">Technician:</label>
                                         <select name="technician" id="technician" required>
                                            <option value="" disabled selected>Select</option>
                                            <option value="Reginald Jesse De Guzman">Reginald Jesse De Guzman</option>
                                            <option value="Paul Aldrin Navera">Paul Aldrin Navera</option>
                                            <option value="Francis Balbedina">Francis Balbedina</option>
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
        $('#date').remove();
        $('#time').remove();
        $('input').css('font-style', 'normal');
        $('#saveButton').show();
        $('#cancelBtn').text("Cancel");



    });
});


$('#joborderTable tbody').on('click', '.viewBtn', function() {
    const jobId = $(this).data('id');
    const btn = 'View';
    console.log("view");


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
    
    const time = ` <div class="time" id="time">
                                    <div>
                                        <label for="time-in">Time-in:</label>
                                        <input type="text" id="time-in" name="time-in">
                                    </div>
                                    <div>
                                        <label for="time-out">Time-out:</label>
                                        <input type="text" id="time-out" name="time-out">
                                    </div>
                    </div>`;
    const date = ` <div class="date" id="date">
                                <div>
                                    <label for="start-date">Start date:</label>
                                    <input type="text" id="start-date" name="start-date">
                                </div>
                                <div>
                                    <label for="finished-date">Finished date:</label>
                                    <input type="text" id="finished-date" name="finished-date">
                                </div>
                    </div>`;
    
    $('#radioBtn').replaceWith(radioBtn);
    $('#radioBtn').after(date);
    $('#date').after(time);
    $('#saveButton').hide();
    $('#cancelBtn').text("OK");

    getJobOrder(jobId,btn);           
         
    });

