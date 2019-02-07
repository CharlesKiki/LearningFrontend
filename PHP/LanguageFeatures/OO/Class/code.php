<!-- 
  文件定义：测试简单的PHP类特性
  功能：
 -->
<!DOCTYPE html>
<html>
<body>

<?php
//简单的类定义
class Test{
    //类字段
    public $string = '自定义方法';
    public $number = 10;
    // 构造方法，实例化后自动执行，
    public function __construct(){ 
        echo "构造方法执行";
    }
     public function PrintAttribute(){  
        //方法名不可以和类名冲突，导致自动执行。
        echo $this->number;  // 输出属性.
    }

}



//实例化类
$test = new Test;
//类方法调用
 $test->PrintAttribute();

class ex_Test extends Test{ 
    
}

$ex_test = new ex_Test;
$ex_test->PrintAttribute(); // 可以输出类A里面的属性。
?>

</body>
</html>