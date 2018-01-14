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
            </div>
            <div class="regex-result" v-html="result"></div>
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
                result: ''
            }
        },
        mounted() {
            this.handle()
        },
        methods: {
            handle: function () {
//                var reg = RegExp('asd')
//                 reg.test(text)

                var reg = new RegExp(this.regex, 'g')

                console.log(this.text.match(reg))

                this.result = this.text.replace(reg, function (match, index) {
                    return `<strong style="color: #f33">${match}</strong>`
                })
            },
            clear: function () {
                this.regex = ''
                this.text = ''
                this.handle()
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
</style>
