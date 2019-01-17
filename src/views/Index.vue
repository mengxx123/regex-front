<template>
    <my-page title="正则表达式测试">
        <div id="preset_regex">
            <h4>常用正则：</h4>
            <ul class="regex-list">
                <li class="item" v-for="item in regexList">
                    <a href="#" @click.prevent="setRegex(item.regex)">{{ item.title }}</a>
                </li>
                <li class="item">
                    <router-link to="/all">更多</router-link>
                </li>
            </ul>
        </div>
        <div class="regex-flags" id="regex_flags">
            <label><input class="regex-flag" type="checkbox" value="g" checked> 全部(g)</label>
            <label><input class="regex-flag" type="checkbox" value="i"> 不区分大小写(i)</label>
            <label><input class="regex-flag" type="checkbox" value="m"> 多行 (m)</label>
            <label><input class="regex-flag" type="checkbox" value="s"> 单行 (s)</label>
        </div>
        <div class="regex-wrapper">
            <textarea id="regex_input" cols="100" rows="3" tabindex="1">\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}</textarea>
        </div>
        <div class="btns">
            <ui-raised-button class="btn btn-copy" primary label="复制" />
            <!-- <ui-raised-button class="btn" label="匹配" primary @click="handle"/> -->
            <ui-raised-button class="btn" label="重新输入" @click="clear"/>
            <ui-raised-button class="btn" label="生成代码" @click="generate" />
            <ui-raised-button class="btn btn-copy" label="添加测试用例" @click="addCase" />
            <ui-raised-button class="btn" label="收藏" @click="collection" />
        </div>
        <div class="str-wrapper">
            <textarea id="str_input" cols="100" rows="10" tabindex="2"></textarea>
        </div>
        <h3>共找到 <var id="result_count">0</var> 处匹配结果</h3>
        <pre id="result_content"></pre>

        <ui-drawer class="case-box" :open="caseVisible" right :docked="false" @close="toggle2()">
            <ui-appbar class="appbar" title="测试用例">
                <ui-icon-button icon="close" slot="left" @click="caseVisible = false" />
            </ui-appbar>
            <div class="box-body">
                <ui-raised-button class="file-btn" primary label="从文件中导入">
                    <input type="file" class="ui-file-button" @change="fileChange($event)">
                </ui-raised-button>
                <ul class="case-list">
                    <li class="item" v-for="item in cases" @click="setCaseContent(item.content)">{{ item.name }}</li>
                </ul>
            </div>
        </ui-drawer>
        <ui-drawer class="code-box" :open="codeVisible" right :docked="false" @close="toggle()">
            <ui-appbar class="appbar" title="代码">
                <ui-icon-button icon="close" slot="left" @click="codeVisible = false" />
            </ui-appbar>
            <div class="box-body">
                <h3 class="title">字符串</h3>
                <pre class="language-js" style="max-width: 960px; overflow: auto;">/{{ regex }}/g
'{{ regex }}'
"{{ regex }}"
'{{ RegexStr }}'
"{{ RegexStr }}"</pre>

                <h3 class="title">JavaScript</h3>
                <pre class="language-js" style="max-width: 960px; overflow: auto;">let pattern = /{{ regex }}/g
let str = ''
console.log(pattern.test(str))</pre>
                <pre class="language-js" style="max-width: 960px; overflow: auto;">if (/^{{ regex }}$/.test('')) {
    
}</pre>

                <h3 class="title">PHP</h3>
                <pre class="language-php" style="max-width: 960px; overflow: auto;">$str = '';
$isMatched = preg_match_all('/{{ regex }}/', $str, $matches);
var_dump($isMatched, $matches);</pre>
                
                <h3 class="title">Go</h3>
                <pre class="language-go" style="max-width: 960px; overflow: auto;">package main

import (
    "fmt"
    "regexp"
)

func main() {
    str := "test"
    matched, err := regexp.MatchString("{{ RegexStr }}", str)
    fmt.Println(matched, err)
}</pre>
                
                <h3 class="title">rb</h3>
                <pre class="language-rb" style="max-width: 960px; overflow: auto;">pattern = /{{ regex }}/
        str = ''
        p pattern.match(str)</pre>
                
                <p class="desc">Python3</p>
                <pre class="language-python3" style="max-width: 960px; overflow: auto;">import re
pattern = re.compile(r'{{ regex }}')
str = ''
print(pattern.search(str))</pre>

                <p class="desc">Python2</p>
                <pre class="language-python2" style="max-width: 960px; overflow: auto;">import re
pattern = re.compile(ur'{{ regex }}')
str = u''
print pattern.search(str)</pre>
                
                <h3 class="title">Java</h3>
                <pre class="language-java" style="max-width: 960px; overflow: auto;">import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches {
    
    public static void main(String args[]) {
        String str = "";
        String pattern = "{{ RegexStr }}";

        Pattern r = Pattern.compile(pattern);
        Matcher m = r.matcher(str);
        System.out.println(m.matches());
    }

}</pre>
                
                <h3 class="title">ObjectC</h3>
                <pre class="language-objc" style="max-width: 960px; overflow: auto;">NSString *str = @"";
