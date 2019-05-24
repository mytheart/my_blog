let mysql=require('mysql')

function createConnection(){
    let connection=mysql.createConnection({
        host:'120.79.182.51',
        port:'3306',
        user:'root',
        password:'mytheart',
        database:'my_blog'
    })
    return connection;
}


module.exports.createConnection=createConnection;