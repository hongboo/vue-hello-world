<template>
    <div class="warp-box">
        <!-- 菜单栏 -->
        <div class="menu-box">
            <ul>
                <li v-for="(item, index) in menuArr" :key="index" @click="visited(index)">
                    <a :href="item.path" :class="item.visited ? 'visited' : ''">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <!-- 内容区 -->
        <div class="content-box">
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
          {name : 'vue官方首页', path : '#/gov-page', visited : false},
          {name : '基础介绍', path : '#/page_1', visited : false},
          {name : '技术栈', path : '#/page_2', visited : false},
          {name : '快速开发', path : '#/page_3', visited : false},
          {name : '常用的第三方组件', path : '#/page_4', visited : false},
      ],
    }
  },
  methods: {
    ...mapActions([
    ]),
    visited(index) {
        this.menuArr.forEach(menu => {
            menu.visited = false;
        });
        this.menuArr[index].visited = true;
    }
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
// @import url('../../assets/default.scss');
@import '../../assets/default';
@import '../../assets/common';
.warp-box {
    // border: solid 1px black;
    position: relative;
    left: 10%;
    width: 80%;
    margin: 80px 0;
    // background-color: lavender;
    .menu-box {
        float: left;
        // border: solid 1px yellowgreen;
        width: 20%;
        ul {
            margin-left: 90px;
            .visited {
                color: aqua;
            }
        }
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
