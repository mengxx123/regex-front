<template>
    <my-page title="正则表达式大全 - 帮助" backable>
        <ui-article>
            <h2>校验数字的表达式</h2>
            <ul class="regex-list">
                <li class="item" v-for="item in list1">
                    {{ item.title }}：<code class="btn-copy" :data-clipboard-text="item.regex">{{ item.regex }}</code>
                </li>
            </ul>
            <h2>校验字符的表达式</h2>
            <ul class="regex-list">
                <li class="item" v-for="item in list2">
                    {{ item.title }}：<code class="btn-copy" :data-clipboard-text="item.regex">{{ item.regex }}</code>
                </li>
            </ul>

            <h2>特殊需求表达式</h2>
            <ul class="regex-list">
                <li class="item" v-for="item in list3">
                    {{ item.title }}：<code class="btn-copy" :data-clipboard-text="item.regex">{{ item.regex }}</code>
                </li>
            </ul>
        </ui-article>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                list1: [
                    {
                        title: '数字',
                        regex: '[0-9]*'
                    },
                    {
                        title: 'n位的数字',
                        regex: '\d{n}'
                    },
                    {
                        title: '至少n位的数字',
                        regex: '\d{n,}'
                    },
                    {
                        title: 'm-n位的数字',
                        regex: '\d{m,n}'
                    },
                    {
                        title: '至少n位的数字',
                        regex: '\d{n,}'
                    },
                    {
                        title: '零和非零开头的数字',
                        regex: '(0|[1-9][0-9]*)'
                    },
                    {
                        title: '零和非零开头的数字',
                        regex: '(0|[1-9][0-9]*)'
                    },
                    {
                        title: '非零开头的最多带两位小数的数字',
                        regex: '([1-9][0-9]*)+(.[0-9]{1,2})?'
                    },
                    {
                        title: '带1-2位小数的正数或负数',
                        regex: '(\-)?\d+(\.\d{1,2})?'
                    },
                    {
                        title: '正数、负数、和小数',
                        regex: '(\-|\+)?\d+(\.\d+)?'
                    },
                    {
                        title: '有两位小数的正实数',
                        regex: '[0-9]+(.[0-9]{2})?'
                    },
                    {
                        title: '有1~3位小数的正实数',
                        regex: '[0-9]+(.[0-9]{1,3})?'
                    },
                    {
                        title: '非零的正整数',
                        regex: '[1-9]\d*'
                    },
                    {
                        title: '非零的负整数',
                        regex: '\-[1-9][]0-9'
                    },
                    {
                        title: '非负整数',
                        regex: '\d+'
                    },
                    {
                        title: '非正整数',
                        regex: '-[1-9]\d*|0'
                    },
                    {
                        title: '非负浮点数',
                        regex: '\d+(\.\d+)?'
                    },
                    {
                        title: '非正浮点数',
                        regex: '((-\d+(\.\d+)?)|(0+(\.0+)?))'
                    },
                    {
                        title: '正浮点数',
                        regex: '[1-9]\d*\.\d*|0\.\d*[1-9]\d*'
                    },
                    {
                        title: '浮点数',
                        regex: '(-?\d+)(\.\d+)?'
                    }
                ],
                list2: [
                    {
                        title: '汉字',
                        regex: '[\u4e00-\u9fa5]{0,}'
                    },
                    {
                        title: '英文和数字',
                        regex: '[A-Za-z0-9]+'
                    },
                    {
                        title: '长度为3-20的所有字符',
                        regex: '.{3,20}'
                    },
                    {
                        title: '由26个英文字母组成的字符串',
                        regex: '[A-Za-z]+'
                    },
                    {
                        title: '由26个大写英文字母组成的字符串',
                        regex: '[A-Z]+'
                    },
                    {
                        title: '由26个小写英文字母组成的字符串',
                        regex: '[a-z]+'
                    },
                    {
                        title: '由数字和26个英文字母组成的字符串',
                        regex: '[A-Za-z0-9]+'
                    },
                    {
                        title: '由数字、26个英文字母或者下划线组成的字符串',
                        regex: '\w+'
                    },
                    {
                        title: '中文、英文、数字包括下划线',
                        regex: '[\\u4E00-\\u9FA5A-Za-z0-9_]+'
                    },
                    {
                        title: '中文、英文、数字但不包括下划线等符号',
                        regex: '[\\u4E00-\\u9FA5A-Za-z0-9]+'
                    },
                    {
                        title: '可以输入含有^%&\',;=?$\\\"等字符',
                        regex: '\',;=?$\x22]+'
                    },
                    {
                        title: '禁止输入含有~的字符',
                        regex: '[^~\x22]+'
                    }
                ],
                list3: [
                    {
                        title: 'Email地址',
                        regex: '\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*'
                    },
                    {
                        title: '域名',
                        regex: '[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?'
                    },
                    {
                        title: 'InternetURL',
                        regex: '[a-zA-z]+://[^\s]*'
                    },
                    {
                        title: '手机号码',
                        regex: '(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}'
                    },
                    {
                        title: '电话号码',
                        regex: '(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}'
                    },
                    {
                        title: '国内电话号码',
                        regex: '\d{3}-\d{8}|\d{4}-\d{7}'
                    },
                    {
                        title: '身份证号(15位、18位数字)',
                        regex: '\d{15}|\d{18}'
                    },
                    {
                        title: '短身份证号码(数字、字母x结尾)',
                        regex: '([0-9]){7,18}(x|X)?'
                    },
                    {
                        title: '帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)',
                        regex: '[a-zA-Z][a-zA-Z0-9_]{4,15}'
                    },
                    {
                        title: '密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)',
                        regex: '[a-zA-Z]\w{5,17}'
                    },
                    {
                        title: '强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)',
                        regex: '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}'
                    },
                    {
                        title: '日期格式',
                        regex: '\d{4}-\d{1,2}-\d{1,2}'
                    },
                    {
                        title: '一年的12个月(01～09和1～12)',
                        regex: '(0?[1-9]|1[0-2])'
                    },
                    {
                        title: '一个月的31天(01～09和1～31)',
                        regex: '((0?[1-9])|((1|2)[0-9])|30|31)'
                    },
                    {
                        title: 'xml文件',
                        regex: '([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]'
                    },
                    {
                        title: '中文字符的正则表达式',
                        regex: '[\\u4e00-\\u9fa5]'
                    },
                    {
                        title: '双字节字符',
                        regex: '[^\\x00-\\xff]',
                        note: '包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1)'
                    },
                    // {
                    //     title: 'HTML标记的正则表达式',
                    //     regex: '<(\S*?)[^>]*>.*?</\1>|<.*? />',
                    //     note: '网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力'
                    // },
                    {
                        title: '首尾空白字符的正则表达式',
                        regex: '^\s*|\s*$或(^\s*)|(\s*$)',
                        note: '可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式'
                    },
                    {
                        title: '腾讯QQ号',
                        regex: '[1-9][0-9]{4,}',
                        note: '腾讯QQ号从10000开始'
                    },
                    {
                        title: '中国邮政编码',
                        regex: '[1-9]\d{5}(?!\d)',
                        note: '中国邮政编码为6位数字'
                    },
                    {
                        title: 'IP地址',
                        regex: '\d+\.\d+\.\d+\.\d+',
                        note: '提取IP地址时有用'
                    },
                    {
                        title: 'IP地址',
                        regex: '((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))'
                    }
                ]
            }
        },
        mounted() {
            this.clipboard = new Clipboard('.btn-copy');
            this.clipboard = new Clipboard('.btn-copy');
            this.clipboard.on('success', function(e) {
                console.info('Action:', e.action);
                console.info('Text:', e.text);
                console.info('Trigger:', e.trigger);

                e.clearSelection();
            });
            this.clipboard.on('error', function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            });
        },
        destroyed() {
            this.clipboard.destroy()
        }
    }
</script>

<style lang="scss" scoped>
    .regex-list {
        .item {


        }
        .btn-copy {
            cursor: pointer;
        }
    }
    
</style>
