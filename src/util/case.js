let cases = [
    {
        name: '默认',
        content: `下面是一些测试实例:
history: v1.0 正则表达式测试工具上线
            v1.1 2012-03-25 修复高亮偏移错位的问题
            v1.2 2014-06-15 增加生成程序代码的功能
            v1.3 2014-09-04 增加java代码的生成，修正邮箱的匹配
                1. 截至目前为止，最长域名后缀 .cancerresearch
            v1.4 2016-03-12 重写代码生成引擎，解决生成的bug
            v1.5 2017-10-29 彻底重写测试功能解决文本过长时产生的高亮bug
notice: 由于我们使用的是js的正则引擎，所以暂时还不能支持逆序环视
demo@qq.com
tool-yunser@vip.qq.com
tool+yunser@gmail.com
demo@live.com
127.0.0.1
http://yunser.com/
https://regex.yunser.com/
123456789012345
16:09:22`
    },
    {
        name: '邮箱',
        content: `1418503648@qq.com
121212@163.com`
    },
    {
        name: '数字',
        content: `123
asd
-123
123.23`
    },
    {
        name: '时间',
        content: `123
2018-02-16
2018-2-16
2018/02/16`
    },
    {
        name: '颜色',
        content: `#ff0000
#009933
#f00
rgb(255,255,0)`
    },
    {
        name: '代码',
        content: `<a href="#">链接</a>
<p>P 标签</p>
<img src="#">
<img src="#" />
rgb(255,255,0)`
    },
    {
        name: 'URL',
        content: `http://www.baidu.com // 普通网址
https://www.baidu.com // 允许https
http://baidu.com
http://ui.baidu.com // 子域名
http://design.ui.baidu.com // 二级域名
http://www.baidu.com/
http://www.baidu.com/about.html // 文件
http://www.baidu.com/help/v1/about.html // 多级目录
http://www.baidu.com/What-is_http.html // 大小写、连字符、下划线
http://www.baidu.com/What-is_http.html#asd_1-2 // hash
http://192.168.1.1 // ip


// 错误的例子
123123121
http://asd
`
    }
]

export default cases
