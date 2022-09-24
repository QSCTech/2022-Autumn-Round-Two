### 安装依赖
在server目录下，命令行输入```npm install```。
### server 启动
在server目录下，命令行输入```npm start```。
### API
#### 自动登录 /login [GET]
- response
```json
{
    "msg":"ok",
    "user":{
        "name":string,
        "id":number,
    }
}
```
- fail
```json
{
    "msg":"access denied",
}
```
#### 登录 /login [POST]
- request body
```json
{
    "name": string,
    "id":number,
}
```
- response
```json
{
    "msg":"ok",
}
```
- wrong request format
```json
{
    "msg":"unknown user format",
}
```

#### 欢迎词 /hello [GET]

- response
```json
{
    "msg":string,
}
```

#### 获取课程和随机绩点 /credit [GET]
需要携带cookie进行请求
- response
```json
{
    "msg":"ok",
    "data":[
        {
            "name":string,
            "credit":number,
        }
    ]
}
```
- no cookie/cookie expired
```json
{
    "msg":"access denied",
}
```

### config 配置项说明：
- port:虚拟服务器启动占用端口
- site:前端网页部署地址
- cookieAge:cookie 有效时长（单位：millisecond）
- lessons:课程名称组成的数组
- helloMsg:调用 `/hello` 响应的字符串
- credits:可能被随机到的绩点数组
