let dbutil = require('./dbutil');

function insertEveryDay(content, ctime, success) {
    let insertSql = "insert into every_day (content,ctime) values (?,?)";
    let params = [content, ctime];

    let connection = dbutil.createConnection();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log('error',error)
        }
    })
    connection.end();
}

function getEveryDay(success){
    let insertSql="select * from every_day order by id desc limit 1;"

    let connection = dbutil.createConnection();
    connection.query(insertSql,function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log('error',error)
        }
    })
    connection.end();
}



module.exports={
    insertEveryDay,
    getEveryDay
}