let everyDayDao=require('../dao/EverydayDao');
let respUtil=require('../util/RespUtil');


let path=new Map();


path.set('/editEveryDay',editEveryDay)
path.set('/getEveryDay',getEveryDay)

function editEveryDay(request,response){
    
    request.on('data',function(data){
        everyDayDao.insertEveryDay(data.toString(),Date.now()/1000,function(result){
            response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            response.write(respUtil.writeResult('success','添加成功',null))
            response.end()
        })
       
    })
}


function getEveryDay(request,response){
    everyDayDao.getEveryDay(function(result){
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        response.write(respUtil.writeResult('success','添加成功',result))
        response.end()
    })
}


module.exports.path=path