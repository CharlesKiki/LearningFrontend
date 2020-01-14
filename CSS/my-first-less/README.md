服务器端预处理Less例子

服务器端的开发环境流程：安装Node，安装插件，编写Less，生成css，引用css。

配置：
1.npm install  #安装各类插件 
2.gulp less	   #自动执行编译任务

备注：gulp是js形式的配置文件，通过node安装插件可以拓展gulp的能力，例如支持less的预处理。注意，gulp和gulp的插件在node看来都是插件，它们只是互相依赖。

troubleshooting：
npm命令执行错误检查node是否安装正常，package.json是否正确。
gulp命令执行错误，检查gulpfile.js配置文件是否正确。

