<?php

    include('dbcon.php');

    
    $requestData = $_REQUEST;

// Define columns (adjust according to your database table structure)
$columns = array(
    array( 'db' => 'job_order_id', 'dt' => 0 ),
    array( 'db' => 'company', 'dt' => 1 ),
    array( 'db' => 'name', 'dt' => 2 ),
    array( 'db' => 'address', 'dt' => 3 ),
    array( 'db' => 'contact', 'dt' => 4 ),
    array( 'db' => 'site', 'dt' => 5 ),
    array( 'db' => 'time_in', 'dt' => 6 ),
    array( 'db' => 'start_date', 'dt' => 7 ),
    array( 'db' => 'unit', 'dt' => 8 ),
    array( 'db' => 'brand', 'dt' => 9 ),
    array( 'db' => 'name', 'dt' => 10 ),
    array( 'db' => 'warranty', 'dt' => 11 ),
    array( 'db' => 'status', 'dt' => 12 ),
    array( 'db' => 'action', 'dt' => 13 )
);


try{

    $query = "SELECT c.job_order_id, c.company, c.name, c.address, c.contact, c.site, c.time_in, c.start_date, u.unit, u.brand, u.warranty, u.status   
              FROM customers c 
              LEFT JOIN units u ON c.job_order_id = u.job_order_id
              WHERE 1=1";

    $totalRecordsQuery = $pdo->query("SELECT COUNT(*) FROM customers");
    $totalRecords = $totalRecordsQuery->fetchColumn();

    $searchValue = $requestData['search']['value'];

    if ($searchValue) {
        $query .= " AND (c.job_order_id LIKE :searchValue 
                    OR c.company LIKE :searchValue 
                    OR c.name LIKE :searchValue 
                    OR c.address LIKE :searchValue 
                    OR c.contact LIKE :searchValue 
                    OR c.site LIKE :searchValue 
                    OR c.time_in LIKE :searchValue 
                    OR c.start_date LIKE :searchValue 
                    OR u.unit LIKE :searchValue 
                    OR u.brand LIKE :searchValue 
                    OR u.warranty LIKE :searchValue 
                    OR u.status LIKE :searchValue)";
    }

    $stmt = $pdo->prepare($query);

    if ($searchValue) {
        $stmt->bindValue(':searchValue', "%$searchValue%", PDO::PARAM_STR);
    }

    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $totalFiltered = count($results);

    // Sorting
    $sortColumn = $columns[$requestData['order'][0]['column']]['db'];
    $sortDirection = $requestData['order'][0]['dir'];
    usort($results, function($a, $b) use ($sortColumn, $sortDirection) {
        return ($sortDirection == 'asc') ? ($a[$sortColumn] <=> $b[$sortColumn]) : ($b[$sortColumn] <=> $a[$sortColumn]);
    });

    // Paging
    $offset = intval($requestData['start']);
    $length = intval($requestData['length']);
    $results = array_slice($results, $offset, $length);

    // Format data as required by DataTables
    $data = array();
    foreach ($results as $row) {

        $startDate = new DateTime($row['start_date']);
        $timeIn = new DateTime($row['time_in']);

        $data[] = array(
            'job_order_id' => $row['job_order_id'],
            'company' => $row['company'],
            'name' => $row['name'],
            'address' => $row['address'],
            'contact' => $row['contact'],
            'site' => $row['site'],
            'time_in' => $timeIn->format('h:i A'),
            'start_date' => $startDate->format('m/d/Y'),
            'unit' =>  $row['unit'],
            'brand' =>  $row['brand'],
            'warranty' => $row['warranty'],
            'status' =>  $row['status'],
            'action' => '<button type="button" class="btn btn-info btn-sm viewBtn" data-id="' . $row['job_order_id'] . '"><i class="fa-solid fa-eye"></i></button>' .
            ' <button type="button" class="btn btn-primary btn-sm editBtn" data-id="' . $row['job_order_id'] . '"><i class="fa-solid fa-pen-to-square"></i></button>' .
            ' <button type="button" class="btn btn-danger btn-sm deleteBtn" data-id="' . $row['job_order_id'] . '"><i class="fa-solid fa-trash"></i></button>'

        );
    }

    $response = array(
        "draw" => intval($requestData['draw']),
        "recordsTotal" => intval($totalRecords),
        "recordsFiltered" => intval($totalFiltered),
        "data" => $data
    );

    header('Content-Type: application/json');
    echo json_encode($response);

} catch (PDOException $e) {
    echo json_encode(array("error" => "Database error: " . $e->getMessage()));
}

?>