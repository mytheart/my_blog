let express=require("express");
let globalConfig=require("./config.js");
let loader=require("./loader.js");
let url=require('url');

let server=express();

// 静态路径
server.use(express.static("./page/"));

// 接口
server.post('/editEveryDay',loader.get('/editEveryDay'));

server.get('/getEveryDay',loader.get('/getEveryDay'));

server.post('/editBlog',loader.get('/editBlog'));

server.get('/queryBlogByPage',loader.get('/queryBlogByPage'));






server.listen(globalConfig.port,function(){
    
    console.log("Server running at http://127.0.0.1:8888/")
})