<template>
    <my-page title="语法速查">
        <ui-article>
            <h2>常用元字符</h2>
            <table cellspacing="0">
                <thead>
                <tr>
                    <th scope="col">代码</th>
                    <th scope="col">说明</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><span class="code">.</span></td>
                    <td><span class="desc">匹配除换行符以外的任意字符</span></td>
                </tr>
                <tr>
                    <td><span class="code">\w</span></td>
                    <td><span class="desc">匹配字母或数字或下划线</span></td>
                </tr>
                <tr>
                    <td><span class="code">\s</span></td>
                    <td><span class="desc">匹配任意的空白符</span></td>
                </tr>
                <tr>
                    <td><span class="code">\d</span></td>
                    <td><span class="desc">匹配数字</span></td>
                </tr>
                <tr>
                    <td><span class="code">\b</span></td>
                    <td><span class="desc">匹配单词的开始或结束</span></td>
                </tr>
                <tr>
                    <td><span class="code">^</span></td>
                    <td><span class="desc">匹配字符串的开始</span></td>
                </tr>
                <tr>
                    <td><span class="code">$</span></td>
                    <td><span class="desc">匹配字符串的结束</span></td>
                </tr>
                </tbody>
            </table>

            <h2>常用限定符</h2>
            <table cellspacing="0">
                <thead>
                <tr>
                    <th scope="col">代码/语法</th>
                    <th scope="col">说明</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><span class="code">*</span></td>
                    <td><span class="desc">重复零次或更多次</span></td>
                </tr>
                <tr>
                    <td><span class="code">+</span></td>
                    <td><span class="desc">重复一次或更多次</span></td>
                </tr>
                <tr>
                    <td><span class="code">?</span></td>
                    <td><span class="desc">重复零次或一次</span></td>
                </tr>
                <tr>
                    <td><span class="code">{n}</span></td>
                    <td><span class="desc">重复n次</span></td>
                </tr>
                <tr>
                    <td><span class="code">{n,}</span></td>
                    <td><span class="desc">重复n次或更多次</span></td>
                </tr>
                <tr>
                    <td><span class="code">{n,m}</span></td>
                    <td><span class="desc">重复n到m次</span></td>
                </tr>
                </tbody>
            </table>

            <h2>常用反义词</h2>
            <table cellspacing="0">
                <thead>
                <tr>
                    <th scope="col">代码/语法</th>
                    <th scope="col">说明</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><span class="code">\W</span></td>
                    <td><span class="desc">匹配任意不是字母，数字，下划线，汉字的字符</span></td>
                </tr>
                <tr>
                    <td><span class="code">\S</span></td>
                    <td><span class="desc">匹配任意不是空白符的字符</span></td>
                </tr>
                <tr>
                    <td><span class="code">\D</span></td>
                    <td><span class="desc">匹配任意非数字的字符</span></td>
                </tr>
                <tr>
                    <td><span class="code">\B</span></td>
                    <td><span class="desc">匹配不是单词开头或结束的位置</span></td>
                </tr>
                <tr>
                    <td><span class="code">[^x]</span></td>
                    <td><span class="desc">匹配除了x以外的任意字符</span></td>
                </tr>
                <tr>
                    <td><span class="code">[^aeiou]</span></td>
                    <td><span class="desc">匹配除了aeiou这几个字母以外的任意字符</span></td>
                </tr>
                </tbody>
            </table>

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
