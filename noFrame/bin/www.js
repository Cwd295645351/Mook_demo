/* 创建服务，监听端口 */
const http = require("http");

const PORT = 8000;
const serverHandle = require("../app");

const server = http.createServer(serverHandle);
server.listen(PORT);
