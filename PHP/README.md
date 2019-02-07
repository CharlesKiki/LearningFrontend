调试注意：
路径不应有中文，容易导致引入类型错误。

``` nginx
Failed opening required (include_path='.;C:\php\pear')
```

调试环境
Wamp
Windows10

调试方法
Wamp服务器Xdebug调试 + Visual插件
Step1对Wamp上的PHP.ini修改：
这一步的目的是让Wamp和Xdug都起作用。
在PHP.ini连续的几个配置进行修改：
``` stylus
    zend_extension ="E:/wamp/bin/php/php7.0.10/zend_ext/php_xdebug-2.4.1-7.0-vc14.dll"
    xdebug.remote_enable = On
    xdebug.remote_autostart = On
    xdebug.profiler_enable = On
    xdebug.profiler_enable_trigger = On
```
以上几个配置少了任何一个Vs都不会有正确的反应。
Step2安装VS的PHPdebug插件：
    VisualStudioCode中安装PHPdebug插件
Step3对VS的配置：

> 小技巧：https://xdebug.org/wizard.php该网页利用phpinfo();方法的返回来指导修改php.ini的配置信息，使Xdebug可以使用。

需要注意的是，应该在服务器使用PHP7.0以上的版本。
VScode的设置，在文件->首选项->setting中找到PHP的设置修改
"php.validate.executablePath":"E:\\wamp\\bin\\php\\php7.0.10\\php.exe"
然后，在左侧的竖排任务栏中有一个Debug的爬虫标志，进入后可以看到一个齿轮状按钮，进入该按钮可以对Xdbug进行设置。但是默认不需要修改了。
Step4在浏览器打开要调试网页：
如果是本地的服务器就通过localhost来访问要调试的网页，然后就可以看到VS的调试窗口发生了变化。