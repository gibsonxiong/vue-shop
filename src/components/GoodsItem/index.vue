<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";
.c-goodslist-con {
  padding: 0.15rem 0.1rem;
  display: flex;
  @include border-bottom();
  background: #fff;
}
</style>

<template>
  <router-link tag="div" :to="`/items/${id}`" class="c-goodslist-con">
    <div style="width: 20%;">
      <img style="width:0.7rem;height:0.7rem;" v-lazy="img">
    </div>
    <div style=" padding-left: 0.1rem;font-size: 14px;">
      <p
        style=" min-height: 0.44rem; display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2; overflow: hidden;"
      >{{name}}</p>
      <p style="padding-top: 0.05rem;">
        <span style="color:$color-primary;">￥{{price}}</span>
        <span
          style="color:#999;text-decoration: line-through;"
          v-if="originalPrice"
        >￥{{originalPrice}}</span>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {},
    img: {},
    name: {},
    price: {},
    originalPrice: {}
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>