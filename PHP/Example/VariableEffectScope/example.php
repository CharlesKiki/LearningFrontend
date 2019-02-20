<?php
    $test = 'hello,world';
    abc(); //这里什么都不输出，因为访问不到$test变量
    function abc(){
            echo($test);
    }
?>
