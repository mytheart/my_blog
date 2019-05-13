let fs = require("fs");
let globalConfig = require("./config.js");

let controllerSet = [];
let pathMap = new Map();

let files = fs.readdirSync(globalConfig["web_path"]);

for (let i = 0; i < files.length; i++) {
    let temp = require('./' + globalConfig["web_path"] + '/' + files[0]);
    if(!temp.path){
      return;
    }
    for (let [key,val] of temp.path) {
        if (pathMap.get(key) == null) {
            pathMap.set(key, val)
        }else{
            throw new Error("url path异常, url:" + key)
        }
    }
    controllerSet.push(temp)       
}
module.exports=pathMap;
