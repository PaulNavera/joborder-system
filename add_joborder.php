<?php
include("dbcon.php");

$company = $_POST['company'];
$name = $_POST['name'];
$address = $_POST['address'];
$contact = $_POST['contact'];
$email = $_POST['email'];
$messenger = $_POST['messenger'];

$unit = $_POST['unit'];
$brand = $_POST['brand'];
$serial = $_POST['serial'];
$model = $_POST['model'];
$status = $_POST['status'];
$reports_instructions = $_POST['reportsInstructions'];

$technician = $_POST['technician'];
$start_date = $_POST['start_date'];
$time_in = $_POST['time_in'];
$finished_date = $_POST['finished_date'];
$time_out = $_POST['time_out'];
$warranty = $_POST['warranty'];
$site = $_POST['site'];
$service_charge = $_POST['serviceCharge'];
$transportation_charge = $_POST['transportationCharge'];
$allowance = $_POST['lodgingAllowance'];
$other_charges = $_POST['otherCharges'];

$parts = json_decode($_POST['parts']);

$response = array();

try {
    // Start transaction
    $pdo->beginTransaction();

    // Insert into customers table
    $query = "INSERT INTO customers(job_order_id,company,name,address,contact,email,messenger,site,time_in,start_date,time_out, finished_date)VALUES(NULL,:company,:name,:address,:contact,:email,:messenger,:site ,:time_in,:start_date,:time_out, :finished_date)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':company', $company);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':contact', $contact);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':messenger', $messenger);
    $stmt->bindParam(':site', $site);
    $stmt->bindParam(':time_in', $time_in);
    $stmt->bindParam(':start_date', $start_date);
    $stmt->bindParam(':time_out', $time_in);
    $stmt->bindParam(':finished_date', $start_date);
    if (!$stmt->execute()) {
        throw new Exception("Failed to insert into customers table.");
    }

    $job_order_id = $pdo->lastInsertId();

    // Insert into units table
    $query = "INSERT INTO units(job_order_id,unit,brand,serial,model,warranty,status,reports_instructions)VALUES(:job_order_id,:unit,:brand,:serial,:model,:warranty,:status,:reports_instructions)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':job_order_id', $job_order_id);
    $stmt->bindParam(':unit', $unit);
    $stmt->bindParam(':brand', $brand);
    $stmt->bindParam(':serial', $serial);
    $stmt->bindParam(':model', $model);
    $stmt->bindParam(':warranty', $warranty);
    $stmt->bindParam(':status', $status);
    $stmt->bindParam(':reports_instructions', $reports_instructions);
    
    if (!$stmt->execute()) {
        throw new Exception("Failed to insert into units table.");
    }

    // Insert into charges table
    $query = "INSERT INTO charges(job_order_id,service_charge,transportation_charge,allowance,other_charges)VALUES(:job_order_id,:service_charge,:transportation_charge,:allowance,:other_charges)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':job_order_id', $job_order_id);
    $stmt->bindParam(':service_charge', $service_charge);
    $stmt->bindParam(':transportation_charge', $transportation_charge);
    $stmt->bindParam(':allowance', $allowance);
    $stmt->bindParam(':other_charges', $other_charges);
    
    if (!$stmt->execute()) {
        throw new Exception("Failed to insert into charges table.");
    }

    // Insert into technicians table
    $query = "INSERT INTO technicians(job_order_id,technician_name)VALUES(:job_order_id,:technician_name)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':job_order_id', $job_order_id);
    $stmt->bindParam(':technician_name', $technician);


    if (!$stmt->execute()) {
        throw new Exception("Failed to insert into technicians table.");
    }


    // Insert into parts_consumables table
    $query = "INSERT INTO parts_consumables(job_order_id,quantity,item,amount)VALUES(:job_order_id,:quantity,:item,:amount)";
    $stmt = $pdo->prepare($query);
    foreach ($parts as $part) {
        $stmt->bindParam(':job_order_id', $job_order_id);
        $stmt->bindParam(':quantity', $part->qty);
        $stmt->bindParam(':item', $part->item);
        $stmt->bindParam(':amount', $part->amount);

        if (!$stmt->execute()) {
            throw new Exception("Failed to insert into parts_consumables table.");
        }
    }

    // Commit transaction
    $pdo->commit();

    $response = array(
        'success' => true,
        'jobOrderId' => $job_order_id,
        'name' => $name,
        'date' => $start_date,
        'unit' => $brand . ' ' . $model
    );

} catch (Exception $e) {
    // Rollback transaction on error
    $pdo->rollback();
    error_log("Error: " . $e->getMessage());
    $response = array('success' => false);
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
