/*
  controller处理数据，只关心数据并返回数据
 */
const xss = require("xss");
const {
  exec,
  escape
} = require("../db/mysql");

const getList = async (author, keyword) => {
  author = escape(author);
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author=${author} `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc;`;

  // 返回promise
  return await exec(sql)
};

const getDetail = async (id) => {
  id = escape(id);
  const sql = `select * from blogs where id=${id};`;
  const row = await exec(sql)
  return rows[0];
};

const newBlog = async (blogData = {}) => {
  //blogData 是一个博客对象，包含title, content, author属性
  let title = xss(blogData.title);
  let content = xss(blogData.content);
  let author = blogData.author;
  let createTime = Date.now();

  title = escape(title);
  content = escape(content);
  author = escape(author);

  const sql = `
    insert into blogs (title, content, createtime, author) 
    value (${title}, ${content}, ${createTime}, ${author})`;

  const insertData = exec(sql);
  return {
    id: insertData.insertId
  }
};

const updateBlog = async (id, blogData = {}) => {
  // id 就是要更新博客的 id
  //blogData 是一个博客对象，包含title content属性

  let title = xss(blogData.title);
  let content = xss(blogData.content);

  title = escape(title);
  content = escape(content);

  const sql = `
    update blogs set title=${title}, content=${content} where id=${id}
  `;

  const updateData = await exec(sql);
  if (updateData.affectedRows > 0) {
    return true;
  }
  return false;
};

const delBlog = async (id, author) => {
  // id 就是要删除博客的 id

  id = escape(id);
  author = escape(author);

  const sql = `delete from blogs where id=${id} and author=${author}`;


  const delData = await exec(sql);
  if (delData.affectedRows > 0) {
    return true;
  }
  return false;
};

module.exports = {
  getList,
  newBlog,
  getDetail,
  updateBlog,
  delBlog,
};