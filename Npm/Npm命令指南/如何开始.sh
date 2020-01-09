#初始化当前文件夹为一个项目
npm init                            #产生package.json文件

npm install <packageName>           #安装模块到本地node_modules目录
#同版本号手动将他们添加到模块配置文件package.json中的依赖里（dependencies）
npm install <packageName>  --save-dev
#-save和save-dev可以省掉你手动修改package.json文件的步骤
#npm install module-name --save 自动把模块和版本号添加到dependencies部分
#npm install module-name --save-dve 自动把模块和版本号添加到devdependencies部分

至于配置文件区分这俩部分， 是用于区别开发依赖模块和产品依赖模块， 以我见过的情况来看 devDepandencies主要是配置测试框架， 例如jshint、mocha
npm install <packageName> --force   #强制安装指定版本模块到node_modules目录
npm update <packageName>            #更新已安装模块

#查看目标模块的版本和信息
npm view <packageName>  
npm info <packageName>  
npm show <packageName>  
npm v    <packageName>  

#NPM配置

#缓存目录 
npm config get cache #获取当前系统用户的包缓存位置
npm cache ls         #同上，储存结构是{cache}/{name}/{version}
npm cache ls <packageName> #查询指定包的缓存情况和位置
#清除缓存内容
rm -rf ~/.npm/*     #Linux
$ npm cache clean

#下载机制配置
npm install --cache-min TIMESPAN <package-name> #在TIMESPAN之内的情况下从缓存中安装版本
Example:npm install --cache-min 9999999 <package-name>