/*
  controller处理数据，只关心数据并返回数据
 */

const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1591022010621,
      author: "zhangsan",
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1591022052062,
      author: "lisi",
    },
    {
      id: 3,
      title: "标题C",
      content: "内容C",
      createTime: 1591022068247,
      author: "wangwu",
    },
  ];
};

const getDetail = (id) => {
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1591022010621,
    author: "zhangsan",
  };
};

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title content属性
  // console.log("newBlog blogData...", blogData);
  return {
    id: 3, // 表示新建博客，插入到数据表里面的id
  };
};

const updataBlog = (id, blogData = {}) => {
  // id 就是要更新博客的 id
  //blogData 是一个博客对象，包含title content属性
  // console.log("updata blog", id, blogData);

  return true;
};

const delBlog = (id) => {
  // id 就是要删除博客的 id
  return true;
};

module.exports = {
  getList,
  newBlog,
  getDetail,
  updataBlog,
  delBlog,
};
