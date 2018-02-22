<template>
    <my-page title="正则表达式大全" :page="page">
        <ui-article>
            <h2>我的收藏</h2>
            <div v-if="!listCollection.length">
                暂时没有收藏~
            </div>
            <ul class="regex-list">
                <li class="item" v-for="item in listCollection">
                    {{ item.title }}：<code>{{ item.regex }}</code>
                    <a class="btn btn-copy" :data-clipboard-text="item.regex" href="javascript:;">复制</a>
                    <span class="btn" @click="test(item.regex)">测试</span>
                    <span class="btn" @click="remove(item)">删除</span>
                </li>
            </ul>

            <div v-for="group in groups">
                <h2>{{ group.name }}</h2>
                <ul class="regex-list">
                    <li class="item" v-for="item in group.list">
                        {{ item.title }}：<code>{{ item.regex }}</code>
                        <a class="btn btn-copy" :data-clipboard-text="item.regex" href="javascript:;">复制</a>
                        <span class="btn" @click="test(item.regex)">测试</span>
                        <span class="btn" @click="collection(item)">收藏</span>
                    </li>
                </ul>
            </div>
        </ui-article>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '数字',
                        list: [
                            {
                                title: '数字',
                                regex: '[0-9]*'
                            },
                            {
                                title: 'n位的数字',
                                regex: '\\d{n}'
                            },
                            {
                                title: '至少n位的数字',
                                regex: '\\d{n,}'
                            },
                            {
                                title: 'm-n位的数字',
                                regex: '\\d{m,n}'
                            },
                            {
                                title: '至少n位的数字',
                                regex: '\\d{n,}'
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
                                regex: '(\\-)?\\d+(\\.\\d{1,2})?'
                            },
                            {
                                title: '正数、负数、和小数',
                                regex: '(\\-|\\+)?\\d+(\\.\\d+)?'
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
                                regex: '[1-9]\\d*'
                            },
                            {
                                title: '非零的负整数',
                                regex: '\\-[1-9][]0-9'
                            },
                            {
                                title: '非负整数',
                                regex: '\\d+'
                            },
                            {
                                title: '非正整数',
                                regex: '-[1-9]\\d*|0'
                            },
                            {
                                title: '非负浮点数',
                                regex: '\\d+(\\.\\d+)?'
                            },
                            {
                                title: '非正浮点数',
                                regex: '((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))'
                            },
                            {
                                title: '正浮点数',
                                regex: '[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*'
                            },
                            {
                                title: '浮点数',
                                regex: '(-?\\d+)(\\.\\d+)?'
                            }
                        ]
                    },
                    {
                        name: '时间',
                        list: [
                            {
                                title: '日期格式',
                                regex: '\\d{4}-\\d{1,2}-\\d{1,2}'
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
                                title: '简单的日期判断（YYYY/MM/DD）',
                                regex: '\\d{4}(\\-|\\/|\\.)\\d{1,2}\\1\\d{1,2}'
                            }
                        ]
                    },
                    {
                        name: '颜色',
                        list: [
                            {
                                title: '十六进制颜色代码',
                                regex: '#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})'
                            },
                            {
                                title: 'RGB颜色代码',
                                regex: '[rR][gG][Bb][\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\)]{1}'
                            },
                        ]
                    },
                    {
                        name: '字符',
                        list: [
                            {
                                title: '英文和数字',
                                regex: '[A-Za-z0-9]+'
                            },
                            {
                                title: '长度为3-20的所有字符',
                                regex: '\\.{3,20}'
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
                                regex: '\\w+'
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
                            },
                            {
                                title: '中文字符',
                                regex: '[\\u4e00-\\u9fa5]'
                            },
                            {
                                title: '日文字符',
                                regex: '[\\u3040-\\u309f]'
                            },
                            {
                                title: '双字节字符',
                                regex: '[^\\x00-\\xff]',
                                note: '包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1)'
                            }
                        ]
                    },
                    {
                        name: '代码',
                        list: [
                            {
                                title: 'xml文件',
                                regex: '([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]'
                            },
                            {
                                title: 'HTML标记',
                                regex: '<(\\S*?)[^>]*>.*?</\\1>|<.*? />',
                                note: '网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力'
                            }
                        ]
                    },
                    {
                        name: '其他',
                        list: [
                            {
                                title: 'Email 地址',
                                regex: '\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*'
                            },
                            {
                                title: '域名',
                                regex: '[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?'
                            },
                            {
                                title: 'InternetURL',
                                regex: '[a-zA-z]+://[^\\s]*'
                            },
                            {
                                title: '手机号码',
                                regex: '(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}'
                            },
                            {
                                title: '电话号码',
                                regex: '(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}'
                            },
                            {
                                title: '国内电话号码',
                                regex: '\\d{3}-\\d{8}|\\d{4}-\\d{7}'
                            },
                            {
                                title: '身份证号(15位、18位数字)',
                                regex: '\\d{15}|\\d{18}'
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
                                regex: '[a-zA-Z]\\w{5,17}'
                            },
                            {
                                title: '强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)',
                                regex: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}'
                            },
                            {
                                title: '首尾空白字符',
                                regex: '^\\s*|\\s*$或(^\\s*)|(\\s*$)',
                                note: '可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式'
                            },
                            {
                                title: '腾讯QQ号',
                                regex: '[1-9][0-9]{4,}',
                                note: '腾讯QQ号从10000开始'
                            },
                            {
                                title: '中国邮政编码',
                                regex: '[1-9]\\d{5}(?!\\d)',
                                note: '中国邮政编码为6位数字'
                            },
                            {
                                title: 'IP 地址',
                                regex: '\\d+\\.\\d+\\.\\d+\\.\\d+',
                                note: '提取IP地址时有用'
                            },
                            {
                                title: 'IP地址',
                                regex: '((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))'
                            }
                        ]
                    },
                ],
                listCollection: [],
                page: {
                    menu: [
                        {
                            type:' icon',
                            icon: 'help',
                            to: '/all/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.listCollection = this.$storage.get('list', [])
            this.clipboard = new Clipboard('.btn-copy')
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
        },
        destroyed() {
            this.clipboard.destroy()
        },
        methods: {
            test(regex) {
                this.$router.push({
                    path: '/',
                    query: {
                        regex: regex
                    }
                })
            },
            remove(item) {
                console.log(this.listCollection)
                for (let i = 0; i < this.listCollection.length; i++) {
                    if (this.listCollection[i].id === item.id) {
                        this.listCollection.splice(i, 1)
                        break
                    }
                }
                this.$storage.set('list', this.listCollection)
            },
            collection(item) {
                this.listCollection.push({
                    id: new Date().getTime(),
                    title: item.title,
                    regex: item.regex
                })
                this.$storage.set('list', this.listCollection)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .regex-list {
        .item {
            &:hover {
                .btn {
                    display: inline;
                }
            }
        }
        .btn-copy {
            cursor: pointer;
        }
        .btn {
            display: none;
            color: #ff4081;
            cursor: pointer;
        }
    }
    
</style>
