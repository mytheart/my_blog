
const randomTags = new Vue({
    el: '#random_tags',
    data: {
        tags: []
    },
    methods: {
        clickHandle(tagId){
            console.log(tagId)
            // axios({
            //     url:'/queryByTag?tag'+tagId+'&page=1&pageSize=5',
            //     method:'get'
            // }).then((resp)=>{
            //     console.log(resp)
            // },(err)=>{
            //     console.log(err)
            // })
        },
        randomColor() {
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;
            return `rgb(${r},${g},${b})`
        },
        randomSize() {
            return Math.random() * 18 + 10 + 'px';
        }
    },
    created() {
        axios({
            url:"/queryRandomTags",
            method:'get'
        }).then((resp)=>{
            this.tags=resp.data.data.concat();
            // console.log(this.tags)
        },(error)=>{
            console.log(error)
        })
    },

})

const newHot = new Vue({
    el: '#newHot',
    data: {
        hotBlogs:[]
    },
    created(){
        axios({
            url:'/queryHotBlog',
            method:'get'
        }).then((resp)=>{
            this.hotBlogs=resp.data.data.concat()
        },(err)=>{
            console.log(err)
        })
    }
})

const newComment = new Vue({
    el: "#newComment",
    data: {
        commentList: []
    },
    created(){
        axios({
            url:'/queryNewComments',
            method:'get'
        }).then((resp)=>{
            // console.log(resp.data.data)
            resp.data.data.forEach(ele=>{
                let temp={
                    name:ele.user_name,
                    comments:ele.comments,
                    data:getUpdateTime(ele.ctime*1000)
                }
                this.commentList.push(temp)
            })
        },(err)=>{
            console.log(err)
        })
    }
})










const getUpdateTime = function(updateTime) {
    if (updateTime === null) {
        return ''
    }
    let now = new Date().getTime()
    let second = Math.floor((now - updateTime) / (1000))
    let minute = Math.floor(second / 60)
    let hour = Math.floor(minute / 60)
    let day = Math.floor(hour / 24)
    let month = Math.floor(day / 31)
    let year = Math.floor(month / 12)
    if (year > 0) {
        return year + '年前'
    } else if (month > 0) {
        return month + '月前'
    } else if (day > 0) {
        let ret = day + '天前'
        if (day >= 7 && day < 14) {
            ret = '1周前'
        } else if (day >= 14 && day < 21) {
            ret = '2周前'
        } else if (day >= 21 && day < 28) {
            ret = '3周前'
        } else if (day >= 28 && day < 31) {
            ret = '4周前'
        }
        return ret
    } else if (hour > 0) {
        return hour + '小时前'
    } else if (minute > 0) {
        return minute + '分钟前'
    } else if (second > 0) {
        return second + '秒前'
    } else {
        return '刚刚'
    }
}
 







// 格式化时间
function getLocalTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y+M+D+h+m+s;
}

// 获取url中的参数
function getWindonHref() {
    var sHref = window.location.href;
    var args = sHref.split('?');
    if (args[0] === sHref) {
        return '';
    }
    var hrefarr = args[1].split('&');
    var obj = {};
    for (var i = 0; i < hrefarr.length; i++) {
        hrefarr[i] = hrefarr[i].split('=');
        obj[hrefarr[i][0]] = hrefarr[i][1];
    }
    return obj;
}