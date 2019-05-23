var blogDao = require("../dao/BlogDao.js");
var tagsDao = require("../dao/TagsDao.js");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao.js");
var commentDao = require("../dao/CommentDao.js");
var timeUtil = require("../util/TimeUtil.js");
var respUtil = require("../util/RespUtil.js");
var captcha = require("svg-captcha.js");
var url = require("url");

var path = new Map();

path.set("/addComment", addComment);
path.set("/queryRandomCode", queryRandomCode);
path.set("/queryCommentsByBlogId", queryCommentsByBlogId);
path.set("/queryCommentsCountByBlogId", queryCommentsCountByBlogId);
path.set("/queryNewComments", queryNewComments);



function addComment(request, response) {
    var params = url.parse(request.url, true).query;
    console.log(params)
    commentDao.insertComment(parseInt(params.id), parseInt(params.parent), params.parentName, params.userName, params.email, params.content, timeUtil.getNow(), timeUtil.getNow(), function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "评论成功", null));
        response.end();
    });
}


function queryRandomCode(request, response) {
    var img = captcha.create({fontSize: 50, width: 100, height: 34});
    response.writeHead(200);
    response.write(respUtil.writeResult("success", "评论成功", img));
    response.end();
}


function queryCommentsByBlogId(request, response) {
    var params = url.parse(request.url, true).query;
    commentDao.queryCommentsByBlogId(parseInt(params.id), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "评论成功", result));
        response.end();
    });
}


function queryCommentsCountByBlogId(request, response) {
    var params = url.parse(request.url, true).query;
    commentDao.queryCommentCountByBlogId(parseInt(params.id), function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "评论成功", result));
        response.end();
    });
}


function queryNewComments(request, response) {
    commentDao.queryNewComments(5, function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "评论成功", result));
        response.end();
    });
}

module.exports.path = path;