NSString *pattern = @"{{ RegexStr }}";
NSError *error = NULL;
NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern: pattern options: nil error: &amp;error];
NSArray *match = [regex matchesInString: str options: NSMatchingCompleted range: NSMakeRange(0, [str length])];
if (match.count != 0) {
    // ...
}</pre>
                
            </div>
        </ui-drawer>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const $ = window.jQuery
    import cases from '../util/case'
    export default {
        data () {
            return {
//                regex: 'asd[\\d]',
//                text: 'asd1ccasd4asd',
                regex: '',
                text: '',
                result: '',
                codeVisible: false,
                caseVisible: false,
                regexList: [
                    {
                        title: '匹配邮箱',
                        regex: '\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}'
                    },
                    {
                        title: '匹配中文',
                        regex: '[\\u4e00-\\u9fa5]+'
                    },
                    {
                        title: '匹配双字节字符（包含汉字）',
                        regex: '[^\\x00-\\xff]+'
                    },
                    {
                        title: '匹配时间（时:分:秒）',
                        regex: '([01]?\\d|2[0-3]):[0-5]?\\d:[0-5]?\\d'
                    },
                    {
                        title: '匹配IP（IPV4）',
                        regex: '\\d{0,3}\\.\\d{0,3}\\.\\d{0,3}\\.\\d{0,3}'
                    },
                    {
                        title: '匹配身份证',
                        regex: '\\d{17}[0-9Xx]|\\d{15}'
                    },
                    {
                        title: '匹配日期（年-月-日）',
                        regex: '(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)'
                    },
                    {
                        title: '匹配正整数',
                        regex: '[1-9]\\d*'
                    },
                    {
                        title: '匹配负整数',
                        regex: '-[1-9]\\d*'
                    },
                    {
                        title: '匹配手机号',
                        regex: '(13\\d|14[579]|15[^4\\D]|17[^49\\D]|18\\d)\\d{8}'
                    },
                    {
                        title: '电驴链接',
                        regex: 'ed2k://\\|file\\|([^\\|]+?)\\|(\\d+?)\\|([0-9a-zA-Z]{32})\\|((?:/\\|sources,([^\\s\\|]+?)\\||h=([0-9a-zA-Z]{32})\\||s=([^\\s\\|]+?)\\||p=([^\\s\\|]+?)\\|)*)/'
                    }
                ],
                cases: cases
            }
        },
        computed: {
            RegexStr() {
                return this.regex.replace(/\\/g, '\\\\')
            }
        },
        mounted() {
            let _this = this
            this.regexApp = new RegexApp(document.getElementById('regex_input'),
                document.getElementById('str_input'),
                document.querySelectorAll('.regex-flag'),
                document.getElementById('result_count'),
                document.getElementById('result_content'));
          
            console.log(this.regexApp)
            let regex = this.$route.query.regex
            if (regex) {
                console.log(regex)
                this.regexApp.setRegex(regex)
            }
            let content = this.$storage.get('content')
            if (content) {
                this.regexApp.strEditor.setValue(content)
            } else {
                this.setCaseContent(this.cases[0].content)
            }

            this.clipboard = new Clipboard('.btn-copy', {
                text: trigger => {
                    return this.regexApp.regexEditor.getValue()
                }
            })
            this.clipboard.on('success', function(e) {
                console.info('Action:', e.action)
                console.info('Text:', e.text)
                console.info('Trigger:', e.trigger)

                e.clearSelection()
            });
            this.clipboard.on('error', function(e) {
                console.error('Action:', e.action)
                console.error('Trigger:', e.trigger)
            })
            // this.handle()
        },
        destroyed() {
            this.$storage.set('content', this.regexApp.strEditor.getValue())
        },
        methods: {
            setRegex(regex) {
                this.regexApp.setRegex(regex);
            },
            handle() {
                var reg = new RegExp(this.regex, 'g')
                console.log(this.text.match(reg))
                this.result = this.text.replace(reg, function (match, index) {
                    return `<strong style="color: #f33">${match}</strong>`
                })
            },
            clear() {
                this.regexApp.setRegex('')
            },
            generate() {
                this.codeVisible = true
                this.regex = this.regexApp.regexEditor.getValue()
            },
            collection() {
                let collections = this.$storage.get('list', [])
                collections.push({
                    id: '' + new Date().getTime(),
                    title: '未命名',
                    regex: this.regexApp.regexEditor.getValue()
                })
                this.$storage.set('list', collections)
            },
            toggle() {
                this.codeVisible = !this.codeVisible
            },
            toggle2() {
                this.caseVisible = !this.caseVisible
            },
            addCase() {
                this.caseVisible = true
            },
            setCaseContent(content) {
                this.regexApp.strEditor.setValue(content)
                this.caseVisible = false
            },
            fileChange(e) {
                let _this = this
                let file = e.target.files[0]

                _this.result = {}

                let reader = new FileReader()
                reader.onload = e => {
                    let content = e.target.result
                    this.regexApp.strEditor.setValue(content)
                    // this.editor.set(JSON.parse(content))
                }
                reader.readAsText(file, 'utf-8')
            },
        }
    }
</script>

<style lang="scss" scoped>
    .regex-list {
        overflow: hidden;
        .item {
            float: left;
        }
    }
    .regex-flags {
        label {
            margin-right: 16px;
        }
    }
    .btns {
        margin-top: 16px;
        .btn {
            margin-right: 8px;
            margin-bottom: 16px;
        }
    }
    .regex-result {
        margin-top: 16px;
        strong {
            color: #09c;
        }
    }
    .clearfix {
        overflow: hidden;
    }
    .code-box {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 10000000;
        width: 100%;
        max-width: 560px;
        background-color: #fff;
        // pre {
        //     white-space: nowrap;
        // }
        .appbar {
            // background-color: #f00;
        }
        .box-body {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 16px;
            overflow: auto;
        }
        .title {
            margin-bottom: 8px;
            font-size: 16px;
        }
    }
    .case-box {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 10000000;
        width: 100%;
        max-width: 560px;
        background-color: #fff;
        .box-body {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 16px;
            overflow: auto;
        }
        .title {
            margin-bottom: 8px;
            font-size: 16px;
        }
        .case-list {
            .item {
                margin-bottom: 8px;
                cursor: pointer;
            }
        }
    }
    .file-btn {
        margin-bottom: 16px;
    }
</style>
