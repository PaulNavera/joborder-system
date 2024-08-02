$(document).ready(function() {
                $('#joborderTable').DataTable({
                    "processing": true,
                    "serverSide": true,
                    "ajax": "fetch_data.php", 
                   
                    "columns": [
                        {"data": "job_order_id"},
                        {"data": "name"},
                        {"data": "address"},
                        {"data": "contact"},
                        {"data": "site"},
                        {"data": "time_in"},
                        {"data": "start_date"},
                        {"data": "unit"},
                        {"data": "brand"},
                        {"data": "warranty"},
                        {"data": "status"},
                        {"data": "action"}
                    ],
                    "columnDefs": [
                                        { "className": "text-center", "targets": "_all" }
                                    
                    ],
                    "searching": true ,
                    "responsive" : true,
                    "language" : {
                            "search": "_INPUT_",
                            "searchPlaceholder": "Search Job Order"
                    }

         });
 });
