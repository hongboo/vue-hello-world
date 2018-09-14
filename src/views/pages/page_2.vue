<template>
    <div class="warp-box">
        <div class="content" v-html="content.html">

        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    components : {},
    name : '',
    data() {
        return {
            // data : '这是第二页'
            content : {
                html : 
                    `<ul>
                        <li>HTML、CSS、javascript基础</li>
                        <li>CSS预处理器</li>
                        <li>javascript最新语法（ES6）</li>
                    </ul>`
            },
        }
    },
    methods : {

    },
    watch : {

    },
    computed : {

    },
    created() {

    },
    mounted() {

    },
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import '../../assets/default';
@import '../../assets/common';
.warp-box {
    .content {
        border: solid 1px;
    }
}
</style>
