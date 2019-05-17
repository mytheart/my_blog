const everyDay = new Vue({
    el: "#every_day",
    data: {
        // 每日一句内容
        content: ""
    },
  
    created() {
        // 发送请求获取数据
        axios({
            url:"/getEveryDay",
            methods:"get",
        }).then(function(response){
            // 获取成功
            everyDay.content=response.data.data[0].content;
        }).catch(function(reject){
            console.log('请求失败')
        })
    },
})

const article = new Vue({
    el: "#articleBox",
    data: {
        page:1,
        pageSize:5,
        count:100,
        articleList: []
    },
    computed:{
        getPage(){
            return function(page,pageSize){
                axios({
                    method:'get',
                    url: "/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
                }).then((resp)=>{
                    var result = resp.data.data;
                    var list = [];
                    for (var i = 0 ; i < result.length ; i ++) {
                        var temp = {};
                        temp.title = result[i].title;
                        temp.content = result[i].content;
                        temp.date = result[i].ctime;
                        temp.views = result[i].views;
                        temp.tags = result[i].tags;
                        temp.id = result[i].id;
                        temp.link = "/blog_detail.html?bid=" + result[i].id;
                        list.push(temp);
                    }
                    this.articleList = list;
                    // console.log(this.articleList)
                },(error)=>{
                    console.log('error',error)
                })
            }
        }
    },
    created() {
       
        // 发送请求，获取文章数据
        this.getPage(this.page,this.pageSize)
    
    },
  
})

// {

//     "msg":"对话成功",

//     "data":{"text":"你好" },

//     "status":"success"

//     }