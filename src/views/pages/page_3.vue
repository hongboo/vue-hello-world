<template>
    <div class="warp-box">
        <div class="content">
            <div>
                <ul>
                    <li><global-data :val="compVal"></global-data></li>
                    <li><span>{{data.getMethodVal}}</span></li>
                    <li><span>{{data.postMethodVal}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import api from '@/api/index'
import globalData from '@/components/global-data'
import { mapGetters, mapActions } from 'vuex'
export default {
    components : { globalData },
    name : '',
    data() {
        return {
            data : {
                getMethodVal : null,
                postMethodVal : null,
            },
            compVal : '从父组件传递到子组件的数据',
        }
    },
    methods : {
        ...mapActions([
            'getLoginStatus'
        ]),
        getTestDataByGet(params) {
            api.getTestDataByGet(params).then(json => {
                this.data.getMethodVal = json.data.description
            });
        },
        getTestDataByPost(params) {
            api.getTestDataByPost(params).then(json => {
                this.data.postMethodVal = json.data.description
            });
        },
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
        this.getTestDataByGet();
        this.getTestDataByPost();
    },
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.content {
    // border: 1px solid;
    ul {
        li {
            margin: 10px 0;
        }
    }
}
</style>
