async function printForm(jobId){

    
                 try {
                 let response = await getJobOrder(jobId); 
                 const data = response[0];
             
                let htmlPage =`<!DOCTYPE html>
                                <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <link rel="stylesheet" href="printForm.css">
                                    <link rel="stylesheet" href="bootstrap-5.3.3-dist/css/bootstrap.min.css">
                                    <link rel="stylesheet" href="fontawesome-free-6.5.2-web/css/all.min.css">
                                    <title>Print Job Order</title>
                                </head>
                                <body class="container">

                                    <header class="d-flex flex-column ">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex  align-items-center">
                                                
                                            </div>
                                            
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <img style="width: 200px;height: 60px;" src="./assets/logo.png" alt="logo">
                                            <div class="company-info d-flex flex-column text-center">
                                                <h6>ZHUREN TECH SOLUTIONS</h6>
                                                <span>No. 16 Velasco Street, Vel-Amor Subd.,Brgy. 18 Cabangan West Legazpi City, 4500</span>
                                                <span><i class="fa-solid fa-envelope"></i> ZHURENTECHSOLUTIONS@GMAIL.COM</span>
                                                <span><i class="fa-brands fa-facebook-f"></i> /ZHURENTECHSOLUTION</span>
                                                <span><i class="fa-solid fa-phone"></i> 0917-775-3297</span>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <span class="fs-3">Job Order</span>
                                                <table id="dataTable" class="job-order table-bordered">
                                                    <thead>
                                                        <tr >
                                                            <th>Job Order #</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>000${data.job_order_id}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table id="dateTable" class="date table-primary table-bordered mt-2">
                                                    <thead>
                                                        <tr >
                                                            <th>Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>${data.finished_date}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </header>

                                    <main class="mt-3">
                                        <table id="unitTable" class="unit table-primary  w-100">
                                            <thead>
                                                <tr >
                                                    <th colspan="2">Customer Information </th>
                                                    <th colspan="2">Unit Information </th>
                                                    <th style="width: 50%;">Job Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="label">Company:</td>
                                                    <td> ${data.company}</td>
                                                    <td class="label">Unit:</td>
                                                    <td> ${data.unit}</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="label">Name:</td>
                                                    <td> ${data.name}</td>
                                                    <td class="label">Brand:</td>
                                                    <td>${data.brand}</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="label">Address: </td>
                                                    <td>${data.address}</td>
                                                    <td class="label">Model:</td>
                                                    <td>${data.model}</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="label">Contact No.:</td>
                                                    <td> ${data.contact}</td>
                                                    <td class="label">Serial No.:</td>
                                                    <td>${data.serial}</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="label" >Email: </td>
                                                    <td>${data.email}</td>
                                                    <td class="label" ></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="label">Messenger: </td>
                                                    <td>${data.messenger}</td>
                                                    <td class="label" ></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table id="amountTable" class="amount table-bordered w-100 text-center mt-3">
                                            <thead>
                                                <tr class="fw-medium ">
                                                    <th scope="col">Qty.</th>
                                                    <th class="w-50" scope="col">Description</th>
                                                    <th scope="col">Unit Price</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="fw-bold fs-6 text-end" colspan="3"> Total Amount:</td>
                                                    <td></td>
                                                </tr>
                                                

                                            </tbody>
                                        </table>
                                    
                                    </main>
                                    <footer>
                                        <span class="d-block text-center fst-italic mt-1">I agree that all work has been performed to my satisfaction.</span>
                                        
                                        
                                        <div class=" d-flex justify-content-end w-100 mt-5"><span style="border-top: 1px solid #474747;" class="d-block w-25 text-center ">Signature</span></div>
                                        
                                        <span class="d-block text-center fst-italic">Thank You For Your Bussiness!</span>
                                    </footer>
                                    
                                                            
                                    
                                </body>
                                </html>` 
               
                const printWindow = window.open('', '', 'width=800,height=600');

        if (printWindow) {
            printWindow.document.open();
            printWindow.document.write(htmlPage);
           
            setTimeout(function() {                  
                    
                      
                printWindow.focus();  
                printWindow.print();  
                printWindow.close();
                 }, 500); 
                } 
            }catch (error) {
                        console.error(error);
                            }
  
    

 
                //   const printWindow = window.open('', '', 'height=500,width=750');
                
                //   if (printWindow) {
                //       printWindow.document.write(printPage);
                     

                //       setTimeout(function() {                  
                    
                      
                //         printWindow.focus();  
                //         printWindow.print();  
                //         //printWindow.close();
                //     }, 1000); 
                      
                //   } else {
                //       console.error('Failed to open the print window.');
                //   }
  

}