- cnpm install koa-generator -g 全局安装脚手架

- Koa2 koa2-test 初始化项目

- cnpm install & cnpm run dev 运行项目

- cnpm i cross-env --save-dev 安装环境参数

- koa-generic-session koa-redis 实现登录

- cnpm o mysql -ss --save 安装 mysql 和 xss

- cnpm i koa-morgan --save 安装 morgan 记录日志

- cnpm i pm2 -g 安装 pm2

```js
  pm2 start ...  // 启动命令
  pm2 list // 看到控制台中进程列表
  pm2 restart <Appname>/<id> //重启进程
  pm2 stop <Appname>/<id> //停止进程
  pm2 delete <Appname>/<id> //删除进程
  pm2 info <Appname>/<id> //查看服务信息
  pm2 log <Appname>/<id> //日志打印
  pm2 monit <Appname>/<id> //分析服务

```

- PM2 配置(进程守护)

1.  新建 PM2 配置文件（包括进程数量，日志文件目录等）
2.  修改 PM2 启动命令，重启
3.  访问 server，检查日志文件的内容（日志记录是否生效）
