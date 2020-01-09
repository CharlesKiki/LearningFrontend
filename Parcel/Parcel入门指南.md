Parcel作为一个插件在NPM下工作，位于项目根目录的下的package.json用以编写Parcel执行命令。

```json
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "parcel index.html",
    "build": "parcel build --public-url . index.html"
  }
```

Whenever you change something, the page will reload automatically to show the result of your changes.

Parcel命令可以提供一个微型的WevServer服务

同样，它可以提供将项目从诸多框架之中i合成一个适用于浏览器的JS语法和大小。也就是打包完成之后会生成项目于dist目录中。copy the `dist/` folder to your production server.

Note that a single JavaScript file with all your application code and all dependencies used in your application has been created. From the inferenced package, it only contains the required components.