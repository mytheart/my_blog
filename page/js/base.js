const randomTags = new Vue({
    el: '#random_tags',
    data: {
        tags: [{
            tag: 'javaScript',
            link: '#'
        }, {
            tag: 'Vue',
            link: '#'
        }, {
            tag: 'node.js',
            link: '#'
        }, {
            tag: 'javaScript',
            link: '#'
        }, {
            tag: 'Vue',
            link: '#'
        }, {
            tag: 'node.js',
            link: '#'
        }, {
            tag: 'javaScript',
            link: '#'
        }, {
            tag: 'Vue',
            link: '#'
        }, {
            tag: 'node.js',
            link: '#'
        }, ]
    },
    methods: {
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

})

const newHot = new Vue({
    el: '#newHot',
    data: {
        titleList:[
            {title:'vscode+XDebug调试远程环境(虚拟机)',link:'www.baidu.com'},
            {title:'查看你的AWS服务器已使用流量',link:'www.baidu.com'},
            {title:'VirtualBox压缩vmdk、vagrant打包b',link:'www.baidu.com'},
            {title:'vscode+XDebug调试远程环境(虚拟机)',link:'www.baidu.com'},
            {title:'抓取摩拜单车车辆位置数据',link:'www.baidu.com'},
            {title:'vscode+XDebug调试远程环境(虚拟机)',link:'www.baidu.com'},
            {title:'vscode+XDebug调试远程环境(虚拟机)',link:'www.baidu.com'},
            {title:'vscode+XDebug调试远程环境(虚拟机)',link:'www.baidu.com'},
            {title:'vscode+XDebug调试远程环境(虚拟机)',link:'www.baidu.com'},
            {title:'vscode+XDebug调试远程环境(虚拟机)',link:'www.baidu.com'}
        ]
    },
})

const newComment = new Vue({
    el: "#newComment",
    data: {
        commentList:[
            {name:'穆鸟',data:'3天前',comment:'我来了'},
            {name:'穆鸟',data:'3天前',comment:'我来了'},
            {name:'穆鸟',data:'3天前',comment:'我来了'},
            {name:'穆鸟',data:'3天前',comment:'我来了'},
            {name:'穆鸟',data:'3天前',comment:'我来了'},
            {name:'穆鸟',data:'3天前',comment:'我来了'}
        ]
    }
})