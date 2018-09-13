/* eslint-disable */
//使用mockjs模拟数据
const Mock = require('mockjs')

Mock.mock('/api/getTestDataByGet', (req, res) => {
    return {
        "description" : "这是第一页"
    }
});
Mock.mock('/api/getTestDataByPost', (req, res) => {
    return {
        "description" : "这是第二页"
    }
});