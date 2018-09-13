<template>
    <div>
        <span>{{data}}</span>
    </div>
</template>
<script>
/* eslint-disable */
import api from '@/api/index'
import { mapGetters, mapActions } from 'vuex'
export default {
    component : {},
    name : '',
    data() {
        return {
            data : ''
        }
    },
    methods : {
        ...mapActions([
            'getLoginStatus'
        ]),
        getTestDataByGet(params) {
            api.getTestDataByGet(params).then(json => {
                console.log(json)
                this.data = json.data.description
            });
        },
        getTestDataByPost(params) {
            api.getTestDataByPost(params).then(json => {
                console.log(json)
            });
        },
        setLoginStatus() {
            console.log('登陆前的状态： ' + this.loginStatus)
            this.getLoginStatus(true);
            console.log('登陆后的状态： ' + this.loginStatus)
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
        this.getTestDataByGet();
        this.getTestDataByPost();
        this.setLoginStatus();
    },
}

</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
