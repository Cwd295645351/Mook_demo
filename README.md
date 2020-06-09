# Mook_demo
1.本项目是学习慕课网课程-Node.js从零开发WebServer博客项目

2.noFrame文件夹下的代码是从0开始搭建，不使用任何框架;使用nodemon检测文件变化，自动重启node；使用cross-env设置环境变量，兼容mac linux 和windows




API: 

前端和后端、不同端（子系统）之间对接的一个术语

url (路由) '/api/blog/list' get，输入，输出



路由：

API 的一部分

后端系统内部的一个模块





数据库使用MySQL，数据库可视化使用MySQL Workbench

// 解除安全限制，使得用户能够修改数据

SET SQL_SAFE_UPDATES=0;

插入： insert into users (username,`password`,realname) values ("lisi","123","李四");

更新： update users set realname="李四2" where realname="李四";  

删除： delete from users where username="lisi";

查询： select * from blogs where title like "%标题%" order by createtime desc;


