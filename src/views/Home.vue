<template>
    <my-page title="正则表达式测试">
        <section class="input-box">
            <div>
                <ui-text-field v-model="regex" hintText="输入正则表达式" multiLine :rows="2" :rowsMax="2"/>
            </div>
            <div>
                <ui-text-field v-model="text" hintText="输入要匹配的文本" multiLine :rows="2" :rowsMax="4"/>
            </div>
            <div>
                <ui-raised-button class="btn" label="匹配" primary @click="handle"/>
                <ui-raised-button class="btn" label="重新输入" @click="clear"/>
                <ui-raised-button class="btn" label="生成代码" @click="generate" :disabled="!regex.length" />
            </div>
            <div class="regex-result" v-html="result"></div>
        </section>
        <section class="code-box" v-if="codeVisible">
            <ui-appbar class="appbar" title="代码">
                <ui-icon-button icon="close" slot="left" @click="codeVisible = false" />
            </ui-appbar>
            <div class="box-body">
        
        <p class="desc">js</p>
        <pre class="language-js" style="max-width: 960px; overflow: auto;">var pattern = /{{ regex }}/g,
	str = '';
console.log(pattern.test(str));</pre>
        
        <p class="desc">php</p>
        <pre class="language-php" style="max-width: 960px; overflow: auto;">$str = '';
$isMatched = preg_match_all('/{{ regex }}/', $str, $matches);
var_dump($isMatched, $matches);</pre>
        
        <p class="desc">go</p>
        <pre class="language-go" style="max-width: 960px; overflow: auto;">package main

import (
	"fmt"
	"regexp"
)

func main() {
	str := "test"
	matched, err := regexp.MatchString("{{ regex }}", str)
	fmt.Println(matched, err)
}</pre>
        
        <p class="desc">rb</p>
        <pre class="language-rb" style="max-width: 960px; overflow: auto;">pattern = /{{ regex }}/
str = ''
p pattern.match(str)</pre>
        
        <p class="desc">python2</p>
        <pre class="language-python2" style="max-width: 960px; overflow: auto;">import re
pattern = re.compile(ur'{{ regex }}')
str = u''
print pattern.search(str)</pre>
        
        <p class="desc">python3</p>
        <pre class="language-python3" style="max-width: 960px; overflow: auto;">import re
pattern = re.compile(r'{{ regex }}')
str = ''
print(pattern.search(str))</pre>
        
        <p class="desc">java</p>
        <pre class="language-java" style="max-width: 960px; overflow: auto;">import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches {
	
	public static void main(String args[]) {
		String str = "";
		String pattern = "{{ regex }}";

		Pattern r = Pattern.compile(pattern);
		Matcher m = r.matcher(str);
		System.out.println(m.matches());
	}

}</pre>
        
        <p class="desc">objc</p>
        <pre class="language-objc" style="max-width: 960px; overflow: auto;">NSString *str = @"";
NSString *pattern = @"{{ regex }}";
NSError *error = NULL;
NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern: pattern options: nil error: &amp;error];
NSArray *match = [regex matchesInString: str options: NSMatchingCompleted range: NSMakeRange(0, [str length])];
if (match.count != 0) {
	// ...
}</pre>
        
    </div>
        </section>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
//                regex: 'asd[\\d]',
//                text: 'asd1ccasd4asd',
                regex: '',
                text: '',
                result: '',
                codeVisible: false
            }
        },
        mounted() {
            let regex = this.$route.query.regex
            if (regex) {
                this.regex = regex
            }
            this.handle()
        },
        methods: {
            handle() {
                var reg = new RegExp(this.regex, 'g')
                console.log(this.text.match(reg))
                this.result = this.text.replace(reg, function (match, index) {
                    return `<strong style="color: #f33">${match}</strong>`
                })
            },
            clear() {
                this.regex = ''
                this.text = ''
                this.handle()
            },
            generate() {
                this.codeVisible = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        margin-right: 8px;
    }
    .regex-result {
        margin-top: 16px;
        strong {
            color: #09c;
        }
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
        border-left: 1px solid #eee;
        pre {
            white-space: nowrap;
        }
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
    }
</style>
