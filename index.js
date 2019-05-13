let express=require("express");
let globalConfig=require("./config.js");
let loader=require("./loader.js");

let server=express();

// 静态路径
server.use(express.static("./page/"));

server.listen(globalConfig.port,function(){
    
    console.log("服务器已启动")
})