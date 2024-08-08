$('#jobOrderModal').on('hidden.bs.modal', function () {
    
    $('#jobOrderForm')[0].reset();
    
    let rowCount = $("#partsTable tbody tr").length;
    if(rowCount>5){
        for(let i=rowCount;i>5;i--){
            $('#partsTable tr:last').remove()
        }
    }

//View

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

const saveBtn =`<button type="submit" id="saveButton" class="btn btn-primary" >Save</button>`;

$('#jobOrderModal').modal('hide');

$('input, select, textarea').prop('disabled', false);
$('#totalPartsAmount').prop('disabled', true);
$('#totalAmount').prop('disabled', true);
$('#selectOptions').replaceWith(selectOptions);
$('#radioBtn').replaceWith(radioBtn);
$('#cancelBtn').show();
$('#printFormBtn').show();
$('#addPartsButton').show();
$('#date').remove();
$('#time').remove();
$('input').css('font-style', 'normal');
$('#printFormBtn').replaceWith(saveBtn);
$('#cancelBtn').text("Cancel");

//Update
$('#jobId').val("");                      


});