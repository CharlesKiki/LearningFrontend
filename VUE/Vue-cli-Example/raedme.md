###  使用 vue-cli 创建模板

------

#### 说明

vue-cli 是 vue 官方提供的脚手架工具。它可以通过NPM安装。建议使用全局安装，Vue-cli会以单独的命令行环境配置在系统环境变量中。

github: https://github.com/vuejs/vue-cli

作用: 从 https://github.com/vuejs-templates 下载模板项目

#### 创建 vue 项目

首先，安装脚手架。

npm install vue-cli

Vue-cli会提供Vue命令使用，格式的详细参数参考Github项目说明

在当前目录下生成以Webpack为打包工具的Vue模板项目

vue init webpack vue_demo

```
? Project name vue_demo
? Project description A Vue.js project
? Author Charles <HUCharles@foxmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm      

   vue-cli · Generated "vue_demo".
```

cd vue_demo

npm install

npm run dev
访问: http://localhost:8080/



|-- build : webpack 相关的配置文件夹(基本不需要修改)

​	|-- dev-server.js : 通过 express 启动后台服

|-- config: webpack 相关的配置文件夹(基本不需要修

​	|-- index.js: 指定的后台服务的端口号和静态资源文

|-- node_modul

|-- src : 源码文

​	|-- components: vue 组件及其相关资源文

​	|-- App.vue: 应用根主

​	|-- main.js: 应用入口 

|-- static: 静态资源文

|-- .babelrc: babel 的配置

|-- .eslintignore: eslint 检查忽略的

|-- .eslintrc.js: eslint 检查的

|-- .gitignore: git 版本管制忽略的

|-- index.html: 主页面

|-- package.json: 应用包配置

|-- README.md: 应用描述说明的 readme 



#### 项目的打包与发布

打包

npm run bui

发布 1: 使用静态服务器工具包

npm install -g 

serveserve dist

访问: http://localhost:50

发布 2: 使用动态 web 服务器(tomcat)

修改配置: webpack.prod.conf.

output:

publicPath: '/xxx/' //打包文件夹的

}

重新打包：

npm run bui

修改 dist 文件夹为项目名称: xxx

将 xxx 拷贝到运行的 tomcat 的 webapps 目录下

访问: http://localhost:8080/xxx