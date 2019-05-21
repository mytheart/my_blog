
const aboutLeaveWords = new Vue({
    el: '#aboutLeaveWords',
    data: {
        totals:0,
        commentList: [],
    },
    methods:{
        reply(commentId, userName){
            console.log(commentId,userName)
            document.getElementById("comment_reply").value = commentId;
            document.getElementById("comment_reply_name").value = userName;
        },
      
    },
    created() {
        // 获取所有评论内容
        axios({
            method: "get",
            url: "/queryCommentsByBlogId?id=-1"
        }).then((resp)=>{
            this.commentList=resp.data.data.map((ele)=>{
                var temp={ctime:getLocalTime(ele.ctime)}
                return Object.assign(ele,temp)
            }).concat()
            this.totals=this.commentList.length;
        },(error)=>{
            console.log(error)
        });

    },

})

const sent_comment = new Vue({
    el: '#sent_comment',
    data: {
        username: '',
        email: '',
        content: '',
        enterCode: '',
        vcode: '',
        rightCode: '',
    },
    methods: {
        changeCode() {
            axios({
                method: "get",
                url: "/queryRandomCode"
            }).then((resp) => {
                // console.log(resp);
                this.vcode = resp.data.data.data;
                this.rightCode = resp.data.data.text;
            }, (error) => {
                console.log(error)
            });

            this.enterCode=''
        },
        submitComments() {

            // 检查验证码是否正确
            let code = this.enterCode.toLowerCase();
            if (code != this.rightCode.toLowerCase()) {
                alert("验证码有误");
                this.changeCode();
                return;
            }

            // 回复
            let replyId = document.getElementById("comment_reply").value;
            let replyName = document.getElementById("comment_reply_name").value;
            
            // 通过接口存储评论内容
            axios({
                url:"/addComment?id=-1&parent=" + replyId + "&userName=" + this.username + "&email=" + this.email + "&content=" + this.content + "&parentName=" + replyName,
                method: 'GET',
            }).then((resp) => {
                // console.log(resp)
                alert('评论成功')
                window.location.reload();

            }, (error) => {
                console.log(error)
            })
        }

    },
    created() {
        this.changeCode();
    }
})
