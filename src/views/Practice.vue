<template>
    <my-page title="练习">
        <div class="card">
            <div class="">
                <div class="btns">
                    <ui-raised-button class="btn" label="上一题" @click="prev" :disabled="examIndex === 0"/>
                    <ui-raised-button class="btn" label="下一题" primary @click="submit" :disabled="examIndex === exams.length - 1"/>
                    <ui-raised-button class="btn" label="提示" @click="tip"/>
                </div>
                <div>题目：{{ exam.title }}</div>
                难度：
                <div class="rate">
                    <ui-icon class="ic" value="star" :color="starColor(0)" />
                    <ui-icon class="ic" value="star" :color="starColor(1)" />
                    <ui-icon class="ic" value="star" :color="starColor(2)" />
                    <ui-icon class="ic" value="star" :color="starColor(3)" />
                    <ui-icon class="ic" value="star" :color="starColor(4)" />
                </div>
                <div>
                    <ui-text-field v-model="regex" hintText="输入正则表达式" multiLine :rows="2" :rowsMax="2"/>
                </div>
                <div>
                    <h3 class="case-type">你要匹配到的内容：</h3>
                    <ul class="case-list">
                        <li class="item" v-for="testCase in exam.match">
                            {{ testCase }}
                            <ui-icon class="icon-success" value="check" v-if="isMatch(testCase)" />
                            <ui-icon class="icon-error" value="close" v-else />
                        </li>
                    </ul>
                    <h3 class="case-type">你不能匹配到的内容：</h3>
                    <ul class="case-list">
                        <li class="item" v-for="testCase in exam.noMatch">
                            {{ testCase }}
                            <ui-icon class="icon-error" value="close" v-if="isMatch(testCase)" />
                            <ui-icon class="icon-success" value="check" v-else />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mask" v-if="false">
            <div class="success-box">

            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                regex: '\\d',
                examIndex: 0,
                exams: [
                    {
                        rate: 0,
                        title: '字符',
                        match: ['a'],
                        noMatch: ['b', 'c', '1'],
                        answer: 'a'
                    },
                    {
                        rate: 0,
                        title: '数字',
                        match: ['1', '2', '3'],
                        noMatch: ['b', 'c', ','],
                        answer: '\\d'
                    },
                    {
                        rate: 0,
                        title: '两位数',
                        match: ['12', '12', '12'],
                        noMatch: ['134', '1', '1234'],
                        answer: '\\d{2}'
                    },
                    {
                        rate: 0,
                        title: '颜色代码',
                        match: ['#ff0000', '#00ff00', '#123456'],
                        noMatch: ['#gf0000', '#12345', '#1234567'],
                        answer: '#[0-9a-f]{6}'
                    },
                    {
                        rate: 1,
                        title: '日期格式',
                        match: ['2018-01-29', '2016-10-09'],
                        noMatch: ['2018-1-29', 'aaaa-bb-cc'],
                        answer: '\\d{4}-\\d{2}-\\d{2}'
                    },
                    {
                        rate: 1,
                        title: '邮箱',
                        match: ['14185036@qq.com', 'admin@yunser.com', '121_212@yunser.com'],
                        noMatch: ['12343', 'admin@yunser'],
                        answer: '\\w+@\\w+\\.\\w+'
                    },
                    {
                        rate: 1,
                        title: '寻找图片',
                        match: ['<img>', '<img src="xxx">', '<img src="xxx" />'],
                        noMatch: ['<input>', '<p>ppp</p>', '<img>xxx'],
                        answer: '<img.*>'
                    },
                    {
                        rate: 0,
                        title: '简单的练习',
                        match: ['1', '2', '3'],
                        noMatch: ['a', 'b', 'c'],
                        answer: '\\d'
                    }
                ],
                exam: {
                    rate: 0,
                    match: ['1', '2', '3'],
                    noMatch: ['a', 'b', 'c'],
                    answer: '\\d'
                }
            }
        },
        computed: {
        },
        mounted() {
            this.regex = ''
            this.examIndex = 0
            this.exam = this.exams[this.examIndex]
        },
        methods: {
            isMatch(testCase) {
                if (!this.regex) {
                    return false
                }
                let reg = new RegExp('^' + this.regex + '$', 'g')
                return testCase.match(reg)
            },
            prev() {
                this.examIndex--
                this.exam = this.exams[this.examIndex]
            },
            submit() {
                this.regex = ''
                this.examIndex++
                this.exam = this.exams[this.examIndex]
                let isSuccess = true
                for (let tc of this.exam.match) {
                    if (!this.isMatch(tc)) {
                        isSuccess = false
                    }
                }
                for (let tc of this.exam.noMatch) {
                    if (this.isMatch(tc)) {
                        isSuccess = false
                    }
                }
                if (isSuccess) {
                }
            },
            tip() {
                this.regex = this.exam.answer
            },
            starColor(index) {
                if (index < this.exam.rate) {
                    return '#000'
                } else {
                    return '#eee'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .card {
        padding: 16px;
        margin-bottom: 16px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
        .rate {
            position: relative;
            top: 6px;
            display: inline-block;
            margin-bottom: 16px;
            @include clearfix
            .ic {
                float: left;
                width: 24px;
                height: 24px;
            }
        }
        .btns {
            margin-bottom: 16px;
        }
        .btn {
            margin-right: 8px;
        }
        .case-type {
            font-size: 20px;
            margin: 16px 0;
        }
        .case-list {
            padding-left: 24px;
            .item {
                margin-bottom: 8px;
                font-size: 24px;
            }
            .icon-success {
                color: #55a532;
            }
            .icon-error {
                color: #f44;
            }
        }
    }
    .mask {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000000000;
        background-color: rgba(3, 3, 3, .6);
        .success-box {
            width: 300px;
            height: 300px;
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
        }
    }
</style>
