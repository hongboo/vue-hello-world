<template>
    <div class="warp">
        <!-- 菜单栏 -->
        <div class="menu">
            <ul>
                <li v-for="(item, index) in menuArr" :key="index">
                    <a :href="item.path">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <!-- 内容区 -->
        <div class="content">
            <span>律师事业部 • Vue.js入门介绍</span>
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
          {name : '什么是vue?', path : '#'},
          {name : '需要哪些基础知识？', path : '#'},
          {name : 'vue如何使用？', path : '#'},
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

<style scoped lang="scss" rel="stylesheet/scss">
.warp {
    width : 800px;
    height: auto;
    border : 10px solid black;
    &:after {
        clear: none;        
    }
    .menu {
        border: 5px solid yellowgreen;
        float: left;
    }
    .content {
        border: 5px solid blue;
        float: left;
    }
}
</style>
