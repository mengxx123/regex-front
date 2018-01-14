<template>
    <my-page title="正则表达式大全">
        <ui-article>
            <h1>正则表达式大全</h1>
            <h2>校验数字的表达式</h2>
            <pre><span style="color: #008080;"> 1</span> 数字：<span style="color: #ff0000;">^[0-9]*$
</span><span style="color: #008080;"> 2</span> n位的数字：<span style="color: #ff0000;">^\d{n}$
</span><span style="color: #008080;"> 3</span> 至少n位的数字：<span style="color: #ff0000;">^\d{n,}$
</span><span style="color: #008080;"> 4</span> m-n位的数字：<span style="color: #ff0000;">^\d{m,n}$
</span><span style="color: #008080;"> 5</span> 零和非零开头的数字：<span style="color: #ff0000;">^(0|[1-9][0-9]*)$
</span><span style="color: #008080;"> 6</span> 非零开头的最多带两位小数的数字：<span style="color: #ff0000;">^([1-9][0-9]*)+(.[0-9]{1,2})?$
</span><span style="color: #008080;"> 7</span> 带1-2位小数的正数或负数：<span style="color: #ff0000;">^(\-)?\d+(\.\d{1,2})?$
</span><span style="color: #008080;"> 8</span> 正数、负数、和小数：<span style="color: #ff0000;">^(\-|\+)?\d+(\.\d+)?$
</span><span style="color: #008080;"> 9</span> 有两位小数的正实数：<span style="color: #ff0000;">^[0-9]+(.[0-9]{2})?$
</span><span style="color: #008080;">10</span> 有1~3位小数的正实数：<span style="color: #ff0000;">^[0-9]+(.[0-9]{1,3})?$
</span><span style="color: #008080;">11</span> 非零的正整数：<span style="color: #ff0000;">^[1-9]\d*$</span> 或 <span style="color: #ff0000;">^([1-9][0-9]*){1,3}$</span> 或 <span style="color: #ff0000;">^\+?[1-9][0-9]*$
</span><span style="color: #008080;">12</span> 非零的负整数：<span style="color: #ff0000;">^\-[1-9][]0-9"</span><span style="color: #800000;"><span style="color: #ff0000;">*$</span> <span style="color: #000000;">或</span> <span style="color: #ff0000;">^-[1-9]\d*$</span></span>
<span style="color: #008080;">13</span> 非负整数：<span style="color: #ff0000;">^\d+$</span> 或 <span style="color: #ff0000;">^[1-9]\d*|0$
</span><span style="color: #008080;">14</span> 非正整数：<span style="color: #ff0000;">^-[1-9]\d*|0$</span> 或 <span style="color: #ff0000;">^((-\d+)|(0+))$
</span><span style="color: #008080;">15</span> 非负浮点数：<span style="color: #ff0000;">^\d+(\.\d+)?$</span> 或 <span style="color: #ff0000;">^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$
</span><span style="color: #008080;">16</span> 非正浮点数：<span style="color: #ff0000;">^((-\d+(\.\d+)?)|(0+(\.0+)?))$</span> 或 <span style="color: #ff0000;">^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$
</span><span style="color: #008080;">17</span> 正浮点数：<span style="color: #ff0000;">^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$</span> 或 <span style="color: #ff0000;">^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
</span><span style="color: #008080;">18</span> 负浮点数：<span style="color: #ff0000;">^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$</span> 或 <span style="color: #ff0000;">^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
</span><span style="color: #008080;">19</span> 浮点数：<span style="color: #ff0000;">^(-?\d+)(\.\d+)?$</span> 或 <span style="color: #ff0000;">^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$</span></pre>
            <h2>校验字符的表达式</h2>
            <pre><span style="color: #008080;"> 1</span> 汉字：<span style="color: #ff0000;">^[\u4e00-\u9fa5]{0,}$
