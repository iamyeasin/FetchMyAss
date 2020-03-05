<pre>
	<?php
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "turtseo";
		$product_names = "";$page_link="";$product_link="";

		if(isset($_POST['product_name']  , $_POST['page_link']  , $_POST['product_link']  )){
			$product_names = $_POST['product_name'];
			$page_link = $_POST['page_link'];
			$product_link = $_POST['product_link'];
		}
		

		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		}
		$x = rand();
		$sql = "INSERT INTO headings (product_name,product_link,page_link) VALUES ('$product_names', '$product_link','$page_link')";

		if ($conn->query($sql) === TRUE) {
		    echo "New record created successfully";
		    header("Content-Type: application/json");
	    	header("Access-Control-Allow-Origin: *");
			$arr['status_code'] = 1;
			$arr['message'] = "Data succesfully Created";
			echo json_encode($arr);
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn->close();
		?>
</pre>