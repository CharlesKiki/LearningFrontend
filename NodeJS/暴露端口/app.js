/*
    程序目的:
            启动一个Http服务器，绑定3000端口
    Commit：
            使用Express模块。
*/

var express=require('express');
var app =express();
//设置跨域访问
app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With"); res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var questions=[ { data:213, num:444, age:12 }, { data:456, num:678, age:13 }];

//编写接口123
app.get('/123',function(req,res){ res.status(200), res.json(questions) });

//配置服务端口
var server = app.listen(3000, '192.168.1.100',function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})
