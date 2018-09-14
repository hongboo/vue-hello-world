<template>
    <div class="warp-box">
        <div class="content">
            <span class="compVal">{{val}}</span>
            <div class="vuex-box" @click="changeStatus()">登陆<span>{{statusStr}}</span>的状态：<span>{{loginStatus}}</span></div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'
export default {
    components : {  },
    name : 'global-data',
    props  : ['val'],
    data() {
        return {
            statusStr : '前'
        }
    },
    methods : {
        ...mapActions([
            'getLoginStatus'
        ]),
        changeStatus() {
            if(this.loginStatus){
                this.getLoginStatus(false)
                this.statusStr = '前';
            } else {
                this.getLoginStatus(true)
                this.statusStr = '后';
            }
        }
    },
    watch : {

    },
    computed : {
        ...mapGetters([
            'loginStatus'
        ])
    },
    created() {

    },
    mounted() {
        
    },
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import '../assets/default';
@import '../assets/common';
.warp-box  {
    .content {
        .compVal {
            color: rgb(221, 37, 37);
        }
        .vuex-box {
            cursor: pointer;
            span {
                color: aqua;
            }
            &:hover span {
                font-size: 2em;
            }
        }
    }
}
</style>
