function printClaimStub(data){

   const printPage = `<html>
                        <head>
                           <link rel="stylesheet" href="./css/printClaimStub.css">
                           <title>Print Claim Stub</title>
                        </head>
                        <body>
                           <div class="wrapper" id="claimStub" >
                              <div class="col1"> 
                                 <div class="row1">
                                       <div>
                                          <label for="name">Name:</label>
                                          <input type="text" id="name" value=${data.name} disabled>
                                       </div>
                                       <div>
                                          <label for="jobId">Job Order No.:</label>
                                          <input type="text" id="jobId" value=${data.jobOrderId} disabled>
                                       </div>
                                 </div>
                                 <div class="row2 ">
                                       <div>
                                          <label for="date">Date  :</label>
                                          <input type="text" id="date" value=${data.date} disabled>
                                       </div>
                                       <div>
                                          <label for="unit">Unit:</label>
                                          <input type="text" id="unit" value=${data.unit} disabled>
                                       </div>
                                 </div> 
                              </div>  
                              <div class="col2">
                                 <span id="jobId">#${data.jobOrderId}</span>
                              </div>
                           </div>
                        </body>
                  </html>`;


   
                  const printWindow = window.open('', '', 'height=500,width=750');

                  if (printWindow) {
                      printWindow.document.write(printPage);
                     

                      setTimeout(function() {
                        printWindow.focus();  
                        printWindow.print();  
                        printWindow.close();
                    }, 1000); 
                      
                  } else {
                      console.error('Failed to open the print window.');
                  }
  
}