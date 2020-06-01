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

module.exports = {
  getList,
};
