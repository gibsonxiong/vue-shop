<style scoped lang="scss">
.footprint-page {
  background: #f3f3f3;
}
.c-page-body {
  // padding: 0.44rem 0.1rem 0.1rem 0.1rem;
}
.footprint_t {
  padding: 0.1rem 0;
  border-bottom: 1px solid #f4f4f4;
}
.footprint_t i {
  padding-right: 0.05rem;
}
.footprint_t span {
  display: inline-block;
  width: 49%;
}
.footprint_t span:last-of-type {
  text-align: right;
}
</style>

<template>
  <div class="footprint-page">
    <c-header :title="'我的关注'"></c-header>
    <div class="c-page-body header-pd">
      <!--  -->
      <!-- <div class="footprint_t">
          <span><i class="iconfont icon-shoplight"></i>亿人通互联网商城</span>
          <span>2019-01-24 14:24:16</span>
          
      </div>-->
      <!--  -->
      <c-goodslist :data="itemList"></c-goodslist>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      list: []
    };
  },
  computed:{
    itemList(){
      return this.list.map(item=> item.item);
    }
  },
  methods: {
    async listFavorite() {
      try {
        let res = await services.listFavorite();

        if (services.$isError(res)) throw new Error(res.message);

        this.list = res.data;
      } catch (err) {
        this.$toast(err.message);
      }
    }
  },
  created() {
    this.listFavorite();
  }
};
</script>
