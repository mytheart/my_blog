let fs=require('fs');
let globalConfig={}
let configArr=fs.readFileSync('./server.conf').toString().split('\r\n');

for(let i=0;i<configArr.length;i++){
    let temp=configArr[i].split('=');
    globalConfig[temp[0].trim()]=temp[1];

}
module.exports=globalConfig;