const everyDay = new Vue({
    el: "#every_day",
    data: {
        // 每日一句内容
        content: ""
    },

    created() {
        // 发送请求获取数据
        axios({
            url: "/getEveryDay",
            methods: "get",
        }).then(function (response) {
            // 获取成功
            everyDay.content = response.data.data[0].content;
        }).catch(function (reject) {
            console.log('请求失败')
        })
    },
})

const articleBox = new Vue({
    el: "#articleBox",
    data: {
        page: 1,
        pageSize: 5,
        count: null,
        articleList: [],
        pageNumList: [],
    },
    computed: {
        getPage() {
            return function (page, pageSize) {
                this.page = page;
                axios({
                    method: 'get',
                    url: "/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
                }).then((resp) => {
                    var result = resp.data.data;
                    var list = [];
                    for (var i = 0; i < result.length; i++) {
                        var temp = {};
                        temp.title = result[i].title;
                        temp.content = result[i].content;
                        temp.date = result[i].ctime;
                        temp.views = result[i].views;
                        temp.tags = result[i].tags;
                        temp.id = result[i].id;
                        temp.link = "/blog_detail.html?id=" + result[i].id;
                        list.push(temp);
                    }
                    this.articleList = list;
                }, (error) => {
                    console.log('error', error)
                })
            }
        },
        generatePageTool() {
            return () => {
                axios({
                    url: '/queryBlogCount',
                    method: 'get',
                }).then((resp) => {
                    this.count = resp.data.data[0].count;
                    let pageNum = Math.ceil(this.count / this.pageSize);
                    for (let i = 1; i <= pageNum; i++) {
                        this.pageNumList.push(i)
                    }
                }, (error) => {
                    console.log(error)
                })

            }
        }
        
    },
    methods: {
        prevHandle() {
            if (this.page > 1) {
                this.page--;
                this.getPage(this.page, this.pageSize)
            }
        },
        nextHandle() {
            if (this.page < this.pageNumList.length) {
                this.page++;
                this.getPage(this.page, this.pageSize)
            }

        },
        lastHandle() {
            if (this.page != this.pageNumList.length) {
                console.log(this.pageNumList.length)
                this.page = this.pageNumList.length;
                this.getPage(this.page, this.pageSize)
            }
        }
    },
    created() {

        // 发送请求，获取文章数据
        this.getPage(this.page, this.pageSize)
        // 发送请求，获取文章总数，设置翻页
        this.generatePageTool()

        // axios({
        //     url:'/queryBlogById?id=1',
        //     method:'get',

        // }).then((resp)=>{
        //     console.log(resp)
        // },(error)=>{
        //     console.log(error)
        // })

    },

})

// {

//     "msg":"对话成功",

//     "data":{"text":"你好" },

//     "status":"success"

//     }