<?PHP
	
	//引入链接数据库头文件
	require_once('connect.php');

	//接收POST传输数据
	$username = $_POST['username'];
	//设定查询语句
	$sql = "select * from reg where username = '$username'";
	//业务查询
	$query = mysqli_query($con,$sql);
	
	//检查从数据库是否有返回数据
	if($query && mysqli_num_rows($query)){
		echo "<script>alert('已经有人注册过啦')</script>";
		echo "<script>history.back()</script>";
	}
	else{
		$sql = "insert into reg(username) values('$username')";
		$query = mysqli_query($con,$sql);
		if($query){
			echo "<script>alert('注册成功')</script>";
			echo "<script>window.location = 'index.html'</script>";
		}
	}

?>