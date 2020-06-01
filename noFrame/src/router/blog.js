/*  处理博客路由
    进行路由匹配并返回固定格式的数据
*/
const { getList } = require("../constroller/blog");
const { SuccessModel, ErrorModel } = require("../model/resMdodel");

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const url = req.url;

  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);

    return new SuccessModel(listData);
  }

  // 获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    return {
      msg: "这是获取博客详情的接口",
    };
  }

  // 新建一篇博客
  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      msg: "这是新建博客的接口",
    };
  }

  // 更新一篇博客
  if (method === "POST" && req.path === "/api/blog/update") {
    return {
      msg: "这是更新博客的接口",
    };
  }

  // 新建一篇博客
  if (method === "POST" && req.path === "/api/blog/del") {
    return {
      msg: "这是删除博客的接口",
    };
  }
};

module.exports = handleBlogRouter;
