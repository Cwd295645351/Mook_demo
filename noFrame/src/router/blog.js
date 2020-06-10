/*  处理博客路由
    进行路由匹配并返回固定格式的数据
*/
const {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog,
} = require("../constroller/blog");
const { SuccessModel, ErrorModel } = require("../model/resMdodel");

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id;
  const url = req.url;

  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    // const listData = getList(author, keyword);

    // return new SuccessModel(listData);
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  // 获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    // const data = getDetail(id);
    // return new SuccessModel(data);
    const result = getDetail(id);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // 新建一篇博客
  if (method === "POST" && req.path === "/api/blog/new") {
    // const data = newBlog(req.body);
    // return new SuccessModel(data);
    const author = "zhangsan";
    req.body.author = author;// 假数据，待开发登录时再改成真实数据
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // 更新一篇博客
  if (method === "POST" && req.path === "/api/blog/update") {
    const result = updataBlog(id, req.body);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("更新博客失败");
    }
    return {
      msg: "这是更新博客的接口",
    };
  }

  // 删除一篇博客
  if (method === "POST" && req.path === "/api/blog/del") {
    const result = delBlog(id);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("删除博客失败");
    }
  }
};

module.exports = handleBlogRouter;
