
$(document).ready(function(){

    $('#addJobOrderBtn').click(function(){

        $('#jobOrderModal').modal('show');
        $('#ModalLabel').text("Add Job Order");

        const warranty = ` <div id="warrantyWrapper">
                                        <div >
                                            <input type="radio" id="under_warranty" name="warranty" value="Under Warranty">
                                            <label for="under-warranty">Under Warranty</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="out_warranty" name="warranty" value="Out of Warranty">
                                            <label for="out-warranty">Out of warranty</label>
                                        </div>
                            </div>`;
        const site =  `<div id="siteWrapper">
                                        <div>
                                            <input type="radio" id="on_site" name="site" value="On-Site">
                                            <label for="on_site">On-Site</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="in_house" name="site" value="In-House">
                                            <label for="in_house">In-House</label>
                                        </div>
                        </div>`;      
                        
                        
    
        $('#warrantyWrapper').replaceWith(warranty);
        $('#siteWrapper').replaceWith(site);


    });

    $('#jobOrderModal').on('hidden.bs.modal', function () {
        $('#jobOrderForm')[0].reset();

    });
});
    let rowCount=5;


    $("#addPartsButton").click(function(){
        rowCount++;

        let newQty = $("<td>").append( $("<input>").attr({ type: "number", id: "qty"+ rowCount, class:"parts"}));
        let newItem = $("<td>").append( $("<input>").attr({ type: "text", id: "item"+ rowCount, class:"parts"}));
        let newAmount = $("<td>").append( $("<input>").attr({ type: "number", id: "amount"+ rowCount, class:"parts"}));
        
         
        let newRow =  $("<tr>").append(newQty,newItem,newAmount);

        $("#partsTable tbody").append(newRow);
    });

 $(".charge").change(function(){
        
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

        });


$(".parts").change(function(){
            let rowCount = $("#partsTable tbody tr").length/3;
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

function printPDF(data){
        
        let jsonData = JSON.stringify(data);
            $.ajax({
                url:"generate_pdf.php",
                type: 'POST',
                data: jsonData,
                contentType: 'application/json',
                success:function(response)
                {
                    console.log(response);
        
                    
                },
                error: function(xhr, status, error){
                    console.error(`'Error:  ${error}`);
                }
                
        
        
                
            });
        
        } 
    
          
$(document).on('submit', '#addForm', function(e){
        e.preventDefault();                           

        let parts = getParts();
        let site = $('input[name="site"]:checked').val();
        let warranty = $('input[name="warranty"]:checked').val();
        let technician = $("#technician").val();
        let status = $("#status").val();
        let formData = new FormData(this);
        
        formData.append("site",site);
        formData.append("warranty",warranty);
        formData.append("technician",technician);
        formData.append("status",status);
        formData.append("parts",JSON.stringify(parts));

        
            $.ajax({
                url:"add_joborder.php",
                type: 'POST',
                data:formData,
                contentType:false,
                processData:false,
                dataType: 'json',
                success:function(response)
                {
                    console.log(response);

                    if(response.success){
  
                        alert("Job Order saved!");                       
                        $('#addJobOrderModal').modal('hide');
                        $('#joborderTable').DataTable().ajax.reload();
                        printPDF(response);

                    }
                    else{
                        alert("Job Order not saved!");                        
                        $('#addJobOrderModal').modal('hide');
                    }
                    
                },
                error: function(xhr, status, error){
                    console.error(`'Error:  ${error}`);
                }
                


                
            });
        
    });



