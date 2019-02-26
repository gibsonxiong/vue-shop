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
  overflow: hidden;
}

.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 350ms ease-out;
}

.slide-right-enter {
  transform: translate3d(-20%, 0, 0);
}

.slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}

.slide-right-enter-active {
  z-index: 0;
}
.slide-right-leave-active {
  z-index: 100;
}

.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-to {
  transform: translate3d(-20%, 0, 0);
}
.pswp{
  z-index: 99;
}
</style>

<template>
  <div id="app">
    <!-- <c-header :title="$route.meta.title"></c-header> -->
    <!-- <transition :name="transitionName"> -->
      <router-view/>
    <!-- </transition> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import services from "@/services";
import core from "@/core";

export default {
  name: "App",
  watch: {
    $route(to, from) {
      let isBack = !!to.query.v;
      this.transitionName = isBack ? "slide-right" : "slide-left";
    }
  },
  data() {
    return {
      transitionName: "slide-left"
    };
  },

  methods: {}
};
</script>


