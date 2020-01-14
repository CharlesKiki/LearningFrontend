SandBox用来编写项目源码。

#### 如何来安装和配置一个项目

------

1. 编译版下载 离线的源码下载

   如果在不采用各种编译、打包工具的情况下，只想在`html`里引用

   ```html
   <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
   ```

2. 源码包 提供编译前代码

3. 程序打包方式 Package managers 使用Node.js、 RubyGems等方式来安装

   用webpack 这样的打包工具，如果有用的话，直接 require('bootstrap')就可以了。webpack 默认会去node_modules 去找

4. CDN在线引用



#### 关于编译

`gulp`是一个任务管理器，当然可以通过某些“编译”插件完成“编译”的任务。

前端的编译是这样的，譬如你想在源码中使用`ES2015`甚至`ES2016`的新特性(浏览器不支持的内容)，那势必需要一些诸如`babel`之类的编译工具，把源码编译成`ES5`之后才能拿到浏览器使用。如果“编译”这个词难理解，换成转译也行