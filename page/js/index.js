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
        articleList: [{
            title: '【更新】PC端微信(2.6.7.57)防撤回',
            content: "2019-4-24更新微信 2.6.7.57防撤回，搜索 偏移量 00252185，数值75改为74此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工",
            data: '2019-02-14',
            views: '1,933',
            tag: '微信',
            id: '',
            link: ''
        },{
            title: '【更新】PC端微信(2.6.7.57)防撤回',
            content: "2019-4-24更新微信 2.6.7.57防撤回，搜索 偏移量 00252185，数值75改为74此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工",
            data: '2019-02-14',
            views: '1,933',
            tag: '微信',
            id: '',
            link: ''
        },{
            title: '【更新】PC端微信(2.6.7.57)防撤回',
            content: "2019-4-24更新微信 2.6.7.57防撤回，搜索 偏移量 00252185，数值75改为74此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工",
            data: '2019-02-14',
            views: '1,933',
            tag: '微信',
            id: '',
            link: ''
        },{
            title: '【更新】PC端微信(2.6.7.57)防撤回',
            content: "2019-4-24更新微信 2.6.7.57防撤回，搜索 偏移量 00252185，数值75改为74此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工",
            data: '2019-02-14',
            views: '1,933',
            tag: '微信',
            id: '',
            link: ''
        },]
    },
    created() {
        // 发送请求，获取文章数据
    
    },
  
})

// {

//     "msg":"对话成功",

//     "data":{"text":"你好" },

//     "status":"success"

//     }