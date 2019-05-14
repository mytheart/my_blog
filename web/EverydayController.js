let url=require('url');
let path=new Map();


path.set('/editEveryDay',editEveryDay)

function editEveryDay(request,response){
    
    request.on('data',function(data){
        console.log(data.toString())
        response.writeHead(200);
        response.write(data.toString());
        response.end();
    })
}


module.exports.path=path