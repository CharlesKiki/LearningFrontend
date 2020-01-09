//"use strict"; 将会开启严格模式


// 不推荐
function TestTwo() {
    globalVariable = "Hi,I am globalVariable";
}
//如果没有这一步会导致不必要的变量未定义问题
//只有执行了的才会有该声明
TestTwo();

alert(globalVariable);