这是一个传统的用户访问服务器，然后传回index页面(实际上也有其他文件，比如js和css文件)，然后请求php的一些操作。没有ajax的异步操作。

例子的调试环境：
Wamp
数据库非常简单，只要有指定名字的数据库和表名就可以了。

首先，虽然例子很简单，但是需要注意的却很多。
在2015年之后很多以mysql开头的PHP内置方法被废弃了。这是因为PHP的升级造成的。因此在connect头文件中的数据库连接变量应该被当作整个项目开中的全局变量来使用。因为新的mysqli方法要求传入两个参数，这就让在原生PHP的情况下需要对全局变量透明可视，也就是默认程序员要手动传入参数。


1.如何解决Mysql出现的开发问题？
答：首先使用官方的社区和说明手册来检查有没有类似错误说明。
官方社区地址：https://forums.mysql.com/read.php?10,207301
2.如何解决PHP的报错问题？
答：使用打印错误的方式逐渐缩减错误范围。这样的操作适用于逻辑清晰的操作，而不适合数据复杂的处理操作。