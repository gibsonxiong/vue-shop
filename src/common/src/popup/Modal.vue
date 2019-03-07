<style lang="scss">
.mask {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 90;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  transition: all 0.4s;
}

.modal {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  overflow: hidden;
  width: 270px;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  color: #000;
  border-radius: 13px;
  background: #fff;
  transition: all 0.4s;

  &.modal--stash {
    left: 0;
    transform: translate3d(-100%, -50%, 0) scale(0.6);
  }
}

.modal__header {
  padding: 10px 10px;
}

.modal__title {
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  margin: 0;
}

.modal__body {
  font-size: 16px;
  font-weight: 500;
  padding: 0px 15px 20px;
}

.modal__input {
  width: 100%;
  background-color: #eaeaea;
  padding: 5px;
  margin-top: 10px;
  border: none;
  -webkit-appearance: none;
  box-sizing: border-box;
}

.modal__footer {
  position: relative;
  display: flex;
  height: 44px;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    z-index: 15;
    top: auto;
    right: auto;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.modal__btn {
  font-size: 17px;
  line-height: 44px;
  position: relative;
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding: 0 5px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #007aff;
      background: #fff;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: none;
  -webkit-appearance: none;

  &:enabled:active {
    color: #007aff;
    background-color: #f1f1f1;
  }

  &:not(:last-child):after {
    position: absolute;
    z-index: 15;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    display: block;
    width: 0.5px;
    height: 100%;
    content: "";
    transform: scaleX(0.5);
    transform-origin: 100% 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  // &:first-child {
  //   border-radius: 0 0 0 13px;
  // }

  // &:last-child {
  //   border-radius: 0 0 13px 0;
  // }
}

.scalefade-enter-active,
.scalefade-leave-active {
  transition: all 0.4s;
}

.scalefade-enter,
.scalefade-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(1.16);
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
      <div class="mask" v-if="visible" :style="{opacity: stash? 0: null}"></div>
    </transition>
    <transition name="scalefade">
      <div class="modal" v-if="visible" :class="{'modal--stash':stash }">
        <div class="modal__header">
          <h2 class="modal__title">{{title}}</h2>
        </div>
        <div class="modal__body">
          <slot>{{content}}</slot>
          <input v-if="hasInput" class="modal__input" ref="input" type="text">
        </div>
        <div class="modal__footer" v-if="actions && Object.keys(actions).length > 0">
          <button
            v-for="(name,key) in actions"
            :key="key"
            class="modal__btn"
            @click="close(key)"
          >{{name}}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ModalMixin from "./modalMixin";
export default {
  mixins: [ModalMixin]
};
</script>
