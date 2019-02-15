<style scoped lang="scss">
@import "~@/css/var";
.c-goodslist-con {
  padding: 0.15rem 0.1rem;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  background: #fff;
}
</style>

<template>
  <div class="c-goodslist">
    <router-link
      tag="div"
      :to="`/items/${item.id}`"
      class="c-goodslist-con"
      v-for="(item,index) in data"
      :key="index"
    >
      <div style="width: 20%;">
        <img style="width:0.7rem;height:0.7rem;" :src="item.imgList[0]">
      </div>
      <div style=" padding-left: 0.1rem;font-size: 14px;">
        <p
          style=" min-height: 0.44rem; display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2; overflow: hidden;"
        >{{item.name}}</p>
        <p style="padding-top: 0.05rem;">
          <span style="color:$color-primary;">￥{{item.minPrice}}</span>
          <!-- <span style="color:#999;text-decoration: line-through;">￥1.08</span> -->
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {}
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>