<?PHP

//
//	文件功能：连接指定数据库
//	注：具体的业务需要再选定表，这个文件只连接指定的数据库
//	


	header("Content-type: text/html; charset=utf-8");
	//连接数据库服务器，参数，服务器地址，用户名，密码
	$con = mysqli_connect('localhost','root','');
	//选择数据库
	mysqli_select_db($con,'database2');
	//选择查询字符集，正常使用中文字符
	mysqli_set_charset($con,'set names utf8');

?>