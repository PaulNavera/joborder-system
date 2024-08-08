function displayJobOrder(data){

       
        const parts = data.parts;
        let totalPartsAmount = 0; 

        if(parts){

         totalPartsAmount = parts.reduce((accumulator, part)=>{
                        return accumulator + part.amount;
                },0);
        }
        
        parts.map((part,i)=>{

                $(`#qty${i+1}`).val(part.quantity);
                $(`#item${i+1}`).val(part.item);
                $(`#amount${i+1}`).val(part.amount);

        })

        const totalAmount = totalPartsAmount + data.service_charge + data.transportation_charge + data.allowance + data.other_charges;


        $('#jobOrderModal').modal('show');               
        $('#company').val(data.company);
        $('#name').val(data.name);
        $('#address').val(data.address);
        $('#contact').val(data.contact);
        $('#email').val(data.email);
        $('#messenger').val(data.messenger);
        $('#unit').val(data.unit);
        $('#brand').val(data.brand);
        $('#model').val(data.model);
        $('#serial').val(data.serial);
        $('#reportsInstructions').val(data.reports_instructions);
        $('#totalPartsAmount').val(totalPartsAmount);
        $('#serviceCharge').val(data.service_charge);
        $('#transportationCharge').val(data.transportation_charge);
        $('#lodgingAllowance').val(data.allowance);
        $('#otherCharges').val(data.other_charges);
        $('#totalAmount').val(totalAmount);  
}