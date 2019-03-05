<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.popup {
}
.mask {
  @include mask();
}

.popup_con {
  background: #fff;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
}

.popup_title {
  text-align: center;
  padding: 0.15rem 0.1rem 0.05rem;
  font-size: 0.14rem;
}

.popup_body {
  padding: 0rem 0.12rem 0.1rem;
  height: 3.2rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.popup_btn {
  color: #fff;
  background: $color-primary;
  text-align: center;
  padding: 0.15rem;

  &:active{
    background: $color-primary-active;
  }
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
  <div class="popup">
    <transition name="fade">
      <div class="mask" v-show="visible" @click="$emit('visibleChange',false)"></div>
    </transition>
    <transition name="slide">
      <div class="popup_con" v-show="visible">
        <p class="popup_title">{{title}}</p>
        <div class="popup_body">
          <slot></slot>
        </div>
        <div class="popup_btn" @click="$emit('visibleChange',false)">
          <span>{{btnText}}</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false
    },
    btnText: {
      type: String,
      default: "关闭"
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

