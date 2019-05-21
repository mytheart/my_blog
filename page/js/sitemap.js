const siteContent=new Vue({
    el:"#siteContent",
    data:{
        blogList:[],
    },
    created() {
        axios({
            url:'/queryAllBlog',
            method:'get'
        }).then((resp)=>{
            console.log(resp)
            this.blogList=resp.data.data.concat();
        }).catch((error)=>{
            console.log(error)
        })
    },
})