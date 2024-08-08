
async function getJobOrder(jobId) {
    try {
        const response = await $.ajax({
            url: 'fetch_single_data.php',
            type: 'POST',
            dataType: 'json',
            data: { job_order_id: jobId }
        });
        
        if (response) {
            return response;
        } else {
            throw new Error('Failed to fetch item details.');
        }
    } catch (error) {
        console.error(error);
        alert('AJAX Error: ' + error.message);
    }
}