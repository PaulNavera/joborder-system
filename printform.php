<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="printForm.css">
    <link rel="stylesheet" href="bootstrap-5.3.3-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="fontawesome-free-6.5.2-web/css/all.min.css">
    <title>Form</title>
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
                <table id="jobOrderTable" class="job-order table-bordered">
                    <thead>
                        <tr >
                            <th>Job Order #</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table id="dateTable" class="table-primary table-bordered mt-2">
                    <thead>
                        <tr >
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
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
                    <th>Customer Information </th>
                    <th>Unit Information </th>
                    <th style="width: 50%;">Job Details</th>
                </tr>
            </thead>
            <tbody>
               
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
</html>