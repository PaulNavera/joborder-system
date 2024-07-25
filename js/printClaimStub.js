function printClaimStub(data){

   $('#name').val(data.name);
   $('#jobId').val(data.jobOrderId);
   $('#date').val(data.date);
   $('#unit').val(data.unit);
   $('#jobId').text(data.jobOrderId);

  
}