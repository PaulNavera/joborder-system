$(document).ready(function(){

    $('#addJobOrderBtn').click(function(){

        $('#jobOrderModal').modal('show');
        $('#ModalLabel').text("Add Job Order");
       
    });

   
});


    $("#addPartsButton").click(function(){
        
        let rowCount = $("#partsTable tbody tr").length;
        rowCount++;

        let newQty = $("<td>").append( $("<input>").attr({ type: "number", id: "qty"+ rowCount, class:"parts"}));
        let newItem = $("<td>").append( $("<input>").attr({ type: "text", id: "item"+ rowCount, class:"parts"}));
        let newAmount = $("<td>").append( $("<input>").attr({ type: "number", id: "amount"+ rowCount, class:"parts"}));
        
         
        let newRow =  $("<tr>").append(newQty,newItem,newAmount);

        $("#partsTable tbody").append(newRow);
    });

        
    $(".charge").change(function(){
        
        function safeParseInt(value) {
            return parseInt(value) || 0;
        }

        let totalParts = safeParseInt($('#totalPartsAmount').val());
        let serviceCharge = safeParseInt($('#serviceCharge').val());
        let transportationCharge = safeParseInt($('#transportationCharge').val());
        let lodgingAllowance = safeParseInt($('#lodgingAllowance').val());
        let otherCharges = safeParseInt($('#otherCharges').val());

        let total = totalParts + serviceCharge + transportationCharge + lodgingAllowance + otherCharges;

        $("#totalAmount").val(total);
    });

       


$(".parts").change(function(){
            let rowCount = $("#partsTable tbody tr").length;
            let totalParts = 0;
            for(let i = 1; i <= rowCount; i++) {

                if($(`#qty${i}`).val()!=='' && $(`#amount${i}`).val()!==''){
                    let qty = parseInt($(`#qty${i}`).val());
                    let amount = parseInt($(`#amount${i}`).val());
            
                    totalParts += qty * amount;
                }
            }
        
            $("#totalPartsAmount").val(totalParts);
     });
   



function getParts(){

    let rowCount = $("#partsTable tbody tr").length;
    let parts =[];

    for(let i=1;i<=rowCount;i++){
            
        if($('#qty'+ i).val() && $('#item'+ i).val() && $('#amount'+ i).val()){

        part = {
                qty: $('#qty'+ i).val(),
                item: $('#item'+ i).val(),
                amount: $('#amount'+ i).val()
                }  
        parts.push(part);
        }
            }

        return parts;

        }

