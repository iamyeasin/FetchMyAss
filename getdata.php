<?php
	if( isset($_GET["link"]) ){
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "turtseo";
		$product_link = $_GET["link"];

		// Create connection
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		// Check connection
		if (!$conn) {
		    die("Connection failed: " . mysqli_connect_error());
		    echo"failed";
		}

		$sql =  "SELECT product_name,page_link FROM headings WHERE product_link LIKE '$product_link%'";
		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) > 0) {
		    // output data of each row
		    while($row = mysqli_fetch_assoc($result)) {
		       
		    	header("Content-Type: application/json");
		    	header("Access-Control-Allow-Origin: *");
				$arr['status_code'] = 1;
				$arr['message'] = "Data succesfully found";
				$arr['Product'] = $row["product_name"];
				$arr['Page'] = $row["page_link"];
				echo json_encode($arr);
		    }
		} else {
			header("Content-Type: application/json");
	    	header("Access-Control-Allow-Origin: *");
			$arr['status_code'] = 1;
			$arr['message'] = "No record Found";
			echo json_encode($arr);
		    
		}

		mysqli_close($conn);
	}
?>