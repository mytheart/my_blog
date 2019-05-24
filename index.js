let express = require("express");
let globalConfig = require("./config");
let loader = require("./loader");
let url = require('url');

let server = express();

// 静态路径
server.use(express.static("./page/"));

// 接口
server.post('/editEveryDay', loader.get('/editEveryDay'));

server.get('/getEveryDay', loader.get('/getEveryDay'));

server.post('/editBlog', loader.get('/editBlog'));

server.get('/queryBlogByPage', loader.get('/queryBlogByPage'));

server.get("/queryBlogCount", loader.get("/queryBlogCount"));

server.get("/queryBlogById", loader.get("/queryBlogById"));

server.get("/addComment", loader.get("/addComment"));

server.get("/queryRandomCode", loader.get("/queryRandomCode"));

server.get("/queryCommentsByBlogId", loader.get("/queryCommentsByBlogId"));
server.get("/queryCommentsCountByBlogId", loader.get("/queryCommentsCountByBlogId"));

server.get("/queryAllBlog", loader.get("/queryAllBlog"));

server.get("/queryRandomTags", loader.get("/queryRandomTags"));

server.get("/queryHotBlog", loader.get("/queryHotBlog"));
server.get("/queryNewComments", loader.get("/queryNewComments"));

// server.get("/queryByTag", loader.get("/queryByTag"));
// server.get("/queryByTagCount", loader.get("/queryByTagCount"));





server.listen(globalConfig.port, function () {
    console.log("Server running at http://120.79.182.51")
})