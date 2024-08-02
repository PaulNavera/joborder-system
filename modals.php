<link rel="stylesheet" type="text/css" href="modals.css">
<link rel="stylesheet" href="alertify/css/alertify.min.css">

<!--Add modal-->
<div class="modal fade" id="jobOrderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form id="jobOrderForm" method="post">
        <input type="hidden" id="jobId" name="jobId"> 
        <div class="modal-body">
            <div id="errorMessageUpdate" class="alert alert-warning d-none"></div>

            
                    <div class="row p-4 mb-2">
                        <div class="col-6 d-flex flex-column justify-content-between">
                            <fieldset class="border rounded-3 p-4 mb-2">
                                <legend class="float-none w-auto px-3 fs-6 fw-medium ">Customer Information</legend>
                                <div>
                                    <label for="company">Company:</label>
                                    <input type="text"  id="company" name="company" autocomplete="off">
                                </div>
                                <div>
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" name="name" required autocomplete="off">
                                </div>
                                <div>
                                    <label for="address">Address:</label>
                                    <input type="text" id="address" name="address" required autocomplete="off">
                                </div>
                                <div>
                                <label for="contact">Contact No.:</label>
                                    <input type="tel" id="contact" name="contact" required autocomplete="off"> 
                                </div>
                                <div>
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" autocomplete="off">
                                </div>
                            <div>
                                    <label for="messenger">Messenger/Facebook:</label>
                                    <input type="text" id="messenger" name="messenger" >
                            </div>
                            </fieldset>  
                            <fieldset class="border rounded-3 p-4 mb-2 ">
                                <legend class="float-none w-auto px-3 fs-6 fw-medium">Unit Information</legend>
                                <div>
                                    <label for="unit">Unit:</label>
                                    <input type="text" id="unit" name="unit" required>
                                </div>
                                <div>
                                    <label for="brand">Brand:</label>
                                    <input type="text" id="brand" name="brand" required>
                                </div>
                                <div>
                                    <label for="model">Model No.:</label>
                                    <input type="text" id="model" name="model" required>
                                </div>
                                <div>
                                    <label for="serial">Serial No.:</label>
                                    <input type="text" id="serial" name="serial" required>
                                </div>
                            
                            </fieldset>
                            <fieldset class="border rounded-3 p-4 mb-2 ">
                                <legend class="float-none w-auto px-3 fs-6 fw-medium">Client's Report and Intruction</legend>
                                <textarea id="reportsInstructions" name="reportsInstructions" rows="4" cols="" class="w-100 p-1"></textarea>
                            </fieldset>
                        </div>
                        <div class="col-6 d-flex flex-column justify-content-between">
                            <fieldset class=" additional-info border rounded-3 p-4 mb-2" id="other-info">
                                <legend class="float-none w-auto px-3 fs-6 fw-medium">Other Information</legend>
                                <div class="mb-2" id="selectOptions"> 
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
                                        <select name="status" id="status" required>
                                            <option value="Under Repair">Under Repair</option>
                                            <option value="Claimable">Claimable</option>
                                            <option value="Claimed">Claimed</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                
                                <div class="radio-btn" id="radioBtn">
                                    <div id="warrantyWrapper">
                                        <div >
                                            <input type="radio" id="under_warranty" name="warranty" value="Under Warranty" >
                                            <label for="under-warranty" >Under Warranty</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="out_warranty" name="warranty" value="Out of Warranty" checked>
                                            <label for="out-warranty">Out of warranty</label>
                                        </div>
                                    </div>
                                    <div id="siteWrapper">
                                        <div>
                                            <input type="radio" id="on_site" name="site" value="On-Site">
                                            <label for="on_site">On-Site</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="in_house" name="site" value="In-House" checked>
                                            <label for="in_house">In-House</label>
                                        </div>
                                    </div>
                                </div>
                                

                            </fieldset>
                            <fieldset class="border rounded-3 p-4 mb-2 ">
                                <legend class="float-none w-auto px-3 fs-6 fw-medium ">Parts and Consumables</legend>

                                <table class="table-bordered w-auto text-center mb-2" id="partsTable">
                                    <thead>
                                        <tr class="fw-medium ">
                                            <th scope="col">QTY.</th>
                                            <th class="w-75" scope="col">Item Code/Description</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input class="parts" type="number" id="qty1" name="qty1" ></td>
                                            <td><input class="parts" type="text" id="item1" name="item1" ></td>
                                            <td><input class="parts" type="number" id="amount1" name="amount1" ></td>
                                        </tr>
                                        <tr>
                                            <td><input class="parts" type="number" id="qty2" name="qty2" ></td>
                                            <td><input class="parts" type="text" id="item2" name="item2" ></td>
                                            <td><input class="parts" type="number" id="amount2" name="amount2" ></td>
                                        </tr>
                                        <tr>
                                            <td><input class="parts" type="number" id="qty3" name="qty3" ></td>
                                            <td><input class="parts" type="text" id="item3" name="item3" ></td>
                                            <td><input class="parts" type="number" id="amount3" name="amount3" ></td>
                                        </tr>
                                        <tr>
                                            <td><input class="parts" type="number" id="qty4" name="qty4" ></td>
                                            <td><input class="parts" type="text" id="item4" name="item4" ></td>
                                            <td><input class="parts" type="number" id="amount4" name="amount4" ></td>
                                        </tr>
                                        <tr>
                                            <td><input class="parts" type="number" id="qty5" name="qty5" ></td>
                                            <td><input class="parts" type="text" id="item5" name="item5" ></td>
                                            <td><input class="parts" type="number" id="amount5" name="amount5" ></td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-success add-button" id="addPartsButton"><i class="fa-regular fa-plus "></i></button>
                                </div>
                            </fieldset>
                            <fieldset class="charges border rounded-3 p-4 mb-2">
                                <legend class="float-none w-auto px-3 fs-6 fw-medium">Charges</legend>
                                <div>
                                    <label for="total-parts-amount">Total Parts/Consumable:</label>
                                    <div>
                                        <i class="fa-solid fa-peso-sign"></i>  
                                        <input type="number" id="totalPartsAmount" name="totalPartsAmount" class="charge" disabled>                                          
                                    </div>
                                </div>
                                <div>
                                    <label for="service-charge">Service Charge:</label>
                                    <div>
                                        <i class="fa-solid fa-peso-sign"></i>
                                        <input type="number" id="serviceCharge" name="serviceCharge" class="charge">
                                    </div>
                                    
                                </div> 
                                <div>
                                    <label for="transportation">Transportation and per diem:</label>
                                    <div>
                                        <i class="fa-solid fa-peso-sign"></i>
                                        <input type="number" id="transportationCharge" name="transportationCharge" class="charge"> 
                                    </div>
                                    
                                </div>
                                <div>
                                    <label for="lodging-allowance">Board and lodging allowance:</label>
                                    <div>
                                        <i class="fa-solid fa-peso-sign"></i>
                                        <input type="number" id="lodgingAllowance" name="lodgingAllowance" class="charge" >
                                    </div>
                                </div>
                                <div>
                                    <label for="other-charges">Other Charges:</label>
                                    <div>
                                        <i class="fa-solid fa-peso-sign"></i>
                                        <input type="number" id="otherCharges" name="otherCharges" class="charge" >
                                    </div>
                                    
                                </div>
                                <div>
                                    <label for="total-amount">Total Amount:</label>
                                    <div>
                                        <i class="fa-solid fa-peso-sign"></i>
                                        <input type="number" id="totalAmount" name="total-amount" class="charge" disabled>
                                    </div>
                                    
                                </div>
                            
                                

                            </fieldset>  
                        </div>
                    </div>
                    <div class="modal-footer" id="footerBtn" >        
                        <button type="submit" id="saveButton" class="btn btn-primary" >Save</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"  id="cancelBtn">Cancel</button>
                    </div>
                

                
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Delete  Modal -->
<div class="modal fade" id="deleteJobOrderModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="deleteModalLabel">Confirm Delete</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                    </div>
                    <div class="modal-footer">                        
                        <button type="button" class="btn btn-danger" id="confirmDelBtn" >Delete</button>
                        <button type="button"  class="btn btn-secondary" data-bs-dismiss="modal" id="cancelBtn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
</div>


<script src="jquery/jquery-3.7.1.min.js"></script>  
<script src="alertify/alertify.min.js"></script>
<script src="DataTables/datatables.min.js"></script>
<script src="js/addJobOrder.js"></script>
<script src="js/deleteJobOrder.js"></script>
<script src="js/updateJobOrder.js"></script>
<script src="js/viewJobOrder.js"></script>
<script src="js/fetchJobOrder.js"></script>
<script src="js/submitForm.js"></script>
<script src="js/printClaimStub.js"></script>