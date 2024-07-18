<?php
include('dbcon.php'); // Include your database connection script

$jobOrderId = $_POST['job_order_id'];

try {

    $query = "SELECT c.job_order_id,c.company, c.name, c.address, c.contact, c.email, c.messenger, c.site,c.time_in, c.time_out, c.start_date, c.finished_date, u.unit, u.brand, u.model, u.serial, u.warranty, t.technician_name , u.status,u.reports_instructions,ch.service_charge, ch.transportation_charge, ch.allowance, ch.other_charges
               FROM customers c
               LEFT JOIN units u ON c.job_order_id = u.job_order_id
               LEFT JOIN charges ch ON c.job_order_id = ch.job_order_id
               LEFT JOIN technicians t ON c.job_order_id = t.job_order_id
               WHERE c.job_order_id = :job_order_id";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(':job_order_id', $jobOrderId);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $query = "SELECT * FROM parts_consumables WHERE job_order_id = :job_order_id";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(':job_order_id', $jobOrderId);
    $stmt->execute();
    $parts = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $data = array();
    foreach ($results as $row) {
        $data[] = array(
            'job_order_id' => $row['job_order_id'],
            'company' => $row['company'],
            'name' => $row['name'],
            'address' => $row['address'],
            'contact' => $row['contact'],
            'email' => $row['email'],
            'messenger' => $row['messenger'],
            'site' => $row['site'],
            'time_in' => $row['time_in'],
            'time_out' => $row['time_out'],
            'start_date' => $row['start_date'],
            'finished_date' => $row['finished_date'],
            'unit' => $row['unit'],
            'brand' => $row['brand'],
            'model' => $row['model'],
            'serial' => $row['serial'],
            'warranty' => $row['warranty'],
            'technician' => $row['technician_name'],
            'status' => $row['status'],
            'reports_instructions' => $row['reports_instructions'],
            'service_charge' => $row['service_charge'],
            'transportation_charge' => $row['transportation_charge'],
            'allowance' => $row['allowance'],
            'other_charges' => $row['other_charges'],
            'parts' => $parts

        );
    }

    echo json_encode( $data);
} catch (PDOException $e) {
    echo json_encode(array("error" => "Database error: " . $e->getMessage()));
}
?>