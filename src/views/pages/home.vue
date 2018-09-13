<template>
    <div class="warp-box">
        <!-- 菜单栏 -->
        <div class="menu-box">
            <ul>
                <li v-for="(item, index) in menuArr" :key="index">
                    <a :href="item.path">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <!-- 内容区 -->
        <div class="content-box">
            <!-- <span>律师事业部 • Vue.js入门介绍</span> -->
            <router-view/>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'
export default {
components: {  },
  name: 'first',
  data () {
    return {
      menuArr : [
          {name : 'vue官方首页', path : '#/gov-page'},
          {name : '什么是vue', path : '#/page_1'},
          {name : '使用前需要哪些基础知识', path : '#/page_2'},
          {name : 'vue如何使用', path : '#/page_3'},
          {name : 'vue常用的第三方组件', path : '#/page_4'},
      ],
    }
  },
  methods: {
    ...mapActions([
    ]),
  },
  watch: {
  },
  computed: {
    ...mapGetters([
    ])
  },
  created () {
  },
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
// @import url('../../assets/common.scss');
@import '../../assets/common';
.warp-box {
    // border: solid 1px black;
    position: relative;
    left: 10%;
    width: 80%;
    margin: 80px 0;
    .menu-box {
        float: left;
        // border: solid 1px yellowgreen;
        margin-right: 30px;
        width: 20%;
    }
    .content-box {
        position: relative;
        // border: solid 1px blue;
        left: 20%;
        width: 80%;;
    }
    &:after {
        height : 0;
        content : ' ';
        display : block;
        clear : both;
        visibility : hidden;
    }
}
</style>
