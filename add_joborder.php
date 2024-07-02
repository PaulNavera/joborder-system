<?php

include ("dbcon.php");


    $company=$_POST['company'];
    $name=$_POST['name'];
    $address=$_POST['address'];
    $contact=$_POST['contact'];
    $email=$_POST['email'];
    $messenger=$_POST['messenger'];

    $unit=$_POST['unit'];
    $brand=$_POST['brand'];
    $serial=$_POST['serial'];
    $model=$_POST['model'];
    $status=$_POST['status'];
    $reports_instructions=$_POST['reportsInstructions'];
    
    $technician=$_POST['technician'];
    $start_date=$_POST['start_date'];
    $time_in=$_POST['time_in'];
    $warranty=$_POST['warranty'];
    $site=$_POST['site'];
    $service_charge=$_POST['serviceCharge'];
    $transportation_charge=$_POST['transportationCharge'];
    $lodging_allowance=$_POST['lodgingAllowance'];
    $other_charges=$_POST['otherCharges'];
    
    $parts = json_decode($_POST['parts']);

    $response = array();

    
    
try {   
    $query = "INSERT INTO customers(job_order_id,company,name,address,contact,email,messenger,site,time_in,start_date)VALUES(NULL,:company,:name,:address,:contact,:email,:messenger,:site ,:time_in,:start_date)";

    $stmt = $pdo->prepare($query);
        $stmt->bindParam(':company',$company);
        $stmt->bindParam(':name',$name);
        $stmt->bindParam(':address',$address);
        $stmt->bindParam(':contact',$contact);
        $stmt->bindParam(':email',$email);
        $stmt->bindParam(':messenger',$messenger);
        $stmt->bindParam(':site',$site);
        $stmt->bindParam(':time_in',$time_in);
        $stmt->bindParam(':start_date',$start_date);

     
       
     

    if($stmt->execute()){
    
        $job_order_id = $pdo->lastInsertId();           

        $query = "INSERT INTO units(job_order_id,unit,brand,serial,model,warranty,status,reports_instructions)VALUES(:job_order_id,:unit,:brand,:serial,:model,:warranty,:status,:reports_instructions)";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':job_order_id',$job_order_id);
        $stmt->bindParam(':unit',$unit);
        $stmt->bindParam(':brand',$brand);
        $stmt->bindParam(':serial',$serial);
        $stmt->bindParam(':model',$model);
        $stmt->bindParam(':warranty',$warranty);
        $stmt->bindParam(':status',$status);
        $stmt->bindParam(':reports_instructions',$reports_instructions);
    
        $response = array( 
            'success' => true,
            'jobOrderId'=> $job_order_id,
            'name' =>  $name,
            'date' => $start_date,
            'unit' => $unit
         );

        if($stmt->execute()){

            $query = "INSERT INTO charges(job_order_id,service_charge,transportation_charge,allowance,other_charges)VALUES(:job_order_id,:service_charge,:transportation_charge,:allowance,:other_charges)";

            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':job_order_id',$job_order_id);
            $stmt->bindParam(':service_charge',$service_charge); 
            $stmt->bindParam(':transportation_charge',$transportation_charge);
            $stmt->bindParam(':allowance',$allowance);
            $stmt->bindParam(':other_charges',$other_charges);
            
            if($stmt->execute()){

   
                $query = "INSERT INTO parts_consumables(job_order_id,quantity,item,amount)VALUES(:job_order_id,:quantity,:item,:amount)";

                foreach($parts as $part){   
                    $stmt = $pdo->prepare($query);
                        $stmt->bindParam(':job_order_id',$job_order_id);
                        $stmt->bindParam(':quantity',$part->qty);
                        $stmt->bindParam(':item',$part->item);
                        $stmt->bindParam(':amount',$part->amount);
    
                    if($stmt->execute()){
                        
                        $response = array( 
                            'success' => true,
                            'jobOrderId'=> $job_order_id,
                            'name' =>  $name,
                            'date' => $start_date,
                            'unit' => $unit
                         );
                                    }
                    else {
                        throw new Exception("Failed to insert parts data.");
                                    }
    
                
           }
            }
            else {
                throw new Exception("Failed to insert charges data.");
            }
        }
        else {
            throw new Exception("Failed to insert units data.");
        }
    
  
}
else {
 throw new Exception("Failed to insert customers data.");

}
} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    $response = array('success' => false);
}          
        
    header('Content-Type: application/json');
    echo json_encode($response);
?>