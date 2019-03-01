<style lang="scss">
.mask {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  transition: all 0.4s;
}

.c-picker {
  z-index: 110;
  position: fixed;
  background: #fff;
  padding: 0.05rem 0.1rem;
  left: 0;
  right: 0;
  bottom: 0px;
}
.header {
  text-align: right;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0.5;
  transform: translate3d(0, 100%, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div v-if="lived">
    <transition name="fade">
      <div class="mask" v-if="visible" @click="close('cancel')"></div>
    </transition>
    <transition name="slide">
      <div v-if="visible" class="c-picker">
        <p class="header" @click="select">完成</p>
        <mt-picker ref="picker" class="body" :slots="slots"></mt-picker>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: [String, Object],
      default: ""
    },
    actions: {
      default: Object,
      default() {
        return {};
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      lived: true,
      visible: false,
      resolve: null
    };
  },
  computed: {
    slots() {
      return [
        {
          flex: 1,
          values: this.data,
          textAlign: "center"
        }
      ];
    }
  },
  methods: {
    open() {
      this.visible = true;

      return new Promise(resolve => {
        this.resolve = resolve;
      });
    },

    async close(type, value) {
      this.visible = false;

      setTimeout(() => {
        this.lived = false;
      }, 5000);

      this.resolve([type, value]);
    },

    select() {
      let values = this.$refs.picker.getValues();

      this.close("confirm", values[0]);
    }
  },
  created() {}
};
</script>
