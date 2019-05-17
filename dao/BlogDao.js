let dbutil = require('./dbutil');

function queryBlogByPage(page, pageSize, success) {
    var insertSql = "select * from blog order by id desc limit ?, ?;";
    var params = [page * pageSize, pageSize];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


function insertBlog(title, tags, content, views, ctime, utime, success) {
    let insertSql = "insert into blog (title,tags,content,views,ctime,utime) values (?,?,?,?,?,?)"
    let params = [title, content, tags, views, ctime, ctime];
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


module.exports = {
    insertBlog,
    queryBlogByPage
}