<style lang="scss" scoped>
@import "~@/css/var";
.btn {
  color: #fff;
  width: 95%;
  margin: auto;
  padding: 0.1rem;
  background: $color-primary;
  text-align: center;
  border-radius: 0.05rem;
  margin-top: 0.2rem;
}
</style>
<template>
  <div class="btn">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

