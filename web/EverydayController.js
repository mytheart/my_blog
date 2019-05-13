var map=new Map();
map.set('/test1',test1)
map.set('/test2',test2)
function test1(){
    console.log('test1')
}

function test2(){
    console.log('test2')
}


module.exports.path=map