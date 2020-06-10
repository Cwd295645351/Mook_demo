/*
  controller处理数据，只关心数据并返回数据
 */
const { exec } = require("../db/mysql");

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc;`;

  // 返回promise
  return exec(sql);
};

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}';`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title, content, author属性
  // console.log("newBlog blogData...", blogData);
  const title = blogData.title;
  const content = blogData.content;
  const author = blogData.author;
  const createTime = Date.now();

  const sql = `
    insert into blogs (title, content, createtime, author) 
    value ('${title}', '${content}', ${createTime}, '${author}')`;
  return exec(sql).then((insertData) => {
    console.log("insertData is ", insertData);
    return {
      id: insertData.insertId
    };
  });
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
