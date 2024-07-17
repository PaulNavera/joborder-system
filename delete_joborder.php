<?php

include("dbcon.php");

$jobOderId = $_POST['jobId'];

$response = array();

$deleteQueries = [
    "DELETE FROM customers WHERE job_order_id = :jobId",
    "DELETE FROM units WHERE job_order_id = :jobId",
    "DELETE FROM charges WHERE job_order_id = :jobId",
    "DELETE FROM parts_consumables WHERE job_order_id = :jobId"
];

try {
    $pdo->beginTransaction();

    foreach ($deleteQueries as $query) {
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':jobId', $jobOderId, PDO::PARAM_INT);
        $stmt->execute();
    }

    $pdo->commit();

    $response = [
        'success' => true,
        'message' => 'Job order[#'.$jobOderId.'] deleted successfully.'
    ];
} catch (PDOException $e) {

    $pdo->rollBack();

    $response = [
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ];
}

header("Content-Type: application/json");
echo json_encode($response);
?>