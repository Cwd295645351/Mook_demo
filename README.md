# Mook_demo
1.本项目是学习慕课网课程-Node.js从零开发WebServer博客项目

2.noFrame文件夹下的代码是从0开始搭建，不使用任何框架;使用nodemon检测文件变化，自动重启node；使用cross-env设置环境变量，兼容mac linux 和windows




API: 

前端和后端、不同端（子系统）之间对接的一个术语

url (路由) '/api/blog/list' get，输入，输出



路由：

API 的一部分

后端系统内部的一个模块



用户刚开始登录时首先检查是否有userId，没有则初始化userid并将其设置为sessionid，接着从redis中查找是否有sessionid数据，若有则将返回值放到session中

启动html服务步骤：

1.cnpm install http-server -g

2.http-server -p 8001



数据库使用MySQL，数据库可视化使用MySQL Workbench

// 解除安全限制，使得用户能够修改数据

SET SQL_SAFE_UPDATES=0;

插入： insert into users (username,`password`,realname) values ("lisi","123","李四");

更新： update users set realname="李四2" where realname="李四";  

删除： delete from users where username="lisi";

查询： select * from blogs where title like "%标题%" order by createtime desc;





async await 要点：

1.await 后面可以追加 promise 对象，获取 resolve 的值

2.await 必须包裹在 async 函数里面

3.async 函数执行返回的也是一个 promise 对象

4.try-catch 截获 promise 中 rejecte 的值