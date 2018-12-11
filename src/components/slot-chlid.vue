<template>
  <div class="child">
    <slot name="up"></slot>

    <h3>这里是子组件</h3>

    <slot name="down"></slot>
    <slot></slot>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
  },
  name: 'aaaaaaa',
  data () {
    return {
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
<style>
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
//   @import '../assets/scss/variables';
//   @import '../assets/scss/mixins';
.child{
    background-color: #00bbff;
    width: 100%;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>

