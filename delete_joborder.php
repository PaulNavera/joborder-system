<?php

include("dbcon.php");

$jobOderId = $_POST['jobId'];

$response = [
    'success' => false,
    'message' => 'Error deleting items.'
];

// Define SQL queries for each table
$deleteQueries = [
    "DELETE FROM customers WHERE job_order_id = :jobId",
    "DELETE FROM units WHERE job_order_id = :jobId",
    "DELETE FROM charges WHERE job_order_id = :jobId",
    "DELETE FROM parts_consumables WHERE job_order_id = :jobId"
];

try {
    // Start a transaction
    $pdo->beginTransaction();

    foreach ($deleteQueries as $query) {
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':jobId', $jobOderId, PDO::PARAM_INT);
        $stmt->execute();
    }

    // Commit the transaction
    $pdo->commit();

    $response = [
        'success' => true,
        'message' => 'Items deleted successfully.'
    ];
} catch (PDOException $e) {
    // Rollback the transaction on error
    $pdo->rollBack();

    $response = [
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ];
}

echo json_encode($response);
?>