<style lang="less" scoped>
.qrcode-popup {
  background-color: #fff;
  padding: 18px;
  position: absolute;
  top: -12px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: 11px solid transparent;
    border-top-color: #eaeaea;
    bottom: -22px;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #fff;
    bottom: -18px;
  }

  &.left {
    left: 0;
    transform: translate(0, -100%);

    &::before {
      left: 9px;
      transform: none;
    }

    &::after {
      left: 10px;
      transform: none;
    }
  }

  &.center {
    left: 50%;
    transform: translate(-50%, -100%);

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }


    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &.right {
    right: 0;
    transform: translate(0, -100%);

    &::before {
      right: 9px;
      transform: none;
    }

    &::after {
      right: 10px;
      transform: none;
    }
  }
}
</style>

<template>
<div class="qrcode-popup" :class="[position]">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "QrcodePopup",

  props: {
    position: {
      type: String,
      default: "center"
    }
  },

  mounted() {}
};
</script>
