let dbutil = require('./dbutil');

function queryBlogById(id, success) {
    var querySql = "select * from blog where id = ?;";
    var params = [id];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryBlogCount(success) {
    var querySql = "select count(1) as count from blog;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

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
    queryBlogByPage,
    queryBlogCount,
    queryBlogById
}