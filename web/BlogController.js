let path=new Map();

path.set('/editBlog',editBlog);

function editBlog(request,response){
    request.on('data',function(data){
        console.log(data.toString());
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        response.write(data.toString())
        response.end()
    })
}



module.exports.path=path;
