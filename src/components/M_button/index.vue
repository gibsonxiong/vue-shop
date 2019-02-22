<style lang="scss" scoped>
@import "~@/css/var";
button {
  padding: 0.1rem;
  border: 0;
  border-radius: 0.1rem;
  color:#fff;
}
.m-Primary {
  background: #0069D9;
}
.m-Secondary {
  background: #5A6268;
}
.m-Success {
  background: #218838;
}
.m-Danger {
  background: #C82333;
}
.m-Warning {
  background: #E0A800;
}
.m-Info {
  background: #138496;
}
.m-Light {
  background: #E2E6EA;
}
.m-Dark {
  background: #23272B;
}
.m-Link {
  background: #fff;
}

// size
.m-large{
  font-size: 18px;
  height: 40px;
}
.m-small{
  font-size: 14px;
   height: 36px;
}
.m-middle{
  font-size: 16px;
   height: 38px;
}
.m-block{
  width: 100%;
}
.m-width_small{
  width: 30%;
}
.m-width_middle{
  width: 60%;
}
</style>
<template>
  <div class="static">
    <button :class="[color,size,width]">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    color: String,
     size: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

