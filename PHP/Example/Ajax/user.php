<?PHP

	require_once('connect.php');
	
	$username = $_REQUEST['username'];
	
	$sql = "select * from reg where username = '$username'";
	$query = mysqli_query($con,$sql);
	
	if($query && mysqli_num_rows($query)){
		echo '{"code":0 , "message" : "已经有人注册过啦"}'; 
	}
	else{
		echo '{"code":1 , "message" : "可以注册"}'; 
	}

?>