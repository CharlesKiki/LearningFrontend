# What's This? #


1. 编写一个简单的接口，运行在树莓派的NodeJS环境下。
2. 一个简单的HTML网页，在客户端浏览器打开，访问接口。

**需要注意的是**

在HTML代码中，需要改动对局域网中树莓派的访问IP地址。
你有可能会发现在Linux环境下，npm install命令并不会安装组件到当前目录。<br>
并且不会声称package.json文件，这意味着在linux下可能要手动的编写依赖。<br>
解决的方案是：<br>
ln -s /usr/local/bin/node-v6.9.1-linux-armv7l/lib/node_modules/npm/node_modules 该文件夹位置
