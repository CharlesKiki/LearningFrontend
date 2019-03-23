<?php
//
//  文件功能：MVC模式的Controller
//
//-----------------------------工厂模式-------------------------//
class A{
    public $class;     // public $class = $_GET['c']; //类名
    public $method;    // public $method = $_GET['m']; //方法

    //
    //  函数功能：变量处理
    //  参数：来自$_GET数组的类请求，方法请求
    //  注：MVC模型种接收来自客户端的参数 类请求和方法请求
    //
    public function __construct($class,$method){
        // 或者通过 $_SERVER['PATH_INFO']; 转换得到类名或者方法名（下面讲解）。
        $this->class = ucfirst(strtolower($class)).'Controller';    //对类名进行安全处理，并加上控制器后缀
        $this->method = strtolower($method);                        //对方法名进行安全处理
        $this->work($this->class,$this->method);                    //执行特定的文件，模板Model
    }

    //
    //  函数功能：
    //  参数：
    //
    public function work($class,$method){
        //把文件命名成（类名.class.php的形式），就可以通过类名找到文件。
        //include '文件名（文件在别的地方）';   #例如 include './index.php'; 引入文件然后实例化类。
        $c = new $class;    //实例化类
        $c->$method();      //访问类的方法
    }
}
?>