/* eslint-disable */
//使用mockjs模拟数据
const Mock = require('mockjs')

Mock.mock('/api/getTestDataByGet', (req, res) => {
    return {
        "description" : "axios,get方式的请求，使用Mock.js模拟后端获取数据"
    }
});
Mock.mock('/api/getTestDataByPost', (req, res) => {
    return {
        "description" : "axios,post方式的请求，使用Mock.js模拟后端获取数据"
    }
});