</span><span style="color: #008080;"> 2</span> 英文和数字：<span style="color: #ff0000;">^[A-Za-z0-9]+$</span> 或 <span style="color: #ff0000;">^[A-Za-z0-9]{4,40}$
</span><span style="color: #008080;"> 3</span> 长度为3-20的所有字符：<span style="color: #ff0000;">^.{3,20}$
</span><span style="color: #008080;"> 4</span> 由26个英文字母组成的字符串：<span style="color: #ff0000;">^[A-Za-z]+$
</span><span style="color: #008080;"> 5</span> 由26个大写英文字母组成的字符串：<span style="color: #ff0000;">^[A-Z]+$
</span><span style="color: #008080;"> 6</span> 由26个小写英文字母组成的字符串：<span style="color: #ff0000;">^[a-z]+$
</span><span style="color: #008080;"> 7</span> 由数字和26个英文字母组成的字符串：<span style="color: #ff0000;">^[A-Za-z0-9]+$
</span><span style="color: #008080;"> 8</span> 由数字、26个英文字母或者下划线组成的字符串：<span style="color: #ff0000;">^\w+$ 或 ^\w{3,20}$
</span><span style="color: #008080;"> 9</span> 中文、英文、数字包括下划线：<span style="color: #ff0000;">^[\u4E00-\u9FA5A-Za-z0-9_]+$
</span><span style="color: #008080;">10</span> 中文、英文、数字但不包括下划线等符号：<span style="color: #ff0000;">^[\u4E00-\u9FA5A-Za-z0-9]+$</span> 或 <span style="color: #ff0000;">^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$
</span><span style="color: #008080;">11</span> 可以输入含有<span style="color: #000000;">^%&amp;'</span><span style="color: #800000;"><span style="color: #000000;">,;=?$\"等字符：</span><span style="color: #ff0000;">[^%&amp;</span></span><span style="color: #ff0000;">',;=?$\x22]+
</span><span style="color: #008080;">12</span> 禁止输入含有~的字符：<span style="color: #ff0000;">[^~\x22]+</span></pre>
            <h2>特殊需求表达式</h2>
            <pre><span style="color: #008080;"> 1</span> Email地址：<span style="color: #ff0000;">^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
