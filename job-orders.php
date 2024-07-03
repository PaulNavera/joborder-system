<?php
    include ('modals.php');
?>
<link rel="stylesheet" href="jobOrder.css">

<section class=" d-flex w-100 flex-column  ">
    <h3 class="mb-4 px-4 py-2 shadow-sm">Job Orders</h3>
    
    <div class="container">
        <div class="d-flex justify-content-between align-item-center">
            
            <div class="buttons d-flex mb-3">
                <button class="btn btn-success"  id="addJobOrderBtn"><i class="fa-solid fa-plus"></i>Add</button>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-bordered table-striped " id="joborderTable">
                <thead class="table-primary">
                    <tr class=" text-center"> 
                        <th scope="col">Job Order ID</th>
                        <th scope="col">Company</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact #</th>
                        <th scope="col">Site</th>
                        <th scope="col">Time In</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Warranty</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>


    </div>

    </section>
    <script src="bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js"></script>
    <script src="jquery/jquery-3.7.1.min.js"></script>    
    <script src="DataTables/datatables.min.js"></script>
    <script src="js/fetchData.js"></script>
    <script src="js/deleteJobOrder.js"></script>
    <script src="js/updateJobOrder.js"></script>
    <script src="js/viewJobOrder.js"></script>


    
    
    
