function displayJobOrder(response){

        $('#jobOrderModal').modal('show');               
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
        $('#serviceCharge').val(response[0].service_charge);
        $('#transportationCharge').val(response[0].transportation_charge);
        $('#lodgingAllowance').val(response[0].allowance);
        $('#otherCharges').val(response[0].other_charges);
        $('#totalAmount').val();  
}