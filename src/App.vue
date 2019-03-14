<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  // background-color: #f00;
  color: #555;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  // background-color: #0ff;

}

.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: #fff;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.c-page-body {
  height: 100%;
  overflow: auto;
  background-color: #f5f5f5;
  -webkit-overflow-scrolling: touch;

  &.header-pd {
    padding-top: 0.44rem;
  }

  &.tab-pd {
    padding-bottom: 0.55rem;
  }
}

.c-header-pd {
  padding-top: 0.44rem;
}

.c-tab-pd {
  padding-bottom: 0.55rem;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 400ms;
}

.slide-right-enter {
  z-index: -1;
  transform: translate3d(-20%, 0, 0);
}

.slide-right-enter-active {
  z-index: -1;
}

.slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-to {
  transform: translate3d(-20%, 0, 0);
}
</style>

<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
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


