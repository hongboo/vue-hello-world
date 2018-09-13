/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

let getApi = Vue.axios.create({
    method : 'GET',
})

let postApi = Vue.axios.create({
    method : 'POST',
})

export default {
    getTestDataByGet(opts) {
        return getApi({url : '/api/getTestDataByGet', params : {...opts}})
    },
    getTestDataByPost(opts) {
        return postApi({url : '/api/getTestDataByPost', params : {...opts}})
    }
}