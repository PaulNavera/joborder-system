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
    const btn = 'View';
    
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
    
    $('#radioBtn').replaceWith(radioBtn);


     getJobOrder(jobId,btn);           
         
    });

