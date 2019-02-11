<style lang="scss">
html,
body {
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #444;
  overflow: hidden;
  // height: 100%;
  // padding-top: 50px;
}
</style>

<template>
  <div id="app">
    <!-- <c-header :title="$route.meta.title"></c-header> -->
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import services from "@/services";
import core from "@/core";

export default {
  name: "App",

  created() {},

  data() {
    return {};
  },

  methods: {}
};
</script>


