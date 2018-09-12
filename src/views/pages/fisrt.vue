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
export default {
components: { },
  name: 'first',
  data () {
    return {
      menuArr : [
          {name : '什么是vue', path : '#/first/page_1'},
          {name : '使用前需要哪些基础知识', path : '#/first/page_2'},
          {name : 'vue如何使用', path : '#/first/page_3'},
          {name : 'vue常用的第三方组件', path : '#/first/page_4'},
      ],
    }
  },
  methods: {
    // ...mapActions([
    // ]),
  },
  watch: {
  },
  computed: {
    // ...mapGetters([
    // ])
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
    border: solid 10px black;
    .menu-box {
    float: left;
        border: solid 5px yellowgreen;
    }
    .content-box {
        float: left;
        border: solid 5px blue;
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
