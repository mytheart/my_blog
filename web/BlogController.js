let blogDao = require('../dao/BlogDao');
let respUtil = require('../util/RespUtil.js');
let timeUtil = require('../util/TimeUtil.js');
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao");
let url = require('url')
let path = new Map();

path.set('/editBlog', editBlog);
path.set('/queryBlogByPage', queryBlogByPage)




function queryBlogByPage(request, response) {
    var params = url.parse(request.url, true).query;
    blogDao.queryBlogByPage(parseInt(params.page), parseInt(params.pageSize), function (result) {
        for (var i = 0; i < result.length; i++) {
            result[i].content = result[i].content.replace(/<img[\w\W]*">/, "");
            result[i].content = result[i].content.replace(/<[\w\W]{1,5}>/g, "");
            result[i].content = result[i].content.substring(0, 300);
        }
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}

function editBlog(request, response) {
    var params = url.parse(request.url, true).query;
    var tags = params.tags.replace(/ /g, "").replace("，", ",");
    request.on("data", function (data) {
        blogDao.insertBlog(params.title, data.toString(), tags, 0, timeUtil.getNow(), timeUtil.getNow(), function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
            var blogId = result.insertId;
            var tagList = tags.split(",");
            for (var i = 0 ; i < tagList.length ; i ++) {
                if (tagList[i] == "") {
                    continue;
                }
                queryTag(tagList[i], blogId);
            }
        });
    });
}

// function editBlog(request, response) {
//     request.on('data', function (data) {
//         let dataObj = {};
//         data.toString().split('&').forEach((ele) => {
//             let temp = ele.trim().split('=');
//             dataObj[temp[0]] = temp[1];
//         })
//         dataObj.tags.replace(/'，'/g, ',').replace(/ /g, '');
//         blogDao.insertBlog(dataObj.title, dataObj.content, dataObj.tags, 0, timeUtil.getNow(), timeUtil.getNow(), function (result) {
//             response.writeHead(200, {
//                 'Content-Type': 'text/html;charset=utf-8'
//             })
//             response.write(respUtil.writeResult('success', '添加成功', null))
//             response.end()
//             // 插入tag表
//             let blogId = result.insertId;
//             let tagList = dataObj.tags.split("%2C");
//             for (let i = 0; i < tagList.length; i++) {
//                 if (tagList[i] == "") {
//                     continue;
//                 }
//                 queryTag(tagList[i], blogId);
//             }
//         })

//     })
// }

function queryTag(tag, blogId) {
    tagsDao.queyrTag(tag, function (result) {
        if (result == null || result.length == 0) {
            insertTag(tag, blogId);
        } else {
            tagBlogMappingDao.insertTagBlogMapping(result[0].id, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {});
        }
    });
}

function insertTag(tag, blogId) {
    tagsDao.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(), function (result) {
        insertTagBlogMapping(result.insertId, blogId);
    });
}

function insertTagBlogMapping(tagId, blogId) {
    tagBlogMappingDao.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {});
}



module.exports.path = path;