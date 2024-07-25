<?php
    require('fpdf/fpdf.php');

    //$postData = file_get_contents('php://input');


    $data = [
        "name"=>"Paul",
        "jobOrderId"=>"1234",
        "date"=>"07/21/24",
        "unit"=>"Desktop"
    ];
   //$data = json_decode($postData);

    $pdf = new FPDF();

    $pdf->AddPage();

    $pdf->SetFont('Arial', 'I', 10);


    $imagePath = 'assets/claim_stub.png'; 

    $pdf->Image($imagePath, 5, 5, 200, 0);

    // $pdf->SetXY(20, 33);
    // $pdf->Cell(0, 0, $data->name,);

    // $pdf->SetXY(115, 33);
    // $pdf->Cell(0, 0, $data->jobOrderId,  );

    // $pdf->SetXY(20, 43);
    // $pdf->Cell(0, 0, $data->date,  );

    // $pdf->SetXY(102, 43);

    // $pdf->Cell(0, 0, $data->unit,  );

    $pdf->SetXY(20, 33);
    $pdf->Cell(0, 0, $data['name']);

    $pdf->SetXY(115, 33);
    $pdf->Cell(0, 0, $data['jobOrderId'] );

    $pdf->SetXY(20, 43);
    $pdf->Cell(0, 0, $data['date'] );

    $pdf->SetXY(102, 43);

    $pdf->Cell(0, 0, $data['unit'] );
    $pdf->SetFont('Arial', 'B', 40);

    
    $pdf->SetXY(155, 33);
    //$pdf->Cell(0, 0, '#'.$data->jobOrderId);
    $pdf->Cell(0, 0, '#'.$data['jobOrderId']);

    //$fileName = $data->jobOrderId.'.pdf';

    $pdf->Output(); 


?>


