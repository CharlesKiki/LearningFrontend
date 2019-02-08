<?PHP
	
	//引入链接数据库头文件
	require_once('connect.php');

	//接收POST传输数据
	$username = $_POST['username'];
	$sql = "select * from reg where username = '$username'";
	$query = mysql_query($sql);
    
	if($query && mysql_num_rows($query)){
		echo "<script>alert('已经有人注册过啦')</script>";
		echo "<script>history.back()</script>";
	}
	else{
		$sql = "insert into reg(username) values('$username')";
		$query = mysql_query($sql);
		if($query){
			echo "<script>alert('注册成功')</script>";
			echo "<script>window.location = 'index.html'</script>";
		}
	}

?>