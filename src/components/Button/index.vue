<style lang="scss" scoped>
@import "~@/css/var";
.c-btn {
  color: #fff;
  width: 100%;
  margin: auto;
  padding: 0.12rem;
  background: $color-primary-gradient;
  border:none;
  text-align: center;
  border-radius: 0.05rem;
  margin-top: 0.2rem;
}
</style>
<template>
  <button class="c-btn" @click="$emit('click',$event)">
    <slot>
    </slot>
  </button>
</template>
<script>
export default {
  props: {
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