</span><span style="color: #008080;"> 2</span> 域名：<span style="color: #ff0000;">[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
</span><span style="color: #008080;"> 3</span> InternetURL：<span style="color: #ff0000;">[a-zA-z]+://</span><span style="color: #008000;"><span style="color: #ff0000;">[^\s]*</span> <span style="color: #000000;">或</span> <span style="color: #ff0000;">^http:</span></span><span style="color: #ff0000;">//([\w-]+\.)+[\w-]+(/[\w-./?%&amp;=]*)?$
</span><span style="color: #008080;"> 4</span> 手机号码：<span style="color: #ff0000;">^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
</span><span style="color: #008080;"> 5</span> 电话号码(<span style="color: #800000;">"</span><span style="color: #800000;">XXX-XXXXXXX</span><span style="color: #800000;">"</span>、<span style="color: #800000;">"</span><span style="color: #800000;">XXXX-XXXXXXXX</span><span style="color: #800000;">"</span>、<span style="color: #800000;">"</span><span style="color: #800000;">XXX-XXXXXXX</span><span style="color: #800000;">"</span>、<span style="color: #800000;">"</span><span style="color: #800000;">XXX-XXXXXXXX</span><span style="color: #800000;">"</span>、<span style="color: #800000;">"</span><span style="color: #800000;">XXXXXXX</span><span style="color: #800000;">"</span>和<span style="color: #800000;">"</span><span style="color: #800000;">XXXXXXXX)：<span style="color: #ff0000;">^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$ </span></span>
<span style="color: #008080;"> 6</span> 国内电话号码(<span style="color: #800080;">0511</span>-<span style="color: #800080;">4405222</span>、<span style="color: #800080;">021</span>-<span style="color: #800080;">87888822</span>)：<span style="color: #ff0000;">\d{3}-\d{8}|\d{4}-\d{7}
</span><span style="color: #008080;"> 7</span> 身份证号(15位、18位数字)：<span style="color: #ff0000;">^\d{15}|\d{18}$
</span><span style="color: #008080;"> 8</span> 短身份证号码(数字、字母x结尾)：<span style="color: #ff0000;">^([0-9]){7,18}(x|X)?$</span> 或 <span style="color: #ff0000;">^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$
</span><span style="color: #008080;"> 9</span> 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：<span style="color: #ff0000;">^[a-zA-Z][a-zA-Z0-9_]{4,15}$
</span><span style="color: #008080;">10</span> 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：<span style="color: #ff0000;">^[a-zA-Z]\w{5,17}$
</span><span style="color: #008080;">11</span> 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：<span style="color: #ff0000;">^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
</span><span style="color: #008080;">12</span> 日期格式：<span style="color: #ff0000;">^\d{4}-\d{1,2}-\d{1,2}
</span><span style="color: #008080;">13</span> 一年的12个月(<span style="color: #800080;">01</span>～09和1～<span style="color: #800080;">12</span>)：<span style="color: #ff0000;">^(0?[1-9]|1[0-2])$
</span><span style="color: #008080;">14</span> 一个月的31天(<span style="color: #800080;">01</span>～09和1～<span style="color: #800080;">31</span>)：<span style="color: #ff0000;">^((0?[1-9])|((1|2)[0-9])|30|31)$
</span><span style="color: #008080;">15</span> <span style="color: #000000;">钱的输入格式：
</span><span style="color: #008080;">16</span>    1.有四种钱的表示形式我们可以接受:<span style="color: #800000;">"</span><span style="color: #800000;">10000.00</span><span style="color: #800000;">"</span> 和 <span style="color: #800000;">"</span><span style="color: #800000;">10,000.00</span><span style="color: #800000;">"</span>, 和没有 <span style="color: #800000;">"</span><span style="color: #800000;">分</span><span style="color: #800000;">"</span> 的 <span style="color: #800000;">"</span><span style="color: #800000;">10000</span><span style="color: #800000;">"</span> 和 <span style="color: #800000;">"</span><span style="color: #800000;">10,000</span><span style="color: #800000;">"</span>：<span style="color: #ff0000;">^[1-9][0-9]*$
</span><span style="color: #008080;">17</span>    2.这表示任意一个不以0开头的数字,但是,这也意味着一个字符<span style="color: #800000;">"</span><span style="color: #800000;">0</span><span style="color: #800000;">"</span>不通过,所以我们采用下面的形式：<span style="color: #ff0000;">^(0|[1-9][0-9]*)$
</span><span style="color: #008080;">18</span>    3.一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：<span style="color: #ff0000;">^(0|-?[1-9][0-9]*)$
</span><span style="color: #008080;">19</span>    4.这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：<span style="color: #ff0000;">^[0-9]+(.[0-9]+)?$
</span><span style="color: #008080;">20</span>    5.必须说明的是,小数点后面至少应该有1位数,所以<span style="color: #800000;">"</span><span style="color: #800000;">10.</span><span style="color: #800000;">"</span>是不通过的,但是 <span style="color: #800000;">"</span><span style="color: #800000;">10</span><span style="color: #800000;">"</span> 和 <span style="color: #800000;">"</span><span style="color: #800000;">10.2</span><span style="color: #800000;">"</span> 是通过的：<span style="color: #ff0000;">^[0-9]+(.[0-9]{2})?$
</span><span style="color: #008080;">21</span>    6.这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：<span style="color: #ff0000;">^[0-9]+(.[0-9]{1,2})?$
</span><span style="color: #008080;">22</span>    7.这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：<span style="color: #ff0000;">^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$
</span><span style="color: #008080;">23</span>    8.1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须：<span style="color: #ff0000;">^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$
</span><span style="color: #008080;">24</span>    备注：这就是最终结果了,别忘了<span style="color: #800000;">"</span><span style="color: #800000;">+</span><span style="color: #800000;">"</span>可以用<span style="color: #800000;">"</span><span style="color: #800000;">*</span><span style="color: #800000;">"</span>替代如果你觉得空字符串也可以接受的话(奇怪,为什么?<span style="color: #000000;">)最后,别忘了在用函数时去掉去掉那个反斜杠,一般的错误都在这里
</span><span style="color: #008080;">25</span> xml文件：<span style="color: #ff0000;">^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$
</span><span style="color: #008080;">26</span> 中文字符的正则表达式：<span style="color: #ff0000;">[\u4e00-\u9fa5]
</span><span style="color: #008080;">27</span> 双字节字符：<span style="color: #ff0000;">[^\x00-\xff]    <span style="color: #808080;">(包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))</span><br></span><span style="color: #008080;">28</span> 空白行的正则表达式：<span style="color: #ff0000;">\n\s*\r    <span style="color: #808080;">(可以用来删除空白行)
</span></span><span style="color: #008080;">29</span> HTML标记的正则表达式：<span style="color: #ff0000;">&lt;(\S*?)[^&gt;]*&gt;.*?&lt;/\1&gt;|&lt;.*? /&gt;    <span style="color: #808080;">(网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)</span><br></span><span style="color: #008080;">30 </span>首尾空白字符的正则表达式：<span style="color: #ff0000;">^\s*|\s*$或(^\s*)|(\s*$)    <span style="color: #808080;">(可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
</span></span><span style="color: #008080;">31</span> 腾讯QQ号：<span style="color: #ff0000;">[1-9][0-9]{4,}    <span style="color: #808080;">(<span style="background-color: #f5f5f5; font-family: Courier New;">腾讯QQ号从10000开始</span>)
</span></span><span style="color: #008080;">32</span> 中国邮政编码：<span style="color: #ff0000;">[1-9]\d{5}(?!\d)    <span style="color: #808080;">(中国邮政编码为6位数字)
</span></span><span style="color: #008080;">33</span> IP地址：<span style="color: #ff0000;">\d+\.\d+\.\d+\.\d+    <span style="color: #808080;">(提取IP地址时有用)<br><span style="color: #008080;">34</span> <span style="color: #000000;">IP地址：<span style="color: #ff0000;">((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))</span></span><span style="color: #ff0000;">&nbsp;&nbsp;&nbsp; </span></span></span></pre>
        </ui-article>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
