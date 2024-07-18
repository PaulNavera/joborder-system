<?php
include("dbcon.php");

$jobId = $_POST['jobId'];

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

    // Update or insert into customers table
    $query = "UPDATE customers SET company=:company, name=:name, address=:address, contact=:contact, email=:email, messenger=:messenger, site=:site WHERE job_order_id=:jobId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':jobId', $jobId);

    $stmt->bindParam(':company', $company);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':contact', $contact);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':messenger', $messenger);
    $stmt->bindParam(':site', $site);
    

    if (!$stmt->execute()) {
        throw new Exception("Failed to insert/update into customers table.");
    }

    // Update or insert into units table
    $query = "UPDATE units SET unit=:unit, brand=:brand, serial=:serial, model=:model, warranty=:warranty, status=:status, reports_instructions=:reports_instructions WHERE job_order_id=:jobId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':jobId', $jobId);

    $stmt->bindParam(':unit', $unit);
    $stmt->bindParam(':brand', $brand);
    $stmt->bindParam(':serial', $serial);
    $stmt->bindParam(':model', $model);
    $stmt->bindParam(':warranty', $warranty);
    $stmt->bindParam(':status', $status);
    $stmt->bindParam(':reports_instructions', $reports_instructions);

    if (!$stmt->execute()) {
        throw new Exception("Failed to insert/update into units table.");
    }

    // Update or insert into charges table
    $query = "UPDATE charges SET service_charge=:service_charge, transportation_charge=:transportation_charge, allowance=:allowance, other_charges=:other_charges WHERE job_order_id=:jobId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':jobId', $jobId);

    $stmt->bindParam(':service_charge', $service_charge);
    $stmt->bindParam(':transportation_charge', $transportation_charge);
    $stmt->bindParam(':allowance', $allowance);
    $stmt->bindParam(':other_charges', $other_charges);

    if (!$stmt->execute()) {
        throw new Exception("Failed to insert/update into charges table.");
    }

    
    // Update or insert into technicians table
    $query = "UPDATE technicians SET technician_name=:technician_name WHERE job_order_id=:jobId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':jobId', $jobId);
    $stmt->bindParam(':technician_name', $technician);


    if (!$stmt->execute()) {
        throw new Exception("Failed to insert into technicians table.");
    }



    // Delete existing parts_consumables records for the job order
    $query = "DELETE FROM parts_consumables WHERE job_order_id=:jobId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':jobId', $jobId);
    $stmt->execute();

    // Insert new parts_consumables records
    $query = "INSERT INTO parts_consumables(job_order_id, quantity, item, amount) VALUES (:job_order_id, :quantity, :item, :amount)";
    $stmt = $pdo->prepare($query);
    foreach ($parts as $part) {
        $stmt->bindParam(':jobId', $jobId);
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
        'jobOrderId' => $jobId,
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
