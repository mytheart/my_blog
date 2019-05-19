import util from './util.js'


const leftContent = new Vue({
    el: '#leftContent',
    data: {
        article: {},
    },
    computed: {
        // prevBlog() {
        //     console.log('prev')
        //     // return '/blog_detail.html?id=' + this.article.id--;
        // },
        // nextBlog() {
        //     console.log('next')
        //     // return '/blog_detail.html?id=' + this.article.id++;
        // }
    },
    methods: {
        getArticleDetail() {
            console.log(111)
            let param = util.getWindonHref();
            axios({
                method: 'get',
                url: '/queryBlogById?id=' + param.id,
            }).then((resp) => {
                this.article = JSON.parse(JSON.stringify(resp.data.data[0]))
                this.article.ctime = util.getLocalTime(this.article.ctime)
                console.log(this.article)
            }, (error) => {
                console.log(error)
            })
        },

    },
    created() {
        this.getArticleDetail()
    },
})