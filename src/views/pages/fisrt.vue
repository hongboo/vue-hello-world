<template>
    <div>
        <!-- 菜单栏 -->
        <div>
            <ul>
                <li v-for="(item, index) in menuArr" :key="index">
                    <a :href="item.path">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <!-- 内容区 -->
        <div>
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

<style lang="sass">

</style>
