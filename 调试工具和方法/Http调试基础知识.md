### NetWork

------

#### Headers

##### General

通用头域包含请求和响应消息都支持的头域

- Request URL: Browser请求资源的目标URL
- Request Method: 对目标Host的请求方法
- Status Code: 
- Remote Address: 地址和端口号
- Referrer Policy: 

##### ResonseHeaders

来自服务器的响应头有诸多有趣的信息，

- cache-control: 缓存控制，服务器通过控制浏览器要不要缓存数据
- content-encoding: 编码类型
- content-length: 返回信息的长度
- content-type: 信息的类型
- date: 一个时间戳
- last-modified: 一个时间戳
- server: 目标Host的服务器软件类型信息
- status: 状态码
- vary: 
- x-cache: 
- x-msedge-ref: 

##### RequestHeaders

- :authority: 
- :method: 请求方法
- :path: 
- :scheme: 请求协议类型
- accept: 告诉服务器，客户机支持的数据类型
- accept-encoding: 告诉服务器，客户机支持的数据压缩格式
- accept-language: Browser需要的语言编码类型
- cookie: 
- referer: 
- sec-fetch-mode: 
- sec-fetch-site: 
- user-agent: 来自Browser的类型信息







**Request Headers**

Accept:告诉服务器，客户机支持的数据类型

Accept-Encoding:告诉服务器，客户机支持的数据压缩格式

Cache-Control：缓存控制，服务器通过控制浏览器要不要缓存数据

Connection:处理完这次请求，是断开连接还是保持连接

Cookie:客户机通过这个可以向服务器带数据

Host:访问的主机名

Upgrade-Insecure-Requests:参考http://www.cnblogs.com/hustskyking/p/upgrade-insecure-requests.html

User-Agent:告诉服务器，客户机的软件环境

**Response** **Headers响应头**

Connection:处理完这次请求后，是断开连接还是继续保持连接

Content-Encoding:服务器通过这个头告诉浏览器数据的压缩格式

Content-Length:服务器通过这个头告诉浏览器回送数据的长度

Content-Type:服务器通过这个头告诉浏览器回送数据的类型

Date:当前时间值

Server:服务器通过这个头告诉浏览器服务器的类型

\\Vary:Accept-Encoding ——明确告知缓存服务器按照 Accept-Encoding 字段的内容，分别缓存不同的版本;参考：https://imququ.com/post/vary-header-in-http.html

X-Powered-By:服务器告知客户机网站是用何种语言或框架编写的。



#### DateSourceType

------

浏览器解析请求的资源

XHR JS CSS 	Img Media Font Doc WS Mainfest Other

