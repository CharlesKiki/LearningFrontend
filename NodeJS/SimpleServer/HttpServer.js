/*
    程序目的：
            简单的HTTP服务器
    作用：
        绑定8124端口后，客户端访问：localhost:8124显示字符串
        请求后返回字符串
*/

/*
    创建http对象
*/
var http = require('http');

/*
    http对象使用createServer()方法绑定端口
    该方法接收对该端口的GET，POST请求
    并返回一个字符串
*/
http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('Hello World\n');
}).listen(8124);
