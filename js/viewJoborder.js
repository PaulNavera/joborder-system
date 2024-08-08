$(document).ready(function(){

    let jobId;

$('#joborderTable tbody').off('click', '.viewBtn').on('click', '.viewBtn', function() {
     jobId = $(this).data('id');


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
    const printBtn = `<button type="button" id="printFormBtn" class="btn btn-primary"><i class="fa-solid fa-print"></i></button>`;
   
    
    (async () => {
        try {
            const response = await getJobOrder(jobId);
            
                    const tech = $('<input type="text" id="technician" />').val(response[0].technician);
                    const status = $('<input type="text" id="status" />').val(response[0].status);
                    
                    $('#ModalLabel').text(`View Job Order [#${jobId}]`);
                    $('#radioBtn').replaceWith(radioBtn);
                    $('#radioBtn').after(date);
                    $('#date').after(time);
                    $('#saveButton').replaceWith(printBtn);
                    $('#cancelBtn').text("Close");
                    $('#addPartsButton').hide();
                    $('#technician').replaceWith(tech);
                    $('#status').replaceWith(status);
                    $('#warranty').val(response[0].warranty);
                    $('#site').val(response[0].site); 
                    $('#other-info input').css('width', '60%');
                    $('input, select, textarea').prop('disabled', true);

                    displayJobOrder(response);
        } catch (error) {
            console.error(error);
        }
    })();

         
    });

   $(document).off('click', '#printFormBtn').on('click', '#printFormBtn', function() {    
        printForm(jobId);
});


});

