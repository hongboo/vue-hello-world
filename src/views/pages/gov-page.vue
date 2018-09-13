<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

/* eslint-disable */
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: { HelloWorld }
};
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
  img {
    position: relative;
    left: -15%;
  }
}
</style>
